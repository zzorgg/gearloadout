"use client"

import { useState, useRef } from "react"
import { MagnifyingGlass, Microphone, SquareHalf, SquaresFour, Selection } from "@phosphor-icons/react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Image from "next/image"

export default function Page() {
  const [focusMode, setFocusMode] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const toggleFocusMode = () => {
    if (!focusMode) {
      if (!audioRef.current) {
        audioRef.current = new Audio("/on.mp3")
      }
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(() => {})
    }
    setFocusMode((prev) => !prev)
  }

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <div className="flex min-h-svh flex-col">
          <header className="relative flex items-center justify-between p-4">
            <div className={`flex items-center gap-3 transition-opacity duration-300 ${focusMode ? "opacity-0 pointer-events-none" : ""}`}>
              <SidebarTrigger className="text-muted-foreground transition-colors hover:text-foreground">
                <SquareHalf weight="bold" size={32} />
              </SidebarTrigger>
              <a
                href="/about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className={`transition-opacity duration-300 ${focusMode ? "opacity-0 pointer-events-none" : ""}`}>
                <a
                  href="https://github.com/zzorgg/gearloadout"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/GitHub_Lockup_Black.svg"
                    alt="GitHub"
                    width={88}
                    height={20}
                    className="block dark:hidden"
                    unoptimized
                    loading="eager"
                  />
                  <Image
                    src="/GitHub_Lockup_White.svg"
                    alt="GitHub"
                    width={88}
                    height={20}
                    className="hidden dark:block"
                    unoptimized
                    loading="eager"
                  />
                </a>
              </div>
              <button
                onClick={toggleFocusMode}
                className="text-muted-foreground"
                aria-label="Toggle focus mode"
              >
                {focusMode ? (
                  <Selection weight="bold" size={24} />
                ) : (
                  <SquaresFour weight="bold" size={24} />
                )}
              </button>
            </div>
          </header>

          <main className="flex flex-1 flex-col items-center justify-center gap-6 px-4">
            <div className="flex w-full max-w-xl items-center gap-2 rounded-lg bg-muted px-4 py-3">
              <MagnifyingGlass className="shrink-0 text-muted-foreground" weight="bold" size={20} />
              <input
                type="text"
                className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                placeholder="Search the gaming universe..."
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
      </SidebarInset>
    </SidebarProvider>
  )
}
