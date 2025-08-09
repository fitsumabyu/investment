import { cookies } from "next/headers"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Mail, Phone, MapPin, Edit, Trash2 } from "lucide-react"
import Link from "next/link"
import { getClients } from "@/lib/data"
import { deleteClientAction } from "@/lib/actions"

export default async function AdvisorClientsPage() {
  const cookieStore = await cookies()
  const advisorId = cookieStore.get("user:id")?.value || "2" // Dummy advisor ID
  const clients = getClients(advisorId)

  return (
    <div className="mobile-content">
      <div className="mobile-section">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="mobile-text-hero">Client Management</h1>
            <p className="mobile-text-subtitle">Manage your client portfolios and investment strategies</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search..." className="mobile-input pl-8 w-48 md:w-64" />
            </div>
            <Button asChild className="mobile-btn-primary md:btn-modern">
              <Link href="/client/new">
                <Plus className="mr-2 h-4 w-4" />
                Add Client
              </Link>
            </Button>
          </div>
        </div>

        {/* Client Grid */}
        <div className="mobile-grid md:grid-cols-2 lg:grid-cols-3">
          {clients.length === 0 ? (
            <Card className="col-span-full mobile-card md:card-modern">
              <CardContent className="text-center py-12">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="mobile-text-subtitle mb-2">No clients yet</h3>
                <p className="mobile-text-caption mb-4">
                  Start managing your client relationships by adding your first client.
                </p>
                <Button asChild className="mobile-btn-primary md:btn-modern">
                  <Link href="/client/new">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Your First Client
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            clients.map((client) => (
              <Card key={client.id} className="mobile-card md:card-modern hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="mobile-text-subtitle md:text-lg">{client.name}</CardTitle>
                    <Badge variant="secondary" className="mobile-status-neutral md:status-neutral">Active</Badge>
                  </div>
                  <CardDescription className="flex items-center space-x-2 mobile-text-caption">
                    <Mail className="h-4 w-4" />
                    <span>{client.email}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {client.phone && (
                    <div className="flex items-center space-x-2 mobile-text-caption">
                      <Phone className="h-4 w-4" />
                      <span>{client.phone}</span>
                    </div>
                  )}
                  {client.address && (
                    <div className="flex items-start space-x-2 mobile-text-caption">
                      <MapPin className="h-4 w-4 mt-0.5" />
                      <span className="line-clamp-2">{client.address}</span>
                    </div>
                  )}
                  {client.notes && (
                    <p className="mobile-text-caption line-clamp-2">
                      {client.notes}
                    </p>
                  )}
                  <div className="flex justify-end gap-2 pt-2">
                    <Button variant="outline" size="sm" asChild className="mobile-btn-ghost md:btn-ghost">
                      <Link href={`/client/${client.id}/edit`}>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="mobile-btn-ghost md:btn-ghost">
                      <Link href={`/client/${client.id}`}>
                        View
                      </Link>
                    </Button>
                    <form action={deleteClientAction.bind(null, client.id)}>
                      <Button variant="destructive" size="sm" type="submit">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
