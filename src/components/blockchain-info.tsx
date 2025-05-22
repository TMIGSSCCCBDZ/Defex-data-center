"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function BlockchainInfo() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Blockchain Network</CardTitle>
            <CardDescription>Private Polygon Edge network for secure, immutable records</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Network Type</span>
                <span className="text-sm">Private Polygon Edge</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Consensus</span>
                <span className="text-sm">Proof of Authority</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Block Time</span>
                <span className="text-sm">5 seconds</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Current Block</span>
                <span className="text-sm">12,543</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Network Status</span>
                <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                  Operational
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Latest Block</CardTitle>
            <CardDescription>Information about the most recent block</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Block Number</span>
                <span className="text-sm">12,543</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Block Hash</span>
                <span className="text-sm truncate max-w-[200px]">
                  0x8f2e5b7d9c3a1f4e6d8b2c7a9e3d5f1b4e7d9c6b3a2e5f8d7c4b1a9e6d3f
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Timestamp</span>
                <span className="text-sm">2025-05-22 14:32:45</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Transactions</span>
                <span className="text-sm">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Validator</span>
                <span className="text-sm">Node 3</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Network Nodes</CardTitle>
          <CardDescription>Status of all nodes in the blockchain network</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="border rounded-md p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Node {i + 1}</span>
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-muted-foreground">
                  <div className="flex justify-between mb-1">
                    <span>Role:</span>
                    <span>{i < 3 ? "Validator" : "Peer"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Uptime:</span>
                    <span>99.9%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Verification Process</CardTitle>
          <CardDescription>How blockchain ensures data integrity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <span className="text-sm font-bold text-primary">1</span>
              </div>
              <div>
                <h4 className="text-sm font-medium">Data Capture</h4>
                <p className="text-sm text-muted-foreground">
                  Defect data and inspection reports are captured and hashed
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <span className="text-sm font-bold text-primary">2</span>
              </div>
              <div>
                <h4 className="text-sm font-medium">Block Creation</h4>
                <p className="text-sm text-muted-foreground">
                  Data is bundled into blocks with timestamps and previous block hash
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <span className="text-sm font-bold text-primary">3</span>
              </div>
              <div>
                <h4 className="text-sm font-medium">Consensus</h4>
                <p className="text-sm text-muted-foreground">
                  Validator nodes verify and approve blocks through Proof of Authority
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <span className="text-sm font-bold text-primary">4</span>
              </div>
              <div>
                <h4 className="text-sm font-medium">Immutable Storage</h4>
                <p className="text-sm text-muted-foreground">
                  Approved blocks are added to the chain and cannot be altered
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
