"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Home, 
  Building, 
  Users, 
  BarChart, 
  Settings, 
  Calculator, 
  BookOpen, 
  TrendingUp,
  Menu,
  X,
  User,
  ChevronRight,
  ChevronLeft,
  Activity,
  DollarSign,
  BarChart3,
  Wallet,
  TrendingUp as TrendingUpIcon,
  MessageCircle,
  Layers,
  FileText,
  Brain
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useSidebar } from "@/components/ui/sidebar"
import { useMediaQuery } from "@/hooks/use-mobile"

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
  color?: string
  description?: string
  hasDot?: boolean
}

const navItems: NavItem[] = [
  { 
    title: "Properties", 
    href: "/property", 
    icon: Building,
    description: "Manage your properties",
    hasDot: true
  },
  { 
    title: "Scenarios", 
    href: "/scenarios", 
    icon: TrendingUp,
    description: "Investment scenarios"
  },
  { 
    title: "Financial Calculator", 
    href: "/calculator", 
    icon: Calculator,
    description: "Financial tools"
  },
  { 
    title: "Reports", 
    href: "/reports", 
    icon: BarChart,
    description: "Analytics & reports"
  },
  { 
    title: "Knowledge Base", 
    href: "/knowledge", 
    icon: BookOpen,
    description: "Learning resources"
  },
  { 
    title: "Client Management", 
    href: "/advisor/clients", 
    icon: Users,
    description: "Client management"
  },
  { 
    title: "Trends", 
    href: "/trends", 
    icon: TrendingUpIcon,
    description: "Market trends"
  },
  { 
    title: "AI Chat", 
    href: "/cfo-chat", 
    icon: Brain,
    description: "AI-powered insights"
  },
]

function getRoleColor(role: string) {
  switch (role) {
    case "admin":
      return "bg-red-500/10 text-red-600 border-red-200"
    case "advisor":
      return "bg-blue-500/10 text-blue-600 border-blue-200"
    case "personal":
      return "bg-green-500/10 text-green-600 border-green-200"
    default:
      return "bg-gray-500/10 text-gray-600 border-gray-200"
  }
}

function MobileNav() {
  const pathname = usePathname()
  
  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mobile-nav"
    >
      <div className="flex items-center justify-around py-2 px-2">
        {navItems.slice(0, 4).map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center py-2 px-2 rounded-xl transition-all duration-200 min-w-0 flex-1 ${
                isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              <div className="relative mb-1">
                <Icon className="h-5 w-5" />
                {item.hasDot && (
                  <div className="absolute -top-1 -right-1 h-2 w-2 bg-yellow-400 rounded-full"></div>
                )}
              </div>
              <span className="text-xs font-medium truncate text-center">{item.title}</span>
            </Link>
          )
        })}
      </div>
    </motion.nav>
  )
}

function DesktopSidebar() {
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`hidden md:flex flex-col h-screen bg-background border-r border-border ${
        isExpanded ? "w-72" : "w-16"
      } transition-all duration-300`}
    >
      {/* Header - Theme-aware */}
      <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground">
        {isExpanded ? (
          <Link href="/dashboard" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Layers className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <span className="font-bold text-lg">InvestmentApp</span>
            </div>
          </Link>
        ) : (
          <Link href="/dashboard" className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mx-auto hover:opacity-80 transition-opacity">
            <Layers className="h-5 w-5 text-primary-foreground" />
          </Link>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-modern">
        {isExpanded && (
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Analytics</h2>
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-1"
              onClick={() => setIsExpanded(false)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
        )}
        
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => !isExpanded && setIsExpanded(true)}
                className={`group flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                <div className="relative flex-shrink-0">
                  <Icon className="h-5 w-5" />
                  {item.hasDot && (
                    <div className="absolute -top-1 -right-1 h-2 w-2 bg-yellow-400 rounded-full"></div>
                  )}
                </div>
                {isExpanded && (
                  <div className="flex-1 min-w-0">
                    <span className="font-medium text-sm">{item.title}</span>
                    <p className="text-xs text-muted-foreground truncate">{item.description}</p>
                  </div>
                )}
                {isExpanded && isActive && (
                  <ChevronRight className="h-4 w-4 text-primary-foreground" />
                )}
              </Link>
            )
          })}
        </div>
      </nav>
    </motion.div>
  )
}

function MobileSidebarOverlay() {
  const { openMobile, setOpenMobile } = useSidebar()
  const pathname = usePathname()
  
  return (
    <AnimatePresence>
      {openMobile && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenMobile(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="mobile-sidebar z-50 bg-background"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground">
                <Link href="/dashboard" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Layers className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="font-bold text-lg">InvestmentApp</span>
                  </div>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setOpenMobile(false)}
                  className="text-primary-foreground hover:bg-primary/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-modern">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-foreground">Analytics</h2>
                  <Button variant="ghost" size="sm" className="p-1">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpenMobile(false)}
                        className={`group flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                          isActive 
                            ? "bg-primary text-primary-foreground shadow-sm" 
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        }`}
                      >
                        <div className="relative">
                          <Icon className="h-5 w-5" />
                          {item.hasDot && (
                            <div className="absolute -top-1 -right-1 h-2 w-2 bg-yellow-400 rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-medium text-sm">{item.title}</span>
                          <p className="text-xs text-muted-foreground truncate">{item.description}</p>
                        </div>
                        {isActive && (
                          <ChevronRight className="h-4 w-4 text-primary-foreground" />
                        )}
                      </Link>
                    )
                  })}
                </div>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export function AppSidebar() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const { setOpenMobile } = useSidebar()
  
  if (isMobile) {
    return (
      <>
        <MobileSidebarOverlay />
        <MobileNav />
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpenMobile(true)}
          className="fixed top-4 left-4 z-50 md:hidden btn-ghost bg-background/80 backdrop-blur border border-border/50 shadow-sm"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </>
    )
  }
  
  return <DesktopSidebar />
}
