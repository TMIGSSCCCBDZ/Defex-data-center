import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  Check,
  Cloud,
  Database,
  Globe,
  Key,
  Lock,
  LogOut,
  Mail,
  Moon,
  Palette,
  Save,
  Shield,
  Sun,
  User,
  Webhook,
} from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </div>

        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile">
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="appearance">
              <Palette className="h-4 w-4 mr-2" />
              Appearance
            </TabsTrigger>
            <TabsTrigger value="system">
              <Database className="h-4 w-4 mr-2" />
              System
            </TabsTrigger>
            <TabsTrigger value="security">
              <Shield className="h-4 w-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger value="api">
              <Webhook className="h-4 w-4 mr-2" />
              API
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your account profile information and email address.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm">
                      Change Avatar
                    </Button>
                    <Button variant="outline" size="sm">
                      Remove Avatar
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="John" defaultValue="Alex" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Doe" defaultValue="Chen" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="john.doe@example.com" defaultValue="alex.chen@defex.ai" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="job-title">Job Title</Label>
                    <Input id="job-title" placeholder="Senior Engineer" defaultValue="Quality Assurance Manager" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select defaultValue="quality">
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="quality">Quality Assurance</SelectItem>
                        <SelectItem value="operations">Operations</SelectItem>
                        <SelectItem value="management">Management</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Profile
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Configure how you receive notifications from the Defex system.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Alert Notifications</h3>
                  <Separator />

                  <div className="flex items-center justify-between space-y-0">
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="critical-alerts">Critical Defect Alerts</Label>
                      <span className="text-sm text-muted-foreground">
                        Receive immediate notifications for critical defects
                      </span>
                    </div>
                    <Switch id="critical-alerts" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between space-y-0">
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="medium-alerts">Medium Severity Alerts</Label>
                      <span className="text-sm text-muted-foreground">
                        Receive notifications for medium severity defects
                      </span>
                    </div>
                    <Switch id="medium-alerts" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between space-y-0">
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="low-alerts">Low Severity Alerts</Label>
                      <span className="text-sm text-muted-foreground">
                        Receive notifications for low severity defects
                      </span>
                    </div>
                    <Switch id="low-alerts" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">System Notifications</h3>
                  <Separator />

                  <div className="flex items-center justify-between space-y-0">
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="maintenance-alerts">Maintenance Alerts</Label>
                      <span className="text-sm text-muted-foreground">
                        Receive notifications about scheduled maintenance
                      </span>
                    </div>
                    <Switch id="maintenance-alerts" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between space-y-0">
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="ai-training">AI Training Notifications</Label>
                      <span className="text-sm text-muted-foreground">
                        Receive notifications about AI training jobs
                      </span>
                    </div>
                    <Switch id="ai-training" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between space-y-0">
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="system-updates">System Updates</Label>
                      <span className="text-sm text-muted-foreground">Receive notifications about system updates</span>
                    </div>
                    <Switch id="system-updates" defaultChecked />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notification Channels</h3>
                  <Separator />

                  <div className="flex items-center justify-between space-y-0">
                    <div className="flex flex-col space-y-1">
                      <Label className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        Email Notifications
                      </Label>
                      <span className="text-sm text-muted-foreground">Receive notifications via email</span>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between space-y-0">
                    <div className="flex flex-col space-y-1">
                      <Label className="flex items-center">
                        <Bell className="h-4 w-4 mr-2" />
                        In-App Notifications
                      </Label>
                      <span className="text-sm text-muted-foreground">
                        Receive notifications within the application
                      </span>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between space-y-0">
                    <div className="flex flex-col space-y-1">
                      <Label className="flex items-center">
                        <Globe className="h-4 w-4 mr-2" />
                        Browser Notifications
                      </Label>
                      <span className="text-sm text-muted-foreground">Receive browser push notifications</span>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Notification Settings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Appearance Settings */}
          <TabsContent value="appearance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>Customize the appearance of the Defex dashboard.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Theme</h3>
                  <Separator />

                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="border rounded-md p-2 cursor-pointer bg-background hover:bg-accent">
                        <Sun className="h-8 w-8 text-amber-500" />
                      </div>
                      <span className="text-sm">Light</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="border rounded-md p-2 cursor-pointer bg-background hover:bg-accent">
                        <Moon className="h-8 w-8 text-blue-500" />
                      </div>
                      <span className="text-sm">Dark</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="border rounded-md p-2 cursor-pointer bg-background hover:bg-accent">
                        <div className="h-8 w-8 bg-gradient-to-r from-amber-500 to-blue-500 rounded-full" />
                      </div>
                      <span className="text-sm">System</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Dashboard Layout</h3>
                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="sidebar-position">Sidebar Position</Label>
                    <Select defaultValue="left">
                      <SelectTrigger id="sidebar-position">
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="left">Left</SelectItem>
                        <SelectItem value="right">Right</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="density">Display Density</Label>
                    <Select defaultValue="comfortable">
                      <SelectTrigger id="density">
                        <SelectValue placeholder="Select density" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="compact">Compact</SelectItem>
                        <SelectItem value="comfortable">Comfortable</SelectItem>
                        <SelectItem value="spacious">Spacious</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between space-y-0">
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="animations">Interface Animations</Label>
                      <span className="text-sm text-muted-foreground">Enable animations in the user interface</span>
                    </div>
                    <Switch id="animations" defaultChecked />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Data Visualization</h3>
                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="chart-theme">Chart Theme</Label>
                    <Select defaultValue="default">
                      <SelectTrigger id="chart-theme">
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="monochrome">Monochrome</SelectItem>
                        <SelectItem value="vibrant">Vibrant</SelectItem>
                        <SelectItem value="pastel">Pastel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between space-y-0">
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="real-time-updates">Real-time Chart Updates</Label>
                      <span className="text-sm text-muted-foreground">
                        Enable real-time updates for charts and graphs
                      </span>
                    </div>
                    <Switch id="real-time-updates" defaultChecked />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Appearance Settings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* System Settings */}
          <TabsContent value="system" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>System Configuration</CardTitle>
                <CardDescription>Configure system-wide settings for the Defex platform.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Data Management</h3>
                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="data-retention">Data Retention Period</Label>
                    <Select defaultValue="365">
                      <SelectTrigger id="data-retention">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="180">180 days</SelectItem>
                        <SelectItem value="365">1 year</SelectItem>
                        <SelectItem value="730">2 years</SelectItem>
                        <SelectItem value="1825">5 years</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      Define how long defect data is retained in the system
                    </p>
                  </div>

                  <div className="flex items-center justify-between space-y-0">
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="auto-backup">Automatic Backups</Label>
                      <span className="text-sm text-muted-foreground">
                        Enable automatic daily backups of system data
                      </span>
                    </div>
                    <Switch id="auto-backup" defaultChecked />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">AI Configuration</h3>
                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="defect-threshold">Defect Detection Threshold</Label>
                    <div className="flex items-center space-x-2">
                      <Input id="defect-threshold" type="number" defaultValue="85" min="0" max="100" className="w-20" />
                      <span className="text-sm">%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Minimum confidence threshold for defect detection (0-100%)
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="auto-training">Automatic Model Training</Label>
                    <Select defaultValue="weekly">
                      <SelectTrigger id="auto-training">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="disabled">Disabled</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">Schedule automatic AI model training</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Blockchain Configuration</h3>
                  <Separator />

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="blockchain-status">Blockchain Ledger Status</Label>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                        Active
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Current status of the blockchain ledger</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="record-types">Record Types to Store</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="defects" className="rounded" defaultChecked />
                        <Label htmlFor="defects" className="text-sm">
                          Defects
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="inspections" className="rounded" defaultChecked />
                        <Label htmlFor="inspections" className="text-sm">
                          Inspections
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="certificates" className="rounded" defaultChecked />
                        <Label htmlFor="certificates" className="text-sm">
                          Certificates
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="ai-updates" className="rounded" defaultChecked />
                        <Label htmlFor="ai-updates" className="text-sm">
                          AI Updates
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save System Settings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage security settings and access controls.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Password</h3>
                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>

                  <Button className="mt-2">
                    <Lock className="mr-2 h-4 w-4" />
                    Update Password
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                  <Separator />

                  <div className="flex items-center justify-between space-y-0">
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="2fa">Enable Two-Factor Authentication</Label>
                      <span className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </span>
                    </div>
                    <Switch id="2fa" />
                  </div>

                  <Button variant="outline" disabled>
                    <Key className="mr-2 h-4 w-4" />
                    Set Up Two-Factor Authentication
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Session Management</h3>
                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="session-timeout">Session Timeout</Label>
                    <Select defaultValue="30">
                      <SelectTrigger id="session-timeout">
                        <SelectValue placeholder="Select timeout" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                        <SelectItem value="240">4 hours</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">Automatically log out after period of inactivity</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Active Sessions</Label>
                      <Badge>1 Active</Badge>
                    </div>
                    <Card className="p-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">Current Session</p>
                          <p className="text-xs text-muted-foreground">Started: May 22, 2025 14:32:45</p>
                          <p className="text-xs text-muted-foreground">IP: 192.168.1.1</p>
                        </div>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                          <Check className="h-3 w-3 mr-1" />
                          Current
                        </Badge>
                      </div>
                    </Card>
                  </div>

                  <Button variant="outline" className="text-red-500">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log Out All Other Sessions
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Security Settings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* API Settings */}
          <TabsContent value="api" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>API Configuration</CardTitle>
                <CardDescription>Manage API keys and integration settings.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">API Keys</h3>
                  <Separator />

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>API Access</Label>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                        Enabled
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Current status of API access for your account</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="api-key">API Key</Label>
                    <div className="flex space-x-2">
                      <Input id="api-key" value="••••••••••••••••••••••••••••••" readOnly className="font-mono" />
                      <Button variant="outline">Show</Button>
                      <Button variant="outline">Copy</Button>
                    </div>
                    <p className="text-sm text-muted-foreground">Last generated: May 15, 2025</p>
                  </div>

                  <Button>
                    <Key className="mr-2 h-4 w-4" />
                    Generate New API Key
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Webhook Configuration</h3>
                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="webhook-url">Webhook URL</Label>
                    <Input
                      id="webhook-url"
                      placeholder="https://your-server.com/webhook"
                      defaultValue="https://example.com/defex-webhook"
                    />
                    <p className="text-sm text-muted-foreground">URL to receive webhook notifications</p>
                  </div>

                  <div className="space-y-2">
                    <Label>Webhook Events</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="defect-detected" className="rounded" defaultChecked />
                        <Label htmlFor="defect-detected" className="text-sm">
                          Defect Detected
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="inspection-completed" className="rounded" defaultChecked />
                        <Label htmlFor="inspection-completed" className="text-sm">
                          Inspection Completed
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="ai-trained" className="rounded" defaultChecked />
                        <Label htmlFor="ai-trained" className="text-sm">
                          AI Model Trained
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="system-alert" className="rounded" defaultChecked />
                        <Label htmlFor="system-alert" className="text-sm">
                          System Alert
                        </Label>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline">
                    <Webhook className="mr-2 h-4 w-4" />
                    Test Webhook
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">External Integrations</h3>
                  <Separator />

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Cloud className="h-5 w-5 text-blue-500" />
                        <Label>Cloud Storage Integration</Label>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <p className="text-sm text-muted-foreground">Connect to external cloud storage for data backup</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="storage-url">Storage URL</Label>
                    <Input
                      id="storage-url"
                      placeholder="https://storage.example.com"
                      defaultValue="https://storage.defex.ai"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="storage-key">API Key</Label>
                      <Input id="storage-key" type="password" value="••••••••••••••••" readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="storage-secret">API Secret</Label>
                      <Input id="storage-secret" type="password" value="••••••••••••••••" readOnly />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save API Settings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
