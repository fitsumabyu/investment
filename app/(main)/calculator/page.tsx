import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Calculator, 
  DollarSign,
  TrendingUp,
  Home,
  Building,
  Percent,
  Calendar,
  Target
} from "lucide-react"

function CalculatorSkeleton() {
  return (
    <div className="container-mobile">
      <div className="animate-pulse space-y-6">
        <div className="h-8 bg-muted rounded-lg w-1/3"></div>
        <div className="grid-cards">
          {[...Array(3)].map((_, i) => (
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

async function CalculatorContent() {
  return (
    <div className="container-mobile">
      {/* Header */}
      <div className="section-spacing">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-hero">Financial Calculator</h1>
            <p className="text-subtitle">Powerful tools for financial analysis and planning</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="btn-secondary">
              <Calculator className="h-4 w-4 mr-2" />
              History
            </Button>
          </div>
        </div>
      </div>

      {/* Calculator Tools */}
      <div className="section-spacing">
        <div className="grid-cards">
          {/* ROI Calculator */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-title flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                ROI Calculator
              </CardTitle>
              <CardDescription>
                Calculate return on investment for your properties
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="purchase-price">Purchase Price</Label>
                  <Input id="purchase-price" type="number" placeholder="500,000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="annual-rent">Annual Rent</Label>
                  <Input id="annual-rent" type="number" placeholder="30,000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="annual-expenses">Annual Expenses</Label>
                  <Input id="annual-expenses" type="number" placeholder="8,000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="appreciation">Annual Appreciation (%)</Label>
                  <Input id="appreciation" type="number" placeholder="3.5" />
                </div>
              </div>
              <Button className="w-full btn-modern">
                Calculate ROI
              </Button>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">8.4%</div>
                  <div className="text-sm text-green-600">Annual ROI</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mortgage Calculator */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-title flex items-center">
                <Home className="h-5 w-5 mr-2" />
                Mortgage Calculator
              </CardTitle>
              <CardDescription>
                Calculate monthly mortgage payments and loan details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="loan-amount">Loan Amount</Label>
                  <Input id="loan-amount" type="number" placeholder="400,000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest-rate">Interest Rate (%)</Label>
                  <Input id="interest-rate" type="number" placeholder="4.5" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loan-term">Loan Term (Years)</Label>
                  <Select defaultValue="30">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 Years</SelectItem>
                      <SelectItem value="20">20 Years</SelectItem>
                      <SelectItem value="25">25 Years</SelectItem>
                      <SelectItem value="30">30 Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loan-type">Loan Type</Label>
                  <Select defaultValue="principal-interest">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="principal-interest">Principal & Interest</SelectItem>
                      <SelectItem value="interest-only">Interest Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full btn-modern">
                Calculate Payment
              </Button>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">$2,027</div>
                  <div className="text-sm text-blue-600">Monthly Payment</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cash Flow Calculator */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-title flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Cash Flow Calculator
              </CardTitle>
              <CardDescription>
                Analyze monthly and annual cash flow projections
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="monthly-rent">Monthly Rent</Label>
                    <Input id="monthly-rent" type="number" placeholder="2,500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vacancy-rate">Vacancy Rate (%)</Label>
                    <Input id="vacancy-rate" type="number" placeholder="5" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Monthly Expenses</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="Mortgage" type="number" />
                    <Input placeholder="Property Tax" type="number" />
                    <Input placeholder="Insurance" type="number" />
                    <Input placeholder="Maintenance" type="number" />
                    <Input placeholder="Property Management" type="number" />
                    <Input placeholder="Other" type="number" />
                  </div>
                </div>
              </div>
              <Button className="w-full btn-modern">
                Calculate Cash Flow
              </Button>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">$847</div>
                  <div className="text-sm text-green-600">Monthly Cash Flow</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Calculators */}
      <div className="section-spacing">
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-title">Advanced Calculators</CardTitle>
            <CardDescription>
              Specialized tools for complex financial analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <Percent className="h-6 w-6" />
                <span className="text-sm">Cap Rate</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <Target className="h-6 w-6" />
                <span className="text-sm">IRR Calculator</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <Calendar className="h-6 w-6" />
                <span className="text-sm">Amortization</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <Building className="h-6 w-6" />
                <span className="text-sm">Property Tax</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <TrendingUp className="h-6 w-6" />
                <span className="text-sm">Appreciation</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <Calculator className="h-6 w-6" />
                <span className="text-sm">Depreciation</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Calculations */}
      <div className="section-spacing">
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-title">Recent Calculations</CardTitle>
            <CardDescription>
              Your recently performed calculations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">ROI Calculation</div>
                    <div className="text-sm text-muted-foreground">Property: Sunset Apartments</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-green-600">8.4%</div>
                  <div className="text-sm text-muted-foreground">2 hours ago</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Home className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-medium">Mortgage Payment</div>
                    <div className="text-sm text-muted-foreground">Loan: $400,000 @ 4.5%</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-green-600">$2,027</div>
                  <div className="text-sm text-muted-foreground">1 day ago</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-5 w-5 text-purple-600" />
                  <div>
                    <div className="font-medium">Cash Flow Analysis</div>
                    <div className="text-sm text-muted-foreground">Property: Downtown Office</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-green-600">$1,234</div>
                  <div className="text-sm text-muted-foreground">3 days ago</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function CalculatorPage() {
  return (
    <Suspense fallback={<CalculatorSkeleton />}>
      <CalculatorContent />
    </Suspense>
  )
}
