import { Activity, Bike, Clock, MapPin, Ruler, Timer, Waves } from "lucide-react"

export function RecentActivities() {
  const activities = [
    {
      id: 1,
      type: "Running",
      icon: Activity,
      distance: "5.2 km",
      time: "28:35",
      date: "Today",
      location: "City Park",
    },
    {
      id: 2,
      type: "Cycling",
      icon: Bike,
      distance: "15.7 km",
      time: "45:12",
      date: "Yesterday",
      location: "Riverside Trail",
    },
    {
      id: 3,
      type: "Swimming",
      icon: Waves,
      distance: "1.5 km",
      time: "35:45",
      date: "2 days ago",
      location: "Community Pool",
    },
    {
      id: 4,
      type: "Running",
      icon: Activity,
      distance: "8.3 km",
      time: "42:18",
      date: "3 days ago",
      location: "Mountain Trail",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-4 rounded-md border p-3">
          <div className="rounded-full bg-primary/10 p-2">
            <activity.icon className="h-4 w-4 text-primary" />
          </div>
          <div className="flex-1 space-y-1">
            <p className="font-medium leading-none">{activity.type}</p>
            <div className="flex items-center pt-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Ruler className="mr-1 h-3 w-3" />
                <span>{activity.distance}</span>
              </div>
              <div className="mx-2 h-1 w-1 rounded-full bg-muted-foreground" />
              <div className="flex items-center text-sm text-muted-foreground">
                <Timer className="mr-1 h-3 w-3" />
                <span>{activity.time}</span>
              </div>
            </div>
            <div className="flex items-center pt-1">
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                <span>{activity.date}</span>
              </div>
              <div className="mx-2 h-1 w-1 rounded-full bg-muted-foreground" />
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-3 w-3" />
                <span>{activity.location}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
