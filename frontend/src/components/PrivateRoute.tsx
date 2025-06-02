// src/components/PrivateRoute.tsx
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ children, allowedRoles }: { children: React.ReactNode, allowedRoles: string[] }) => {
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")

    if (!token) return <Navigate to="/login" />
    if (!allowedRoles.includes(role || "")) return <Navigate to="/unauthorized" />

    return <>{children}</>
}