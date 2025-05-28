import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // reset previous error

    
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // Handle success (e.g., save token, redirect, etc.)
      console.log("Login success:", data);
      alert("Login successful!");

    } catch (err) {
      console.error("Error logging in:", err);
      setError("Something went wrong. Please try again.");
    }
  };

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
          <CardTitle className="text-gray-900 dark:text-white">Login to your account</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email" className="text-zinc-800 dark:text-gray-300 text-base">
                  Email
                </Label>
                <Input
                  className="bg-white dark:bg-gray-800 dark:text-white"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password" className="text-zinc-800 dark:text-gray-300 text-base">
                  Password
                </Label>
                <Input
                  className="bg-white dark:bg-gray-800 dark:text-white"
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && (
                <p className="text-red-600 text-sm font-medium -mt-2">{error}</p>
              )}
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full bg-sky-700 hover:bg-sky-900 text-lg font-serif">
                  Login
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
