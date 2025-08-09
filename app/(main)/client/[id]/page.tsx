import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Building, Mail, Phone, MapPin, FileText } from "lucide-react"
import Link from "next/link"
import { getClientById, getProperties } from "@/lib/data"
import { deleteClientAction } from "@/lib/actions"

interface ClientDetailPageProps {
  params: {
    id: string
  }
}

export default function ClientDetailPage({ params }: ClientDetailPageProps) {
  const client = getClientById(params.id)

  if (!client) {
    notFound()
  }

  // Get properties for this client
  const clientProperties = getProperties("1").filter(p => client.properties.includes(p.id))

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">{client.name}</h1>
          <p className="text-muted-foreground">Client portfolio and details</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href={`/client/${client.id}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Client
            </Link>
          </Button>
          <form action={deleteClientAction.bind(null, client.id)}>
            <Button variant="destructive" type="submit">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Client
            </Button>
          </form>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Client Information */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Client Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{client.email}</span>
              </div>
              {client.phone && (
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{client.phone}</span>
                </div>
              )}
              {client.address && (
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span className="text-sm">{client.address}</span>
                </div>
              )}
              {client.notes && (
                <div className="flex items-start space-x-2">
                  <FileText className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span className="text-sm">{client.notes}</span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Client Properties */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Client Properties</CardTitle>
              <CardDescription>
                Properties managed for this client
              </CardDescription>
            </CardHeader>
            <CardContent>
              {clientProperties.length === 0 ? (
                <div className="text-center py-8">
                  <Building className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No properties assigned</h3>
                  <p className="text-muted-foreground mb-4">
                    This client doesn't have any properties assigned yet.
                  </p>
                  <Button asChild>
                    <Link href="/property/new">
                      Add Property
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  {clientProperties.map((property) => (
                    <Card key={property.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">{property.name}</CardTitle>
                          <Badge variant={property.status === "Active" ? "default" : "secondary"}>
                            {property.status}
                          </Badge>
                        </div>
                        <CardDescription>{property.address}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">Value:</span>
                            <div className="font-medium">${property.purchasePrice.toLocaleString()}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Monthly Rent:</span>
                            <div className="font-medium">${property.rent.toLocaleString()}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Yield:</span>
                            <div className="font-medium">
                              {((property.rent * 12 / property.purchasePrice) * 100).toFixed(2)}%
                            </div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Type:</span>
                            <div className="font-medium">{property.type}</div>
                          </div>
                        </div>
                        <div className="flex justify-end pt-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/property/${property.id}`}>
                              View Details
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
