import { useMemo } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

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

export default function LanguagesCountChart({ repos }: { repos?: Repository[] }) {
  const data = useMemo(() => {
    const map: Record<string, number> = {};
    (repos || []).forEach((repo) => {
      const lang = repo.language || "Outros";
      map[lang] = (map[lang] || 0) + 1;
    });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [repos]);

  return (
    <Card>
      <CardHeader>
        <h2 className="font-semibold mb-3">Linguagens mais usadas</h2>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              dataKey="value"
              data={data}
              label
              outerRadius={80}
              innerRadius={40}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-count-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
