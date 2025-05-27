"use client"

import * as React from "react"
import { type Icon } from "@tabler/icons-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: Icon
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup  {...props}>
      <SidebarGroupContent className="
          dark:from-gray-900 dark:to-gray-800
          text-white
          rounded-lg
          p-2
          shadow-inner
          overflow-hidden">
        <SidebarMenu className="flex flex-col gap-1">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}
                    className="
                    text-sm font-semibold
                    hover:bg-sky-600 dark:hover:bg-blue-700
                    hover:text-white
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400
                  "
                >
                  <item.icon />
                  <span className="truncate">{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
