import {
  useSuspenseQuery,
  queryOptions,
  QueryClient,
} from "@tanstack/react-query";

import { getUser, getUserRepositories } from "@/services/github-services";

function userOptions(username: string) {
  return queryOptions({
    queryKey: ["user", username],
    queryFn: () => getUser(username),
  });
}

function reposOptions(username: string) {
  return queryOptions({
    queryKey: ["repos", username],
    queryFn: () => getUserRepositories(username),
  });
}

export async function prefetchUser(queryClient: QueryClient, username: string) {
  const options = userOptions(username);
  await queryClient.prefetchQuery(options);
}

export async function prefetchRepositories(
  queryClient: QueryClient,
  username: string
) {
  const options = reposOptions(username);
  await queryClient.prefetchQuery(options);
}

export function useUser(username: string) {
  const options = userOptions(username);
  return useSuspenseQuery(options);
}

export function useRepositories(username: string) {
  const options = reposOptions(username);
  return useSuspenseQuery(options);
}
