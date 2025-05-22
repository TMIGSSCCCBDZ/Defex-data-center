"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"

interface WQIGaugeProps {
  value: number
}

export function WQIGauge({ value }: WQIGaugeProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500)
    return () => clearTimeout(timer)
  }, [value])

  const getColor = () => {
    if (value >= 90) return "bg-green-500"
    if (value >= 75) return "bg-amber-500"
    return "bg-red-500"
  }

  const getLabel = () => {
    if (value >= 90) return "Excellent"
    if (value >= 75) return "Good"
    if (value >= 60) return "Fair"
    return "Poor"
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-center pt-4">
        <div className="text-6xl font-bold">{value}%</div>
        <div className="text-xl font-medium text-muted-foreground">{getLabel()}</div>
      </div>

      <Progress value={progress} className="h-4"  />

      <div className="grid grid-cols-3 text-center text-sm">
        <div className="text-red-500 font-medium">Poor</div>
        <div className="text-amber-500 font-medium">Good</div>
        <div className="text-green-500 font-medium">Excellent</div>
      </div>

      <div className="space-y-2 pt-4">
        <div className="flex justify-between text-sm">
          <span>Defect Rate</span>
          <span className="font-medium">5.1%</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Critical Issues</span>
          <span className="font-medium">0.4%</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Inspection Coverage</span>
          <span className="font-medium">98.7%</span>
        </div>
      </div>
    </div>
  )
}
