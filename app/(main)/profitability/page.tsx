import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  TrendingDown,
  BarChart3,
  PieChart,
  Target,
  DollarSign,
  Percent,
  ArrowUpRight,
  ArrowDownRight,
  Activity
} from "lucide-react"

function ProfitabilitySkeleton() {
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

async function ProfitabilityContent() {
  return (
    <div className="container-mobile">
      {/* Header */}
      <div className="section-spacing">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-hero">Profitability</h1>
            <p className="text-subtitle">Detailed profit analysis and performance metrics</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="btn-secondary">
              <Target className="h-4 w-4 mr-2" />
              Set Targets
            </Button>
            <Button variant="outline" size="sm" className="btn-secondary">
              <Activity className="h-4 w-4 mr-2" />
              Compare
            </Button>
          </div>
        </div>
      </div>

      {/* Key Profitability Metrics */}
      <div className="section-spacing">
        <div className="grid-stats">
          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Percent className="h-4 w-4 mr-2" />
                Gross Margin
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">34.2%</div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+2.8%</span>
                <span className="text-sm text-muted-foreground ml-1">vs target</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <DollarSign className="h-4 w-4 mr-2" />
                Net Profit Margin
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">29.8%</div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+1.5%</span>
                <span className="text-sm text-muted-foreground ml-1">vs target</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <BarChart3 className="h-4 w-4 mr-2" />
                ROI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18.4%</div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+3.2%</span>
                <span className="text-sm text-muted-foreground ml-1">vs target</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Target className="h-4 w-4 mr-2" />
                Target Achievement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">112%</div>
              <div className="flex items-center mt-2">
                <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+12%</span>
                <span className="text-sm text-muted-foreground ml-1">over target</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Profitability Charts */}
      <div className="section-spacing">
        <div className="grid-cards">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-title">Margin Trends</CardTitle>
              <CardDescription>
                Gross and net margin performance over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <p className="text-muted-foreground">Margin trends chart will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-title">Profit Breakdown</CardTitle>
              <CardDescription>
                Profit distribution by business segment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <p className="text-muted-foreground">Profit breakdown chart will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Profitability Analysis */}
      <div className="section-spacing">
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-title">Profitability Analysis</CardTitle>
            <CardDescription>
              Detailed breakdown of profitability by business unit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Property Management */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  Property Management
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div className="font-medium">Metric</div>
                  <div className="font-medium text-right">Current</div>
                  <div className="font-medium text-right">Target</div>
                  <div className="font-medium text-right">Status</div>
                </div>
                <div className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-2 bg-muted/30 rounded-lg">
                    <div>Gross Margin</div>
                    <div className="text-right font-medium">38.5%</div>
                    <div className="text-right text-muted-foreground">35.0%</div>
                    <div className="text-right">
                      <Badge className="bg-green-100 text-green-800">Exceeded</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-2">
                    <div>Net Margin</div>
                    <div className="text-right font-medium">32.1%</div>
                    <div className="text-right text-muted-foreground">30.0%</div>
                    <div className="text-right">
                      <Badge className="bg-green-100 text-green-800">Exceeded</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-2 bg-muted/30 rounded-lg">
                    <div>ROI</div>
                    <div className="text-right font-medium">22.3%</div>
                    <div className="text-right text-muted-foreground">20.0%</div>
                    <div className="text-right">
                      <Badge className="bg-green-100 text-green-800">Exceeded</Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investment Services */}
              <div className="space-y-3 pt-6 border-t border-border/50">
                <h3 className="text-lg font-semibold flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  Investment Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div className="font-medium">Metric</div>
                  <div className="font-medium text-right">Current</div>
                  <div className="font-medium text-right">Target</div>
                  <div className="font-medium text-right">Status</div>
                </div>
                <div className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-2 bg-muted/30 rounded-lg">
                    <div>Gross Margin</div>
                    <div className="text-right font-medium">42.8%</div>
                    <div className="text-right text-muted-foreground">40.0%</div>
                    <div className="text-right">
                      <Badge className="bg-green-100 text-green-800">Exceeded</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-2">
                    <div>Net Margin</div>
                    <div className="text-right font-medium">35.2%</div>
                    <div className="text-right text-muted-foreground">32.0%</div>
                    <div className="text-right">
                      <Badge className="bg-green-100 text-green-800">Exceeded</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-2 bg-muted/30 rounded-lg">
                    <div>ROI</div>
                    <div className="text-right font-medium">28.7%</div>
                    <div className="text-right text-muted-foreground">25.0%</div>
                    <div className="text-right">
                      <Badge className="bg-green-100 text-green-800">Exceeded</Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consulting */}
              <div className="space-y-3 pt-6 border-t border-border/50">
                <h3 className="text-lg font-semibold flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  Consulting Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div className="font-medium">Metric</div>
                  <div className="font-medium text-right">Current</div>
                  <div className="font-medium text-right">Target</div>
                  <div className="font-medium text-right">Status</div>
                </div>
                <div className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-2 bg-muted/30 rounded-lg">
                    <div>Gross Margin</div>
                    <div className="text-right font-medium">28.9%</div>
                    <div className="text-right text-muted-foreground">30.0%</div>
                    <div className="text-right">
                      <Badge className="bg-yellow-100 text-yellow-800">Below Target</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-2">
                    <div>Net Margin</div>
                    <div className="text-right font-medium">24.1%</div>
                    <div className="text-right text-muted-foreground">25.0%</div>
                    <div className="text-right">
                      <Badge className="bg-yellow-100 text-yellow-800">Below Target</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-2 bg-muted/30 rounded-lg">
                    <div>ROI</div>
                    <div className="text-right font-medium">16.8%</div>
                    <div className="text-right text-muted-foreground">18.0%</div>
                    <div className="text-right">
                      <Badge className="bg-yellow-100 text-yellow-800">Below Target</Badge>
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

export default function ProfitabilityPage() {
  return (
    <Suspense fallback={<ProfitabilitySkeleton />}>
      <ProfitabilityContent />
    </Suspense>
  )
} 