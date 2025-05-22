"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { name: "Apr 15", total: 18, critical: 3, medium: 8, low: 7 },
  { name: "Apr 22", total: 22, critical: 4, medium: 10, low: 8 },
  { name: "Apr 29", total: 25, critical: 5, medium: 12, low: 8 },
  { name: "May 6", total: 20, critical: 3, medium: 9, low: 8 },
  { name: "May 13", total: 18, critical: 2, medium: 8, low: 8 },
  { name: "May 20", total: 23, critical: 4, medium: 11, low: 8 },
]

export function DefectTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
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
                      <div className="w-3 h-3 rounded-full bg-primary mr-1" />
                      Total: {payload[0].value}
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-destructive mr-1" />
                      Critical: {payload[1].value}
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-amber-500 mr-1" />
                      Medium: {payload[2].value}
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-muted mr-1" />
                      Low: {payload[3].value}
                    </div>
                  </div>
                </Card>
              )
            }
            return null
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="total"
          stroke="hsl(var(--primary))"
          activeDot={{ r: 8 }}
          strokeWidth={2}
          name="Total Defects"
        />
        <Line type="monotone" dataKey="critical" stroke="hsl(var(--destructive))" strokeWidth={2} name="Critical" />
        <Line type="monotone" dataKey="medium" stroke="hsl(var(--amber-500))" strokeWidth={2} name="Medium" />
        <Line type="monotone" dataKey="low" stroke="hsl(var(--muted-foreground))" strokeWidth={2} name="Low" />
      </LineChart>
    </ResponsiveContainer>
  )
}
