"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { name: "Site A", critical: 8, medium: 12, low: 15 },
  { name: "Site B", critical: 5, medium: 18, low: 12 },
  { name: "Site C", critical: 7, medium: 10, low: 8 },
]

export function DefectLocationChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
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
                      <div className="w-3 h-3 rounded-full bg-destructive mr-1" />
                      Critical: {payload[0].value}
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary mr-1" />
                      Medium: {payload[1].value}
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-muted mr-1" />
                      Low: {payload[2].value}
                    </div>
                  </div>
                </Card>
              )
            }
            return null
          }}
        />
        <Legend />
        <Bar dataKey="critical" fill="hsl(var(--destructive))" name="Critical" />
        <Bar dataKey="medium" fill="hsl(var(--primary))" name="Medium" />
        <Bar dataKey="low" fill="hsl(var(--muted))" name="Low" />
      </BarChart>
    </ResponsiveContainer>
  )
}
