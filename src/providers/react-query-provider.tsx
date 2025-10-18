"use client";

import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import { getQueryClient } from "@/lib/query-client";

interface ReactQueryProviderProps {
  children: ReactNode;
}

export default function ReactQueryProvider({
  children,
}: ReactQueryProviderProps) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
