import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { PageTransition } from "@/components/page-transition"
import { AuthProvider } from "@/lib/auth-context"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FinanceIQ - Investment Management Dashboard",
  description: "All-in-one reporting, analysis & forecasting for investment property management",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} mobile-scroll`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider initialUserRole="personal">
            <SidebarProvider defaultOpen={false}>
              <div className="flex min-h-screen bg-background">
                <AppSidebar />
                <main className="flex-1 flex flex-col md:ml-0">
                  <PageTransition>
                    <div className="pt-4 md:pt-0">
                      {children}
                    </div>
                  </PageTransition>
                </main>
              </div>
              <ThemeToggle />
            </SidebarProvider>
          </AuthProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
