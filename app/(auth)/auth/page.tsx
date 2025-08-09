"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/lib/auth-context"
import { login, register } from "@/lib/actions"
import { UserRole } from "@/lib/types"
import { Building, Users, TrendingUp, Shield, CheckCircle, ArrowRight } from "lucide-react"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [role, setRole] = useState<UserRole>("personal")
  const [loginState, setLoginState] = useState({ success: false, message: "" })
  const [registerState, setRegisterState] = useState({ success: false, message: "" })
  const { setUserRole } = useAuth()
  const router = useRouter()

  const handleLogin = async (formData: FormData) => {
    formData.append("role", role)
    const result = await login({ success: false, message: "" }, formData)
    setLoginState(result)
      if (result.success) {
        setUserRole(role)
        router.push("/dashboard")
      }
  }

  const handleRegister = async (formData: FormData) => {
    formData.append("role", role)
    const result = await register({ success: false, message: "" }, formData)
    setRegisterState(result)
      if (result.success) {
        setUserRole(role)
        router.push("/dashboard")
      }
    }

  const features = [
    {
      icon: Building,
      title: "Property Management",
      description: "Track and analyze your investment properties with detailed financial metrics."
    },
    {
      icon: TrendingUp,
      title: "Portfolio Analytics",
      description: "Get comprehensive insights into your investment performance and cash flow."
    },
    {
      icon: Users,
      title: "Client Management",
      description: "Manage client portfolios and create investment scenarios for advisors."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with role-based access control."
    }
  ]

  return (
    <div className="min-h-screen flex">
      {/* Left side - Features */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 p-8 text-white">
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">FinanceIQ</h1>
            <p className="text-xl text-blue-100">
              All-in-one reporting, analysis & forecasting
            </p>
          </div>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white/10 rounded-lg">
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="font-semibold">Trusted by 10,000+ investors</span>
            </div>
            <p className="text-blue-100 text-sm">
              Join thousands of investors who trust FinanceIQ to manage their portfolios and maximize returns.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 lg:hidden">
            <h1 className="text-3xl font-bold mb-2">FinanceIQ</h1>
            <p className="text-muted-foreground">Sign in to your account</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Welcome back</CardTitle>
              <CardDescription>
                {isLogin ? "Sign in to your account" : "Create your account"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={isLogin ? "login" : "register"} onValueChange={(value) => setIsLogin(value === "login")}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Sign In</TabsTrigger>
                  <TabsTrigger value="register">Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value="login" className="space-y-4">
                  <form action={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required />
              </div>
                    <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Select value={role} onValueChange={(value: UserRole) => setRole(value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="personal">Personal User</SelectItem>
                          <SelectItem value="advisor">Financial Advisor</SelectItem>
                          <SelectItem value="business-admin">Business Admin</SelectItem>
                          <SelectItem value="system-admin">System Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" className="w-full">
                      Sign In
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    {loginState.message && (
                      <p className={`text-sm ${loginState.success ? "text-green-600" : "text-red-600"}`}>
                        {loginState.message}
                      </p>
                    )}
                  </form>
                </TabsContent>

                <TabsContent value="register" className="space-y-4">
                  <form action={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="reg-email">Email</Label>
                      <Input id="reg-email" name="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-password">Password</Label>
                      <Input id="reg-password" name="password" type="password" required />
                    </div>
                    <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" name="confirmPassword" type="password" required />
              </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-role">Role</Label>
                      <Select value={role} onValueChange={(value: UserRole) => setRole(value)}>
                        <SelectTrigger>
                          <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="personal">Personal User</SelectItem>
                  <SelectItem value="advisor">Financial Advisor</SelectItem>
                          <SelectItem value="business-admin">Business Admin</SelectItem>
                          <SelectItem value="system-admin">System Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
                    {registerState.message && (
                      <p className={`text-sm ${registerState.success ? "text-green-600" : "text-red-600"}`}>
                        {registerState.message}
              </p>
            )}
          </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
