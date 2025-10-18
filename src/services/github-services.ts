"use server";

import { api } from "@/lib/axios";

import { User, Repository } from "@/types";

export async function getUser(username: string): Promise<User> {
  return (await api.get<User>(`/users/${username}`)).data;
}

export async function getUserRepositories(
  username: string
): Promise<Repository[]> {
  return (await api.get<Repository[]>(`/users/${username}/repos`)).data;
}
