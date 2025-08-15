"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Menu, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { Sidebar } from "@/components/navigation/sidebar"
import { DashboardPage } from "@/components/pages/dashboard-page"
import { ServersPage } from "@/components/pages/servers-page"
import { CommandsPage } from "@/components/pages/commands-page"
import { SettingsPage } from "@/components/pages/settings-page"
import { LoadingAnimation } from "@/components/ui/loading-animation"

export default function DiscordBotDashboard() {
  const [currentPage, setCurrentPage] = useState("Dashboard")
  const [isLoading, setIsLoading] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isMobile) {
      setMobileMenuOpen(false)
    }
  }, [isMobile])

  const handlePageChange = (page: string) => {
    if (page === currentPage) return

    setIsLoading(true)
    if (isMobile) setMobileMenuOpen(false)

    // Simulate loading time for smooth transition
    setTimeout(() => {
      setCurrentPage(page)
      setIsLoading(false)
    }, 800)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "Dashboard":
        return <DashboardPage />
      case "Servers":
        return <ServersPage />
      case "Commands":
        return <CommandsPage />
      case "Settings":
        return <SettingsPage />
      default:
        return <DashboardPage />
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-slate-200/30 dark:bg-slate-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-slate-300/20 dark:bg-slate-600/20 rounded-full blur-3xl"></div>

        {/* Mobile Menu Backdrop */}
        {isMobile && mobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setMobileMenuOpen(false)} />
        )}

        <div className="relative flex h-screen">
          {/* Sidebar */}
          <Sidebar
            currentPage={currentPage}
            onPageChange={handlePageChange}
            mobileMenuOpen={mobileMenuOpen}
            onToggleMobileMenu={toggleMobileMenu}
          />

          {/* Main Content */}
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10 transition-all duration-500 ease-in-out">
            <div className="p-4 sm:p-6 lg:p-8 overflow-auto flex-1">
              <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div className="flex items-center gap-4">
                    {isMobile && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleMobileMenu}
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 p-2"
                      >
                        <Menu className="w-5 h-5" />
                      </Button>
                    )}
                    <div className="transition-all duration-300">
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-1 sm:mb-2">
                        {currentPage}
                      </h2>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                        {currentPage === "Dashboard" && "Monitor your Discord bot's performance"}
                        {currentPage === "Servers" && "Manage your bot's server connections"}
                        {currentPage === "Commands" && "Configure and monitor bot commands"}
                        {currentPage === "Settings" && "Customize your bot's behavior"}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleTheme}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 p-2"
                  >
                    {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </Button>
                </div>

                {/* Page Content with Loading Animation */}
                <div className="relative">
                  {isLoading && <LoadingAnimation />}
                  <div
                    className={`transition-all duration-500 ${isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
                  >
                    {renderCurrentPage()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
