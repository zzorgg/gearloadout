"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  SidebarSimple,
  CircleHalf,
  Sun,
  Moon,
  Desktop,
  Swatches,
  Check,
} from "@phosphor-icons/react"

export function AppSidebar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Appearance">
                <CircleHalf size={32} weight="bold" />
                <span>Appearance</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <div className="ml-8 flex flex-col gap-1 py-1">
              <button
                onClick={() => setTheme("light")}
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Sun size={16} />
                Light
                {theme === "light" && <Check size={16} className="ml-auto" />}
              </button>
              <button
                onClick={() => setTheme("dark")}
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Moon size={16} />
                Dark
                {theme === "dark" && <Check size={16} className="ml-auto" />}
              </button>
              <button
                onClick={() => setTheme("system")}
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Desktop size={16} />
                System
                {theme === "system" && <Check size={16} className="ml-auto" />}
              </button>
            </div>

            <SidebarMenuItem className="mt-2">
              <SidebarMenuButton tooltip="Customize">
                <Swatches size={32} weight="bold" />
                <span>Customize</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <div className="ml-8 flex flex-col gap-1 py-1">
              <button
                onClick={() => {}}
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                Change Background
              </button>
            </div>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
