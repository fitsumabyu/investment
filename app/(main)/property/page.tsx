import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Building, 
  Plus,
  Search,
  Filter,
  MapPin,
  DollarSign,
  TrendingUp,
  Calendar,
  Eye,
  Edit,
  Trash2
} from "lucide-react"
import Link from "next/link"
import { deletePropertyFormAction } from "@/lib/actions"

function PropertiesSkeleton() {
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
        <div className="mobile-grid">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="mobile-card p-4">
              <div className="h-6 bg-muted rounded w-1/4 mb-4"></div>
              <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

async function PropertiesContent() {
  const properties = [
    {
      id: "prop1",
      name: "Bondi Beach Apartment",
      address: "123 Campbell Parade, Bondi Beach, NSW 2026",
      type: "Apartment",
      purchasePrice: 850000,
      rent: 3200,
      roi: 4.5,
      status: "Active",
      image: "/placeholder.jpg"
    },
    {
      id: "prop2", 
      name: "Melbourne CBD Office",
      address: "456 Collins Street, Melbourne, VIC 3000",
      type: "Commercial",
      purchasePrice: 1200000,
      rent: 4800,
      roi: 4.8,
      status: "Active",
      image: "/placeholder.jpg"
    },
    {
      id: "prop3",
      name: "Brisbane Suburban House",
      address: "789 Logan Road, Mount Gravatt, QLD 4122",
      type: "Residential",
      purchasePrice: 650000,
      rent: 2800,
      roi: 5.2,
      status: "Active",
      image: "/placeholder.jpg"
    },
    {
      id: "prop4",
      name: "Perth Investment Unit",
      address: "321 Hay Street, Perth, WA 6000",
      type: "Unit",
      purchasePrice: 420000,
      rent: 1800,
      roi: 5.1,
      status: "Active",
      image: "/placeholder.jpg"
    },
    {
      id: "prop5",
      name: "Adelaide Townhouse",
      address: "567 North Terrace, Adelaide, SA 5000",
      type: "Townhouse",
      purchasePrice: 580000,
      rent: 2400,
      roi: 5.0,
      status: "Active",
      image: "/placeholder.jpg"
    }
  ]

  return (
    <div className="mobile-content">
      {/* Header */}
      <div className="mobile-section">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mobile-text-hero">Properties</h1>
            <p className="mobile-text-subtitle">Manage your investment properties</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="mobile-input pl-8 w-48 md:w-64"
              />
            </div>
            <Button variant="outline" size="sm" className="mobile-btn-secondary">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Link href="/property/new">
              <Button size="sm" className="mobile-btn-primary">
                <Plus className="h-4 w-4 mr-2" />
                Add Property
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Property Stats */}
      <div className="mobile-section">
        <div className="mobile-grid-stats">
          <Card className="mobile-card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Building className="h-4 w-4 mr-2" />
                Total Properties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{properties.length}</div>
              <p className="mobile-text-caption mt-1">Active investments</p>
            </CardContent>
          </Card>

          <Card className="mobile-card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <DollarSign className="h-4 w-4 mr-2" />
                Total Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                A${properties.reduce((sum, p) => sum + p.purchasePrice, 0).toLocaleString()}
              </div>
              <p className="mobile-text-caption mt-1">Portfolio value</p>
            </CardContent>
          </Card>

          <Card className="mobile-card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Average ROI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(properties.reduce((sum, p) => sum + p.roi, 0) / properties.length).toFixed(1)}%
              </div>
              <p className="mobile-text-caption mt-1">Annual return</p>
            </CardContent>
          </Card>

          <Card className="mobile-card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Monthly Rent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                A${properties.reduce((sum, p) => sum + p.rent, 0).toLocaleString()}
              </div>
              <p className="mobile-text-caption mt-1">Total monthly income</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Property List */}
      <div className="mobile-section">
        <div className="flex items-center justify-between mb-4">
          <h2 className="mobile-text-title">Property List</h2>
        </div>
        
        <div className="mobile-grid md:grid-cards">
          {properties.map((property) => (
            <Card key={property.id} className="mobile-card md:card-modern hover-lift">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold mobile-text-subtitle md:text-lg truncate">{property.name}</h3>
                      <Badge variant="secondary" className="mobile-status-neutral md:status-neutral flex-shrink-0">
                        {property.status}
                      </Badge>
                    </div>
                    <div className="flex items-start gap-1 mb-3">
                      <MapPin className="h-3 w-3 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <p className="mobile-text-caption line-clamp-2">{property.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Button size="sm" variant="ghost" asChild className="mobile-btn-ghost md:btn-ghost">
                      <Link href={`/property/${property.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="sm" variant="ghost" asChild className="mobile-btn-ghost md:btn-ghost">
                      <Link href={`/property/${property.id}/edit`}>
                        <Edit className="h-4 w-4" />
                      </Link>
                    </Button>
                    <form action={deletePropertyFormAction} className="inline">
                      <input type="hidden" name="propertyId" value={property.id} />
                      <Button size="sm" variant="ghost" type="submit" className="text-destructive hover:text-destructive mobile-btn-ghost md:btn-ghost">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                </div>
                
                {/* Property Details Grid */}
                <div className="mobile-grid-2 gap-3 md:grid md:grid-cols-2 md:gap-4">
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                    <span className="mobile-text-caption text-muted-foreground">Purchase Price</span>
                    <span className="font-semibold mobile-text-caption">A${property.purchasePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                    <span className="mobile-text-caption text-muted-foreground">Monthly Rent</span>
                    <span className="font-semibold mobile-text-caption">A${property.rent.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                    <span className="mobile-text-caption text-muted-foreground">ROI</span>
                    <span className="font-semibold mobile-text-caption text-green-600">{property.roi}%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                    <span className="mobile-text-caption text-muted-foreground">Type</span>
                    <span className="font-semibold mobile-text-caption">{property.type}</span>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="mt-3 pt-3 border-t border-border/50">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Annual Income: A${(property.rent * 12).toLocaleString()}</span>
                    <span>Yield: {((property.rent * 12) / property.purchasePrice * 100).toFixed(1)}%</span>
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

export default function PropertiesPage() {
  return (
    <Suspense fallback={<PropertiesSkeleton />}>
      <PropertiesContent />
    </Suspense>
  )
} 