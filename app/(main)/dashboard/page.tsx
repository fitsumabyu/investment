import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Building, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Plus, 
  Eye, 
  Edit, 
  Trash2,
  Home,
  Calculator,
  BarChart,
  BookOpen
} from "lucide-react"
import Link from "next/link"
import { deletePropertyFormAction } from "@/lib/actions"
import { getProperties } from "@/lib/data"

function DashboardSkeleton() {
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
        <div className="card-modern p-6">
          <div className="h-6 bg-muted rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-16 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

async function DashboardContent() {
  const properties = await getProperties("1") // Default user ID
  
  const totalPortfolioValue = properties.reduce((sum, property) => sum + property.purchasePrice, 0)
  const totalMonthlyRent = properties.reduce((sum, property) => sum + property.rent, 0)
  const averageYield = properties.length > 0 
    ? (totalMonthlyRent * 12 / totalPortfolioValue * 100).toFixed(1)
    : 0

  const quickActions = [
    {
      title: "Add Property",
      description: "Register a new investment property",
      icon: Building,
      href: "/property/new",
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      title: "Create Scenario",
      description: "Model different investment scenarios",
      icon: TrendingUp,
      href: "/scenario/new",
      color: "bg-green-500/10 text-green-600 border-green-200"
    },
    {
      title: "Financial Calculator",
      description: "Calculate returns and cash flow",
      icon: Calculator,
      href: "/calculator",
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    },
    {
      title: "View Reports",
      description: "Generate detailed reports",
      icon: BarChart,
      href: "/reports",
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    },
    {
      title: "Knowledge Base",
      description: "Access investment guides",
      icon: BookOpen,
      href: "/knowledge",
      color: "bg-indigo-500/10 text-indigo-600 border-indigo-200"
    },
    {
      title: "Client Management",
      description: "Manage client portfolios",
      icon: Users,
      href: "/advisor/clients",
      color: "bg-pink-500/10 text-pink-600 border-pink-200"
    }
  ]

  return (
    <div className="container-mobile">
      {/* Header */}
      <div className="section-spacing">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-hero">Dashboard</h1>
            <p className="text-subtitle">Your investment portfolio overview</p>
          </div>
          <Button asChild className="btn-modern">
            <Link href="/property/new">
              <Plus className="h-4 w-4 mr-2" />
              Add Property
            </Link>
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="section-spacing">
        <div className="grid-stats">
          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <DollarSign className="h-4 w-4 mr-2" />
                Total Portfolio Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalPortfolioValue.toLocaleString()}</div>
              <p className="text-caption mt-1">Across {properties.length} properties</p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Monthly Rent Income
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalMonthlyRent.toLocaleString()}</div>
              <p className="text-caption mt-1">Total monthly rental income</p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Building className="h-4 w-4 mr-2" />
                Average Yield
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{averageYield}%</div>
              <p className="text-caption mt-1">Annual return on investment</p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Active Properties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{properties.length}</div>
              <p className="text-caption mt-1">Properties in portfolio</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="section-spacing">
        <div>
          <h2 className="text-title mb-4">Quick Actions</h2>
          <div className="grid-cards">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <Card key={action.title} className="card-modern hover-lift">
                  <CardHeader className="pb-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${action.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardTitle className="text-lg mb-2">{action.title}</CardTitle>
                    <CardDescription className="text-sm mb-4">{action.description}</CardDescription>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={action.href}>
                        Get Started
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Recent Properties */}
      <div className="section-spacing">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-title">Recent Properties</h2>
          <Button asChild variant="outline" size="sm">
            <Link href="/property">View All</Link>
          </Button>
        </div>
        
        <div className="grid gap-4">
          {properties.slice(0, 3).map((property) => (
            <Card key={property.id} className="card-modern">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{property.name}</h3>
                      <Badge variant="secondary" className="status-neutral">
                        {property.type}
                      </Badge>
                    </div>
                    <p className="text-caption mb-3">{property.address}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Value:</span>
                        <span className="font-medium ml-1">${property.purchasePrice.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Monthly Rent:</span>
                        <span className="font-medium ml-1">${property.rent.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" asChild>
                      <Link href={`/property/${property.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <Link href={`/property/${property.id}/edit`}>
                        <Edit className="h-4 w-4" />
                      </Link>
                    </Button>
                    <form action={deletePropertyFormAction} className="inline">
                      <input type="hidden" name="propertyId" value={property.id} />
                      <Button size="sm" variant="ghost" type="submit" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardContent />
    </Suspense>
  )
}
