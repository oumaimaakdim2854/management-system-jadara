import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "./ui/mode-toggle"

export function SiteHeader() {
  return (
    <header className="mx-4 mt-4 mb-2 flex items-center justify-between h-16 px-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 text-zinc-900 dark:text-zinc-100 backdrop-blur-md shadow-md transition-all">
      
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <SidebarTrigger className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" />

        <Separator orientation="vertical" className="h-6 w-px bg-zinc-300 dark:bg-zinc-700" />

        <h1 className="text-xl font-semibold tracking-tight text-blue-600 dark:text-blue-400 text-xl">Documents</h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <ModeToggle />
      </div>
    </header>
  )
}
