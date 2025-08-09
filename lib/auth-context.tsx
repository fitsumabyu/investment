"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { setCookie } from "cookies-next"

type UserRole = "personal" | "advisor" | "business-admin" | "system-admin" | null

interface AuthContextType {
  userRole: UserRole
  setUserRole: (role: UserRole) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children, initialUserRole }: { children: ReactNode; initialUserRole: string | null }) {
  const [userRole, setUserRoleState] = useState<UserRole>(initialUserRole as UserRole)

  const setUserRole = (role: UserRole) => {
    setUserRoleState(role)
    setCookie("user:role", role || "", { maxAge: 60 * 60 * 24 * 7, path: "/" }) // Persist role for 7 days
  }

  useEffect(() => {
    // This effect ensures the client-side state is in sync with the initial server-side cookie value
    if (userRole !== initialUserRole) {
      setUserRoleState(initialUserRole as UserRole)
    }
  }, [initialUserRole, userRole])

  return (
    <AuthContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
