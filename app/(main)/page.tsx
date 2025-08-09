import { redirect } from "next/navigation"

export default function HomePage() {
  redirect("/dashboard")
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-lg">Redirecting to Dashboard...</p>
    </div>
  )
}
