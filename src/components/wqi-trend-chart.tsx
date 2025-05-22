"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { name: "Apr 15", wqi: 91.2 },
  { name: "Apr 22", wqi: 92.5 },
  { name: "Apr 29", wqi: 90.8 },
  { name: "May 6", wqi: 93.1 },
  { name: "May 13", wqi: 92.7 },
  { name: "May 20", wqi: 94.3 },
]

export function WQITrendChart() {
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
          domain={[85, 100]}
        />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <Card className="border shadow-sm p-2 bg-background">
                  <div className="text-sm font-medium">{label}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-1" />
                      WQI: {payload[0].value}%
                    </div>
                  </div>
                </Card>
              )
            }
            return null
          }}
        />
        <Legend />
        <ReferenceLine
          y={90}
          stroke="hsl(var(--amber-500))"
          strokeDasharray="3 3"
          label={{
            value: "Minimum Target",
            position: "insideBottomRight",
            fill: "hsl(var(--amber-500))",
            fontSize: 12,
          }}
        />
        <ReferenceLine
          y={95}
          stroke="hsl(var(--green-500))"
          strokeDasharray="3 3"
          label={{ value: "Excellent", position: "insideTopRight", fill: "hsl(var(--green-500))", fontSize: 12 }}
        />
        <Line
          type="monotone"
          dataKey="wqi"
          stroke="hsl(var(--green-500))"
          activeDot={{ r: 8 }}
          strokeWidth={2}
          name="WQI Score"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
