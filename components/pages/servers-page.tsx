"use client"

import { useState } from "react"
import { Server, Users, Crown, Shield, Plus, Search, MoreVertical } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function ServersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const servers = [
    {
      id: 1,
      name: "Gaming Paradise",
      members: 1247,
      online: 342,
      icon: "🎮",
      role: "Admin",
      status: "Active",
      joinedDate: "2023-01-15",
    },
    {
      id: 2,
      name: "Music Lovers",
      members: 856,
      online: 123,
      icon: "🎵",
      role: "Moderator",
      status: "Active",
      joinedDate: "2023-02-20",
    },
    {
      id: 3,
      name: "Tech Talk",
      members: 2341,
      online: 567,
      icon: "💻",
      role: "Admin",
      status: "Active",
      joinedDate: "2023-01-08",
    },
    {
      id: 4,
      name: "Art Community",
      members: 445,
      online: 89,
      icon: "🎨",
      role: "Member",
      status: "Inactive",
      joinedDate: "2023-03-12",
    },
    {
      id: 5,
      name: "Study Group",
      members: 234,
      online: 45,
      icon: "📚",
      role: "Admin",
      status: "Active",
      joinedDate: "2023-02-28",
    },
  ]

  const filteredServers = servers.filter((server) => server.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const totalMembers = servers.reduce((sum, server) => sum + server.members, 0)
  const activeServers = servers.filter((server) => server.status === "Active").length

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Server Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium truncate">
                  Total Servers
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {servers.length}
                </p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-slate-800 dark:bg-slate-700 flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-2">
                <Server className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium truncate">
                  Active Servers
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {activeServers}
                </p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-emerald-600 flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium truncate">
                  Total Members
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {totalMembers.toLocaleString()}
                </p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-blue-600 flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium truncate">
                  Admin Roles
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {servers.filter((s) => s.role === "Admin").length}
                </p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-amber-600 flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-2">
                <Crown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Add Server */}
      <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search servers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/50 dark:bg-slate-700/50 border-slate-200/50 dark:border-slate-600/50"
              />
            </div>
            <Button className="bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Server
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Server List */}
      <div className="grid gap-4 sm:gap-6">
        {filteredServers.map((server) => (
          <Card
            key={server.id}
            className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
          >
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-2xl sm:text-3xl">
                    {server.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-lg sm:text-xl truncate">
                        {server.name}
                      </h3>
                      <Badge
                        variant={server.status === "Active" ? "default" : "secondary"}
                        className={
                          server.status === "Active"
                            ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                            : ""
                        }
                      >
                        {server.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {server.members.toLocaleString()} members
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        {server.online} online
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {server.role}
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-slate-600 dark:text-slate-400">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
