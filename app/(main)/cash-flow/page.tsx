import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Wallet, 
  TrendingUp, 
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Calendar,
  AlertCircle
} from "lucide-react"

function CashFlowSkeleton() {
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

async function CashFlowContent() {
  return (
    <div className="container-mobile">
      {/* Header */}
      <div className="section-spacing">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-hero">Cash Flow</h1>
            <p className="text-subtitle">Monitor and manage your cash flow effectively</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="btn-secondary">
              <Calendar className="h-4 w-4 mr-2" />
              Forecast
            </Button>
            <Button variant="outline" size="sm" className="btn-secondary">
              <AlertCircle className="h-4 w-4 mr-2" />
              Alerts
            </Button>
          </div>
        </div>
      </div>

      {/* Key Cash Flow Metrics */}
      <div className="section-spacing">
        <div className="grid-stats">
          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Wallet className="h-4 w-4 mr-2" />
                Operating Cash Flow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,234,567</div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+15.3%</span>
                <span className="text-sm text-muted-foreground ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-2" />
                Cash Inflow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2,847,392</div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+8.7%</span>
                <span className="text-sm text-muted-foreground ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <ArrowDownRight className="h-4 w-4 mr-2" />
                Cash Outflow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,612,825</div>
              <div className="flex items-center mt-2">
                <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                <span className="text-sm text-red-600 font-medium">+3.2%</span>
                <span className="text-sm text-muted-foreground ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <DollarSign className="h-4 w-4 mr-2" />
                Net Cash Flow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,234,567</div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+12.5%</span>
                <span className="text-sm text-muted-foreground ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Cash Flow Analysis */}
      <div className="section-spacing">
        <div className="grid-cards">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-title">Cash Flow Trends</CardTitle>
              <CardDescription>
                Monthly cash flow performance over the last 12 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Wallet className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <p className="text-muted-foreground">Cash flow trends chart will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-title">Cash Flow Forecast</CardTitle>
              <CardDescription>
                Projected cash flow for the next 6 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <p className="text-muted-foreground">Cash flow forecast chart will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Cash Flow Details */}
      <div className="section-spacing">
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-title">Cash Flow Breakdown</CardTitle>
            <CardDescription>
              Detailed breakdown of cash inflows and outflows
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Cash Inflows */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-green-700 flex items-center">
                  <ArrowUpRight className="h-5 w-5 mr-2" />
                  Cash Inflows
                </h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 bg-green-50 rounded-lg">
                    <div className="font-medium">Rental Income</div>
                    <div className="text-right font-medium">$1,234,567</div>
                    <div className="text-right text-green-600">+12.5%</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3">
                    <div className="font-medium">Investment Returns</div>
                    <div className="text-right font-medium">$987,654</div>
                    <div className="text-right text-green-600">+8.2%</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 bg-green-50 rounded-lg">
                    <div className="font-medium">Consulting Fees</div>
                    <div className="text-right font-medium">$625,171</div>
                    <div className="text-right text-green-600">+15.3%</div>
                  </div>
                </div>
              </div>

              {/* Cash Outflows */}
              <div className="space-y-3 pt-6 border-t border-border/50">
                <h3 className="text-lg font-semibold text-red-700 flex items-center">
                  <ArrowDownRight className="h-5 w-5 mr-2" />
                  Cash Outflows
                </h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 bg-red-50 rounded-lg">
                    <div className="font-medium">Operating Expenses</div>
                    <div className="text-right font-medium">$789,123</div>
                    <div className="text-right text-red-600">+5.2%</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3">
                    <div className="font-medium">Property Maintenance</div>
                    <div className="text-right font-medium">$456,789</div>
                    <div className="text-right text-red-600">+2.8%</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 bg-red-50 rounded-lg">
                    <div className="font-medium">Tax Payments</div>
                    <div className="text-right font-medium">$366,913</div>
                    <div className="text-right text-red-600">+1.5%</div>
                  </div>
                </div>
              </div>

              {/* Net Cash Flow */}
              <div className="pt-6 border-t border-border/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 bg-blue-50 rounded-lg">
                  <div className="font-semibold text-lg">Net Cash Flow</div>
                  <div className="text-right font-bold text-lg">$1,234,567</div>
                  <div className="text-right text-green-600 font-medium">+12.5%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function CashFlowPage() {
  return (
    <Suspense fallback={<CashFlowSkeleton />}>
      <CashFlowContent />
    </Suspense>
  )
} 