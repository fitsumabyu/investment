import ClientForm from "@/components/client-form"

export default function NewClientPage() {
  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Client</h1>
      <ClientForm />
    </div>
  )
}
