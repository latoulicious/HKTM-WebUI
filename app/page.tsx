"use client"

import { useState, useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import {
  Bot,
  Server,
  Users,
  Activity,
  Settings,
  MessageSquare,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Search,
  Plus,
  Music,
  Menu,
  Sun,
  Moon,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export default function DiscordBotDashboard() {
  const [botStatus, setBotStatus] = useState<"online" | "offline" | "idle">("online")
  const [activeUsers, setActiveUsers] = useState(1247)
  const [totalServers, setTotalServers] = useState(23)
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTime, setCurrentTime] = useState(142)
  const [duration, setDuration] = useState(245)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 })

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const navItemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers((prev) => prev + Math.floor(Math.random() * 10) - 5)
      if (isPlaying && currentTime < duration) {
        setCurrentTime((prev) => prev + 1)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [isPlaying, currentTime, duration])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const statusColor = {
    online: "bg-emerald-500",
    offline: "bg-slate-400",
    idle: "bg-amber-500",
  }

  const queue = [
    { title: "Synthwave Dreams", artist: "Neon Rider", duration: "3:45" },
    { title: "Digital Horizon", artist: "Cyber Wave", duration: "4:12" },
    { title: "Midnight Drive", artist: "Retro Future", duration: "3:28" },
    { title: "Electric Pulse", artist: "Synth Master", duration: "4:01" },
  ]

  const navigationItems = [
    { icon: Activity, label: "Dashboard", active: true },
    { icon: Server, label: "Servers" },
    { icon: MessageSquare, label: "Commands" },
    { icon: Settings, label: "Settings" },
  ]

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleMouseEnter = (index: number) => {
    if (sidebarCollapsed && navItemRefs.current[index]) {
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

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-200/30 dark:bg-slate-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-300/20 dark:bg-slate-600/20 rounded-full blur-3xl"></div>

        {/* Global Tooltip Portal */}
        {sidebarCollapsed && hoveredItem !== null && (
          <div
            className="fixed bg-slate-900 dark:bg-slate-800 text-white px-3 py-2 rounded-lg text-sm shadow-xl border border-slate-700 dark:border-slate-600 transition-all duration-200 pointer-events-none whitespace-nowrap z-50"
            style={{
              top: `${tooltipPosition.top}px`,
              left: `${tooltipPosition.left}px`,
              transform: "translateY(-50%)",
            }}
          >
            {navigationItems[hoveredItem].label}
            {/* Tooltip arrow */}
            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-slate-900 dark:border-r-slate-800"></div>
          </div>
        )}

        <div className="relative flex h-screen">
          {/* Sidebar */}
          <div
            className={`${
              sidebarCollapsed ? "w-16" : "w-64"
            } backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col transition-all duration-500 ease-in-out flex-shrink-0 relative z-40`}
          >
            {/* Sidebar Content Container */}
            <div
              className={`flex flex-col h-full ${sidebarCollapsed ? "px-2 py-4" : "p-4"} transition-all duration-500 ease-in-out`}
            >
              {/* Bot Info - Clean without toggle */}
              <div
                className={`flex items-center mb-8 transition-all duration-500 ease-in-out ${
                  sidebarCollapsed ? "justify-center flex-col gap-1" : "gap-3"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    sidebarCollapsed ? "w-0 h-0 opacity-0" : "w-auto opacity-100"
                  }`}
                >
                  <h1 className="text-slate-800 dark:text-slate-200 font-bold text-lg whitespace-nowrap">BotMaster</h1>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${statusColor[botStatus]} transition-all duration-300`}></div>
                    <span className="text-slate-600 dark:text-slate-400 text-sm capitalize whitespace-nowrap">
                      {botStatus}
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className={`space-y-2 flex-1 ${sidebarCollapsed ? "px-0" : ""} transition-all duration-300`}>
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
                        sidebarCollapsed ? "justify-center p-2 h-10" : "gap-3 px-3 py-3"
                      } ${
                        item.active
                          ? "bg-slate-800 dark:bg-slate-700 text-white shadow-lg"
                          : "text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-700/50 hover:text-slate-800 dark:hover:text-slate-200"
                      }`}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0 transition-all duration-300" />
                      <span
                        className={`transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap ${
                          sidebarCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                  </div>
                ))}
              </nav>

              {/* Sidebar Toggle Button - Bottom Position with Hamburger Icon Only */}
              <div
                className={`border-t border-slate-200/50 dark:border-slate-700/50 pt-4 mb-4 transition-all duration-500 ease-in-out`}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleSidebar}
                  className={`w-full text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-300 ease-in-out transform hover:scale-105 ${
                    sidebarCollapsed ? "justify-center p-2" : "justify-center px-3 py-2"
                  }`}
                  title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                  <div className={`flex items-center gap-2 transition-all duration-300 ${sidebarCollapsed ? "" : ""}`}>
                    <Menu className="w-4 h-4 flex-shrink-0 transition-all duration-300" />
                    <span
                      className={`transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap text-sm ${
                        sidebarCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                      }`}
                    >
                      Toggle Menu
                    </span>
                  </div>
                </Button>
              </div>

              {/* User Section */}
              <div
                className={`border-t border-slate-200/50 dark:border-slate-700/50 pt-4 transition-all duration-500 ease-in-out ${
                  sidebarCollapsed ? "opacity-0 pointer-events-none h-0 overflow-hidden pt-0 border-t-0" : "opacity-100"
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
                    <p className="text-slate-600 dark:text-slate-400 text-xs whitespace-nowrap truncate">
                      Administrator
                    </p>
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

          {/* Main Content */}
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10 transition-all duration-500 ease-in-out">
            <div className="p-8 overflow-auto flex-1">
              <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="transition-all duration-300">
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">Dashboard</h2>
                    <p className="text-slate-600 dark:text-slate-400">
                      Monitor your Discord bot's performance and activity
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleTheme}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105"
                  >
                    {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </Button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {[
                    { title: "Total Servers", value: totalServers, icon: Server },
                    { title: "Active Users", value: activeUsers.toLocaleString(), icon: Users },
                    { title: "Commands Today", value: "2,847", icon: MessageSquare },
                    { title: "Uptime", value: "99.9%", icon: Activity },
                  ].map((stat, index) => (
                    <Card
                      key={index}
                      className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">{stat.title}</p>
                            <p className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-1">{stat.value}</p>
                          </div>
                          <div className="w-12 h-12 rounded-xl bg-slate-800 dark:bg-slate-700 flex items-center justify-center transition-all duration-300">
                            <stat.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Search Bar */}
                <Card className="mb-8 backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                      <Search className="w-5 h-5" />
                      Add Music
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        placeholder="Search for songs, artists, or playlists..."
                        className="pl-10 bg-white/50 dark:bg-slate-700/50 border-slate-200/50 dark:border-slate-600/50 text-slate-800 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400 transition-all duration-300 focus:scale-105"
                      />
                    </div>

                    <Button className="w-full bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white transition-all duration-300 transform hover:scale-105">
                      <Plus className="w-4 h-4 mr-2" />
                      Add to Queue
                    </Button>
                  </CardContent>
                </Card>

                {/* Now Playing and Queue */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Now Playing */}
                  <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                        <Music className="w-5 h-5" />
                        Now Playing
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="w-40 h-40 mx-auto bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 rounded-xl mb-4 flex items-center justify-center shadow-lg relative overflow-hidden transition-all duration-300 hover:scale-105">
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 dark:from-slate-500/50 to-transparent"></div>
                          <Music className="w-16 h-16 text-slate-600 dark:text-slate-300 relative z-10" />
                          <div className="absolute bottom-2 right-2 w-3 h-3 bg-slate-800 dark:bg-slate-600 rounded-full flex items-center justify-center">
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-lg">Synthwave Nights</h3>
                        <p className="text-slate-600 dark:text-slate-400">Neon Dreams</p>
                      </div>

                      <div className="space-y-2">
                        <Slider value={[(currentTime / duration) * 100]} max={100} step={1} className="w-full" />
                        <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                          <span>{formatTime(currentTime)}</span>
                          <span>{formatTime(duration)}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-4">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-all duration-300 transform hover:scale-110"
                        >
                          <SkipBack className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          className="bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white transition-all duration-300 transform hover:scale-110"
                          onClick={() => setIsPlaying(!isPlaying)}
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-all duration-300 transform hover:scale-110"
                        >
                          <SkipForward className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Queue */}
                  <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                        <Activity className="w-5 h-5" />
                        Queue
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 max-h-80 overflow-y-auto">
                        {queue.map((song, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 rounded-lg bg-slate-50/50 dark:bg-slate-700/50 hover:bg-slate-100/50 dark:hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-105"
                          >
                            <div className="w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded flex items-center justify-center">
                              <Music className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-slate-800 dark:text-slate-200 truncate">{song.title}</p>
                              <p className="text-slate-600 dark:text-slate-400 text-sm truncate">{song.artist}</p>
                            </div>
                            <span className="text-slate-500 dark:text-slate-400 text-sm">{song.duration}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
