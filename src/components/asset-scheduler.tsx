"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, Clock, Plus, Save, X } from "lucide-react"

// Mock data for scheduled inspections
const scheduledInspections = [
  {
    id: "SCH-1234",
    unitId: "ROB-A1-01",
    unitName: "Robot A1-01",
    site: "Site A",
    zone: "Zone 1",
    date: "2025-05-23",
    time: "08:00:00",
    duration: 60,
    type: "Routine",
    status: "scheduled",
  },
  {
    id: "SCH-1235",
    unitId: "DRN-A1-01",
    unitName: "Drone A1-01",
    site: "Site A",
    zone: "Zone 1",
    date: "2025-05-23",
    time: "10:00:00",
    duration: 45,
    type: "Routine",
    status: "scheduled",
  },
  {
    id: "SCH-1236",
    unitId: "ROB-A2-01",
    unitName: "Robot A2-01",
    site: "Site A",
    zone: "Zone 2",
    date: "2025-05-23",
    time: "14:30:00",
    duration: 90,
    type: "Follow-up",
    status: "scheduled",
  },
  {
    id: "SCH-1237",
    unitId: "ROB-B1-01",
    unitName: "Robot B1-01",
    site: "Site B",
    zone: "Zone 1",
    date: "2025-05-23",
    time: "07:30:00",
    duration: 60,
    type: "Routine",
    status: "scheduled",
  },
  {
    id: "SCH-1238",
    unitId: "DRN-C1-01",
    unitName: "Drone C1-01",
    site: "Site C",
    zone: "Zone 1",
    date: "2025-05-23",
    time: "09:30:00",
    duration: 45,
    type: "Follow-up",
    status: "scheduled",
  },
]

// Mock data for available units
const availableUnits = [
  { id: "ROB-A1-01", name: "Robot A1-01", type: "robot", site: "Site A", zone: "Zone 1", status: "idle" },
  { id: "ROB-A1-02", name: "Robot A1-02", type: "robot", site: "Site A", zone: "Zone 1", status: "inspecting" },
  { id: "ROB-A2-01", name: "Robot A2-01", type: "robot", site: "Site A", zone: "Zone 2", status: "alerted" },
  { id: "DRN-A1-01", name: "Drone A1-01", type: "drone", site: "Site A", zone: "Zone 1", status: "idle" },
  { id: "DRN-A2-01", name: "Drone A2-01", type: "drone", site: "Site A", zone: "Zone 2", status: "inspecting" },
  { id: "ROB-B1-01", name: "Robot B1-01", type: "robot", site: "Site B", zone: "Zone 1", status: "idle" },
  { id: "DRN-C1-01", name: "Drone C1-01", type: "drone", site: "Site C", zone: "Zone 1", status: "alerted" },
]

export function AssetScheduler() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [view, setView] = useState("day")
  const [showNewScheduleDialog, setShowNewScheduleDialog] = useState(false)
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Badge className="bg-blue-500">Scheduled</Badge>
      case "in-progress":
        return <Badge className="bg-green-500">In Progress</Badge>
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>
      case "cancelled":
        return (
          <Badge variant="outline" className="text-gray-500 border-gray-500">
            Cancelled
          </Badge>
        )
      default:
        return <Badge>Unknown</Badge>
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-[300px] space-y-4">
          <Card>
            <CardContent className="p-3">
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-3 space-y-3">
              <h3 className="font-medium">Filters</h3>
              <div className="space-y-2">
                <Label htmlFor="site-filter">Site</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="site-filter">
                    <SelectValue placeholder="All Sites" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sites</SelectItem>
                    <SelectItem value="site-a">Site A</SelectItem>
                    <SelectItem value="site-b">Site B</SelectItem>
                    <SelectItem value="site-c">Site C</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="unit-type-filter">Unit Type</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="unit-type-filter">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="robot">Robot</SelectItem>
                    <SelectItem value="drone">Drone</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="inspection-type-filter">Inspection Type</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="inspection-type-filter">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="routine">Routine</SelectItem>
                    <SelectItem value="follow-up">Follow-up</SelectItem>
                    <SelectItem value="emergency">Emergency</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1">
          <Card>
            <CardContent className="p-3">
              <div className="flex justify-between items-center mb-4">
                <Tabs value={view} onValueChange={setView} className="w-[300px]">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="day">Day</TabsTrigger>
                    <TabsTrigger value="week">Week</TabsTrigger>
                    <TabsTrigger value="month">Month</TabsTrigger>
                  </TabsList>
                </Tabs>
                <Dialog open={showNewScheduleDialog} onOpenChange={setShowNewScheduleDialog}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      New Schedule
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Schedule New Inspection</DialogTitle>
                      <DialogDescription>Create a new inspection schedule for a unit</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="unit">Unit</Label>
                        <Select value={selectedUnit || undefined} onValueChange={setSelectedUnit}>
                          <SelectTrigger id="unit">
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableUnits.map((unit) => (
                              <SelectItem key={unit.id} value={unit.id}>
                                {unit.name} ({unit.site})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date">Date</Label>
                          <Input id="date" type="date" defaultValue="2025-05-23" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time">Time</Label>
                          <Input id="time" type="time" defaultValue="09:00" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="duration">Duration (minutes)</Label>
                          <Input id="duration" type="number" defaultValue="60" min="15" step="15" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="type">Inspection Type</Label>
                          <Select defaultValue="routine">
                            <SelectTrigger id="type">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="routine">Routine</SelectItem>
                              <SelectItem value="follow-up">Follow-up</SelectItem>
                              <SelectItem value="emergency">Emergency</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Notes</Label>
                        <Input id="notes" placeholder="Add any additional notes here" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setShowNewScheduleDialog(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setShowNewScheduleDialog(false)}>
                        <Save className="h-4 w-4 mr-2" />
                        Save Schedule
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <TabsContent value="day" className="m-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Time</TableHead>
                      <TableHead>Unit</TableHead>
                      <TableHead>Site</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scheduledInspections.map((inspection) => (
                      <TableRow key={inspection.id}>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            {inspection.time.substring(0, 5)}
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{inspection.unitName}</TableCell>
                        <TableCell>{inspection.site}</TableCell>
                        <TableCell>{inspection.type}</TableCell>
                        <TableCell>{inspection.duration} min</TableCell>
                        <TableCell>{getStatusBadge(inspection.status)}</TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="icon" title="Edit">
                              <Clock className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-green-500" title="Approve">
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-red-500" title="Cancel">
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="week" className="m-0">
                <div className="h-[400px] flex items-center justify-center">
                  <p className="text-muted-foreground">Weekly schedule view would be displayed here</p>
                </div>
              </TabsContent>

              <TabsContent value="month" className="m-0">
                <div className="h-[400px] flex items-center justify-center">
                  <p className="text-muted-foreground">Monthly schedule view would be displayed here</p>
                </div>
              </TabsContent>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
