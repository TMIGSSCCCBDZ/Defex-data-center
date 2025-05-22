import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, Filter, RefreshCw, Search } from "lucide-react"
import { DefectFeed } from "@/components/defect-feed"
import { DefectMap } from "@/components/defect-map"

export default function DefectFeedPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Real-Time Defect Feed</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Connections</CardTitle>
              <div className="h-4 w-4 rounded-full bg-green-500"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12/12</div>
              <p className="text-xs text-muted-foreground">All devices connected</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Defects Today</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">5 critical, 18 minor</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Response Time</CardTitle>
              <div className="h-4 w-4 text-muted-foreground">ms</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245ms</div>
              <p className="text-xs text-muted-foreground">-12ms from yesterday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Data Throughput</CardTitle>
              <div className="h-4 w-4 text-muted-foreground">MB/s</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2 MB/s</div>
              <p className="text-xs text-muted-foreground">Peak: 12.8 MB/s</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 grid-cols-1">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Defect Feed</CardTitle>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
              <CardDescription>Real-time feed of welding defects from all connected devices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="search">Search</Label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="search"
                      type="search"
                      placeholder="Search by ID, location, or type..."
                      className="pl-8"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="severity">Severity</Label>
                    <Select defaultValue="all">
                      <SelectTrigger id="severity">
                        <SelectValue placeholder="All" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Select defaultValue="all">
                      <SelectTrigger id="location">
                        <SelectValue placeholder="All" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="site-a">Site A</SelectItem>
                        <SelectItem value="site-b">Site B</SelectItem>
                        <SelectItem value="site-c">Site C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Defect Type</Label>
                    <Select defaultValue="all">
                      <SelectTrigger id="type">
                        <SelectValue placeholder="All" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="porosity">Porosity</SelectItem>
                        <SelectItem value="crack">Crack</SelectItem>
                        <SelectItem value="undercut">Undercut</SelectItem>
                        <SelectItem value="incomplete-fusion">Incomplete Fusion</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="list" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="list">List View</TabsTrigger>
                  <TabsTrigger value="map">Map View</TabsTrigger>
                </TabsList>
                <TabsContent value="list" className="mt-4">
                  <DefectFeed />
                </TabsContent>
                <TabsContent value="map" className="mt-4">
                  <DefectMap />
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Showing 10 of 23 defects</div>
              <Button variant="outline" size="sm">
                Load More
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
