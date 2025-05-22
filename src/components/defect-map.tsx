"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function DefectMap() {
  return (
    <div className="relative w-full h-[600px] bg-muted/20 rounded-md overflow-hidden border">
      {/* This would be replaced with an actual map component */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-muted-foreground">Interactive map would be displayed here</div>
      </div>

      {/* Site A */}
      <div className="absolute top-[30%] left-[25%] group">
        <div className="h-6 w-6 rounded-full bg-destructive animate-pulse cursor-pointer flex items-center justify-center text-white font-bold">
          2
        </div>
        <Card className="absolute top-8 left-0 w-64 hidden group-hover:block z-10">
          <CardContent className="p-3">
            <h4 className="font-medium">Site A</h4>
            <p className="text-sm text-muted-foreground">2 critical defects detected</p>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between text-sm">
                <span>DEF-1234</span>
                <Badge variant="destructive">Critical</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span>DEF-1236</span>
                <Badge variant="destructive">Critical</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Site B */}
      <div className="absolute top-[50%] left-[60%] group">
        <div className="h-6 w-6 rounded-full bg-primary cursor-pointer flex items-center justify-center text-white font-bold">
          2
        </div>
        <Card className="absolute top-8 left-0 w-64 hidden group-hover:block z-10">
          <CardContent className="p-3">
            <h4 className="font-medium">Site B</h4>
            <p className="text-sm text-muted-foreground">2 medium defects detected</p>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between text-sm">
                <span>DEF-1233</span>
                <Badge>Medium</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span>DEF-1230</span>
                <Badge>Medium</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Site C */}
      <div className="absolute top-[70%] left-[40%] group">
        <div className="h-6 w-6 rounded-full bg-amber-500 cursor-pointer flex items-center justify-center text-white font-bold">
          2
        </div>
        <Card className="absolute top-8 left-0 w-64 hidden group-hover:block z-10">
          <CardContent className="p-3">
            <h4 className="font-medium">Site C</h4>
            <p className="text-sm text-muted-foreground">1 critical, 1 medium defect</p>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between text-sm">
                <span>DEF-1231</span>
                <Badge variant="destructive">Critical</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span>DEF-1235</span>
                <Badge>Medium</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
