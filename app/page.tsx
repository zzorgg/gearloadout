"use client"

import { MagnifyingGlass, Microphone } from "@phosphor-icons/react"
import { SettingsDrawer } from "@/components/settings-drawer"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="flex items-center justify-between p-4">
        <a
          href="/about"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          About
        </a>
        <SettingsDrawer />
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-6 px-4">
        <h1 className="text-4xl font-medium">GearLoadout</h1>
        <div className="flex w-full max-w-xl items-center gap-2 rounded-lg bg-muted px-4 py-3 transition-colors focus-within:bg-card">
          <MagnifyingGlass className="shrink-0 text-muted-foreground" weight="bold" size={20} />
          <input
            type="text"
            className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
            placeholder="Search privately"
            autoFocus
          />
          <button
            aria-label="Search by voice"
            className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Microphone weight="bold" size={20} />
          </button>
        </div>
      </main>
    </div>
  )
}
