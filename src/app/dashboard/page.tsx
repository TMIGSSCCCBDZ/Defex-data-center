import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, AlertTriangle, ArrowUpRight, Download, FileBarChart2, Info, Layers, Shield } from "lucide-react"
import Link from "next/link"
import { DashboardChart } from "@/components/dashboard-chart"
import { DefectTable } from "@/components/defect-table"
import { WQIGauge } from "@/components/wqi-gauge"

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Inspections</CardTitle>
                  <Layers className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,853</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Defects Detected</CardTitle>
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">145</div>
                  <p className="text-xs text-muted-foreground">-3% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Critical Issues</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">-8% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Welding Quality Index</CardTitle>
                  <Shield className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">94.3%</div>
                  <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Defect Trend</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <DashboardChart />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Welding Quality Index</CardTitle>
                  <CardDescription>Overall quality score based on defect rate and severity</CardDescription>
                </CardHeader>
                <CardContent>
                  <WQIGauge value={94.3} />
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Recent Defects</CardTitle>
                  <CardDescription>Latest detected welding defects across all sites</CardDescription>
                </CardHeader>
                <CardContent>
                  <DefectTable />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Defect Distribution by Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <FileBarChart2 className="h-16 w-16 text-muted-foreground/50" />
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Defect Distribution by Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <FileBarChart2 className="h-16 w-16 text-muted-foreground/50" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Detailed Analytics</CardTitle>
                <CardDescription>For more detailed analytics, visit the Analytics page</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/analytics">
                  <Button variant="outline" className="w-full">
                    Go to Analytics
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-4">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Critical Alert</AlertTitle>
              <AlertDescription>
                High severity defect detected at Site B, Unit 3. Immediate inspection required.
              </AlertDescription>
            </Alert>

            <Alert variant="default">
              <Info className="h-4 w-4" />
              <AlertTitle>Maintenance Alert</AlertTitle>
              <AlertDescription>Scheduled maintenance for Site A units on May 25, 2025.</AlertDescription>
            </Alert>

            <Card>
              <CardHeader>
                <CardTitle>Recent Alerts</CardTitle>
                <CardDescription>Last 5 alerts from the system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">Critical</Badge>
                      <span className="text-sm font-medium">Porosity defect detected</span>
                    </div>
                    <span className="text-sm text-muted-foreground">10 minutes ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="default">Medium</Badge>
                      <span className="text-sm font-medium">Undercut defect detected</span>
                    </div>
                    <span className="text-sm text-muted-foreground">1 hour ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Low</Badge>
                      <span className="text-sm font-medium">Minor surface irregularity</span>
                    </div>
                    <span className="text-sm text-muted-foreground">3 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">Critical</Badge>
                      <span className="text-sm font-medium">Crack defect detected</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Yesterday</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">System</Badge>
                      <span className="text-sm font-medium">AI model updated</span>
                    </div>
                    <span className="text-sm text-muted-foreground">2 days ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
