"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Edit, Info, Play } from "lucide-react"

// Mock data for assets
const sites = [
  {
    id: "site-a",
    name: "Site A",
    image: "/placeholder.svg?height=600&width=800",
    units: [
      {
        id: "ROB-A1-01",
        type: "robot",
        status: "idle",
        position: { top: "20%", left: "30%" },
        battery: 92,
        lastInspection: "2025-05-22 08:15:22",
        nextInspection: "2025-05-23 08:00:00",
      },
      {
        id: "ROB-A1-02",
        type: "robot",
        status: "inspecting",
        position: { top: "35%", left: "45%" },
        battery: 78,
        lastInspection: "2025-05-22 10:30:45",
        nextInspection: "2025-05-22 18:00:00",
      },
      {
        id: "ROB-A2-01",
        type: "robot",
        status: "alerted",
        position: { top: "50%", left: "25%" },
        battery: 65,
        lastInspection: "2025-05-22 14:32:45",
        nextInspection: "2025-05-23 14:30:00",
        alert: "Critical defect detected",
      },
      {
        id: "DRN-A1-01",
        type: "drone",
        status: "idle",
        position: { top: "15%", left: "60%" },
        battery: 100,
        lastInspection: "2025-05-22 09:45:12",
        nextInspection: "2025-05-23 10:00:00",
      },
      {
        id: "DRN-A2-01",
        type: "drone",
        status: "inspecting",
        position: { top: "65%", left: "70%" },
        battery: 42,
        lastInspection: "2025-05-22 13:20:33",
        nextInspection: "2025-05-22 17:00:00",
      },
    ],
  },
  {
    id: "site-b",
    name: "Site B",
    image: "/placeholder.svg?height=600&width=800",
    units: [
      {
        id: "ROB-B1-01",
        type: "robot",
        status: "idle",
        position: { top: "25%", left: "20%" },
        battery: 88,
        lastInspection: "2025-05-22 07:30:15",
        nextInspection: "2025-05-23 07:30:00",
      },
      {
        id: "ROB-B1-02",
        type: "robot",
        status: "offline",
        position: { top: "40%", left: "35%" },
        battery: 0,
        lastInspection: "2025-05-21 16:45:22",
        nextInspection: "N/A",
        issue: "Power supply failure",
      },
      {
        id: "ROB-B2-01",
        type: "robot",
        status: "inspecting",
        position: { top: "60%", left: "25%" },
        battery: 72,
        lastInspection: "2025-05-22 11:15:33",
        nextInspection: "2025-05-22 19:15:00",
      },
      {
        id: "DRN-B1-01",
        type: "drone",
        status: "idle",
        position: { top: "30%", left: "70%" },
        battery: 95,
        lastInspection: "2025-05-22 08:50:45",
        nextInspection: "2025-05-23 09:00:00",
      },
      {
        id: "DRN-B2-01",
        type: "drone",
        status: "inspecting",
        position: { top: "70%", left: "60%" },
        battery: 51,
        lastInspection: "2025-05-22 12:40:18",
        nextInspection: "2025-05-22 16:40:00",
      },
    ],
  },
  {
    id: "site-c",
    name: "Site C",
    image: "/placeholder.svg?height=600&width=800",
    units: [
      {
        id: "ROB-C1-01",
        type: "robot",
        status: "idle",
        position: { top: "15%", left: "40%" },
        battery: 90,
        lastInspection: "2025-05-22 08:00:10",
        nextInspection: "2025-05-23 08:00:00",
      },
      {
        id: "ROB-C1-02",
        type: "robot",
        status: "inspecting",
        position: { top: "35%", left: "25%" },
        battery: 68,
        lastInspection: "2025-05-22 10:15:30",
        nextInspection: "2025-05-22 18:15:00",
      },
      {
        id: "ROB-C2-01",
        type: "robot",
        status: "offline",
        position: { top: "55%", left: "30%" },
        battery: 0,
        lastInspection: "2025-05-21 15:30:45",
        nextInspection: "N/A",
        issue: "Mechanical failure",
      },
      {
        id: "DRN-C1-01",
        type: "drone",
        status: "alerted",
        position: { top: "25%", left: "65%" },
        battery: 82,
        lastInspection: "2025-05-22 09:23:51",
        nextInspection: "2025-05-23 09:30:00",
        alert: "Critical defect detected",
      },
      {
        id: "DRN-C2-01",
        type: "drone",
        status: "inspecting",
        position: { top: "70%", left: "55%" },
        battery: 38,
        lastInspection: "2025-05-22 13:05:22",
        nextInspection: "2025-05-22 17:05:00",
      },
      {
        id: "DRN-C2-02",
        type: "drone",
        status: "offline",
        position: { top: "45%", left: "75%" },
        battery: 0,
        lastInspection: "2025-05-21 17:20:33",
        nextInspection: "N/A",
        issue: "Communication failure",
      },
    ],
  },
]

