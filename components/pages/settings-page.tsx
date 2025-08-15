"use client"

import { useState } from "react"
import { Bot, Shield, Music, Bell } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SettingsPage() {
  const [botName, setBotName] = useState("BotMaster")
  const [botStatus, setBotStatus] = useState("online")
  const [autoPlay, setAutoPlay] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [moderationEnabled, setModerationEnabled] = useState(true)
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome to the server! 🎉")

  const settingsCategories = [
    {
      title: "Bot Configuration",
      icon: Bot,
      settings: [
        {
          label: "Bot Name",
          description: "The display name for your bot",
          component: (
            <Input
              value={botName}
              onChange={(e) => setBotName(e.target.value)}
              className="bg-white/50 dark:bg-slate-700/50"
            />
          ),
        },
        {
          label: "Bot Status",
          description: "Set the bot's online status",
          component: (
            <Select value={botStatus} onValueChange={setBotStatus}>
              <SelectTrigger className="bg-white/50 dark:bg-slate-700/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="idle">Idle</SelectItem>
                <SelectItem value="dnd">Do Not Disturb</SelectItem>
                <SelectItem value="invisible">Invisible</SelectItem>
              </SelectContent>
            </Select>
          ),
        },
        {
          label: "Welcome Message",
          description: "Message sent to new members",
          component: (
            <Textarea
              value={welcomeMessage}
              onChange={(e) => setWelcomeMessage(e.target.value)}
              className="bg-white/50 dark:bg-slate-700/50"
              rows={3}
            />
          ),
        },
      ],
    },
    {
      title: "Music Settings",
      icon: Music,
      settings: [
        {
          label: "Auto-play",
          description: "Automatically play next song in queue",
          component: <Switch checked={autoPlay} onCheckedChange={setAutoPlay} />,
        },
        {
          label: "Default Volume",
          description: "Set the default music volume",
          component: (
            <Select defaultValue="50">
              <SelectTrigger className="bg-white/50 dark:bg-slate-700/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="25">25%</SelectItem>
                <SelectItem value="50">50%</SelectItem>
                <SelectItem value="75">75%</SelectItem>
                <SelectItem value="100">100%</SelectItem>
              </SelectContent>
            </Select>
          ),
        },
      ],
    },
    {
      title: "Moderation",
      icon: Shield,
      settings: [
        {
          label: "Auto-moderation",
          description: "Enable automatic content moderation",
          component: <Switch checked={moderationEnabled} onCheckedChange={setModerationEnabled} />,
        },
        {
          label: "Spam Protection",
          description: "Protect against spam messages",
          component: <Switch defaultChecked />,
        },
        {
          label: "Word Filter",
          description: "Filter inappropriate language",
          component: <Switch defaultChecked />,
        },
      ],
    },
    {
      title: "Notifications",
      icon: Bell,
      settings: [
        {
          label: "System Notifications",
          description: "Receive system alerts and updates",
          component: <Switch checked={notifications} onCheckedChange={setNotifications} />,
        },
        {
          label: "Command Errors",
          description: "Get notified of command failures",
          component: <Switch defaultChecked />,
        },
        {
          label: "Server Events",
          description: "Notifications for server joins/leaves",
          component: <Switch />,
        },
      ],
    },
  ]

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Settings Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium truncate">Bot Status</p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-200 mt-1 capitalize">
                  {botStatus}
                </p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-emerald-600 flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-2">
                <Bot className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium truncate">Auto-play</p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {autoPlay ? "On" : "Off"}
                </p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-purple-600 flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-2">
                <Music className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium truncate">Moderation</p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {moderationEnabled ? "Active" : "Inactive"}
                </p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-red-600 flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-2">
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
                  Notifications
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {notifications ? "On" : "Off"}
                </p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-blue-600 flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-2">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Settings Categories */}
      <div className="space-y-6">
        {settingsCategories.map((category, categoryIndex) => (
          <Card
            key={categoryIndex}
            className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg"
          >
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-slate-200 text-lg sm:text-xl">
                <category.icon className="w-5 h-5" />
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {category.settings.map((setting, settingIndex) => (
                <div key={settingIndex} className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <Label className="text-slate-800 dark:text-slate-200 font-medium">{setting.label}</Label>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{setting.description}</p>
                  </div>
                  <div className="flex-shrink-0">{setting.component}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Save Settings */}
      <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50">
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button variant="outline" className="border-slate-200 dark:border-slate-700 bg-transparent">
              Reset to Defaults
            </Button>
            <Button className="bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white">
              Save Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
