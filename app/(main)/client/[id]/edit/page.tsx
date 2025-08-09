import { notFound } from "next/navigation"
import { getClientById } from "@/lib/data"
import ClientForm from "@/components/client-form"

interface ClientEditPageProps {
  params: {
    id: string
  }
}

export default function ClientEditPage({ params }: ClientEditPageProps) {
  const client = getClientById(params.id)

  if (!client) {
    notFound()
  }

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Client: {client.name}</h1>
      <ClientForm initialData={client} />
    </div>
  )
}
