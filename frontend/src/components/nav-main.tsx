import { IconCirclePlusFilled, type Icon } from "@tabler/icons-react"
// import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-4 bg-gradient-to-b from-sky-700 to-blue-900 dark:from-gray-900 dark:to-gray-800 text-white p-4 rounded-lg shadow-lg">
        {/* Quick Create + Inbox row */}
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-3">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="
                bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600
                min-w-[120px]
                font-semibold
                rounded-lg
                flex items-center justify-center
                gap-2
                shadow-md
                transition
                duration-300
                ease-in-out
                hover:scale-105
              "
            >
              <IconCirclePlusFilled className="text-white" size={20} />
              <span>Quick Create</span>
            </SidebarMenuButton>

            {/* <Button
              size="icon"
              variant="outline"
              className="
                size-8
                border-yellow-400
                text-yellow-400
                hover:bg-yellow-500 hover:text-white
                shadow-lg
                transition
                duration-300
                ease-in-out
                rounded-lg
              "
              aria-label="Inbox"
            >
              <IconMail size={20} />
              <span className="sr-only">Inbox</span>
            </Button> */}
          </SidebarMenuItem>
        </SidebarMenu>

        {/* Main navigation items */}
        <SidebarMenu className="flex flex-col gap-1">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                className="
                  flex items-center gap-3 px-3 py-2 rounded-md
                  hover:bg-sky-600 dark:hover:bg-blue-700
                  transition-colors duration-300
                "
              >
                {item.icon && <item.icon size={20} className="text-white" />}
                <span className="font-medium">{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
