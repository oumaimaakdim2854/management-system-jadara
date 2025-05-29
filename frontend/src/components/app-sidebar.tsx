import * as React from "react"
import { useState } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  Users,
  Calendar,
  FolderKanban,
  Settings,
  HelpCircle,
  Search,
} from "lucide-react"

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  main: [
    { title: "Dashboard", url: "/dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
    { title: "Users", url: "/dashboard/users", icon: <Users className="w-4 h-4" /> },
    { title: "Groups", url: "#", icon: <FolderKanban className="w-4 h-4" /> },
    { title: "Events", url: "#", icon: <Calendar className="w-4 h-4" /> },
    { title: "Programs", url: "/dashboard/programs", icon: <FolderKanban className="w-4 h-4" /> },
  ],
  support: [
    { title: "Settings", url: "#", icon: <Settings className="w-4 h-4" /> },
    { title: "Get help", url: "#", icon: <HelpCircle className="w-4 h-4" /> },
    { title: "Search", url: "#", icon: <Search className="w-4 h-4" /> },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [active, setActive] = useState("Dashboard")

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <a href="http://localhost:5173/login">
          <img
          src="../public/smta-logo1.png" 
          alt="My Logo"
          className="h-10 w-10 rounded-xl"
          />
        </a>
      </SidebarHeader>

      <SidebarContent className="flex flex-col h-full">
        {/* Main Section */}
        <div>
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs uppercase tracking-wider px-4 py-2 text-sky-100 bg-sky-700 rounded">
              Main
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {data.main.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                        active === item.title
                          ? "bg-muted text-primary"
                          : "hover:bg-amber-300 hover:text-base"
                      }`}
                      onClick={() => setActive(item.title)}
                    >
                      <a href={item.url} className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* Push Support section to bottom */}
        <div className="mt-auto">
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs uppercase tracking-wider px-4 py-2 text-sky-100 bg-sky-700 rounded">
              Support
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {data.support.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                        active === item.title
                          ? "bg-muted text-primary"
                          : "hover:bg-amber-300 hover:text-base"
                      }`}
                      onClick={() => setActive(item.title)}
                    >
                      <a href={item.url} className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
