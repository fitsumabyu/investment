import { Property, Client, Scenario, UserRole } from "./types"

// Mock data
const properties: Property[] = [
  {
    id: "prop1",
    name: "Sunset Apartments",
    address: "123 Sunset Blvd, Los Angeles, CA 90210",
    type: "Apartment",
    yearBuilt: 2020,
    purchasePrice: 500000,
    deposit: 100000,
    rent: 2500,
    interestRate: 4.5,
    loanType: "Principal and Interest",
    loanTerm: 30,
    interestOnlyPeriod: 0,
    expenses: {
      rates: 200,
      insurance: 150,
      maintenance: 300,
      fees: 250,
    },
    taxRate: 30,
    depreciationSettings: "Straight Line",
    growthRate: 3.5,
    vacancyRate: 5,
    status: "Active",
    ownerId: "1",
  },
  {
    id: "prop2",
    name: "Downtown Office",
    address: "456 Business Ave, New York, NY 10001",
    type: "Commercial",
    yearBuilt: 2018,
    purchasePrice: 800000,
    deposit: 160000,
    rent: 4000,
    interestRate: 4.2,
    loanType: "Principal and Interest",
    loanTerm: 25,
    interestOnlyPeriod: 0,
    expenses: {
      rates: 400,
      insurance: 300,
      maintenance: 500,
      fees: 400,
    },
    taxRate: 35,
    depreciationSettings: "Straight Line",
    growthRate: 4.0,
    vacancyRate: 3,
    status: "Active",
    ownerId: "1",
  },
]

const clients: Client[] = [
  {
    id: "client1",
    name: "Eve Adams",
    email: "eve.adams@example.com",
    phone: "+1 (555) 123-4567",
    address: "789 Oak Street, Chicago, IL 60601",
    notes: "High net worth client interested in commercial properties",
    advisorId: "2",
    properties: ["prop1"],
  },
  {
    id: "client2",
    name: "Frank Green",
    email: "frank.green@example.com",
    phone: "+1 (555) 987-6543",
    address: "321 Pine Avenue, Miami, FL 33101",
    notes: "Retirement planning focus, prefers residential properties",
    advisorId: "2",
    properties: ["prop2"],
  },
]

const scenarios: Scenario[] = [
  {
    id: "scenario1",
    name: "Conservative Growth Strategy",
    description: "Low-risk investment strategy focusing on stable residential properties with steady cash flow",
    clientId: "client1",
    status: "Active",
    creationDate: "2024-01-15T10:30:00Z",
    properties: ["prop1"],
  },
  {
    id: "scenario2",
    name: "Aggressive Expansion Plan",
    description: "High-growth strategy targeting commercial properties in emerging markets",
    clientId: "client2",
    status: "Draft",
    creationDate: "2024-01-20T14:45:00Z",
    properties: ["prop2"],
  },
]

// Data access functions
export function getProperties(ownerId: string): Property[] {
  return properties.filter(p => p.ownerId === ownerId)
}

export function getPropertyById(id: string): Property | undefined {
  return properties.find(p => p.id === id)
}

export function getClients(advisorId: string): Client[] {
  return clients.filter(c => c.advisorId === advisorId)
}

export function getClientById(id: string): Client | undefined {
  return clients.find(c => c.id === id)
}

export function getScenarios(): Scenario[] {
  return scenarios
}

export function getScenarioById(id: string): Scenario | undefined {
  return scenarios.find(s => s.id === id)
}

// Data modification functions
export function addProperty(propertyData: Omit<Property, 'id'>): Property {
  const newProperty: Property = {
    ...propertyData,
    id: `prop${Date.now()}`,
  }
  properties.push(newProperty)
  return newProperty
}

export function updateProperty(property: Property): Property {
  const index = properties.findIndex(p => p.id === property.id)
  if (index !== -1) {
    properties[index] = property
  }
  return property
}

export function deleteProperty(id: string): void {
  const index = properties.findIndex(p => p.id === id)
  if (index !== -1) {
    properties.splice(index, 1)
  }
}

export function addClient(clientData: Omit<Client, 'id'>): Client {
  const newClient: Client = {
    ...clientData,
    id: `client${Date.now()}`,
  }
  clients.push(newClient)
  return newClient
}

export function updateClient(client: Client): Client {
  const index = clients.findIndex(c => c.id === client.id)
  if (index !== -1) {
    clients[index] = client
  }
  return client
}

export function deleteClient(id: string): void {
  const index = clients.findIndex(c => c.id === id)
  if (index !== -1) {
    clients.splice(index, 1)
  }
}

export function addScenario(scenarioData: Omit<Scenario, 'id'>): Scenario {
  const newScenario: Scenario = {
    ...scenarioData,
    id: `scenario${Date.now()}`,
  }
  scenarios.push(newScenario)
  return newScenario
}

export function updateScenario(scenario: Scenario): Scenario {
  const index = scenarios.findIndex(s => s.id === scenario.id)
  if (index !== -1) {
    scenarios[index] = scenario
  }
  return scenario
}

export function deleteScenario(id: string): void {
  const index = scenarios.findIndex(s => s.id === id)
  if (index !== -1) {
    scenarios.splice(index, 1)
  }
}
