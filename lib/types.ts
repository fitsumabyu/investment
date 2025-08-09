export type UserRole = "personal" | "advisor" | "business-admin" | "system-admin"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  username?: string
}

export interface Property {
  id: string
  name: string
  address: string
  type: string
  yearBuilt: number
  purchasePrice: number
  deposit: number
  rent: number
  interestRate: number
  loanType: string
  loanTerm: number
  interestOnlyPeriod: number
  expenses: {
    rates: number
    insurance: number
    maintenance: number
    fees: number
  }
  taxRate: number
  depreciationSettings: string
  growthRate: number
  vacancyRate: number
  status: string
  ownerId: string // User ID of the owner
}

export interface Client {
  id: string
  name: string
  email: string
  phone?: string
  address?: string
  notes?: string
  advisorId: string // User ID of the advisor managing this client
  properties: string[] // Array of property IDs associated with this client
}

export interface Scenario {
  id: string
  name: string
  description: string
  clientId: string // Client ID this scenario belongs to
  status: "Active" | "Draft"
  creationDate: string // YYYY-MM-DD
  properties: string[] // Array of property IDs included in this scenario
}
