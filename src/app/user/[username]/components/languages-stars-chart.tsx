import { useMemo } from "react";
import {
  Bar,
  Cell,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  BarChart,
  ResponsiveContainer,
} from "recharts";

import { Card, CardHeader, CardContent } from "@/components/ui/card";

import { Repository } from "@/types";

const COLORS = [
  "#3b82f6",
  "#ef4444",
  "#f59e0b",
  "#10b981",
  "#8b5cf6",
  "#ec4899",
  "#6366f1",
  "#f97316",
  "#14b8a6",
  "#eab308",
];

export default function LanguagesStarsChart({
  repos,
}: {
  repos?: Repository[];
}) {
  const data = useMemo(() => {
    const map: Record<string, number> = {};
    (repos || []).forEach((repo) => {
      const lang = repo.language || "Outros";
      map[lang] = (map[lang] || 0) + repo.stargazers_count;
    });
    return Object.entries(map).map(([name, favoritos]) => ({ name, favoritos }));
  }, [repos]);

  return (
    <Card>
      <CardHeader>
        <h2 className="font-semibold mb-3">Estrelas por linguagem</h2>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="favoritos">
              {data.map((_, index) => (
                <Cell
                  key={`cell-favoritos-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
