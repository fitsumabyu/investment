import { cookies } from "next/headers"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Calendar, User, Edit, Trash2, Eye, Search } from "lucide-react"
import Link from "next/link"
import { getScenarios, getClients } from "@/lib/data"
import { deleteScenarioAction } from "@/lib/actions"

export default async function ScenariosPage() {
  const cookieStore = await cookies()
  const userId = cookieStore.get("user:id")?.value || "2" // Assuming advisor ID for scenarios
  const scenarios = getScenarios()
  const advisorClients = getClients(userId)

  // Filter scenarios to only show those belonging to the advisor's clients
  const advisorScenarios = scenarios.filter(scenario => 
    advisorClients.some(client => client.id === scenario.clientId)
  )

  return (
    <div className="mobile-content">
      <div className="mobile-section">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="mobile-text-hero">Investment Scenarios</h1>
            <p className="mobile-text-subtitle">Create and manage investment scenarios for your clients</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="mobile-input pl-8 w-48 md:w-64"
              />
            </div>
            <Button asChild className="mobile-btn-primary md:btn-modern">
              <Link href="/scenario/new">
                <Plus className="mr-2 h-4 w-4" />
                Create Scenario
              </Link>
            </Button>
          </div>
        </div>

        <div className="mobile-grid md:grid-cols-2 lg:grid-cols-3">
          {advisorScenarios.length === 0 ? (
            <Card className="col-span-full mobile-card md:card-modern">
              <CardContent className="text-center py-12">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="mobile-text-subtitle mb-2">No scenarios yet</h3>
                <p className="mobile-text-caption mb-4">
                  Start creating investment scenarios for your clients to help them make informed decisions.
                </p>
                <Button asChild className="mobile-btn-primary md:btn-modern">
                  <Link href="/scenario/new">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Your First Scenario
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            advisorScenarios.map((scenario) => {
              const client = advisorClients.find(c => c.id === scenario.clientId)
              return (
                <Card key={scenario.id} className="mobile-card md:card-modern hover-lift">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="mobile-text-subtitle md:text-lg">{scenario.name}</CardTitle>
                      <Badge variant={scenario.status === "Active" ? "default" : "secondary"} className="mobile-status-neutral md:status-neutral">
                        {scenario.status}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center space-x-2 mobile-text-caption">
                      <User className="h-4 w-4" />
                      <span>{client?.name || "Unknown Client"}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="mobile-text-caption line-clamp-2">
                      {scenario.description}
                    </p>
                    <div className="flex items-center space-x-2 mobile-text-caption">
                      <Calendar className="h-4 w-4" />
                      <span>Created {new Date(scenario.creationDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                      <Button variant="outline" size="sm" asChild className="mobile-btn-ghost md:btn-ghost">
                        <Link href={`/scenario/${scenario.id}/edit`}>
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild className="mobile-btn-ghost md:btn-ghost">
                        <Link href={`/scenario/${scenario.id}`}>
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Link>
                      </Button>
                      <form action={deleteScenarioAction.bind(null, scenario.id)}>
                        <Button variant="destructive" size="sm" type="submit" className="mobile-btn-ghost md:btn-ghost">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </form>
                    </div>
                  </CardContent>
                </Card>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
