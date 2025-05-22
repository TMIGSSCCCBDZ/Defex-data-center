"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Eye, MoreHorizontal, Pause, Play, StopCircle, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data for training jobs
const trainingJobs = [
  {
    id: "JOB-1234",
    name: "DefexNet v3.3 Training",
    status: "scheduled",
    startDate: "2025-05-27",
    startTime: "03:00:00",
    baseModel: "DefexNet v3.2",
    datasets: "All Available Data",
    epochs: 50,
    progress: 0,
    metrics: null,
  },
  {
    id: "JOB-1233",
    name: "Site A Specific Model",
    status: "in-progress",
    startDate: "2025-05-22",
    startTime: "08:00:00",
    baseModel: "DefexNet v3.2",
    datasets: "Site A Data Only",
    epochs: 30,
    progress: 65,
    metrics: {
      currentEpoch: 20,
      accuracy: 95.2,
      loss: 0.08,
      validationAccuracy: 94.8,
      validationLoss: 0.09,
      timeRemaining: "1h 15m",
    },
  },
  {
    id: "JOB-1232",
    name: "Crack Detection Improvement",
    status: "completed",
    startDate: "2025-05-20",
    startTime: "14:00:00",
    endDate: "2025-05-20",
    endTime: "18:45:22",
    baseModel: "DefexNet v3.2",
    datasets: "Crack Defects Only",
    epochs: 25,
    progress: 100,
    metrics: {
      finalEpoch: 25,
      accuracy: 98.5,
      loss: 0.04,
      validationAccuracy: 98.2,
      validationLoss: 0.05,
      f1Score: 98.3,
      precision: 98.7,
      recall: 97.9,
    },
  },
  {
    id: "JOB-1231",
    name: "Porosity Detection Improvement",
    status: "completed",
    startDate: "2025-05-18",
    startTime: "09:30:00",
    endDate: "2025-05-18",
    endTime: "14:15:45",
    baseModel: "DefexNet v3.2",
    datasets: "Porosity Defects Only",
    epochs: 25,
    progress: 100,
    metrics: {
      finalEpoch: 25,
      accuracy: 97.8,
      loss: 0.05,
      validationAccuracy: 97.5,
      validationLoss: 0.06,
      f1Score: 97.6,
      precision: 98.1,
      recall: 97.2,
    },
  },
  {
    id: "JOB-1230",
    name: "DefexNet v3.2 Training",
    status: "completed",
    startDate: "2025-05-15",
    startTime: "01:00:00",
    endDate: "2025-05-15",
    endTime: "09:45:33",
    baseModel: "DefexNet v3.1",
    datasets: "All Available Data",
    epochs: 50,
    progress: 100,
    metrics: {
      finalEpoch: 50,
      accuracy: 96.8,
      loss: 0.04,
      validationAccuracy: 96.5,
      validationLoss: 0.05,
      f1Score: 96.7,
      precision: 97.2,
      recall: 96.3,
    },
  },
]

