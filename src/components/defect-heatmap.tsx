"use client"

export function DefectHeatmap() {
  return (
    <div className="h-[500px] w-full bg-muted/20 rounded-md overflow-hidden border relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-muted-foreground">Heatmap visualization would be displayed here</div>
      </div>

      <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-4 rounded-md border">
        <div className="text-sm font-medium mb-2">Legend</div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-red-500/80"></div>
          <span className="text-xs">High concentration</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-amber-500/80"></div>
          <span className="text-xs">Medium concentration</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-green-500/80"></div>
          <span className="text-xs">Low concentration</span>
        </div>
      </div>
    </div>
  )
}
