"use client";

import { Search } from "lucide-react";
import { useState, FormEvent } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (username: string) => void;
}

export default function SearchBar({ onSearch, placeholder }: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;

    onSearch(value.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 w-full max-w-lg mx-auto mb-8"
    >
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          value={value}
          placeholder={placeholder || "Buscar usuários"}
          onChange={(e) => setValue(e.target.value)}
          className="pl-10 dark:bg-gray-800"
        />
      </div>
      <Button
        type="submit"
        variant="default"
        className="flex items-center gap-2 hover:cursor-pointer"
      >
        Buscar
      </Button>
    </form>
  );
}
