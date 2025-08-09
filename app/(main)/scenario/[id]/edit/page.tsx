import { notFound } from "next/navigation"
import { getScenarioById } from "@/lib/data"
import ScenarioForm from "@/components/scenario-form"

interface ScenarioEditPageProps {
  params: {
    id: string
  }
}

export default function ScenarioEditPage({ params }: ScenarioEditPageProps) {
  const scenario = getScenarioById(params.id)

  if (!scenario) {
    notFound()
  }

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Scenario: {scenario.name}</h1>
      <ScenarioForm initialData={scenario} />
    </div>
  )
}
