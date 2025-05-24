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
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="first-name" className="text-zinc-800 dark:text-gray-300  text-base">
                  Full Name
                </Label>
                <Input
                  className="bg-white dark:bg-gray-800 dark:text-white"
                  id="first-name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>

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
                  required
                />
              </div>

              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full bg-sky-700 hover:bg-sky-900 text-lg font-serif ">
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
