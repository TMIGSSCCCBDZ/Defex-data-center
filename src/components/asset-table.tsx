"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
import { Calendar, Clock, Edit, Eye, Info, MoreHorizontal, Play, Trash } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data for assets
const assets = [
  {
    id: "ROB-A1-01",
    name: "Robot A1-01",
    type: "robot",
    site: "Site A",
    zone: "Zone 1",
    status: "idle",
    battery: 92,
    lastInspection: "2025-05-22 08:15:22",
    nextInspection: "2025-05-23 08:00:00",
  },
  {
    id: "ROB-A1-02",
    name: "Robot A1-02",
    type: "robot",
    site: "Site A",
    zone: "Zone 1",
    status: "inspecting",
    battery: 78,
    lastInspection: "2025-05-22 10:30:45",
    nextInspection: "2025-05-22 18:00:00",
  },
  {
    id: "ROB-A2-01",
    name: "Robot A2-01",
    type: "robot",
    site: "Site A",
    zone: "Zone 2",
    status: "alerted",
    battery: 65,
    lastInspection: "2025-05-22 14:32:45",
    nextInspection: "2025-05-23 14:30:00",
    alert: "Critical defect detected",
  },
  {
    id: "DRN-A1-01",
    name: "Drone A1-01",
    type: "drone",
    site: "Site A",
    zone: "Zone 1",
    status: "idle",
    battery: 100,
    lastInspection: "2025-05-22 09:45:12",
    nextInspection: "2025-05-23 10:00:00",
  },
  {
    id: "DRN-A2-01",
    name: "Drone A2-01",
    type: "drone",
    site: "Site A",
    zone: "Zone 2",
    status: "inspecting",
    battery: 42,
    lastInspection: "2025-05-22 13:20:33",
    nextInspection: "2025-05-22 17:00:00",
  },
  {
    id: "ROB-B1-01",
    name: "Robot B1-01",
    type: "robot",
    site: "Site B",
    zone: "Zone 1",
    status: "idle",
    battery: 88,
    lastInspection: "2025-05-22 07:30:15",
    nextInspection: "2025-05-23 07:30:00",
  },
  {
    id: "ROB-B1-02",
    name: "Robot B1-02",
    type: "robot",
    site: "Site B",
    zone: "Zone 1",
    status: "offline",
    battery: 0,
    lastInspection: "2025-05-21 16:45:22",
    nextInspection: "N/A",
    issue: "Power supply failure",
  },
  {
    id: "DRN-C1-01",
    name: "Drone C1-01",
    type: "drone",
    site: "Site C",
    zone: "Zone 1",
    status: "alerted",
    battery: 82,
    lastInspection: "2025-05-22 09:23:51",
    nextInspection: "2025-05-23 09:30:00",
    alert: "Critical defect detected",
  },
]

export function AssetTable() {
  const [selectedAsset, setSelectedAsset] = useState<any>(null)

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
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Site</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Battery</TableHead>
            <TableHead>Next Inspection</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.map((asset) => (
            <TableRow key={asset.id}>
              <TableCell className="font-medium">{asset.id}</TableCell>
              <TableCell>{asset.name}</TableCell>
              <TableCell>{asset.type === "robot" ? "Robot" : "Drone"}</TableCell>
              <TableCell>{asset.site}</TableCell>
              <TableCell>{getStatusBadge(asset.status)}</TableCell>
              <TableCell className={getBatteryColor(asset.battery)}>{asset.battery}%</TableCell>
              <TableCell>{asset.nextInspection}</TableCell>
              <TableCell>
                <Dialog>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DialogTrigger asChild>
                        <DropdownMenuItem onSelect={() => setSelectedAsset(asset)}>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                      </DialogTrigger>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem disabled={asset.status === "offline"}>
                        <Play className="h-4 w-4 mr-2" />
                        Start Inspection
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-500">
                        <Trash className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DialogContent className="sm:max-w-[425px]">
                    {selectedAsset && (
                      <>
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            {selectedAsset.id}
                            {getStatusBadge(selectedAsset.status)}
                          </DialogTitle>
                          <DialogDescription>
                            {selectedAsset.type === "robot" ? "Robotic Unit" : "Drone"} at {selectedAsset.site}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-medium mb-1">Name</p>
                              <p className="text-sm">{selectedAsset.name}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium mb-1">Type</p>
                              <p className="text-sm">{selectedAsset.type === "robot" ? "Robot" : "Drone"}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium mb-1">Site</p>
                              <p className="text-sm">{selectedAsset.site}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium mb-1">Zone</p>
                              <p className="text-sm">{selectedAsset.zone}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium mb-1">Status</p>
                              <p className="text-sm">{getStatusBadge(selectedAsset.status)}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium mb-1">Battery</p>
                              <p className={`text-sm font-medium ${getBatteryColor(selectedAsset.battery)}`}>
                                {selectedAsset.battery}%
                              </p>
                            </div>
                          </div>

                          {selectedAsset.status === "alerted" && (
                            <div className="bg-red-500/10 p-3 rounded-md border border-red-500/20">
                              <p className="text-sm font-medium text-red-500">Alert: {selectedAsset.alert}</p>
                            </div>
                          )}

                          {selectedAsset.status === "offline" && (
                            <div className="bg-gray-500/10 p-3 rounded-md border border-gray-500/20">
                              <p className="text-sm font-medium text-gray-500">Issue: {selectedAsset.issue}</p>
                            </div>
                          )}

                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <p className="text-sm">Last inspection: {selectedAsset.lastInspection}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <p className="text-sm">Next inspection: {selectedAsset.nextInspection}</p>
                            </div>
                          </div>
                        </div>
                        <DialogFooter className="flex justify-between items-center">
                          <div className="flex gap-2">
                            {selectedAsset.status !== "offline" && (
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
                            Full Details
                          </Button>
                        </DialogFooter>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
