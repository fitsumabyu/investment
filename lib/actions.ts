"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { addProperty, updateProperty, deleteProperty, addClient, updateClient, deleteClient, addScenario, updateScenario, deleteScenario } from "./data"
import { Property, Client, Scenario, UserRole } from "./types"

export async function login(prevState: { success: boolean; message: string }, formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // Simple validation
  if (!email || !password) {
    return { success: false, message: "Please fill in all fields" }
  }

  // Mock authentication - in a real app, you'd validate against a database
  if (email === "admin@example.com" && password === "password") {
    const cookieStore = await cookies()
    cookieStore.set("user:role", "personal")
    cookieStore.set("user:id", "1")
    redirect("/dashboard")
  } else if (email === "advisor@example.com" && password === "password") {
    const cookieStore = await cookies()
    cookieStore.set("user:role", "advisor")
    cookieStore.set("user:id", "2")
    redirect("/dashboard")
  } else if (email === "admin@example.com" && password === "admin") {
    const cookieStore = await cookies()
    cookieStore.set("user:role", "system-admin")
    cookieStore.set("user:id", "3")
    redirect("/dashboard")
  } else {
    return { success: false, message: "Invalid credentials" }
  }
}

export async function register(prevState: { success: boolean; message: string }, formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const role = formData.get("role") as string

  // Simple validation
  if (!name || !email || !password || !role) {
    return { success: false, message: "Please fill in all fields" }
  }

  // Mock registration - in a real app, you'd save to a database
  const cookieStore = await cookies()
  cookieStore.set("user:role", role)
  cookieStore.set("user:id", "1") // Mock user ID
  redirect("/dashboard")
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete("user:role")
  cookieStore.delete("user:id")
  redirect("/auth")
}

export async function saveProperty(prevState: { success: boolean; message: string; propertyId: string | null }, formData: FormData) {
  const cookieStore = await cookies()
  const ownerId = cookieStore.get("user:id")?.value || "1" // Default to user 1 if not logged in

  const propertyData: Omit<Property, 'id'> = {
    name: formData.get("name") as string,
    address: formData.get("address") as string,
    type: formData.get("type") as string,
    yearBuilt: parseInt(formData.get("yearBuilt") as string),
    purchasePrice: parseFloat(formData.get("purchasePrice") as string),
    deposit: parseFloat(formData.get("deposit") as string),
    rent: parseFloat(formData.get("rent") as string),
    interestRate: parseFloat(formData.get("interestRate") as string),
    loanType: formData.get("loanType") as string,
    loanTerm: parseInt(formData.get("loanTerm") as string),
    interestOnlyPeriod: 0, // Default value
    expenses: {
      rates: parseFloat(formData.get("rates") as string),
      insurance: parseFloat(formData.get("insurance") as string),
      maintenance: parseFloat(formData.get("maintenance") as string),
      fees: parseFloat(formData.get("fees") as string),
    },
    taxRate: parseFloat(formData.get("taxRate") as string),
    depreciationSettings: "Straight Line", // Default value
    growthRate: parseFloat(formData.get("growthRate") as string),
    vacancyRate: 5, // Default value
    status: formData.get("status") as string,
    ownerId,
  }

  if (prevState.propertyId) {
    // Update existing property
    const updatedProperty = updateProperty({ ...propertyData, id: prevState.propertyId })
    return { success: true, message: "Property updated successfully!", propertyId: updatedProperty.id }
  } else {
    // Create new property
    const newProperty = addProperty(propertyData)
    return { success: true, message: "Property created successfully!", propertyId: newProperty.id }
  }
}

export async function saveScenario(prevState: { success: boolean; message: string; scenarioId: string | null }, formData: FormData) {
  const cookieStore = await cookies()
  const advisorId = cookieStore.get("user:id")?.value || "2" // Default to advisor 2

  const scenarioData: Omit<Scenario, 'id'> = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    clientId: formData.get("clientId") as string,
    status: formData.get("status") as "Active" | "Draft",
    creationDate: new Date().toISOString(),
    properties: formData.getAll("properties") as string[],
  }

  if (prevState.scenarioId) {
    // Update existing scenario
    const updatedScenario = updateScenario({ ...scenarioData, id: prevState.scenarioId })
    return { success: true, message: "Scenario updated successfully!", scenarioId: updatedScenario.id }
  } else {
    // Create new scenario
    const newScenario = addScenario(scenarioData)
    return { success: true, message: "Scenario created successfully!", scenarioId: newScenario.id }
  }
}

export async function saveClient(prevState: { success: boolean; message: string; clientId: string | null }, formData: FormData) {
  const cookieStore = await cookies()
  const advisorId = cookieStore.get("user:id")?.value || "2" // Default to advisor 2

  const clientData: Omit<Client, 'id'> = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string || undefined,
    address: formData.get("address") as string || undefined,
    notes: formData.get("notes") as string || undefined,
    advisorId,
    properties: [],
  }

  if (prevState.clientId) {
    // Update existing client
    const updatedClient = updateClient({ ...clientData, id: prevState.clientId })
    return { success: true, message: "Client updated successfully!", clientId: updatedClient.id }
  } else {
    // Create new client
    const newClient = addClient(clientData)
    return { success: true, message: "Client created successfully!", clientId: newClient.id }
  }
}

// Wrapper functions that return void for form actions
export async function deletePropertyAction(propertyId: string): Promise<void> {
  deleteProperty(propertyId)
}

export async function deleteScenarioAction(scenarioId: string): Promise<void> {
  deleteScenario(scenarioId)
}

export async function deleteClientAction(clientId: string): Promise<void> {
  deleteClient(clientId)
}

// Server action for form submission
export async function deletePropertyFormAction(formData: FormData) {
  "use server"
  const propertyId = formData.get("propertyId") as string
  if (propertyId) {
    deleteProperty(propertyId)
  }
}

