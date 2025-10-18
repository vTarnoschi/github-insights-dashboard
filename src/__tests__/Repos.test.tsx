import { renderHook, act } from "@testing-library/react";

import { useWebsockMockRepos } from "@/hooks/use-websocket-mock";

jest.useFakeTimers();

describe("useWebsockMockRepos", () => {
  it("should add a new repo every 30 seconds", () => {
    const initialRepos = [
      { id: 1, name: "repo-1", language: "TypeScript", stargazers_count: 5 },
    ];

    const { result } = renderHook(() =>
      useWebsockMockRepos(initialRepos as any)
    );

    expect(result.current.length).toBe(1);

    act(() => {
      jest.advanceTimersByTime(30000);
    });

    expect(result.current.length).toBeGreaterThan(1);
  });
});
