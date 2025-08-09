import AdminSettingsForm from "@/components/admin-settings-form"

export default function AdminSettingsPage() {
  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">System Settings</h1>
        <p className="text-muted-foreground">Configure system-wide settings and preferences</p>
      </div>
      
      <AdminSettingsForm />
    </div>
  )
}