export function AssetMap() {
  const [activeSite, setActiveSite] = useState("site-a")
  const [selectedUnit, setSelectedUnit] = useState<any>(null)

  const site = sites.find((s) => s.id === activeSite)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "idle":
        return "bg-blue-500"
      case "inspecting":
        return "bg-green-500"
      case "offline":
        return "bg-gray-500"
      case "alerted":
        return "bg-red-500 animate-pulse"
      default:
        return "bg-blue-500"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "idle":
        return <Badge className="bg-blue-500">Idle</Badge>
      case "inspecting":
        return <Badge className="bg-green-500">Inspecting</Badge>
      case "offline":
        return (
          <Badge variant="outline" className="text-gray-500 border-gray-500">
            Offline
          </Badge>
        )
      case "alerted":
        return <Badge variant="destructive">Alerted</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  const getBatteryColor = (level: number) => {
    if (level > 70) return "text-green-500"
    if (level > 30) return "text-amber-500"
    return "text-red-500"
  }

  return (
    <div className="flex flex-col">
      <Tabs value={activeSite} onValueChange={setActiveSite} className="w-full">
        <div className="px-4 pt-2">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="site-a">Site A</TabsTrigger>
            <TabsTrigger value="site-b">Site B</TabsTrigger>
            <TabsTrigger value="site-c">Site C</TabsTrigger>
          </TabsList>
        </div>

        {sites.map((site) => (
          <TabsContent key={site.id} value={site.id} className="m-0">
            <div className="relative w-full h-[600px] bg-muted/20 overflow-hidden">
              <img src={site.image || "/placeholder.svg"} alt={site.name} className="w-full h-full object-cover" />

              {/* Units */}
              {site.units.map((unit) => (
                <Dialog key={unit.id}>
                  <DialogTrigger asChild>
                    <button
                      className={`absolute w-8 h-8 rounded-full flex items-center justify-center text-white font-bold cursor-pointer ${getStatusColor(
                        unit.status,
                      )}`}
                      style={{ top: unit.position.top, left: unit.position.left }}
                      onClick={() => setSelectedUnit(unit)}
                    >
                      {unit.type === "robot" ? "R" : "D"}
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        {unit.id}
                        {getStatusBadge(unit.status)}
                      </DialogTitle>
                      <DialogDescription>
                        {unit.type === "robot" ? "Robotic Unit" : "Drone"} at {site.name}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium mb-1">Status</p>
                          <p className="text-sm">{getStatusBadge(unit.status)}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Battery</p>
                          <p className={`text-sm font-medium ${getBatteryColor(unit.battery)}`}>{unit.battery}%</p>
                        </div>
                      </div>

                      {unit.status === "alerted" && (
                        <div className="bg-red-500/10 p-3 rounded-md border border-red-500/20">
                          <p className="text-sm font-medium text-red-500">Alert: {unit.alert}</p>
                        </div>
                      )}

                      {unit.status === "offline" && (
                        <div className="bg-gray-500/10 p-3 rounded-md border border-gray-500/20">
                          <p className="text-sm font-medium text-gray-500">Issue: {unit.issue}</p>
                        </div>
                      )}

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <p className="text-sm">Last inspection: {unit.lastInspection}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <p className="text-sm">Next inspection: {unit.nextInspection}</p>
                        </div>
                      </div>
                    </div>
                    <DialogFooter className="flex justify-between items-center">
                      <div className="flex gap-2">
                        {unit.status !== "offline" && (
                          <Button variant="outline" size="sm">
                            <Play className="h-4 w-4 mr-1" />
                            Start Inspection
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit Schedule
                        </Button>
                      </div>
                      <Button variant="default" size="sm">
                        <Info className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              ))}

              {/* Legend */}
              <Card className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-3">
                  <p className="text-sm font-medium mb-2">Legend</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span>Idle</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>Inspecting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                      <span>Offline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                      <span>Alerted</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold">
                        R
                      </div>
                      <span>Robot</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold">
                        D
                      </div>
                      <span>Drone</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
