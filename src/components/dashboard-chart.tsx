"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { name: "May 15", defects: 12, critical: 2, minor: 10 },
  { name: "May 16", defects: 19, critical: 3, minor: 16 },
  { name: "May 17", defects: 15, critical: 1, minor: 14 },
  { name: "May 18", defects: 22, critical: 4, minor: 18 },
  { name: "May 19", defects: 18, critical: 2, minor: 16 },
  { name: "May 20", defects: 14, critical: 1, minor: 13 },
  { name: "May 21", defects: 23, critical: 3, minor: 20 },
  { name: "May 22", defects: 22, critical: 2, minor: 20 },
]

export function DashboardChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis
          dataKey="name"
          className="text-xs fill-muted-foreground"
          tick={{ fontSize: 12 }}
          tickLine={{ stroke: "hsl(var(--muted))" }}
          axisLine={{ stroke: "hsl(var(--muted))" }}
        />
        <YAxis
          className="text-xs fill-muted-foreground"
          tick={{ fontSize: 12 }}
          tickLine={{ stroke: "hsl(var(--muted))" }}
          axisLine={{ stroke: "hsl(var(--muted))" }}
        />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <Card className="border shadow-sm p-2 bg-background">
                  <div className="text-sm font-medium">{label}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary mr-1" />
                      Total: {payload[0].value}
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-destructive mr-1" />
                      Critical: {payload[1].value}
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-amber-500 mr-1" />
                      Minor: {payload[2].value}
                    </div>
                  </div>
                </Card>
              )
            }
            return null
          }}
        />
        <Legend />
        <Line type="monotone" dataKey="defects" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} strokeWidth={2} />
        <Line type="monotone" dataKey="critical" stroke="hsl(var(--destructive))" strokeWidth={2} />
        <Line type="monotone" dataKey="minor" stroke="hsl(var(--amber-500))" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}
