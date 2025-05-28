import * as React from "react"
<<<<<<< HEAD
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  // IconDatabase,
  IconFileAi,
  IconFileDescription,
  // IconFileWord,
  IconFolder,
  IconHelp,
  // IconInnerShadowTop,
  IconListDetails,
  // IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

// import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
=======
import { useState } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
>>>>>>> 30ba4a193dc8728e318b6118e90eb98597964c85
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
<<<<<<< HEAD
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Users",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Groups",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Events",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Programs",
      url: "#",
      icon: IconListDetails,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  // documents: [
  //   {
  //     name: "Data Library",
  //     url: "#",
  //     icon: IconDatabase,
  //   },
  //   {
  //     name: "Reports",
  //     url: "#",
  //     icon: IconReport,
  //   },
  //   {
  //     name: "Word Assistant",
  //     url: "#",
  //     icon: IconFileWord,
  //   },
  // ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (

      <Sidebar
      
       collapsible="offcanvas"
      {...props}
      className="sidebar h-screen w-64 bg-[--sidebar] text-[--sidebar-foreground] rounded-r-2xl shadow-lg overflow-y-auto  overflow-hidden"

      >      
      <SidebarHeader className="bg-gradient-to-b from-sky-800 to-sky-700 dark:from-gray-900 dark:to-gray-800 p-4 rounded-tr-2xl">
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton asChild className="!p-2 hover:bg-white/10 rounded-lg transition">
        <a href="#" className="flex items-center gap-3">
          {/* Logo image using plain HTML <img> */}
          <img
            src="/logo.svg"
            alt="My Brand"
            width={32}
            height={32}
            className="rounded-md transition-transform hover:scale-105"
          />
          {/* <div className="flex flex-col"> */}
            {/* <span className="text-lg font-bold text-white">Jadara Foundation</span> */}
          {/* </div> */}
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
</SidebarHeader>

      <SidebarContent className="bg-sky-700 dark:bg-gray-950">
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="bg-sky-700 dark:bg-gray-950" >
        <NavUser user={data.user} />
      </SidebarFooter>
=======
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
    { title: "Dashboard", url: "#", icon: <LayoutDashboard className="w-4 h-4" /> },
    { title: "Users", url: "#", icon: <Users className="w-4 h-4" /> },
    { title: "Groups", url: "#", icon: <FolderKanban className="w-4 h-4" /> },
    { title: "Events", url: "#", icon: <Calendar className="w-4 h-4" /> },
    { title: "Programs", url: "#", icon: <FolderKanban className="w-4 h-4" /> },
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
>>>>>>> 30ba4a193dc8728e318b6118e90eb98597964c85
    </Sidebar>
  )
}
