import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
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

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setLoading(true)

        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            })

            const data = await res.json()
            console.log("Login Response:", data)

            if (!res.ok) {
                setPassword("")
                setError(data.message || "Login failed")
            } else {
                // Stockage du token si fourni
                if (data.token) {
                    localStorage.setItem("token", data.token)
                    localStorage.setItem("name", data.name)
                    localStorage.setItem("role", data.role)
                }
                // Redirection
                // Ajoute cette condition ici pour rediriger selon le rôle
                if (data.role === "admin") {
                    navigate("/admin/dashboard")
                } else if (data.role === "student") {
                    navigate("/student/dashboard")
                }

            }
        } catch (err) {
            setError("Something went wrong. Please try again.")
            console.error(err)
        } finally {
            setLoading(false)
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
                        Login to your account
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                        Enter your email and password below
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-3">
                                <Label
                                    htmlFor="email"
                                    className="text-zinc-800 dark:text-gray-300 text-base"
                                >
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    className="bg-white dark:bg-gray-800 dark:text-white"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    aria-invalid={!!error}
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label
                                    htmlFor="password"
                                    className="text-zinc-800 dark:text-gray-300 text-base"
                                >
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    type="password"
                                    className={cn(
                                        "bg-white dark:bg-gray-800 dark:text-white",
                                        error ? "border-red-600" : ""
                                    )}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    aria-invalid={!!error}
                                />
                            </div>
                            {error && (
                                <p className="text-red-600 text-sm text-center">{error}</p>
                            )}
                            <div className="flex flex-col gap-3">
                                <Button
                                    type="submit"
                                    className="w-full bg-sky-700 hover:bg-sky-900 text-lg font-serif"
                                    disabled={loading}
                                >
                                    {loading ? "Logging in..." : "Login"}
                                </Button>
                            </div>
                        </div>
                    </form>
                    <div className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300">
                        Don&apos;t have an account?{" "}
                        <Link
                            to="/register"
                            className="underline underline-offset-4 hover:text-sky-900 dark:hover:text-sky-400"
                        >
                            Sign up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
