"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { name: "Porosity", value: 35 },
  { name: "Crack", value: 25 },
  { name: "Undercut", value: 20 },
  { name: "Incomplete Fusion", value: 15 },
  { name: "Slag Inclusion", value: 5 },
]

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--destructive))",
  "hsl(var(--amber-500))",
  "hsl(var(--blue-500))",
  "hsl(var(--green-500))",
]

export function DefectTypeChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <Card className="border shadow-sm p-2 bg-background">
                  <div className="text-sm font-medium">{payload[0].name}</div>
                  <div className="text-xs text-muted-foreground mt-1">Count: {payload[0].value}</div>
                </Card>
              )
            }
            return null
          }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
