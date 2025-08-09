"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Save, Plus, Link as LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LoadingSpinner } from "@/components/loading-spinner"
import { saveProperty } from "@/lib/actions"

export function PropertyForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    setMessage(null)
    
    try {
      await saveProperty({ success: false, message: "", propertyId: null }, formData)
      setMessage({ type: 'success', text: 'Property saved successfully!' })
      
      // Redirect to dashboard after a brief delay
      setTimeout(() => {
        router.push('/dashboard')
      }, 1500)
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save property. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="container-mobile"
    >
      {/* Header */}
      <div className="section-spacing">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="btn-ghost">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-hero">Add New Property</h1>
            <p className="text-subtitle">Register a new investment property</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="section-spacing">
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-title">Property Details</CardTitle>
            <CardDescription>
              Enter the details of your investment property
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={handleSubmit} className="mobile-form">
              <div className="grid-cards">
                {/* Basic Information */}
                <div className="card-spacing">
                  <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                  
                  <div className="mobile-form-group">
                    <Label htmlFor="name">Property Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter property name"
                      className="input-modern"
                      required
                    />
                  </div>

                  <div className="mobile-form-group">
                    <Label htmlFor="type">Property Type</Label>
                    <Select name="type" required>
                      <SelectTrigger className="input-modern">
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                        <SelectItem value="land">Land</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mobile-form-group">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      name="address"
                      placeholder="Enter full address"
                      className="input-modern"
                      rows={3}
                      required
                    />
                  </div>
                </div>

                {/* Financial Information */}
                <div className="card-spacing">
                  <h3 className="text-lg font-semibold mb-4">Financial Details</h3>
                  
                  <div className="mobile-form-group">
                    <Label htmlFor="purchasePrice">Property Value</Label>
                    <Input
                      id="purchasePrice"
                      name="purchasePrice"
                      type="number"
                      placeholder="Enter property value"
                      className="input-modern"
                      required
                    />
                  </div>

                  <div className="mobile-form-group">
                    <Label htmlFor="rent">Monthly Rent</Label>
                    <Input
                      id="rent"
                      name="rent"
                      type="number"
                      placeholder="Enter monthly rent"
                      className="input-modern"
                      required
                    />
                  </div>

                  <div className="mobile-form-group">
                    <Label htmlFor="yearBuilt">Year Built</Label>
                    <Input
                      id="yearBuilt"
                      name="yearBuilt"
                      type="number"
                      placeholder="Enter year built"
                      className="input-modern"
                      required
                    />
                  </div>
                </div>

                {/* Additional Details */}
                <div className="card-spacing">
                  <h3 className="text-lg font-semibold mb-4">Additional Details</h3>
                  
                  <div className="mobile-form-group">
                    <Label htmlFor="status">Status</Label>
                    <Select name="status" required>
                      <SelectTrigger className="input-modern">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Sold">Sold</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mobile-form-group">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Enter property description"
                      className="input-modern"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-6">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="btn-modern flex-1"
                >
                  {isLoading ? (
                    <>
                      <LoadingSpinner />
                      <span className="ml-2">Saving...</span>
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Property
                    </>
                  )}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/dashboard')}
                  className="btn-secondary"
                >
                  Cancel
                </Button>
              </div>

              {/* Success/Error Message */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-lg border ${
                    message.type === 'success' 
                      ? 'status-success' 
                      : 'bg-destructive/10 text-destructive border-destructive/20'
                  }`}
                >
                  {message.text}
                </motion.div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
