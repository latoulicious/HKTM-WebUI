"use client"

import { useState, useRef } from "react"
import { Bot, Server, Activity, Settings, MessageSquare, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

interface SidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
  mobileMenuOpen: boolean
  onToggleMobileMenu: () => void
}

export function Sidebar({ currentPage, onPageChange, mobileMenuOpen, onToggleMobileMenu }: SidebarProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 })
  const isMobile = useIsMobile()
  const navItemRefs = useRef<(HTMLDivElement | null)[]>([])

  const navigationItems = [
    { icon: Activity, label: "Dashboard" },
    { icon: Server, label: "Servers" },
    { icon: MessageSquare, label: "Commands" },
    { icon: Settings, label: "Settings" },
  ]

  const toggleSidebar = () => {
    if (isMobile) {
      onToggleMobileMenu()
    } else {
      setSidebarCollapsed(!sidebarCollapsed)
    }
  }

  const handleMouseEnter = (index: number) => {
    if (sidebarCollapsed && !isMobile && navItemRefs.current[index]) {
      const element = navItemRefs.current[index]
      const rect = element!.getBoundingClientRect()
      setTooltipPosition({
        top: rect.top + rect.height / 2,
        left: rect.right + 12,
      })
      setHoveredItem(index)
    }
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  return (
    <>
      {/* Global Tooltip Portal - Desktop only */}
      {!isMobile && sidebarCollapsed && hoveredItem !== null && (
        <div
          className="fixed bg-slate-900 dark:bg-slate-800 text-white px-3 py-2 rounded-lg text-sm shadow-xl border border-slate-700 dark:border-slate-600 transition-all duration-200 pointer-events-none whitespace-nowrap z-50"
          style={{
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
            transform: "translateY(-50%)",
          }}
        >
          {navigationItems[hoveredItem].label}
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-slate-900 dark:border-r-slate-800"></div>
        </div>
      )}

      <div
        className={`${
          isMobile
            ? `fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out ${
                mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : sidebarCollapsed
              ? "w-16"
              : "w-64"
        } backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col transition-all duration-500 ease-in-out flex-shrink-0 relative`}
      >
        <div
          className={`flex flex-col h-full ${
            isMobile ? "px-4 py-4" : sidebarCollapsed ? "px-2 py-4" : "p-4"
          } transition-all duration-500 ease-in-out`}
        >
          {/* Bot Info */}
          <div
            className={`flex items-center mb-8 transition-all duration-500 ease-in-out ${
              !isMobile && sidebarCollapsed ? "justify-center flex-col gap-1" : "gap-3"
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-slate-800 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 transition-all duration-300">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                !isMobile && sidebarCollapsed ? "w-0 h-0 opacity-0" : "w-auto opacity-100"
              }`}
            >
              <h1 className="text-slate-800 dark:text-slate-200 font-bold text-lg whitespace-nowrap">BotMaster</h1>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 transition-all duration-300"></div>
                <span className="text-slate-600 dark:text-slate-400 text-sm capitalize whitespace-nowrap">online</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav
            className={`space-y-2 flex-1 ${!isMobile && sidebarCollapsed ? "px-0" : ""} transition-all duration-300`}
          >
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                ref={(el) => (navItemRefs.current[index] = el)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`w-full flex items-center rounded-xl transition-all duration-300 ease-in-out ${
                    !isMobile && sidebarCollapsed ? "justify-center p-3 h-12" : "gap-3 px-3 py-3"
                  } ${
                    currentPage === item.label
                      ? "bg-slate-800 dark:bg-slate-700 text-white shadow-lg"
                      : "text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-700/50 hover:text-slate-800 dark:hover:text-slate-200"
                  }`}
                  onClick={() => onPageChange(item.label)}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0 transition-all duration-300" />
                  <span
                    className={`transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap ${
                      !isMobile && sidebarCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </div>
            ))}
          </nav>

          {/* Sidebar Toggle Button */}
          <div className="border-t border-slate-200/50 dark:border-slate-700/50 pt-4 mb-4 transition-all duration-500 ease-in-out">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSidebar}
              className={`w-full text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-300 ease-in-out transform hover:scale-105 ${
                !isMobile && sidebarCollapsed ? "justify-center p-2" : "justify-center px-3 py-2"
              }`}
              title={isMobile ? "Toggle menu" : sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <div className={`flex items-center gap-2 transition-all duration-300`}>
                <Menu className="w-4 h-4 flex-shrink-0 transition-all duration-300" />
                <span
                  className={`transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap text-sm ${
                    !isMobile && sidebarCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                  }`}
                >
                  {isMobile ? "Close Menu" : "Toggle Menu"}
                </span>
              </div>
            </Button>
          </div>

          {/* User Section */}
          <div
            className={`border-t border-slate-200/50 dark:border-slate-700/50 pt-4 transition-all duration-500 ease-in-out ${
              !isMobile && sidebarCollapsed
                ? "opacity-0 pointer-events-none h-0 overflow-hidden pt-0 border-t-0"
                : "opacity-100"
            }`}
          >
            <div className="flex items-center gap-3 mb-3 transition-all duration-300">
              <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">JD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-800 dark:text-slate-200 font-medium text-sm whitespace-nowrap truncate">
                  John Doe
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs whitespace-nowrap truncate">Administrator</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-300"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
