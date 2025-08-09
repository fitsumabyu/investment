import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  BarChart, 
  TrendingUp, 
  TrendingDown,
  Download,
  Filter,
  Calendar,
  FileText,
  PieChart,
  Search
} from "lucide-react"

function ReportsSkeleton() {
  return (
    <div className="mobile-section">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-muted rounded-lg w-1/3"></div>
        <div className="mobile-grid-stats">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="mobile-card p-4 md:p-6">
              <div className="h-4 bg-muted rounded w-1/2 mb-2"></div>
              <div className="h-8 bg-muted rounded w-3/4"></div>
            </div>
          ))}
        </div>
        <div className="mobile-grid md:grid-cards">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="mobile-card p-4 md:p-6">
              <div className="h-6 bg-muted rounded w-1/4 mb-4"></div>
              <div className="h-32 bg-muted rounded-xl md:rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

async function ReportsContent() {
  return (
    <div className="mobile-content">
      {/* Header */}
      <div className="mobile-section">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mobile-text-hero">Reports</h1>
            <p className="mobile-text-subtitle">Analytics and comprehensive reporting</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="mobile-input pl-8 w-48 md:w-64"
              />
            </div>
            <Button variant="outline" size="sm" className="mobile-btn-secondary md:btn-secondary">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="mobile-btn-secondary md:btn-secondary">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Report Metrics */}
      <div className="mobile-section">
        <div className="mobile-grid-stats">
          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Total Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+3</span>
                <span className="text-sm text-muted-foreground ml-1">this month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <BarChart className="h-4 w-4 mr-2" />
                Performance Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+5%</span>
                <span className="text-sm text-muted-foreground ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <PieChart className="h-4 w-4 mr-2" />
                Data Accuracy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94%</div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+2%</span>
                <span className="text-sm text-muted-foreground ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Last Updated
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2h ago</div>
              <div className="flex items-center mt-2">
                <span className="text-sm text-green-600 font-medium">Live</span>
                <span className="text-sm text-muted-foreground ml-1">data feed</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Report Categories */}
      <div className="section-spacing">
        <div className="grid-cards">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-title">Portfolio Performance</CardTitle>
              <CardDescription>
                Comprehensive analysis of your investment portfolio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <p className="text-muted-foreground">Portfolio performance chart will be displayed here</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Button variant="outline" size="sm" className="btn-secondary">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button size="sm" className="btn-modern">
                  View Full Report
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-title">Market Analysis</CardTitle>
              <CardDescription>
                Detailed market trends and analysis reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <p className="text-muted-foreground">Market analysis chart will be displayed here</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Button variant="outline" size="sm" className="btn-secondary">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button size="sm" className="btn-modern">
                  View Full Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Report List */}
      <div className="section-spacing">
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-title">Available Reports</CardTitle>
            <CardDescription>
              Browse and generate comprehensive reports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-border/50 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Monthly Performance</h3>
                    <Badge className="bg-green-100 text-green-800">New</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Comprehensive monthly performance analysis with key metrics and insights.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Last updated: 2 hours ago</span>
                    <Button size="sm" variant="outline">Generate</Button>
                  </div>
                </div>

                <div className="p-4 border border-border/50 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Risk Assessment</h3>
                    <Badge className="bg-blue-100 text-blue-800">Updated</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Detailed risk analysis and portfolio stress testing results.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Last updated: 1 day ago</span>
                    <Button size="sm" variant="outline">Generate</Button>
                  </div>
                </div>

                <div className="p-4 border border-border/50 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Cash Flow Analysis</h3>
                    <Badge className="bg-purple-100 text-purple-800">Premium</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Detailed cash flow projections and liquidity analysis.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Last updated: 3 days ago</span>
                    <Button size="sm" variant="outline">Generate</Button>
                  </div>
                </div>

                <div className="p-4 border border-border/50 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Tax Summary</h3>
                    <Badge className="bg-orange-100 text-orange-800">Quarterly</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Tax implications and optimization strategies for your investments.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Last updated: 1 week ago</span>
                    <Button size="sm" variant="outline">Generate</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function ReportsPage() {
  return (
    <Suspense fallback={<ReportsSkeleton />}>
      <ReportsContent />
    </Suspense>
  )
}
