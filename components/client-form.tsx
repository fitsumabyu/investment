"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { saveClient } from "@/lib/actions"
import { Client } from "@/lib/types"

interface ClientFormProps {
  initialData?: Client
}

export default function ClientForm({ initialData }: ClientFormProps) {
  const [formState, setFormState] = useState({ success: false, message: "", clientId: initialData?.id || null })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      const result = await saveClient({ success: false, message: "", clientId: initialData?.id || null }, formData)
      setFormState(result)
      if (result.success && result.clientId) {
        router.push(`/client/${result.clientId}`)
      }
    } catch (error) {
      setFormState({ success: false, message: "An error occurred. Please try again.", clientId: null })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>{initialData ? "Edit Client" : "Add New Client"}</CardTitle>
          <CardDescription>
            {initialData ? "Update client information" : "Enter the details of your client"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  defaultValue={initialData?.name} 
                  placeholder="John Doe" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  defaultValue={initialData?.email} 
                  placeholder="john@example.com" 
                  required 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel" 
                defaultValue={initialData?.phone} 
                placeholder="+1 (555) 123-4567" 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea 
                id="address" 
                name="address" 
                defaultValue={initialData?.address} 
                placeholder="123 Main Street, City, State 12345" 
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea 
                id="notes" 
                name="notes" 
                defaultValue={initialData?.notes} 
                placeholder="Additional notes about the client..." 
                rows={4}
              />
            </div>

            <div className="flex justify-end space-x-4 pt-6">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => router.back()}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : (initialData ? "Update Client" : "Add Client")}
              </Button>
            </div>

            {formState.message && (
              <p className={`text-sm ${formState.success ? "text-green-600" : "text-red-600"}`}>
                {formState.message}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
