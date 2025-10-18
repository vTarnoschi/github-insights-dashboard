"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

import { Separator } from "@/components/ui/separator";

import { useWebsockMockRepos } from "@/hooks/use-websocket-mock";

import { Repository } from "@/types";

import RepoCards from "./components/repo-cards";

import { useUser, useRepositories } from "./queries";
import { useMemo } from "react";

const LanguagesCountChart = dynamic(
  () => import("./components/languages-count-chart"),
  { ssr: false, loading: () => <p>Carregando gráfico...</p> }
);

const LanguagesStarsChart = dynamic(
  () => import("./components/languages-stars-chart"),
  { ssr: false, loading: () => <p>Carregando gráfico...</p> }
);

function UserPage({ username }: { username: string }) {
  const { data: user } = useUser(username);
  const { data: repos } = useRepositories(username);

  const updatedRepos = useWebsockMockRepos(repos);

  const repoCards = useMemo(
    () =>
      updatedRepos.map((repo: Repository) => (
        <RepoCards
          id={repo.id}
          key={repo.id}
          name={repo.name}
          language={repo.language}
          updated_at={repo.updated_at}
          description={repo.description}
          stargazers_count={repo.stargazers_count}
        />
      )),
    [updatedRepos]
  );

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
        {repoCards}
      </div>

      <Separator className="my-4" />

      <div className="grid grid-cols-2 gap-4">
        <LanguagesCountChart repos={repos} />
        <LanguagesStarsChart repos={repos} />
      </div>
    </section>
  );
}

export default function UserSuspensePage({ username }: { username: string }) {
  return (
    <Suspense fallback={<p className="p-6 text-center">Carregando dados...</p>}>
      <UserPage username={username} />
    </Suspense>
  );
}
