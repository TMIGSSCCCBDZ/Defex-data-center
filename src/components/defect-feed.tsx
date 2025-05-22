"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, MessageSquare, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data for defects
const initialDefects = [
  {
    id: "DEF-1234",
    timestamp: "2025-05-22 14:32:45",
    location: "Site A, Unit 2",
    type: "Porosity",
    severity: "Critical",
    confidence: 98.2,
    deviceId: "ROB-A2-01",
    image: "/placeholder.svg?height=100&width=200",
    aiClassification: "Critical - Immediate attention required",
    new: true,
  },
  {
    id: "DEF-1233",
    timestamp: "2025-05-22 13:15:22",
    location: "Site B, Unit 3",
    type: "Undercut",
    severity: "Medium",
    confidence: 92.7,
    deviceId: "ROB-B3-04",
    image: "/placeholder.svg?height=100&width=200",
    aiClassification: "Medium - Schedule inspection within 24 hours",
    new: true,
  },
  {
    id: "DEF-1232",
    timestamp: "2025-05-22 11:47:09",
    location: "Site A, Unit 1",
    type: "Surface Irregularity",
    severity: "Low",
    confidence: 87.5,
    deviceId: "ROB-A1-02",
    image: "/placeholder.svg?height=100&width=200",
    aiClassification: "Low - Monitor in next routine inspection",
    new: false,
  },
  {
    id: "DEF-1231",
    timestamp: "2025-05-22 09:23:51",
    location: "Site C, Unit 2",
    type: "Crack",
    severity: "Critical",
    confidence: 99.1,
    deviceId: "ROB-C2-03",
    image: "/placeholder.svg?height=100&width=200",
    aiClassification: "Critical - Immediate attention required",
    new: false,
  },
  {
    id: "DEF-1230",
    timestamp: "2025-05-22 08:05:17",
    location: "Site B, Unit 1",
    type: "Incomplete Fusion",
    severity: "Medium",
    confidence: 91.3,
    deviceId: "ROB-B1-01",
    image: "/placeholder.svg?height=100&width=200",
    aiClassification: "Medium - Schedule inspection within 24 hours",
    new: false,
  },
]

// New defects that will be added in real-time
const newDefects = [
  {
    id: "DEF-1235",
    timestamp: "2025-05-22 14:45:12",
    location: "Site C, Unit 1",
    type: "Slag Inclusion",
    severity: "Medium",
    confidence: 93.5,
    deviceId: "ROB-C1-02",
    image: "/placeholder.svg?height=100&width=200",
    aiClassification: "Medium - Schedule inspection within 24 hours",
    new: true,
  },
  {
    id: "DEF-1236",
    timestamp: "2025-05-22 14:52:38",
    location: "Site A, Unit 3",
    type: "Crack",
    severity: "Critical",
    confidence: 97.8,
    deviceId: "ROB-A3-01",
    image: "/placeholder.svg?height=100&width=200",
    aiClassification: "Critical - Immediate attention required",
    new: true,
  },
]

export function DefectFeed() {
  const [defects, setDefects] = useState(initialDefects)

  // Simulate real-time updates
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setDefects((prev) => [newDefects[0], ...prev])
    }, 5000)

    const timer2 = setTimeout(() => {
      setDefects((prev) => [newDefects[1], ...prev])
    }, 12000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div className="space-y-4">
      {defects.map((defect) => (
        <Card
          key={defect.id}
          className={`overflow-hidden transition-all ${defect.new ? "animate-pulse bg-primary/5" : ""}`}
        >
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
              <div className="relative">
               
                <Badge
                  variant={
                    defect.severity === "Critical"
                      ? "destructive"
                      : defect.severity === "Medium"
                        ? "default"
                        : "outline"
                  }
                  className="absolute top-2 left-2"
                >
                  {defect.severity}
                </Badge>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      {defect.id} - {defect.type}
                      {defect.new && (
                        <Badge variant="outline" className="ml-2 bg-primary/10">
                          New
                        </Badge>
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground">{defect.timestamp}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Mark as Reviewed</DropdownMenuItem>
                      <DropdownMenuItem>Assign to Technician</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Export Data</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">{defect.location}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Device ID</p>
                    <p className="text-sm text-muted-foreground">{defect.deviceId}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Confidence</p>
                    <p className="text-sm text-muted-foreground">{defect.confidence}%</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">AI Classification</p>
                    <p className="text-sm text-muted-foreground">{defect.aiClassification}</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Link href={`/defect-feed/${defect.id}`}>
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Add Comment
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
