"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import {
  List,
  Sun,
  Moon,
  Desktop,
  Swatches,
  CaretDown,
  CaretRight,
  Check,
  Gear,
  Palette,
} from "@phosphor-icons/react"

function MenuItem({
  icon,
  label,
  active,
  hasDropdown,
  expanded,
  onClick,
  children,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
  hasDropdown?: boolean
  expanded?: boolean
  onClick?: () => void
  children?: React.ReactNode
}) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
          active
            ? "bg-muted text-foreground"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        }`}
      >
        <span className="shrink-0">{icon}</span>
        <span className="flex-1 text-left">{label}</span>
        {hasDropdown && (
          <span className="shrink-0">
            {expanded ? <CaretDown size={16} /> : <CaretRight size={16} />}
          </span>
        )}
      </button>
      {expanded && children && (
        <div className="ml-6 mt-1 flex flex-col gap-0.5 border-l border-border pl-4">
          {children}
        </div>
      )}
    </div>
  )
}

function SubItem({
  label,
  active,
  onClick,
}: {
  label: string
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-3 py-1.5 text-sm text-left transition-colors ${
        active
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </button>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-3 pb-2 pt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
      {children}
    </p>
  )
}

export function SettingsDrawer() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [appearanceOpen, setAppearanceOpen] = useState(false)

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
      <SheetContent side="right" className="w-[280px] border-l border-border p-0">
        <SheetHeader className="sr-only">
          <SheetTitle>Settings</SheetTitle>
          <SheetDescription>Customize appearance and home page background</SheetDescription>
        </SheetHeader>
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-border px-4 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Gear size={18} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">GearLoadout</p>
              <p className="text-xs text-muted-foreground">Settings</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto px-2 py-2">
            <SectionLabel>Appearance</SectionLabel>
            <MenuItem
              icon={<Palette size={18} />}
              label="Theme"
              hasDropdown
              expanded={appearanceOpen}
              onClick={() => setAppearanceOpen(!appearanceOpen)}
            >
              <SubItem
                label="Light"
                active={theme === "light"}
                onClick={() => setTheme("light")}
              />
              <SubItem
                label="Dark"
                active={theme === "dark"}
                onClick={() => setTheme("dark")}
              />
              <SubItem
                label="System"
                active={theme === "system"}
                onClick={() => setTheme("system")}
              />
            </MenuItem>

            <Separator className="my-2" />

            <SectionLabel>Customize</SectionLabel>
            <MenuItem
              icon={<Swatches size={18} />}
              label="Change Background"
              onClick={() => {}}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
