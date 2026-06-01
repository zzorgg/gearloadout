"use client"

import { MagnifyingGlass, Microphone } from "@phosphor-icons/react"
import { SettingsDrawer } from "@/components/settings-drawer"
import Image from "next/image"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="flex items-center justify-between p-4">
        <a
          href="/about"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          About
        </a>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/zzorgg/gearloadout"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
          >
            <Image
              src="/GitHub_Lockup_Black.svg"
              alt="GitHub"
              width={88}
              height={20}
              className="block dark:hidden"
              unoptimized
            />
            <Image
              src="/GitHub_Lockup_White.svg"
              alt="GitHub"
              width={88}
              height={20}
              className="hidden dark:block"
              unoptimized
            />
          </a>
          <SettingsDrawer />
        </div>
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
