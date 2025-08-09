import { Property, Client, Scenario, UserRole } from "./types"

// Mock data
const properties: Property[] = [
  {
    id: "prop1",
    name: "Bondi Beach Apartment",
    address: "123 Campbell Parade, Bondi Beach, NSW 2026",
    type: "Apartment",
    yearBuilt: 2020,
    purchasePrice: 850000,
    deposit: 170000,
    rent: 3200,
    interestRate: 5.2,
    loanType: "Principal and Interest",
    loanTerm: 30,
    interestOnlyPeriod: 0,
    expenses: {
      rates: 250,
      insurance: 180,
      maintenance: 350,
      fees: 300,
    },
    taxRate: 30,
    depreciationSettings: "Straight Line",
    growthRate: 4.5,
    vacancyRate: 3,
    status: "Active",
    ownerId: "1",
  },
  {
    id: "prop2",
    name: "Melbourne CBD Office",
    address: "456 Collins Street, Melbourne, VIC 3000",
    type: "Commercial",
    yearBuilt: 2018,
    purchasePrice: 1200000,
    deposit: 240000,
    rent: 4800,
    interestRate: 5.0,
    loanType: "Principal and Interest",
    loanTerm: 25,
    interestOnlyPeriod: 0,
    expenses: {
      rates: 600,
      insurance: 400,
      maintenance: 800,
      fees: 500,
    },
    taxRate: 30,
    depreciationSettings: "Straight Line",
    growthRate: 4.8,
    vacancyRate: 2,
    status: "Active",
    ownerId: "1",
  },
  {
    id: "prop3",
    name: "Brisbane Suburban House",
    address: "789 Logan Road, Mount Gravatt, QLD 4122",
    type: "Residential",
    yearBuilt: 2015,
    purchasePrice: 650000,
    deposit: 130000,
    rent: 2800,
    interestRate: 5.5,
    loanType: "Principal and Interest",
    loanTerm: 30,
    interestOnlyPeriod: 0,
    expenses: {
      rates: 200,
      insurance: 150,
      maintenance: 250,
      fees: 200,
    },
    taxRate: 30,
    depreciationSettings: "Straight Line",
    growthRate: 5.2,
    vacancyRate: 4,
    status: "Active",
    ownerId: "1",
  },
  {
    id: "prop4",
    name: "Perth Investment Unit",
    address: "321 Hay Street, Perth, WA 6000",
    type: "Unit",
    yearBuilt: 2019,
    purchasePrice: 420000,
    deposit: 84000,
    rent: 1800,
    interestRate: 5.3,
    loanType: "Principal and Interest",
    loanTerm: 30,
    interestOnlyPeriod: 0,
    expenses: {
      rates: 150,
      insurance: 120,
      maintenance: 200,
      fees: 150,
    },
    taxRate: 30,
    depreciationSettings: "Straight Line",
    growthRate: 5.1,
    vacancyRate: 5,
    status: "Active",
    ownerId: "1",
  },
  {
    id: "prop5",
    name: "Adelaide Townhouse",
    address: "567 North Terrace, Adelaide, SA 5000",
    type: "Townhouse",
    yearBuilt: 2017,
    purchasePrice: 580000,
    deposit: 116000,
    rent: 2400,
    interestRate: 5.4,
    loanType: "Principal and Interest",
    loanTerm: 30,
    interestOnlyPeriod: 0,
    expenses: {
      rates: 180,
      insurance: 140,
      maintenance: 280,
      fees: 220,
    },
    taxRate: 30,
    depreciationSettings: "Straight Line",
    growthRate: 5.0,
    vacancyRate: 4,
    status: "Active",
    ownerId: "1",
  },
]

const clients: Client[] = [
  {
    id: "client1",
    name: "Sarah Mitchell",
    email: "sarah.mitchell@example.com",
    phone: "+61 412 345 678",
    address: "123 George Street, Sydney, NSW 2000",
    notes: "High net worth client interested in commercial properties in CBD areas",
    advisorId: "2",
    properties: ["prop1"],
  },
  {
    id: "client2",
    name: "Michael Thompson",
    email: "michael.thompson@example.com",
    phone: "+61 423 456 789",
    address: "456 Flinders Street, Melbourne, VIC 3000",
    notes: "Retirement planning focus, prefers residential properties in established suburbs",
    advisorId: "2",
    properties: ["prop2"],
  },
  {
    id: "client3",
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    phone: "+61 434 567 890",
    address: "789 Queen Street, Brisbane, QLD 4000",
    notes: "Young professional looking for investment properties with good rental yields",
    advisorId: "2",
    properties: ["prop3"],
  },
  {
    id: "client4",
    name: "David Chen",
    email: "david.chen@example.com",
    phone: "+61 445 678 901",
    address: "321 Hay Street, Perth, WA 6000",
    notes: "Interested in mining town properties and regional investments",
    advisorId: "2",
    properties: ["prop4"],
  },
  {
    id: "client5",
    name: "Lisa Anderson",
    email: "lisa.anderson@example.com",
    phone: "+61 456 789 012",
    address: "567 North Terrace, Adelaide, SA 5000",
    notes: "Family investor seeking stable residential properties for long-term growth",
    advisorId: "2",
    properties: ["prop5"],
  },
]

const scenarios: Scenario[] = [
  {
    id: "scenario1",
    name: "Sydney CBD Investment Strategy",
    description: "Conservative investment strategy focusing on premium CBD properties with stable cash flow and capital growth potential",
    clientId: "client1",
    status: "Active",
    creationDate: "2024-01-15T10:30:00Z",
    properties: ["prop1"],
  },
  {
    id: "scenario2",
    name: "Melbourne Suburban Growth Plan",
    description: "Growth-focused strategy targeting established suburbs with strong rental demand and infrastructure development",
    clientId: "client2",
    status: "Draft",
    creationDate: "2024-01-20T14:45:00Z",
    properties: ["prop2"],
  },
  {
    id: "scenario3",
    name: "Brisbane Regional Expansion",
    description: "Strategic expansion into Brisbane's growing suburbs with focus on infrastructure corridors and population growth",
    clientId: "client3",
    status: "Active",
    creationDate: "2024-01-25T09:15:00Z",
    properties: ["prop3"],
  },
  {
    id: "scenario4",
    name: "Perth Mining Town Strategy",
    description: "Specialized strategy targeting mining town properties with cyclical rental income and high yield potential",
    clientId: "client4",
    status: "Active",
    creationDate: "2024-01-30T16:20:00Z",
    properties: ["prop4"],
  },
  {
    id: "scenario5",
    name: "Adelaide Family Portfolio",
    description: "Long-term family investment strategy focusing on stable residential properties in established Adelaide suburbs",
    clientId: "client5",
    status: "Draft",
    creationDate: "2024-02-05T11:30:00Z",
    properties: ["prop5"],
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
