import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

type AuthProviderProps = {
  children: React.ReactNode
}

type AuthProviderContext = {}

const AuthContext = React.createContext<AuthProviderContext>({} as AuthProviderContext)
export function AuthProvider({ children }: AuthProviderProps) {
  const { pathname } = useLocation(); //path ปัจจุบัน
  const isPublic = pathname === "/login";

  const token = getToken;


  if (!token && !isPublic) {
    return <Navigate to="/login" replace />;
  }

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export function getToken() {
  const token = localStorage.getItem('token')
  return token
}