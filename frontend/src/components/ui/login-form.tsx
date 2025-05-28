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
    return (
    <div className={cn("flex flex-col gap-6  h-screen items-center justify-center bg-sky-700 dark:bg-gray-950", className)} {...props}>
        <Card className="w-full max-w-md p-6 bg-gray-100 dark:bg-gray-900 shadow-xl" >
            <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Login to your account</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-3">
                            <Label htmlFor="email" className="text-zinc-800 dark:text-gray-300 text-base">Email</Label>
                            <Input className="bg-white dark:bg-gray-800 dark:text-white"
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-3">
                            <div className="flex items-center">
                                <Label htmlFor="password" className="text-zinc-800 dark:text-gray-300  text-base">Password</Label>
                                {/*<a
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    Forgot your password?
                                </a>*/}
                            </div>
                            <Input className="bg-white dark:bg-gray-800 dark:text-white"
                            id="password" type="password" required />
                        </div>
                        <div className="flex flex-col gap-3 bg-blue-900">
                            <Button  type="submit" className="w-full bg-sky-700 hover:bg-sky-900 text-lg font-serif">
                                Login
                            </Button>
                            {/*<Button variant="outline" className="w-full">
                                Login with Google
                            </Button>*/}
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
)
}
