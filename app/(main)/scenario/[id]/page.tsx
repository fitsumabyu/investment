import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Building, Calendar, User, FileText } from "lucide-react"
import Link from "next/link"
import { getScenarioById, getProperties, getClientById } from "@/lib/data"
import { deleteScenarioAction } from "@/lib/actions"

interface ScenarioDetailPageProps {
  params: {
    id: string
  }
}

export default function ScenarioDetailPage({ params }: ScenarioDetailPageProps) {
  const scenario = getScenarioById(params.id)

  if (!scenario) {
    notFound()
  }

  // Get properties for this scenario
  const scenarioProperties = getProperties("1").filter(p => scenario.properties.includes(p.id))
  const client = getClientById(scenario.clientId)

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">{scenario.name}</h1>
          <p className="text-muted-foreground">Investment scenario analysis and details</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href={`/scenario/${scenario.id}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Scenario
            </Link>
          </Button>
          <form action={deleteScenarioAction.bind(null, scenario.id)}>
            <Button variant="destructive" type="submit">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Scenario
            </Button>
          </form>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Scenario Information */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Scenario Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{scenario.description}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">
                  Client: {client?.name || "Unknown Client"}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">
                  Created: {new Date(scenario.creationDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant={scenario.status === "Active" ? "default" : "secondary"}>
                  {scenario.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Scenario Properties */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Properties in Scenario</CardTitle>
              <CardDescription>
                Properties included in this investment scenario
              </CardDescription>
            </CardHeader>
            <CardContent>
              {scenarioProperties.length === 0 ? (
                <div className="text-center py-8">
                  <Building className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No properties assigned</h3>
                  <p className="text-muted-foreground mb-4">
                    This scenario doesn't have any properties assigned yet.
                  </p>
                  <Button asChild>
                    <Link href="/property/new">
                      Add Property
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  {scenarioProperties.map((property) => (
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
