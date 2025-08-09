import { notFound } from "next/navigation"
import { getPropertyById } from "@/lib/data"
import { PropertyForm } from "@/components/property-form"

interface PropertyEditPageProps {
  params: {
    id: string
  }
}

export default function PropertyEditPage({ params }: PropertyEditPageProps) {
  const property = getPropertyById(params.id)

  if (!property) {
    notFound()
  }

  return <PropertyForm />
}
