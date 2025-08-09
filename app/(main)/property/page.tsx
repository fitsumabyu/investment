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

function PropertiesSkeleton() {
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
          {[...Array(3)].map((_, i) => (
            <div key={i} className="card-modern p-6">
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
      name: "Sunset Apartments",
      address: "123 Sunset Blvd, Los Angeles, CA 90210",
      type: "Apartment",
      purchasePrice: 500000,
      rent: 2500,
      roi: 8.4,
      status: "Active",
      image: "/placeholder.jpg"
    },
    {
      id: "prop2", 
      name: "Downtown Office",
      address: "456 Business Ave, New York, NY 10001",
      type: "Commercial",
      purchasePrice: 800000,
      rent: 4000,
      roi: 6.2,
      status: "Active",
      image: "/placeholder.jpg"
    },
    {
      id: "prop3",
      name: "Riverside House",
      address: "789 River Road, Austin, TX 73301",
      type: "Residential",
      purchasePrice: 350000,
      rent: 2200,
      roi: 7.5,
      status: "Active",
      image: "/placeholder.jpg"
    }
  ]

  return (
    <div className="container-mobile">
      {/* Header */}
      <div className="section-spacing">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-hero">Properties</h1>
            <p className="text-subtitle">Manage your investment properties</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="btn-secondary">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Link href="/property/new">
              <Button size="sm" className="btn-modern">
                <Plus className="h-4 w-4 mr-2" />
                Add Property
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="section-spacing">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search properties..."
            className="pl-10 h-12 text-lg"
          />
        </div>
      </div>

      {/* Property Stats */}
      <div className="section-spacing">
        <div className="grid-stats">
          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Building className="h-4 w-4 mr-2" />
                Total Properties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{properties.length}</div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+1</span>
                <span className="text-sm text-muted-foreground ml-1">this month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <DollarSign className="h-4 w-4 mr-2" />
                Total Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${properties.reduce((sum, p) => sum + p.purchasePrice, 0).toLocaleString()}
              </div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+12.5%</span>
                <span className="text-sm text-muted-foreground ml-1">vs last year</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
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
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+2.1%</span>
                <span className="text-sm text-muted-foreground ml-1">vs last year</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Monthly Rent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${properties.reduce((sum, p) => sum + p.rent, 0).toLocaleString()}
              </div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+8.7%</span>
                <span className="text-sm text-muted-foreground ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Property List */}
      <div className="section-spacing">
        <div className="grid-cards">
          {properties.map((property) => (
            <Card key={property.id} className="card-elevated">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-title">{property.name}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.address}
                    </CardDescription>
                  </div>
                  <Badge className={`${
                    property.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {property.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Type</span>
                      <div className="font-medium">{property.type}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Purchase Price</span>
                      <div className="font-medium">${property.purchasePrice.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Monthly Rent</span>
                      <div className="font-medium">${property.rent.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">ROI</span>
                      <div className="font-medium text-green-600">{property.roi}%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center space-x-2">
                      <Link href={`/property/${property.id}`}>
                        <Button variant="outline" size="sm" className="btn-secondary">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </Link>
                      <Link href={`/property/${property.id}/edit`}>
                        <Button variant="outline" size="sm" className="btn-secondary">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                      </Link>
                    </div>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {properties.length === 0 && (
        <div className="section-spacing">
          <Card className="card-elevated">
            <CardContent className="text-center py-12">
              <Building className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No properties yet</h3>
              <p className="text-muted-foreground mb-4">
                Get started by adding your first investment property
              </p>
              <Link href="/property/new">
                <Button className="btn-modern">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Property
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      )}
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