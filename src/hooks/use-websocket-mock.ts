"use client";

import { useState, useEffect } from "react";

import { Repository } from "@/types";

export function useWebsockMockRepos(initialRepos: Repository[] = []) {
  const [repos, setRepos] = useState<Repository[]>(initialRepos);

  useEffect(() => {
    const interval = setInterval(() => {
      const mockRepo: Repository = {
        id: Date.now(), // id único
        name: `mock-repo-${Date.now()}`,
        description: "Repositório mockado em tempo real",
        language: ["TypeScript", "JavaScript", "Python", "Go"][
          Math.floor(Math.random() * 4)
        ],
        stargazers_count: Math.floor(Math.random() * 50),
        updated_at: new Date().toISOString(),
      };

      setRepos((prev) => [mockRepo, ...prev]);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return repos;
}
