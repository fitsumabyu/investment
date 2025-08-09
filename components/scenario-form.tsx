"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { saveScenario } from "@/lib/actions"
import { getClients } from "@/lib/data"

interface ScenarioFormProps {
  scenarioId?: string
  initialData?: {
    name: string
    description: string
    clientId: string
    status: "Active" | "Draft"
    properties: string[]
  }
}

export default function ScenarioForm({ scenarioId, initialData }: ScenarioFormProps) {
  const [formState, setFormState] = useState<{ success: boolean; message: string }>({ success: false, message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      const result = await saveScenario(
        { success: false, message: "", scenarioId: scenarioId || null },
        formData
      )
      setFormState(result)
      if (result.success) {
        // Reset form or redirect
        window.location.href = "/scenarios"
      }
    } catch (error) {
      setFormState({ success: false, message: "An error occurred. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get clients for the dropdown
  const clients = getClients("2") // Default to advisor 2

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>{scenarioId ? "Edit Scenario" : "Create New Scenario"}</CardTitle>
          <CardDescription>
            {scenarioId ? "Update the scenario details" : "Create a new investment scenario"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Scenario Name</Label>
              <Input
                id="name"
                name="name"
                defaultValue={initialData?.name}
                placeholder="Enter scenario name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                defaultValue={initialData?.description}
                placeholder="Describe the investment scenario"
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="clientId">Client</Label>
              <Select name="clientId" defaultValue={initialData?.clientId}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a client" />
                </SelectTrigger>
                <SelectContent>
                  {clients.map((client) => (
                    <SelectItem key={client.id} value={client.id}>
                      {client.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select name="status" defaultValue={initialData?.status || "Draft"}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Draft">Draft</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formState.message && (
              <div className={`p-3 rounded-md ${
                formState.success 
                  ? "bg-green-50 text-green-700 border border-green-200" 
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}>
                {formState.message}
              </div>
            )}

            <div className="flex gap-4">
              <Button type="submit" disabled={isSubmitting} className="flex-1">
                {isSubmitting ? "Saving..." : (scenarioId ? "Update Scenario" : "Create Scenario")}
              </Button>
              <Button type="button" variant="outline" onClick={() => window.history.back()}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
