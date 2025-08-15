"use client"

import { useState, useEffect } from "react"
import { Server, Users, MessageSquare, Activity, Plus, Music, Play, Pause, SkipForward, SkipBack } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export function DashboardPage() {
  const [activeUsers, setActiveUsers] = useState(1247)
  const [totalServers, setTotalServers] = useState(23)
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTime, setCurrentTime] = useState(142)
  const [duration, setDuration] = useState(245)

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

  const queue = [
    { title: "Synthwave Dreams", artist: "Neon Rider", duration: "3:45" },
    { title: "Digital Horizon", artist: "Cyber Wave", duration: "4:12" },
    { title: "Midnight Drive", artist: "Retro Future", duration: "3:28" },
    { title: "Electric Pulse", artist: "Synth Master", duration: "4:01" },
  ]

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
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
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium truncate">
                    {stat.title}
                  </p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-200 mt-1">
                    {stat.value}
                  </p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-slate-800 dark:bg-slate-700 flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-2">
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search Bar */}
      <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg">
        <CardHeader className="pb-3 sm:pb-4">
          <CardTitle className="text-slate-800 dark:text-slate-200 text-lg sm:text-xl">Add Music</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4">
          <div className="relative">
            <Input
              placeholder="Search for songs, artists, or playlists..."
              className="bg-white/50 dark:bg-slate-700/50 border-slate-200/50 dark:border-slate-600/50 text-slate-800 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400 transition-all duration-300 focus:scale-[1.02] h-10 sm:h-11 focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500"
            />
          </div>
          <Button className="w-full bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white transition-all duration-300 transform hover:scale-[1.02] h-10 sm:h-11">
            <Plus className="w-4 h-4 mr-2" />
            Add to Queue
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        {/* Now Playing */}
        <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="pb-3 sm:pb-4">
            <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-slate-200 text-lg sm:text-xl">
              <Music className="w-4 h-4 sm:w-5 sm:h-5" />
              Now Playing
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <div className="text-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 rounded-xl mb-4 flex items-center justify-center shadow-lg relative overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 dark:from-slate-500/50 to-transparent"></div>
                <Music className="w-12 h-12 sm:w-16 sm:h-16 text-slate-600 dark:text-slate-300 relative z-10" />
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-slate-800 dark:bg-slate-600 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-lg sm:text-xl">Synthwave Nights</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">Neon Dreams</p>
            </div>

            <div className="space-y-2">
              <Slider value={[(currentTime / duration) * 100]} max={100} step={1} className="w-full" />
              <div className="flex justify-between text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 sm:gap-6">
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-all duration-300 transform hover:scale-110 p-3 sm:p-2"
              >
                <SkipBack className="w-5 h-5 sm:w-4 sm:h-4" />
              </Button>
              <Button
                size="sm"
                className="bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white transition-all duration-300 transform hover:scale-110 p-3 sm:p-2"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="w-5 h-5 sm:w-4 sm:h-4" /> : <Play className="w-5 h-5 sm:w-4 sm:h-4" />}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-all duration-300 transform hover:scale-110 p-3 sm:p-2"
              >
                <SkipForward className="w-5 h-5 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Queue */}
        <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg group overflow-hidden">
          <CardHeader className="pb-3 sm:pb-4">
            <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-slate-200 text-lg sm:text-xl">
              <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
              Queue
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="space-y-2 sm:space-y-3 h-72 sm:h-80 overflow-y-auto transition-all duration-500 ease-out scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-400 dark:hover:scrollbar-thumb-slate-500 pr-2">
              {queue.map((song, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 sm:p-3 rounded-lg bg-slate-50/50 dark:bg-slate-700/50 hover:bg-slate-100/50 dark:hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-md min-h-[60px] sm:min-h-[56px] focus-within:bg-slate-100/50 dark:focus-within:bg-slate-600/50 cursor-pointer"
                  tabIndex={0}
                >
                  <div className="w-8 h-8 sm:w-8 sm:h-8 bg-slate-200 dark:bg-slate-600 rounded flex items-center justify-center flex-shrink-0">
                    <Music className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-800 dark:text-slate-200 truncate text-sm sm:text-base">
                      {song.title}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm truncate">{song.artist}</p>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm flex-shrink-0">
                    {song.duration}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
