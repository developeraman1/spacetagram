"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <Button
    size={"icon"} 
    variant={"ghost"} 
    className="cursor-pointer"
    onClick={() => setTheme(theme => theme === "dark" ? "light" : "dark")}>
        <Sun className="hidden dark:block" />
        <Moon className="block dark:hidden" />
    </Button>
  )
}
