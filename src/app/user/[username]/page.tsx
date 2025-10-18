import dynamic from "next/dynamic";
import { cache, Suspense } from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { getQueryClient } from "@/lib/query-client";

import { prefetchUser, prefetchRepositories } from "./queries";

const UserPage = dynamic(() => import("./user-page"), {
  ssr: true,
  loading: () => <p className="p-6 text-center">Carregando usuário...</p>,
});

const getDehydratedState = cache((queryClient: QueryClient) =>
  dehydrate(queryClient)
);

interface PageParams {
  params: Promise<{ username: string }>;
}

export default async function Page({ params }: PageParams) {
  const { username } = await params;
  const queryClient = getQueryClient();

  if (!queryClient.getQueryData(["user", username])) {
    await Promise.all([
      prefetchUser(queryClient, username),
      prefetchRepositories(queryClient, username),
    ]);
  }

  return (
    <HydrationBoundary state={getDehydratedState(queryClient)}>
      <Suspense
        fallback={<p className="p-6 text-center">Carregando dados...</p>}
      >
        <UserPage username={username} />
      </Suspense>
    </HydrationBoundary>
  );
}
