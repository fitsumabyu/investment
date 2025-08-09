import ScenarioForm from "@/components/scenario-form"

export default function NewScenarioPage() {
  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Scenario</h1>
      <ScenarioForm />
    </div>
  )
}
