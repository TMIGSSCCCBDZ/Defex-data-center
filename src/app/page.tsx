import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, ArrowRight, Bell, Database, FileBarChart, Map, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Defex AI Welding Inspection
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Central AI data center for welding inspection. Monitor, analyze, and improve welding quality with
                  advanced AI.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button size="lg">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/defect-feed">
                  <Button size="lg" variant="outline">
                    View Real-Time Feed
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="h-32 w-32 text-primary/40" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-background/80 backdrop-blur-sm p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <p className="text-sm font-medium">System Online</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    All systems operational. Last update: 2 minutes ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Core Features</h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comprehensive tools for welding inspection, quality control, and AI-powered analysis
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-5xl mt-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <CardTitle>Real-Time Feed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Monitor incoming welding defect data in real-time with WebSocket updates
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/defect-feed" className="w-full">
                  <Button variant="outline" className="w-full">
                    View Feed
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                <CardTitle>AI Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  AI classification of defects with automated alerts for critical issues
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/ai-training" className="w-full">
                  <Button variant="outline" className="w-full">
                    Manage AI
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <FileBarChart className="h-5 w-5 text-primary" />
                <CardTitle>Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive analytics with time-series graphs, heatmaps, and WQI trends
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/analytics" className="w-full">
                  <Button variant="outline" className="w-full">
                    View Analytics
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                <CardTitle>Blockchain Audit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Immutable blockchain-backed audit logs for defect records and inspections
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/audit-log" className="w-full">
                  <Button variant="outline" className="w-full">
                    View Audit Log
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>AI Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Upload new labeled data and schedule AI retraining jobs with metrics
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/ai-training" className="w-full">
                  <Button variant="outline" className="w-full">
                    Train AI
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Map className="h-5 w-5 text-primary" />
                <CardTitle>Asset Map</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Visual layout of robotic units with inspection scheduling and status monitoring
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/asset-map" className="w-full">
                  <Button variant="outline" className="w-full">
                    View Map
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">System Status</h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Current status of all Defex AI systems and components
            </p>
          </div>

          <div className="mx-auto max-w-4xl mt-8">
            <Tabs defaultValue="operational">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="operational">Operational</TabsTrigger>
                <TabsTrigger value="alerts">Alerts</TabsTrigger>
                <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              </TabsList>
              <TabsContent value="operational" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>All Systems Operational</CardTitle>
                    <CardDescription>Last updated: 2 minutes ago</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          <span className="text-sm font-medium">Real-Time Feed</span>
                        </div>
                        <span className="text-sm text-muted-foreground">100% uptime</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          <span className="text-sm font-medium">AI Classification</span>
                        </div>
                        <span className="text-sm text-muted-foreground">100% uptime</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          <span className="text-sm font-medium">Blockchain Ledger</span>
                        </div>
                        <span className="text-sm text-muted-foreground">100% uptime</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          <span className="text-sm font-medium">Asset Tracking</span>
                        </div>
                        <span className="text-sm text-muted-foreground">100% uptime</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          <span className="text-sm font-medium">Alert System</span>
                        </div>
                        <span className="text-sm text-muted-foreground">100% uptime</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="alerts" className="mt-4">
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Critical Alert</AlertTitle>
                  <AlertDescription>
                    High severity defect detected at Site B, Unit 3. Immediate inspection required.
                  </AlertDescription>
                </Alert>
              </TabsContent>
              <TabsContent value="maintenance" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Scheduled Maintenance</CardTitle>
                    <CardDescription>Upcoming system maintenance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">Database Optimization</span>
                        </div>
                        <span className="text-sm text-muted-foreground">May 25, 2025 - 02:00 UTC</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">AI Model Update</span>
                        </div>
                        <span className="text-sm text-muted-foreground">May 27, 2025 - 03:00 UTC</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  )
}
