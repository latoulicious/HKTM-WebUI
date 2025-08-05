"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/glass-card"
import { ShieldCheck, Music, MessageSquareText, BarChart2, Bot, Sparkles, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"
import { toast } from "sonner" // Assuming sonner is available for toasts

export default function LandingPage() {
  const [copied, setCopied] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for user's preferred theme from localStorage
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setDarkMode(savedTheme === "dark")
    } else {
      // Default to dark mode if no preference is saved
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    // Apply the theme to the document element
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  const handleCopy = () => {
    navigator.clipboard.writeText("npx create-botmaster-app@latest")
    setCopied(true)
    toast.success("Copied to clipboard!")
    setTimeout(() => setCopied(2000))
  }

  const toggleTheme = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-800 relative overflow-hidden text-slate-800 dark:text-white transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-50 animate-pulse-slow dark:bg-purple-300/20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-50 animate-pulse-slow delay-1000 dark:bg-blue-300/20"></div>

      {/* Navigation Bar */}
      <nav className="relative z-20 flex items-center justify-between p-4 md:px-8 py-6 backdrop-blur-sm bg-white/10 dark:bg-black/10 border-b border-slate-200/10 dark:border-white/10">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-slate-800 dark:text-white">
          <Bot className="w-8 h-8" />
          BotMaster
        </Link>
        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="ghost"
            className="text-slate-800 hover:bg-slate-200/10 dark:text-white dark:hover:bg-white/10"
          >
            <Link href="#">Login</Link>
          </Button>
          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
            <Link href="#">Invite Bot</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-slate-800 hover:bg-slate-200/10 dark:text-white dark:hover:bg-white/10"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative w-full max-w-7xl mx-auto mb-20 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl z-10">
            <div className="inline-flex items-center gap-2 bg-purple-600/20 text-white text-sm font-medium px-3 py-1 rounded-full mb-6 border border-purple-500/50">
              <Sparkles className="w-4 h-4" />
              Get Pro - 6 spots at this price
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 dark:text-white leading-tight mb-6">
              Build faster than AI with <span className="text-purple-600 dark:text-purple-400">BotMaster</span> for
              Discord
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8">
              The open-source stack that helps you ship powerful Discord bots faster than VC-backed startups.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <Button
                asChild
                className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Link href="#invite-bot">Invite the Bot</Link>
              </Button>
              <div className="flex -space-x-2 overflow-hidden">
                <Image
                  src="/diverse-avatars.png"
                  alt="User avatar"
                  width={32}
                  height={32}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-100 dark:ring-slate-900"
                />
                <Image
                  src="/diverse-avatars.png"
                  alt="User avatar"
                  width={32}
                  height={32}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-100 dark:ring-slate-900"
                />
                <Image
                  src="/diverse-avatars.png"
                  alt="User avatar"
                  width={32}
                  height={32}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-100 dark:ring-slate-900"
                />
              </div>
              <span className="text-slate-500 dark:text-slate-400 text-sm">Used by 1k+ indie creators</span>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <Image
              src="/hero-dashboard.png"
              alt="BotMaster Dashboard Screenshot"
              width={800}
              height={500}
              className="rounded-xl shadow-2xl border border-slate-200/10 dark:border-white/10 transition-transform duration-500 ease-out"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto mb-20 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <GlassCard className="p-6 text-center bg-slate-100/50 dark:bg-white/5">
              <ShieldCheck className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Advanced Moderation</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Keep your community safe with automated moderation tools, customizable rules, and logging.
              </p>
            </GlassCard>
            <GlassCard className="p-6 text-center bg-slate-100/50 dark:bg-white/5">
              <Music className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Dynamic Music Playback</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Stream high-quality audio from various sources directly into your voice channels.
              </p>
            </GlassCard>
            <GlassCard className="p-6 text-center bg-slate-100/50 dark:bg-white/5">
              <MessageSquareText className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Custom Commands</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Create personalized commands to automate tasks and engage your members.
              </p>
            </GlassCard>
            <GlassCard className="p-6 text-center bg-slate-100/50 dark:bg-white/5">
              <BarChart2 className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Server Analytics</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Gain insights into your server's activity, user engagement, and bot performance.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-4 text-center text-slate-500 dark:text-slate-400 text-sm border-t border-slate-200/10 dark:border-white/10 mt-12">
          <p>&copy; {new Date().getFullYear()} BotMaster. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
