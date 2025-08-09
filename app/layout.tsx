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
  title: "InvestmentApp - Australian Property Investment Management",
  description: "Comprehensive Australian property investment management platform. Track properties, analyze returns, manage clients, and optimize your investment portfolio across Australia.",
  keywords: [
    "Australian property investment",
    "investment management",
    "property portfolio",
    "real estate investment",
    "Australian real estate",
    "property management",
    "investment calculator",
    "property analysis",
    "Sydney property",
    "Melbourne property",
    "Brisbane property",
    "Perth property",
    "Adelaide property",
    "investment advisor",
    "property ROI",
    "rental yield",
    "investment strategy"
  ],
  authors: [{ name: "InvestmentApp Team" }],
  creator: "InvestmentApp",
  publisher: "InvestmentApp",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://investmentapp.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "InvestmentApp - Australian Property Investment Management",
    description: "Comprehensive Australian property investment management platform. Track properties, analyze returns, manage clients, and optimize your investment portfolio across Australia.",
    url: "https://investmentapp.com.au",
    siteName: "InvestmentApp",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InvestmentApp - Australian Property Investment Management",
    description: "Comprehensive Australian property investment management platform for tracking and optimizing your investment portfolio.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
