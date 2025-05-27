import * as React from "react"
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
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
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
    </Sidebar>
  )
}
