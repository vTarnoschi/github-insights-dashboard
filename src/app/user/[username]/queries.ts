import { useQuery, queryOptions, QueryClient } from "@tanstack/react-query";
import { getUser, getUserRepositories } from "@/services/github-services";

export const userQueryKey = (username: string) => ["user", username];
export const reposQueryKey = (username: string) => ["repos", username];

function userOptions(username: string) {
  return queryOptions({
    queryKey: userQueryKey(username),
    queryFn: () => getUser(username),
  });
}

function reposOptions(username: string) {
  return queryOptions({
    queryKey: reposQueryKey(username),
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
  return useQuery({ ...options, enabled: !!username });
}

export function useRepositories(username: string) {
  const options = reposOptions(username);
  return useQuery({ ...options, enabled: !!username });
}
