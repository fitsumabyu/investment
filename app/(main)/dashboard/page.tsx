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
    <div className="mobile-section">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-muted rounded-lg w-1/3"></div>
        <div className="mobile-grid-stats">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="mobile-card p-4">
              <div className="h-4 bg-muted rounded w-1/2 mb-2"></div>
              <div className="h-8 bg-muted rounded w-3/4"></div>
            </div>
          ))}
        </div>
        <div className="mobile-card p-4">
          <div className="h-6 bg-muted rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-16 bg-muted rounded-xl"></div>
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
      href: "/property",
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      title: "Create Scenario",
      description: "Model different investment scenarios",
      icon: TrendingUp,
      href: "/scenarios",
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
    <div className="mobile-content">
      {/* Header */}
      <div className="mobile-section">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mobile-text-hero">Dashboard</h1>
            <p className="mobile-text-subtitle">Your investment portfolio overview</p>
          </div>
          <Button asChild className="mobile-btn-primary">
            <Link href="/property">
              <Plus className="h-4 w-4 mr-2" />
              Add Property
            </Link>
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="mobile-section">
        <div className="mobile-grid-stats">
          <Card className="mobile-card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <DollarSign className="h-4 w-4 mr-2" />
                Total Portfolio Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">A${totalPortfolioValue.toLocaleString()}</div>
              <p className="mobile-text-caption mt-1">Across {properties.length} properties</p>
            </CardContent>
          </Card>

          <Card className="mobile-card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Monthly Rent Income
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">A${totalMonthlyRent.toLocaleString()}</div>
              <p className="mobile-text-caption mt-1">Total monthly rental income</p>
            </CardContent>
          </Card>

          <Card className="mobile-card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Building className="h-4 w-4 mr-2" />
                Average Yield
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{averageYield}%</div>
              <p className="mobile-text-caption mt-1">Annual return on investment</p>
            </CardContent>
          </Card>

          <Card className="mobile-card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Active Properties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{properties.length}</div>
              <p className="mobile-text-caption mt-1">Properties in portfolio</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mobile-section">
        <div>
          <h2 className="mobile-text-title mb-4">Quick Actions</h2>
          <div className="mobile-grid md:grid-cards">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <Card key={action.title} className="mobile-card md:card-modern hover-lift">
                  <CardHeader className="pb-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${action.color} md:rounded-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardTitle className="mobile-text-subtitle mb-2 md:text-lg">{action.title}</CardTitle>
                    <CardDescription className="mobile-text-caption mb-4 md:text-sm">{action.description}</CardDescription>
                    <Button asChild variant="outline" className="mobile-btn-secondary md:w-full md:btn-secondary">
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
