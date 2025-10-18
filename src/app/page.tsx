"use client";

import { useRouter } from "next/navigation";

import SearchBar from "@/components/search-bar";

export default function Home() {
  const router = useRouter();

  const handleOnSearch = (username: string) => {
    if (username.trim()) router.push(`/user/${username}`);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-6 transition-colors">
      <SearchBar
        onSearch={handleOnSearch}
        placeholder="Buscar usuário do GitHub..."
      />
    </main>
  );
}