export function TrainingJobsTable() {
  const [selectedJob, setSelectedJob] = useState<any>(null)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Badge className="bg-blue-500">Scheduled</Badge>
      case "in-progress":
        return <Badge className="bg-green-500">In Progress</Badge>
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
            Completed
          </Badge>
        )
      case "failed":
        return <Badge variant="destructive">Failed</Badge>
      case "cancelled":
        return (
          <Badge variant="outline" className="text-gray-500 border-gray-500">
            Cancelled
          </Badge>
        )
      default:
        return <Badge>Unknown</Badge>
    }
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>Base Model</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trainingJobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell className="font-medium">{job.id}</TableCell>
              <TableCell>{job.name}</TableCell>
              <TableCell>{getStatusBadge(job.status)}</TableCell>
              <TableCell>{`${job.startDate} ${job.startTime.substring(0, 5)}`}</TableCell>
              <TableCell>{job.baseModel}</TableCell>
              <TableCell>
                {job.status === "in-progress" ? (
                  <div className="space-y-1">
                    <Progress value={job.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      {job.metrics?.currentEpoch}/{job.epochs} epochs ({job.progress}%) - {job.metrics?.timeRemaining}{" "}
                      remaining
                    </p>
                  </div>
                ) : job.status === "completed" ? (
                  <div className="flex items-center gap-2">
                    <Progress value={100} className="h-2 w-[100px]" />
                    <span className="text-xs text-muted-foreground">Completed</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Progress value={0} className="h-2 w-[100px]" />
                    <span className="text-xs text-muted-foreground">Not started</span>
                  </div>
                )}
              </TableCell>
              <TableCell>
                <Dialog>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DialogTrigger asChild>
                        <DropdownMenuItem onSelect={() => setSelectedJob(job)}>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                      </DialogTrigger>
                      {job.status === "in-progress" && (
                        <DropdownMenuItem>
                          <Pause className="h-4 w-4 mr-2" />
                          Pause
                        </DropdownMenuItem>
                      )}
                      {job.status === "scheduled" && (
                        <DropdownMenuItem>
                          <Play className="h-4 w-4 mr-2" />
                          Start Now
                        </DropdownMenuItem>
                      )}
                      {(job.status === "scheduled" || job.status === "in-progress") && (
                        <>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-500">
                            <X className="h-4 w-4 mr-2" />
                            Cancel
                          </DropdownMenuItem>
                        </>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DialogContent className="sm:max-w-[600px]">
                    {selectedJob && (
                      <>
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            {selectedJob.name}
                            {getStatusBadge(selectedJob.status)}
                          </DialogTitle>
                          <DialogDescription>Training job {selectedJob.id} details</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-medium mb-1">Base Model</p>
                              <p className="text-sm">{selectedJob.baseModel}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium mb-1">Datasets</p>
                              <p className="text-sm">{selectedJob.datasets}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium mb-1">Start Date</p>
                              <p className="text-sm">{`${selectedJob.startDate} ${selectedJob.startTime}`}</p>
                            </div>
                            {selectedJob.status === "completed" && (
                              <div>
                                <p className="text-sm font-medium mb-1">End Date</p>
                                <p className="text-sm">{`${selectedJob.endDate} ${selectedJob.endTime}`}</p>
                              </div>
                            )}
                            <div>
                              <p className="text-sm font-medium mb-1">Epochs</p>
                              <p className="text-sm">{selectedJob.epochs}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium mb-1">Status</p>
                              <p className="text-sm">{getStatusBadge(selectedJob.status)}</p>
                            </div>
                          </div>

                          {selectedJob.status === "in-progress" && (
                            <div className="space-y-2">
                              <p className="text-sm font-medium">Progress</p>
                              <Progress value={selectedJob.progress} className="h-2" />
                              <p className="text-xs text-muted-foreground">
                                Epoch {selectedJob.metrics?.currentEpoch}/{selectedJob.epochs} ({selectedJob.progress}%)
                                - {selectedJob.metrics?.timeRemaining} remaining
                              </p>

                              <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                  <p className="text-sm font-medium mb-1">Current Accuracy</p>
                                  <p className="text-sm">{selectedJob.metrics?.accuracy}%</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium mb-1">Current Loss</p>
                                  <p className="text-sm">{selectedJob.metrics?.loss}</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium mb-1">Validation Accuracy</p>
                                  <p className="text-sm">{selectedJob.metrics?.validationAccuracy}%</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium mb-1">Validation Loss</p>
                                  <p className="text-sm">{selectedJob.metrics?.validationLoss}</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {selectedJob.status === "completed" && selectedJob.metrics && (
                            <div className="space-y-4">
                              <p className="text-sm font-medium">Final Metrics</p>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className="text-sm font-medium mb-1">Accuracy</p>
                                  <p className="text-sm">{selectedJob.metrics.accuracy}%</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium mb-1">Loss</p>
                                  <p className="text-sm">{selectedJob.metrics.loss}</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium mb-1">Validation Accuracy</p>
                                  <p className="text-sm">{selectedJob.metrics.validationAccuracy}%</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium mb-1">Validation Loss</p>
                                  <p className="text-sm">{selectedJob.metrics.validationLoss}</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium mb-1">F1 Score</p>
                                  <p className="text-sm">{selectedJob.metrics.f1Score}%</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium mb-1">Precision</p>
                                  <p className="text-sm">{selectedJob.metrics.precision}%</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium mb-1">Recall</p>
                                  <p className="text-sm">{selectedJob.metrics.recall}%</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <DialogFooter className="flex justify-between items-center">
                          {selectedJob.status === "in-progress" && (
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Pause className="h-4 w-4 mr-1" />
                                Pause
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-500">
                                <StopCircle className="h-4 w-4 mr-1" />
                                Stop
                              </Button>
                            </div>
                          )}
                          {selectedJob.status === "scheduled" && (
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Play className="h-4 w-4 mr-1" />
                                Start Now
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-500">
                                <X className="h-4 w-4 mr-1" />
                                Cancel
                              </Button>
                            </div>
                          )}
                          {selectedJob.status === "completed" && (
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-1" />
                                View Full Report
                              </Button>
                            </div>
                          )}
                        </DialogFooter>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
