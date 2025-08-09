import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, TrendingUp, Users, DollarSign, Building, Activity } from "lucide-react"
import { getProperties, getClients } from "@/lib/data"

export default function AdminAnalyticsPage() {
  // Get all data for analytics (no filtering by user)
  const properties = getProperties("1") // Get properties for user 1
  const clients = getClients("2") // Get clients for advisor 2

  // Calculate analytics
  const totalProperties = properties.length
  const totalClients = clients.length
  const totalPortfolioValue = properties.reduce((sum, p) => sum + p.purchasePrice, 0)
  const totalMonthlyRent = properties.reduce((sum, p) => sum + p.rent, 0)
  const averageYield = totalPortfolioValue > 0 ? (totalMonthlyRent * 12 / totalPortfolioValue * 100) : 0

  const monthlyMetrics = [
    { name: "Jan", properties: 12, clients: 8, revenue: 45000 },
    { name: "Feb", properties: 15, clients: 10, revenue: 52000 },
    { name: "Mar", properties: 18, clients: 12, revenue: 58000 },
    { name: "Apr", properties: 22, clients: 15, revenue: 65000 },
    { name: "May", properties: 25, clients: 18, revenue: 72000 },
    { name: "Jun", properties: 28, clients: 20, revenue: 78000 },
  ]

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Business Analytics</h1>
        <p className="text-muted-foreground">Comprehensive overview of business performance and metrics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProperties}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalClients}</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalPortfolioValue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Yield</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageYield.toFixed(2)}%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Performance */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Growth</CardTitle>
            <CardDescription>Property and client growth over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyMetrics.map((metric) => (
                <div key={metric.name} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{metric.name}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-muted-foreground">
                      {metric.properties} properties
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {metric.clients} clients
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
            <CardDescription>Monthly revenue from property management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyMetrics.map((metric) => (
                <div key={metric.name} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{metric.name}</span>
                  <span className="text-sm font-medium">
                    ${metric.revenue.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Property Performance */}
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Property Performance</CardTitle>
            <CardDescription>Individual property metrics and performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Property</th>
                    <th className="text-right p-2">Value</th>
                    <th className="text-right p-2">Monthly Rent</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-right p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map((property) => (
                    <tr key={property.id} className="border-b hover:bg-muted/50">
                      <td className="p-2 font-medium">{property.name}</td>
                      <td className="text-right p-2">${property.purchasePrice.toLocaleString()}</td>
                      <td className="text-right p-2">${property.rent.toLocaleString()}</td>
                      <td className="text-right p-2">
                        {((property.rent * 12 / property.purchasePrice) * 100).toFixed(2)}%
                      </td>
                      <td className="text-right p-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          property.status === "Active" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {property.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
