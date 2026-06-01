"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  List,
  Sun,
  Moon,
  Desktop,
  Swatches,
  CaretRight,
  Check,
} from "@phosphor-icons/react"

export function SettingsDrawer() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <List weight="bold" size={20} />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[360px]">
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col gap-4">
          <div>
            <p className="mb-2 text-sm font-medium">Appearance</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  <span className="flex items-center gap-2">
                    {theme === "light" && <Sun size={16} />}
                    {theme === "dark" && <Moon size={16} />}
                    {theme === "system" && <Desktop size={16} />}
                    {theme === "light" && "Light"}
                    {theme === "dark" && "Dark"}
                    {theme === "system" && "System"}
                  </span>
                  <CaretRight size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun size={16} className="mr-2" />
                  Light
                  {theme === "light" && <Check size={16} className="ml-auto" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon size={16} className="mr-2" />
                  Dark
                  {theme === "dark" && <Check size={16} className="ml-auto" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  <Desktop size={16} className="mr-2" />
                  System
                  {theme === "system" && <Check size={16} className="ml-auto" />}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Separator />

          <div>
            <p className="mb-2 text-sm font-medium">Customize Home Page</p>
            <Button variant="outline" className="w-full justify-between">
              <span className="flex items-center gap-2">
                <Swatches size={16} />
                Change Background
              </span>
              <CaretRight size={16} />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
