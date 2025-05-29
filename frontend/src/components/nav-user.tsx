import {
  IconCreditCard,
  IconDotsVertical,
  IconLogout,
  IconNotification,
  IconUserCircle,
} from "@tabler/icons-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="gap-3 rounded-xl px-3 py-2 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
{/* <Avatar className="">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-xl bg-sky-700 text-white">SMTA</AvatarFallback>
                </Avatar> */}
              {/* <div className="flex flex-col text-left text-sm leading-tight">
                <span className="truncate font-semibold text-zinc-800 dark:text-zinc-100">{user.name}</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                  {user.email}
                </span>
              </div> */}
              <IconDotsVertical className="ml-auto size-4 text-zinc-400" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-60 rounded-xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg border border-zinc-200 dark:border-zinc-700 shadow-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={6}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-3 px-3 py-3">
                <Avatar className="h-9 w-9 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-xl bg-sky-700 text-white">SMTA</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-100">{user.name}</span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup  >
              <DropdownMenuItem className="gap-2 hover:bg-sky-100 dark:hover:bg-sky-900">
                <IconUserCircle className="text-sky-500" />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 hover:bg-sky-100 dark:hover:bg-sky-900">
                <IconCreditCard className="text-sky-500" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 hover:bg-sky-100 dark:hover:bg-sky-900">
                <IconNotification className="text-sky-500" />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900">
              <IconLogout />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
