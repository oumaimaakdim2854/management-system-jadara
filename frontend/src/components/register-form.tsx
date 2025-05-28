import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        alert(data.message || "Registration failed")
      } else {
        alert("Account created successfully")
        navigate("/login")  // redirection ici
      }
    } catch (error) {
      alert("Something went wrong")
      console.error(error)
    }
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-6 h-screen items-center justify-center bg-sky-700 dark:bg-gray-950",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-md p-6 bg-gray-100 dark:bg-gray-900 shadow-xl">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">
            Create Account
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Enter your information below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="first-name" className="text-zinc-800 dark:text-gray-300 text-base">
                  Full Name
                </Label>
                <Input
                  className="bg-white dark:bg-gray-800 dark:text-white"
                  id="first-name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="email" className="text-zinc-800 dark:text-gray-300 text-base">
                  Email
                </Label>
                <Input
                  className="bg-white dark:bg-gray-800 dark:text-white"
                  id="confirm-email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="password" className="text-zinc-800 dark:text-gray-300 text-base">
                  Password
                </Label>
                <Input
                  className="bg-white dark:bg-gray-800 dark:text-white"
                  id="confirm-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="confirmed-password" className="text-zinc-800 dark:text-gray-300 text-base">
                  Confirm Password
                </Label>
                <Input
                  className="bg-white dark:bg-gray-800 dark:text-white"
                  id="confirmed-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full bg-sky-700 hover:bg-sky-900 text-lg font-serif">
                  Sign Up
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
