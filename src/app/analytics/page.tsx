import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Filter } from "lucide-react"
import { DefectTypeChart } from "@/components/defect-type-chart"
import { DefectLocationChart } from "@/components/defect-location-chart"
import { DefectTrendChart } from "@/components/defect-trend-chart"
import { DefectHeatmap } from "@/components/defect-heatmap"
import { WQITrendChart } from "@/components/wqi-trend-chart"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Defect Analytics</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="py-2">
                <CardTitle className="text-sm font-medium">Time Range</CardTitle>
              </CardHeader>
              <CardContent className="py-2">
                <Select defaultValue="7d">
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="24h">Last 24 hours</SelectItem>
                    <SelectItem value="7d">Last 7 days</SelectItem>
                    <SelectItem value="30d">Last 30 days</SelectItem>
                    <SelectItem value="90d">Last 90 days</SelectItem>
                    <SelectItem value="custom">Custom range</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="py-2">
                <CardTitle className="text-sm font-medium">Location</CardTitle>
              </CardHeader>
              <CardContent className="py-2">
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="site-a">Site A</SelectItem>
                    <SelectItem value="site-b">Site B</SelectItem>
                    <SelectItem value="site-c">Site C</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="py-2">
                <CardTitle className="text-sm font-medium">Defect Type</CardTitle>
              </CardHeader>
              <CardContent className="py-2">
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="porosity">Porosity</SelectItem>
                    <SelectItem value="crack">Crack</SelectItem>
                    <SelectItem value="undercut">Undercut</SelectItem>
                    <SelectItem value="incomplete-fusion">Incomplete Fusion</SelectItem>
                    <SelectItem value="slag-inclusion">Slag Inclusion</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="py-2">
                <CardTitle className="text-sm font-medium">Severity</CardTitle>
              </CardHeader>
              <CardContent className="py-2">
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Severities</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="heatmap">Heatmap</TabsTrigger>
            <TabsTrigger value="wqi">WQI Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Defect Distribution by Type</CardTitle>
                  <CardDescription>Breakdown of defects by type over the selected period</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <DefectTypeChart />
                </CardContent>
              </Card>
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Defect Distribution by Location</CardTitle>
                  <CardDescription>Breakdown of defects by location over the selected period</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <DefectLocationChart />
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Defect Trend</CardTitle>
                <CardDescription>Trend of defects over time with severity breakdown</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <DefectTrendChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Defect Trend Analysis</CardTitle>
                <CardDescription>Detailed trend analysis with moving averages and forecasting</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center">
                  <p className="text-muted-foreground">Detailed trend analysis would be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="heatmap" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Defect Heatmap</CardTitle>
                <CardDescription>Heatmap showing defect concentration by location and equipment</CardDescription>
              </CardHeader>
              <CardContent>
                <DefectHeatmap />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wqi" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Welding Quality Index (WQI) Trend</CardTitle>
                <CardDescription>Trend of WQI score over time with contributing factors</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <WQITrendChart />
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>WQI Components</CardTitle>
                  <CardDescription>Breakdown of factors affecting WQI</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Defect Rate</span>
                        <span className="text-sm">40%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "40%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Critical Issues</span>
                        <span className="text-sm">25%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "25%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Inspection Coverage</span>
                        <span className="text-sm">20%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "20%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Response Time</span>
                        <span className="text-sm">15%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>WQI Benchmarking</CardTitle>
                  <CardDescription>Comparison with industry standards and historical performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <p className="text-muted-foreground">WQI benchmarking chart would be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
