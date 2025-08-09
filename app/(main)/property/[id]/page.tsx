import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getPropertyById } from "@/lib/data"
import { Edit, Trash2, Download, ArrowLeft, BarChart3, DollarSign, TrendingUp, Calendar } from "lucide-react"
import { deletePropertyAction } from "@/lib/actions"
import { PropertyChart } from "@/components/property-chart"

interface PropertyDetailPageProps {
  params: {
    id: string
  }
}

export default function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const property = getPropertyById(params.id)

  if (!property) {
    notFound()
  }

  // Calculate financial metrics
  const loanAmount = property.purchasePrice - property.deposit
  const monthlyPayment = calculateMonthlyPayment(loanAmount, property.interestRate, property.loanTerm)
  const annualExpenses = property.expenses.rates + property.expenses.insurance + property.expenses.maintenance + property.expenses.fees
  const monthlyExpenses = annualExpenses / 12
  const monthlyCashFlow = property.rent - monthlyPayment - monthlyExpenses
  const annualCashFlow = monthlyCashFlow * 12
  const roi = (annualCashFlow / property.purchasePrice) * 100
  const yieldRate = (property.rent * 12 / property.purchasePrice) * 100

  // Generate 10-year projections
  const projections = generateProjections(property)

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{property.name}</h1>
            <p className="text-muted-foreground">{property.address}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/property/${property.id}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Link>
          </Button>
          <form action={deletePropertyAction.bind(null, property.id)}>
            <Button variant="destructive" size="sm" type="submit">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </form>
        </div>
      </div>

      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="projections">10-Year Projections</TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Property Details */}
            <Card>
              <CardHeader>
                <CardTitle>Property Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Type</p>
                    <p className="font-medium">{property.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Year Built</p>
                    <p className="font-medium">{property.yearBuilt}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <Badge variant={property.status === "Active" ? "default" : "secondary"}>
                      {property.status}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Loan Type</p>
                    <p className="font-medium">{property.loanType}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Financial Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Purchase Price</p>
                    <p className="font-medium">${property.purchasePrice.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Deposit</p>
                    <p className="font-medium">${property.deposit.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Monthly Rent</p>
                    <p className="font-medium">${property.rent.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Interest Rate</p>
                    <p className="font-medium">{property.interestRate}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cash Flow Analysis */}
            <Card>
              <CardHeader>
                <CardTitle>Cash Flow Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monthly Rent</span>
                    <span className="font-medium">${property.rent.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-muted-foreground">
                    <span>Monthly Mortgage</span>
                    <span>-${monthlyPayment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Monthly Expenses</span>
                    <span>-${monthlyExpenses.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Monthly Cash Flow</span>
                    <span className={monthlyCashFlow >= 0 ? "text-green-600" : "text-red-600"}>
                      ${monthlyCashFlow.toLocaleString()}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Annual Cash Flow</p>
                    <p className="font-medium">${annualCashFlow.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">ROI</p>
                    <p className="font-medium">{roi.toFixed(2)}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Yield Rate</p>
                    <p className="font-medium">{yieldRate.toFixed(2)}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Growth Rate</p>
                    <p className="font-medium">{property.growthRate}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Value Growth Projection</CardTitle>
              </CardHeader>
              <CardContent>
                <PropertyChart 
                  data={projections.map(p => ({ year: p.year, value: p.propertyValue }))}
                  title="Property Value"
                  color="blue"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cash Flow Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <PropertyChart 
                  data={projections.map(p => ({ year: p.year, value: p.cashFlow }))}
                  title="Annual Cash Flow"
                  color="green"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projections" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>10-Year Financial Projections</CardTitle>
              <CardDescription>
                Detailed analysis of property performance over the next 10 years
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Year</th>
                      <th className="text-right p-2">Property Value</th>
                      <th className="text-right p-2">Rent</th>
                      <th className="text-right p-2">Expenses</th>
                      <th className="text-right p-2">Cash Flow</th>
                      <th className="text-right p-2">ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projections.map((projection, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="p-2 font-medium">{projection.year}</td>
                        <td className="text-right p-2">${projection.propertyValue.toLocaleString()}</td>
                        <td className="text-right p-2">${projection.rent.toLocaleString()}</td>
                        <td className="text-right p-2">${projection.expenses.toLocaleString()}</td>
                        <td className="text-right p-2 font-medium">
                          ${projection.cashFlow.toLocaleString()}
                        </td>
                        <td className="text-right p-2">{projection.roi.toFixed(2)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function calculateMonthlyPayment(principal: number, annualRate: number, years: number): number {
  const monthlyRate = annualRate / 100 / 12
  const numberOfPayments = years * 12
  return principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
}

function generateProjections(property: any) {
  const projections = []
  let currentValue = property.purchasePrice
  let currentRent = property.rent * 12

  for (let year = 1; year <= 10; year++) {
    // Property value grows by growth rate
    currentValue *= (1 + property.growthRate / 100)
    
    // Rent increases by 2% annually (market assumption)
    currentRent *= 1.02
    
    // Expenses increase by 3% annually
    const annualExpenses = (property.expenses.rates + property.expenses.insurance + property.expenses.maintenance + property.expenses.fees) * Math.pow(1.03, year - 1)
    
    // Calculate cash flow (simplified - no mortgage payments in projections)
    const cashFlow = currentRent - annualExpenses
    
    // Calculate ROI
    const roi = (cashFlow / property.purchasePrice) * 100

    projections.push({
      year,
      propertyValue: Math.round(currentValue),
      rent: Math.round(currentRent),
      expenses: Math.round(annualExpenses),
      cashFlow: Math.round(cashFlow),
      roi
    })
  }

  return projections
}
