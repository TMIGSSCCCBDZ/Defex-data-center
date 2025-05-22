"use client"

import { Card } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Mock data for model metrics
const metricsData = [
  { date: "v3.0", accuracy: 94.2, precision: 93.8, recall: 92.5, f1Score: 93.1 },
  { date: "v3.1", accuracy: 95.5, precision: 95.1, recall: 94.2, f1Score: 94.6 },
  { date: "v3.2", accuracy: 96.8, precision: 97.2, recall: 96.3, f1Score: 96.7 },
  { date: "v3.3 (Projected)", accuracy: 97.5, precision: 98.0, recall: 97.1, f1Score: 97.5 },
]

// Mock data for defect type performance
const defectTypeData = [
  { type: "Porosity", accuracy: 97.8, precision: 98.1, recall: 97.2, f1Score: 97.6 },
  { type: "Crack", accuracy: 98.5, precision: 98.7, recall: 97.9, f1Score: 98.3 },
  { type: "Undercut", accuracy: 96.2, precision: 96.5, recall: 95.8, f1Score: 96.1 },
  { type: "Incomplete Fusion", accuracy: 95.7, precision: 96.0, recall: 95.2, f1Score: 95.6 },
  { type: "Slag Inclusion", accuracy: 94.8, precision: 95.3, recall: 94.1, f1Score: 94.7 },
]

export function AIModelMetrics() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4">
          <div className="text-sm font-medium text-muted-foreground mb-2">Accuracy</div>
          <div className="text-2xl font-bold">96.8%</div>
          <div className="text-xs text-muted-foreground">+1.3% from v3.1</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-medium text-muted-foreground mb-2">Precision</div>
          <div className="text-2xl font-bold">97.2%</div>
          <div className="text-xs text-muted-foreground">+2.1% from v3.1</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-medium text-muted-foreground mb-2">Recall</div>
          <div className="text-2xl font-bold">96.3%</div>
          <div className="text-xs text-muted-foreground">+2.1% from v3.1</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-medium text-muted-foreground mb-2">F1 Score</div>
          <div className="text-2xl font-bold">96.7%</div>
          <div className="text-xs text-muted-foreground">+2.1% from v3.1</div>
        </Card>
      </div>

      <Card className="p-4">
        <h2 className="text-lg font-semibold mb-4">Model Performance Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={metricsData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="date"
              className="text-xs fill-muted-foreground"
              tick={{ fontSize: 12 }}
              tickLine={{ stroke: "hsl(var(--muted))" }}
              axisLine={{ stroke: "hsl(var(--muted))" }}
            />
            <YAxis
              domain={[90, 100]}
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
                          Accuracy: {payload[0].value}%
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-blue-500 mr-1" />
                          Precision: {payload[1].value}%
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-amber-500 mr-1" />
                          Recall: {payload[2].value}%
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-green-500 mr-1" />
                          F1 Score: {payload[3].value}%
                        </div>
                      </div>
                    </Card>
                  )
                }
                return null
              }}
            />
            <Area
              type="monotone"
              dataKey="accuracy"
              stroke="hsl(var(--primary))"
              fill="hsl(var(--primary))"
              fillOpacity={0.2}
              name="Accuracy"
            />
            <Area
              type="monotone"
              dataKey="precision"
              stroke="hsl(var(--blue-500))"
              fill="hsl(var(--blue-500))"
              fillOpacity={0.2}
              name="Precision"
            />
            <Area
              type="monotone"
              dataKey="recall"
              stroke="hsl(var(--amber-500))"
              fill="hsl(var(--amber-500))"
              fillOpacity={0.2}
              name="Recall"
            />
            <Area
              type="monotone"
              dataKey="f1Score"
              stroke="hsl(var(--green-500))"
              fill="hsl(var(--green-500))"
              fillOpacity={0.2}
              name="F1 Score"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Defect Type Performance</h2>
          <div className="space-y-4">
            {defectTypeData.map((defect) => (
              <div key={defect.type} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{defect.type}</span>
                  <span className="text-sm">{defect.f1Score}% F1</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${defect.f1Score}%` }}></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Precision: {defect.precision}%</span>
                  <span>Recall: {defect.recall}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Confusion Matrix</h2>
          <div className="h-[300px] flex items-center justify-center">
            <div className="text-muted-foreground">Confusion matrix visualization would be displayed here</div>
          </div>
        </Card>
      </div>
    </div>
  )
}
