"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import Link from "next/link"

const defects = [
  {
    id: "DEF-1234",
    timestamp: "2025-05-22 14:32:45",
    location: "Site A, Unit 2",
    type: "Porosity",
    severity: "Critical",
    confidence: 98.2,
    deviceId: "ROB-A2-01",
  },
  {
    id: "DEF-1233",
    timestamp: "2025-05-22 13:15:22",
    location: "Site B, Unit 3",
    type: "Undercut",
    severity: "Medium",
    confidence: 92.7,
    deviceId: "ROB-B3-04",
  },
  {
    id: "DEF-1232",
    timestamp: "2025-05-22 11:47:09",
    location: "Site A, Unit 1",
    type: "Surface Irregularity",
    severity: "Low",
    confidence: 87.5,
    deviceId: "ROB-A1-02",
  },
  {
    id: "DEF-1231",
    timestamp: "2025-05-22 09:23:51",
    location: "Site C, Unit 2",
    type: "Crack",
    severity: "Critical",
    confidence: 99.1,
    deviceId: "ROB-C2-03",
  },
  {
    id: "DEF-1230",
    timestamp: "2025-05-22 08:05:17",
    location: "Site B, Unit 1",
    type: "Incomplete Fusion",
    severity: "Medium",
    confidence: 91.3,
    deviceId: "ROB-B1-01",
  },
]

export function DefectTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Timestamp</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Severity</TableHead>
          <TableHead>Confidence</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {defects.map((defect) => (
          <TableRow key={defect.id}>
            <TableCell className="font-medium">{defect.id}</TableCell>
            <TableCell>{defect.timestamp}</TableCell>
            <TableCell>{defect.location}</TableCell>
            <TableCell>{defect.type}</TableCell>
            <TableCell>
              <Badge
                variant={
                  defect.severity === "Critical" ? "destructive" : defect.severity === "Medium" ? "default" : "outline"
                }
              >
                {defect.severity}
              </Badge>
            </TableCell>
            <TableCell>{defect.confidence}%</TableCell>
            <TableCell>
              <Link href={`/defect-feed/${defect.id}`}>
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">View details</span>
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
