import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Settings, Database, Shield, Globe, Bell, FileText, Users, Activity } from "lucide-react"

export default function GlobalConfigPage() {
  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Global Configuration</h1>
          <p className="text-muted-foreground">System-wide settings and configuration options</p>
        </div>
        <Button>
          <Settings className="mr-2 h-4 w-4" />
          Save All Changes
        </Button>
      </div>

      <Tabs defaultValue="system" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="system">System</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="system" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-5 w-5" />
                  <span>System Settings</span>
                </CardTitle>
                <CardDescription>Core system configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="appName">Application Name</Label>
                  <Input id="appName" defaultValue="Investment Dashboard" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="appVersion">Application Version</Label>
                  <Input id="appVersion" defaultValue="1.0.0" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="timezone">Default Timezone</Label>
                  <Select defaultValue="UTC">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UTC">UTC</SelectItem>
                      <SelectItem value="EST">Eastern Time</SelectItem>
                      <SelectItem value="PST">Pacific Time</SelectItem>
                      <SelectItem value="GMT">GMT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="maintenanceMode" />
                  <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="debugMode" />
                  <Label htmlFor="debugMode">Debug Mode</Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5" />
                  <span>Database Settings</span>
                </CardTitle>
                <CardDescription>Database configuration and maintenance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="dbHost">Database Host</Label>
                  <Input id="dbHost" defaultValue="localhost" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dbPort">Database Port</Label>
                  <Input id="dbPort" defaultValue="5432" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dbName">Database Name</Label>
                  <Input id="dbName" defaultValue="investment_app" />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="autoBackup" defaultChecked />
                  <Label htmlFor="autoBackup">Automatic Backups</Label>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="backupFrequency">Backup Frequency</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Security Settings</span>
                </CardTitle>
                <CardDescription>Security and authentication configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                  <Input id="sessionTimeout" type="number" defaultValue={30} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="maxLoginAttempts">Max Login Attempts</Label>
                  <Input id="maxLoginAttempts" type="number" defaultValue={5} />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="twoFactorAuth" defaultChecked />
                  <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="passwordPolicy" defaultChecked />
                  <Label htmlFor="passwordPolicy">Strong Password Policy</Label>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="allowedDomains">Allowed Email Domains</Label>
                  <Textarea id="allowedDomains" placeholder="example.com, company.com" />
                </div>
              </CardContent>
            </Card>

            <Card>
        <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>API Settings</span>
                </CardTitle>
                <CardDescription>API configuration and rate limiting</CardDescription>
        </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="apiRateLimit">API Rate Limit (requests/min)</Label>
                  <Input id="apiRateLimit" type="number" defaultValue={100} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="apiKeyExpiry">API Key Expiry (days)</Label>
                  <Input id="apiKeyExpiry" type="number" defaultValue={90} />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="apiLogging" defaultChecked />
                  <Label htmlFor="apiLogging">API Request Logging</Label>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="corsOrigins">CORS Origins</Label>
                  <Textarea id="corsOrigins" placeholder="https://app.example.com, https://admin.example.com" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Email Notifications</span>
                </CardTitle>
                <CardDescription>Email notification settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
            <div className="grid gap-2">
                  <Label htmlFor="smtpHost">SMTP Host</Label>
                  <Input id="smtpHost" defaultValue="smtp.example.com" />
            </div>
            <div className="grid gap-2">
                  <Label htmlFor="smtpPort">SMTP Port</Label>
                  <Input id="smtpPort" defaultValue="587" />
            </div>
            <div className="grid gap-2">
                  <Label htmlFor="fromEmail">From Email</Label>
                  <Input id="fromEmail" defaultValue="noreply@example.com" />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="emailNotifications" defaultChecked />
                  <Label htmlFor="emailNotifications">Enable Email Notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="emailDigest" />
                  <Label htmlFor="emailDigest">Daily Email Digest</Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5" />
                  <span>System Alerts</span>
                </CardTitle>
                <CardDescription>System monitoring and alerts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="systemAlerts" defaultChecked />
                  <Label htmlFor="systemAlerts">System Alerts</Label>
            </div>
            <div className="flex items-center space-x-2">
                  <Switch id="errorNotifications" defaultChecked />
                  <Label htmlFor="errorNotifications">Error Notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
                  <Switch id="performanceAlerts" />
                  <Label htmlFor="performanceAlerts">Performance Alerts</Label>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="alertEmail">Alert Email</Label>
                  <Input id="alertEmail" defaultValue="admin@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="alertThreshold">Alert Threshold (%)</Label>
                  <Input id="alertThreshold" type="number" defaultValue={80} />
                </div>
              </CardContent>
            </Card>
            </div>
        </TabsContent>

        <TabsContent value="integrations" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Document Storage</span>
                </CardTitle>
                <CardDescription>File storage and document management</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="storageProvider">Storage Provider</Label>
                  <Select defaultValue="local">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="local">Local Storage</SelectItem>
                      <SelectItem value="s3">Amazon S3</SelectItem>
                      <SelectItem value="gcs">Google Cloud Storage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="maxFileSize">Max File Size (MB)</Label>
                  <Input id="maxFileSize" type="number" defaultValue={10} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="allowedFileTypes">Allowed File Types</Label>
                  <Input id="allowedFileTypes" defaultValue="pdf,doc,docx,xls,xlsx" />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="fileEncryption" defaultChecked />
                  <Label htmlFor="fileEncryption">File Encryption</Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Third-Party Integrations</span>
                </CardTitle>
                <CardDescription>External service integrations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="googleAuth" />
                  <Label htmlFor="googleAuth">Google Authentication</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="stripePayment" />
                  <Label htmlFor="stripePayment">Stripe Payments</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="slackNotifications" />
                  <Label htmlFor="slackNotifications">Slack Notifications</Label>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="webhookUrl">Webhook URL</Label>
                  <Input id="webhookUrl" placeholder="https://api.example.com/webhook" />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="webhookEnabled" />
                  <Label htmlFor="webhookEnabled">Enable Webhooks</Label>
            </div>
        </CardContent>
      </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
