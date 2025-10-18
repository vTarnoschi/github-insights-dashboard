import { render, screen, fireEvent } from "@testing-library/react";

import SearchBar from "@/components/search-bar";

describe("SearchBar", () => {
  it("should call 'onSearch' with the correct input value", () => {
    const mockOnSearch = jest.fn();
    render(
      <SearchBar
        onSearch={mockOnSearch}
        placeholder="Buscar usuário do GitHub"
      />
    );

    const input = screen.getByPlaceholderText(/Buscar usuário do GitHub/i);
    const button = screen.getByRole("button", { name: /Buscar/i });

    fireEvent.change(input, { target: { value: "vTarnoschi" } });
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith("vTarnoschi");
  });
});
