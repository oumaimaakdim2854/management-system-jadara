import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div"> ) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const navigate = useNavigate()



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        navigate("/login")
        // You can redirect the user to the login page here
      } else {
        alert("Registration failed: " + data.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong. Please try again.");
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
                <Label htmlFor="name" className="text-zinc-800 dark:text-gray-300 text-base">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="email" className="text-zinc-800 dark:text-gray-300 text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="password" className="text-zinc-800 dark:text-gray-300 text-base">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="bg-white dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="confirmPassword" className="text-zinc-800 dark:text-gray-300 text-base">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="bg-white dark:bg-gray-800 dark:text-white"
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
  );
}
