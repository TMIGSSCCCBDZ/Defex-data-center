import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { AlertCircle, Calendar, FileUp, Plus, RefreshCw, Upload, Save } from "lucide-react"
import { AIModelMetrics } from "@/components/ai-model-metrics"
import { TrainingJobsTable } from "@/components/training-jobs-table"
import { Textarea } from "@/components/ui/textarea"

export default function AITrainingPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">AI Training Panel</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Training Job
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Model</CardTitle>
              <div className="h-4 w-4 text-muted-foreground">v3</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">DefexNet v3.2</div>
              <p className="text-xs text-muted-foreground">Deployed: May 15, 2025</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">96.8%</div>
              <p className="text-xs text-muted-foreground">+1.2% from previous version</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Training Data</CardTitle>
              <div className="h-4 w-4 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-database"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15,432</div>
              <p className="text-xs text-muted-foreground">Labeled samples</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Training</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">May 27</div>
              <p className="text-xs text-muted-foreground">Scheduled for 03:00 UTC</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="metrics" className="space-y-4">
          <TabsList>
            <TabsTrigger value="metrics">Model Metrics</TabsTrigger>
            <TabsTrigger value="training">Training Jobs</TabsTrigger>
            <TabsTrigger value="upload">Upload Data</TabsTrigger>
            <TabsTrigger value="schedule">Schedule Training</TabsTrigger>
          </TabsList>

          <TabsContent value="metrics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Model Performance Metrics</CardTitle>
                <CardDescription>Performance metrics for the current AI model</CardDescription>
              </CardHeader>
              <CardContent>
                <AIModelMetrics />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="training" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Training Jobs</CardTitle>
                <CardDescription>Recent and scheduled AI model training jobs</CardDescription>
              </CardHeader>
              <CardContent>
                <TrainingJobsTable />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upload" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upload Training Data</CardTitle>
                <CardDescription>Upload new labeled data for AI model training</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="dataset-name">Dataset Name</Label>
                    <Input id="dataset-name" placeholder="e.g., Site A Defects May 2025" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dataset-type">Dataset Type</Label>
                    <Select defaultValue="defect">
                      <SelectTrigger id="dataset-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="defect">Defect Images</SelectItem>
                        <SelectItem value="normal">Normal Welds</SelectItem>
                        <SelectItem value="mixed">Mixed Dataset</SelectItem>
                        <SelectItem value="augmented">Augmented Data</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Data Upload</Label>
                    <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                      <FileUp className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Drag and drop files here, or click to browse</p>
                      <Button variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Browse Files
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2">
                        Supported formats: JPG, PNG, TIFF, CSV for metadata
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-label">Auto-Label with Current Model</Label>
                      <Switch id="auto-label" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Use the current AI model to automatically label unlabeled data
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="validation-split">Validation Split</Label>
                      <span className="text-sm">20%</span>
                    </div>
                    <Slider defaultValue={[20]} max={50} step={5} />
                    <p className="text-xs text-muted-foreground">Percentage of data to use for validation</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Upload Dataset</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Schedule Training Job</CardTitle>
                <CardDescription>Configure and schedule a new AI model training job</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="job-name">Job Name</Label>
                    <Input id="job-name" placeholder="e.g., DefexNet v3.3 Training" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="base-model">Base Model</Label>
                      <Select defaultValue="current">
                        <SelectTrigger id="base-model">
                          <SelectValue placeholder="Select model" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="current">DefexNet v3.2 (Current)</SelectItem>
                          <SelectItem value="v3.1">DefexNet v3.1</SelectItem>
                          <SelectItem value="v3.0">DefexNet v3.0</SelectItem>
                          <SelectItem value="scratch">Train from Scratch</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="datasets">Datasets</Label>
                      <Select defaultValue="all">
                        <SelectTrigger id="datasets">
                          <SelectValue placeholder="Select datasets" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Available Data</SelectItem>
                          <SelectItem value="recent">Recent Data Only (30 days)</SelectItem>
                          <SelectItem value="custom">Custom Selection</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Training Parameters</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="epochs" className="text-xs">
                          Epochs
                        </Label>
                        <Input id="epochs" type="number" defaultValue="50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="batch-size" className="text-xs">
                          Batch Size
                        </Label>
                        <Input id="batch-size" type="number" defaultValue="32" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="learning-rate" className="text-xs">
                          Learning Rate
                        </Label>
                        <Input id="learning-rate" type="number" defaultValue="0.001" step="0.0001" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="optimizer" className="text-xs">
                          Optimizer
                        </Label>
                        <Select defaultValue="adam">
                          <SelectTrigger id="optimizer">
                            <SelectValue placeholder="Select optimizer" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="adam">Adam</SelectItem>
                            <SelectItem value="sgd">SGD</SelectItem>
                            <SelectItem value="rmsprop">RMSprop</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Schedule</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="start-date" className="text-xs">
                          Start Date
                        </Label>
                        <Input id="start-date" type="date" defaultValue="2025-05-27" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="start-time" className="text-xs">
                          Start Time (UTC)
                        </Label>
                        <Input id="start-time" type="time" defaultValue="03:00" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-deploy">Auto-Deploy After Training</Label>
                      <Switch id="auto-deploy" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Automatically deploy the model if training metrics exceed current model
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="training-notes">Notes</Label>
                    <Textarea
                      id="training-notes"
                      placeholder="Add any additional notes about this training job"
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Schedule Training
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
