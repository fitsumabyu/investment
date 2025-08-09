import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  BarChart3,
  PieChart,
  LineChart,
  Calendar,
  Download,
  Filter
} from "lucide-react"

function FinancialsSkeleton() {
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

async function FinancialsContent() {
  return (
    <div className="container-mobile">
      {/* Header */}
      <div className="section-spacing">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-hero">Financials</h1>
            <p className="text-subtitle">Comprehensive financial overview and analysis</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="btn-secondary">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="btn-secondary">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Key Financial Metrics */}
      <div className="section-spacing">
        <div className="grid-stats">
          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <DollarSign className="h-4 w-4 mr-2" />
                Total Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2,847,392</div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+12.5%</span>
                <span className="text-sm text-muted-foreground ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <BarChart3 className="h-4 w-4 mr-2" />
                Net Profit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$847,392</div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+8.2%</span>
                <span className="text-sm text-muted-foreground ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <PieChart className="h-4 w-4 mr-2" />
                Profit Margin
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">29.8%</div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+2.1%</span>
                <span className="text-sm text-muted-foreground ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <LineChart className="h-4 w-4 mr-2" />
                Cash Flow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,234,567</div>
              <div className="flex items-center mt-2">
                <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                <span className="text-sm text-red-600 font-medium">-3.2%</span>
                <span className="text-sm text-muted-foreground ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Financial Charts */}
      <div className="section-spacing">
        <div className="grid-cards">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-title">Revenue Trends</CardTitle>
              <CardDescription>
                Monthly revenue performance over the last 12 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <p className="text-muted-foreground">Revenue chart will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-title">Profit Analysis</CardTitle>
              <CardDescription>
                Breakdown of profit sources and cost structure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <p className="text-muted-foreground">Profit analysis chart will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Financial Summary Table */}
      <div className="section-spacing">
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-title">Financial Summary</CardTitle>
            <CardDescription>
              Detailed breakdown of financial performance by category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div className="font-medium">Category</div>
                <div className="font-medium text-right">Revenue</div>
                <div className="font-medium text-right">Expenses</div>
                <div className="font-medium text-right">Profit</div>
              </div>
              
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-3 border-b border-border/50">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span>Property Management</span>
                  </div>
                  <div className="text-right">$1,234,567</div>
                  <div className="text-right">$456,789</div>
                  <div className="text-right font-medium text-green-600">$777,778</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-3 border-b border-border/50">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>Investment Returns</span>
                  </div>
                  <div className="text-right">$987,654</div>
                  <div className="text-right">$123,456</div>
                  <div className="text-right font-medium text-green-600">$864,198</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-3 border-b border-border/50">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span>Consulting Services</span>
                  </div>
                  <div className="text-right">$625,171</div>
                  <div className="text-right">$234,567</div>
                  <div className="text-right font-medium text-green-600">$390,604</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-3 border-t-2 border-border font-medium">
                <div>Total</div>
                <div className="text-right">$2,847,392</div>
                <div className="text-right">$814,812</div>
                <div className="text-right text-green-600">$2,032,580</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function FinancialsPage() {
  return (
    <Suspense fallback={<FinancialsSkeleton />}>
      <FinancialsContent />
    </Suspense>
  )
} 