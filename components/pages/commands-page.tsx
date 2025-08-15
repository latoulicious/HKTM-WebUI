"use client"

import { useState } from "react"
import { MessageSquare, Hash, Users, Clock, Search, Plus, Play, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function CommandsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const commands = [
    {
      id: 1,
      name: "/play",
      description: "Play music from YouTube or Spotify",
      category: "Music",
      usage: 1247,
      lastUsed: "2 minutes ago",
      status: "Active",
    },
    {
      id: 2,
      name: "/skip",
      description: "Skip the current song",
      category: "Music",
      usage: 856,
      lastUsed: "5 minutes ago",
      status: "Active",
    },
    {
      id: 3,
      name: "/ban",
      description: "Ban a user from the server",
      category: "Moderation",
      usage: 23,
      lastUsed: "1 hour ago",
      status: "Active",
    },
    {
      id: 4,
      name: "/kick",
      description: "Kick a user from the server",
      category: "Moderation",
      usage: 45,
      lastUsed: "30 minutes ago",
      status: "Active",
    },
    {
      id: 5,
      name: "/weather",
      description: "Get weather information for a location",
      category: "Utility",
      usage: 234,
      lastUsed: "15 minutes ago",
      status: "Active",
    },
    {
      id: 6,
      name: "/meme",
      description: "Generate a random meme",
      category: "Fun",
      usage: 567,
      lastUsed: "3 minutes ago",
      status: "Active",
    },
    {
      id: 7,
      name: "/poll",
      description: "Create a poll for the server",
      category: "Utility",
      usage: 89,
      lastUsed: "1 hour ago",
      status: "Inactive",
    },
    {
      id: 8,
      name: "/help",
      description: "Show available commands",
      category: "Utility",
      usage: 445,
      lastUsed: "10 minutes ago",
      status: "Active",
    },
  ]

  const filteredCommands = commands.filter(
    (command) =>
      command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      command.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalUsage = commands.reduce((sum, command) => sum + command.usage, 0)
  const activeCommands = commands.filter((command) => command.status === "Active").length
  const categories = [...new Set(commands.map((command) => command.category))]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Music":
        return Play
      case "Moderation":
        return Users
      case "Utility":
        return Hash
      case "Fun":
        return MessageSquare
      default:
        return Hash
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Music":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "Moderation":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      case "Utility":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Fun":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200"
    }
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Command Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium truncate">
                  Total Commands
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {commands.length}
                </p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-slate-800 dark:bg-slate-700 flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-2">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium truncate">
                  Active Commands
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {activeCommands}
                </p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-emerald-600 flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-2">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium truncate">
                  Total Usage
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {totalUsage.toLocaleString()}
                </p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-blue-600 flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-2">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium truncate">Categories</p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {categories.length}
                </p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-amber-600 flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-2">
                <Hash className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Add Command */}
      <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search commands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/50 dark:bg-slate-700/50 border-slate-200/50 dark:border-slate-600/50"
              />
            </div>
            <Button className="bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Command
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Commands List */}
      <div className="grid gap-4 sm:gap-6">
        {filteredCommands.map((command) => {
          const CategoryIcon = getCategoryIcon(command.category)
          return (
            <Card
              key={command.id}
              className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                      <CategoryIcon className="w-6 h-6 sm:w-7 sm:h-7 text-slate-600 dark:text-slate-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-lg sm:text-xl font-mono">
                          {command.name}
                        </h3>
                        <Badge className={getCategoryColor(command.category)}>{command.category}</Badge>
                        <Badge
                          variant={command.status === "Active" ? "default" : "secondary"}
                          className={
                            command.status === "Active"
                              ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                              : ""
                          }
                        >
                          {command.status}
                        </Badge>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mb-2 truncate">
                        {command.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1">
                          <BarChart3 className="w-3 h-3" />
                          {command.usage.toLocaleString()} uses
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {command.lastUsed}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
