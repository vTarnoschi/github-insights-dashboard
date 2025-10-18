"use client";

import { Separator } from "@/components/ui/separator";

import { useWebsockMockRepos } from "@/hooks/use-websocket-mock";

import { Repository } from "@/types";

import RepoCards from "./components/repo-cards";
import LanguagesCountChart from "./components/languages-count-chart";
import LanguagesStarsChart from "./components/languages-stars-chart";

import { useUser, useRepositories } from "./queries";

interface UserPageProps {
  username: string;
}

export default function UserPage({ username }: UserPageProps) {
  const { data: user } = useUser(username);
  const { data: repos } = useRepositories(username);

  const updatedRepos = useWebsockMockRepos(repos);

  return (
    <section className="p-6">
      <div>
        {user && (
          <header className="mb-4">
            <h1 className="text-2xl font-semibold">{user.name}</h1>
            <p>@{user.login}</p>
          </header>
        )}
      </div>
      <div className="grid gap-4 xl:grid-cols-5 md:grid-cols-4">
        {updatedRepos.map((repo: Repository) => (
          <RepoCards
            id={repo.id}
            key={repo.id}
            name={repo.name}
            language={repo.language}
            updated_at={repo.updated_at}
            description={repo.description}
            stargazers_count={repo.stargazers_count}
          />
        ))}
      </div>

      <Separator className="my-4" />

      <div className="grid grid-cols-2 gap-4">
        <LanguagesCountChart repos={repos} />
        <LanguagesStarsChart repos={repos} />
      </div>
    </section>
  );
}
