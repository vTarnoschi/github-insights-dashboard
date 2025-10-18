import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getQueryClient } from "@/lib/query-client";

import UserPage from "./user-page";
import { prefetchUser, prefetchRepositories } from "./queries";

interface PageParams {
  params: Promise<{ username: string }>;
}

export default async function Page({ params }: PageParams) {
  const { username } = await params;
  const queryClient = getQueryClient();

  await Promise.all([
    prefetchUser(queryClient, username),
    prefetchRepositories(queryClient, username),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserPage username={username} />
    </HydrationBoundary>
  );
}
