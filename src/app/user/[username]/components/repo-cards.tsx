"user client";

import { memo } from "react";
import { StarIcon } from "lucide-react";

import { Repository } from "@/types";

import {
  Card,
  CardTitle,
  CardFooter,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

function RepoCards({
  id,
  name,
  language,
  updated_at,
  description,
  stargazers_count,
}: Repository) {
  return (
    <Card className="@container/card" key={id}>
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Linguagem: {language}</CardDescription>
        {description && <CardDescription>{description}</CardDescription>}
      </CardContent>
      <CardFooter className="items-start gap-4 text-sm not-xl:flex-col flex not-xl:gap-1">
        <div className="text-muted-foreground">
          Última atualização: {new Date(updated_at).toLocaleDateString("pt-BR")}
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <StarIcon className="size-4" /> {stargazers_count}
        </div>
      </CardFooter>
    </Card>
  );
}

export default memo(RepoCards);
