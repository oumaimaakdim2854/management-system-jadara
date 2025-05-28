import { LoginForm } from "@/components/ui/login-form"
import image from "@/assets/smta.jpeg"

function Page() {
    return (
    <>
    <div className="grid min-h-svh lg:grid-cols-2 bg-sky-700">
        <div className="flex flex-col gap-4 p-6 md:p-10">
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-md">
                    <LoginForm />
                </div>
            </div>
        </div>
        <div className="relative hidden bg-muted lg:block">
            <img
                src={image}
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
        </div>
    </div>

    </>
)
}

export default Page

