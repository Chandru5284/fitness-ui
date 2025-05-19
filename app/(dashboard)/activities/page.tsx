import type React from "react"
import { Activity, Bike, Calendar, Clock, Filter, MapPin, Ruler, Timer, Waves } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

interface LabelProps {
  htmlFor: string
  children: React.ReactNode
}

export default function ActivitiesPage() {
  const activities = [
    {
      id: 1,
      type: "Running",
      icon: Activity,
      distance: "5.2 km",
      time: "28:35",
      date: "Today",
      location: "City Park",
      pace: "5:30 /km",
      calories: "320",
    },
    {
      id: 2,
      type: "Cycling",
      icon: Bike,
      distance: "15.7 km",
      time: "45:12",
      date: "Yesterday",
      location: "Riverside Trail",
      pace: "20.8 km/h",
      calories: "450",
    },
    {
      id: 3,
      type: "Swimming",
      icon: Waves,
      distance: "1.5 km",
      time: "35:45",
      date: "2 days ago",
      location: "Community Pool",
      pace: "2:23 /100m",
      calories: "380",
    },
    {
      id: 4,
      type: "Running",
      icon: Activity,
      distance: "8.3 km",
      time: "42:18",
      date: "3 days ago",
      location: "Mountain Trail",
      pace: "5:05 /km",
      calories: "520",
    },
    {
      id: 5,
      type: "Cycling",
      icon: Bike,
      distance: "20.1 km",
      time: "1:05:30",
      date: "5 days ago",
      location: "City Loop",
      pace: "18.4 km/h",
      calories: "580",
    },
    {
      id: 6,
      type: "Running",
      icon: Activity,
      distance: "10.5 km",
      time: "55:42",
      date: "1 week ago",
      location: "Beach Promenade",
      pace: "5:18 /km",
      calories: "640",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Activities</h2>
          <p className="text-muted-foreground">View and manage your fitness activities.</p>
        </div>
        <Button>Record Activity</Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-end">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="search">Search</Label>
          <Input id="search" placeholder="Search activities..." />
        </div>
        <div className="grid gap-2 md:w-[150px]">
          <Label htmlFor="type">Type</Label>
          <Select defaultValue="all">
            <SelectTrigger id="type">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="running">Running</SelectItem>
              <SelectItem value="cycling">Cycling</SelectItem>
              <SelectItem value="swimming">Swimming</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2 md:w-[150px]">
          <Label htmlFor="date">Date</Label>
          <Select defaultValue="all">
            <SelectTrigger id="date">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="this-year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button variant="outline" size="icon" className="mt-8">
          <Filter className="h-4 w-4" />
          <span className="sr-only">Filter</span>
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="running">Running</TabsTrigger>
          <TabsTrigger value="cycling">Cycling</TabsTrigger>
          <TabsTrigger value="swimming">Swimming</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4">
            {activities.map((activity) => (
              <Card key={activity.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-2">
                        <activity.icon className="h-4 w-4 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{activity.type}</CardTitle>
                    </div>
                    <Badge
                      variant={
                        activity.type === "Running" ? "default" : activity.type === "Cycling" ? "secondary" : "outline"
                      }
                    >
                      {activity.type}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center pt-1">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>{activity.date}</span>
                    <div className="mx-2 h-1 w-1 rounded-full bg-muted-foreground" />
                    <MapPin className="mr-1 h-3 w-3" />
                    <span>{activity.location}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="flex flex-col space-y-1">
                      <span className="text-xs text-muted-foreground">Distance</span>
                      <div className="flex items-center">
                        <Ruler className="mr-1 h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{activity.distance}</span>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <span className="text-xs text-muted-foreground">Time</span>
                      <div className="flex items-center">
                        <Timer className="mr-1 h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{activity.time}</span>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <span className="text-xs text-muted-foreground">Pace</span>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{activity.pace}</span>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <span className="text-xs text-muted-foreground">Calories</span>
                      <div className="flex items-center">
                        <Activity className="mr-1 h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{activity.calories}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                <span className="sr-only">Previous page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="font-medium">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Next page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="running" className="space-y-4">
          <div className="grid gap-4">
            {activities
              .filter((a) => a.type === "Running")
              .map((activity) => (
                <Card key={activity.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-2">
                          <activity.icon className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{activity.type}</CardTitle>
                      </div>
                      <Badge>{activity.type}</Badge>
                    </div>
                    <CardDescription className="flex items-center pt-1">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>{activity.date}</span>
                      <div className="mx-2 h-1 w-1 rounded-full bg-muted-foreground" />
                      <MapPin className="mr-1 h-3 w-3" />
                      <span>{activity.location}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Distance</span>
                        <div className="flex items-center">
                          <Ruler className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{activity.distance}</span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Time</span>
                        <div className="flex items-center">
                          <Timer className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{activity.time}</span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Pace</span>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{activity.pace}</span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Calories</span>
                        <div className="flex items-center">
                          <Activity className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{activity.calories}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="cycling" className="space-y-4">
          <div className="grid gap-4">
            {activities
              .filter((a) => a.type === "Cycling")
              .map((activity) => (
                <Card key={activity.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-2">
                          <activity.icon className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{activity.type}</CardTitle>
                      </div>
                      <Badge variant="secondary">{activity.type}</Badge>
                    </div>
                    <CardDescription className="flex items-center pt-1">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>{activity.date}</span>
                      <div className="mx-2 h-1 w-1 rounded-full bg-muted-foreground" />
                      <MapPin className="mr-1 h-3 w-3" />
                      <span>{activity.location}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Distance</span>
                        <div className="flex items-center">
                          <Ruler className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{activity.distance}</span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Time</span>
                        <div className="flex items-center">
                          <Timer className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{activity.time}</span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Pace</span>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{activity.pace}</span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Calories</span>
                        <div className="flex items-center">
                          <Activity className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{activity.calories}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="swimming" className="space-y-4">
          <div className="grid gap-4">
            {activities
              .filter((a) => a.type === "Swimming")
              .map((activity) => (
                <Card key={activity.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-2">
                          <activity.icon className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{activity.type}</CardTitle>
                      </div>
                      <Badge variant="outline">{activity.type}</Badge>
                    </div>
                    <CardDescription className="flex items-center pt-1">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>{activity.date}</span>
                      <div className="mx-2 h-1 w-1 rounded-full bg-muted-foreground" />
                      <MapPin className="mr-1 h-3 w-3" />
                      <span>{activity.location}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Distance</span>
                        <div className="flex items-center">
                          <Ruler className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{activity.distance}</span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Time</span>
                        <div className="flex items-center">
                          <Timer className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{activity.time}</span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Pace</span>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{activity.pace}</span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Calories</span>
                        <div className="flex items-center">
                          <Activity className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{activity.calories}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function Label({ htmlFor, children }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {children}
    </label>
  )
}
