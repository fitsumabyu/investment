import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  TrendingDown,
  BarChart3,
  LineChart,
  Target,
  Calendar,
  Filter
} from "lucide-react"

function TrendsSkeleton() {
  return (
    <div className="container-mobile">
      <div className="animate-pulse space-y-6">
        <div className="h-8 bg-muted rounded-lg w-1/3"></div>
        <div className="grid-stats">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="card-modern p-6">
              <div className="h-4 bg-muted rounded w-1/2 mb-2"></div>
              <div className="h-8 bg-muted rounded w-3/4"></div>
            </div>
          ))}
        </div>
        <div className="grid-cards">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="card-modern p-6">
              <div className="h-6 bg-muted rounded w-1/4 mb-4"></div>
              <div className="h-32 bg-muted rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

async function TrendsContent() {
  return (
    <div className="container-mobile">
      {/* Header */}
      <div className="section-spacing">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-hero">Market Trends</h1>
            <p className="text-subtitle">Analyze market trends and performance indicators</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="btn-secondary">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="btn-secondary">
              <Calendar className="h-4 w-4 mr-2" />
              Time Range
            </Button>
          </div>
        </div>
      </div>

      {/* Key Trend Metrics */}
      <div className="section-spacing">
        <div className="grid-stats">
          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Market Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+8.4%</div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+2.1%</span>
                <span className="text-sm text-muted-foreground ml-1">vs last quarter</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <BarChart3 className="h-4 w-4 mr-2" />
                Property Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12.7%</div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+3.2%</span>
                <span className="text-sm text-muted-foreground ml-1">vs last quarter</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <LineChart className="h-4 w-4 mr-2" />
                Rental Yields
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5.8%</div>
              <div className="flex items-center mt-2">
                <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                <span className="text-sm text-red-600 font-medium">-0.3%</span>
                <span className="text-sm text-muted-foreground ml-1">vs last quarter</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Target className="h-4 w-4 mr-2" />
                Market Sentiment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Positive</div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+15%</span>
                <span className="text-sm text-muted-foreground ml-1">confidence</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Trend Charts */}
      <div className="section-spacing">
        <div className="grid-cards">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-title">Market Performance</CardTitle>
              <CardDescription>
                Property market performance over the last 24 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <LineChart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <p className="text-muted-foreground">Market performance chart will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-title">Regional Trends</CardTitle>
              <CardDescription>
                Performance comparison across different regions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <p className="text-muted-foreground">Regional trends chart will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Trend Analysis */}
      <div className="section-spacing">
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-title">Trend Analysis</CardTitle>
            <CardDescription>
              Detailed analysis of market trends and predictions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-700">Positive Trends</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Property Values</span>
                      <Badge className="bg-green-100 text-green-800">+12.7%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Market Growth</span>
                      <Badge className="bg-green-100 text-green-800">+8.4%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Investor Confidence</span>
                      <Badge className="bg-green-100 text-green-800">High</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-700">Areas of Concern</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <span className="font-medium">Rental Yields</span>
                      <Badge className="bg-red-100 text-red-800">-0.3%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <span className="font-medium">Interest Rates</span>
                      <Badge className="bg-red-100 text-red-800">Rising</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <span className="font-medium">Supply Constraints</span>
                      <Badge className="bg-red-100 text-red-800">Limited</Badge>
                    </div>
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

export default function TrendsPage() {
  return (
    <Suspense fallback={<TrendsSkeleton />}>
      <TrendsContent />
    </Suspense>
  )
} 