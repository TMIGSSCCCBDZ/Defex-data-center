"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, FileText } from "lucide-react"

const auditRecords = [
  {
    id: "AUDIT-1234",
    timestamp: "2025-05-22 14:32:45",
    type: "Defect",
    description: "Porosity defect detected at Site A, Unit 2",
    hash: "0x8f2e5b7d9c3a1f4e6d8b2c7a9e3d5f1b4e7d9c6b3a2e5f8d7c4b1a9e6d3f",
    blockNumber: 12543,
    verified: true,
  },
  {
    id: "AUDIT-1233",
    timestamp: "2025-05-22 13:15:22",
    type: "Inspection",
    description: "Routine inspection completed at Site B",
    hash: "0x7d9c3a1f4e6d8b2c7a9e3d5f1b4e7d9c6b3a2e5f8d7c4b1a9e6d3f8f2e5b",
    blockNumber: 12542,
    verified: true,
  },
  {
    id: "AUDIT-1232",
    timestamp: "2025-05-22 11:47:09",
    type: "Certificate",
    description: "Quality certificate issued for Project XYZ",
    hash: "0x1f4e6d8b2c7a9e3d5f1b4e7d9c6b3a2e5f8d7c4b1a9e6d3f8f2e5b7d9c3a",
    blockNumber: 12541,
    verified: true,
  },
  {
    id: "AUDIT-1231",
    timestamp: "2025-05-22 09:23:51",
    type: "Defect",
    description: "Crack defect detected at Site C, Unit 2",
    hash: "0x6d8b2c7a9e3d5f1b4e7d9c6b3a2e5f8d7c4b1a9e6d3f8f2e5b7d9c3a1f4e",
    blockNumber: 12540,
    verified: true,
  },
  {
    id: "AUDIT-1230",
    timestamp: "2025-05-22 08:05:17",
    type: "AI Update",
    description: "AI model updated and deployed",
    hash: "0x2c7a9e3d5f1b4e7d9c6b3a2e5f8d7c4b1a9e6d3f8f2e5b7d9c3a1f4e6d8b",
    blockNumber: 12539,
    verified: true,
  },
  {
    id: "AUDIT-1229",
    timestamp: "2025-05-21 16:42:33",
    type: "Defect",
    description: "Incomplete fusion defect at Site B, Unit 1",
    hash: "0x9e3d5f1b4e7d9c6b3a2e5f8d7c4b1a9e6d3f8f2e5b7d9c3a1f4e6d8b2c7a",
    blockNumber: 12538,
    verified: true,
  },
  {
    id: "AUDIT-1228",
    timestamp: "2025-05-21 14:18:05",
    type: "Inspection",
    description: "Emergency inspection at Site A following alert",
    hash: "0x5f1b4e7d9c6b3a2e5f8d7c4b1a9e6d3f8f2e5b7d9c3a1f4e6d8b2c7a9e3d",
    blockNumber: 12537,
    verified: true,
  },
]

export function AuditLogTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Timestamp</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Block #</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {auditRecords.map((record) => (
          <TableRow key={record.id}>
            <TableCell className="font-medium">{record.id}</TableCell>
            <TableCell>{record.timestamp}</TableCell>
            <TableCell>
              <Badge
                variant={
                  record.type === "Defect" ? "destructive" : record.type === "Certificate" ? "default" : "outline"
                }
              >
                {record.type}
              </Badge>
            </TableCell>
            <TableCell className="max-w-[300px] truncate">{record.description}</TableCell>
            <TableCell>{record.blockNumber}</TableCell>
            <TableCell>
              {record.verified ? (
                <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                  Verified
                </Badge>
              ) : (
                <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
                  Pending
                </Badge>
              )}
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">View details</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <FileText className="h-4 w-4" />
                  <span className="sr-only">View certificate</span>
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
