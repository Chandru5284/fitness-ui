import { Calendar, Clock, Filter, MapPin, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EventsPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Upcoming Events
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover and join events in your area. From casual group runs to
                competitive races.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <Input placeholder="Search events..." className="max-w-xs" />
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
            <Tabs defaultValue="all" className="w-full max-w-xs">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="running">Running</TabsTrigger>
                <TabsTrigger value="cycling">Cycling</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video w-full bg-muted flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-muted-foreground/50" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant={
                        i % 3 === 0
                          ? "default"
                          : i % 3 === 1
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {i % 3 === 0
                        ? "Running"
                        : i % 3 === 1
                        ? "Cycling"
                        : "Swimming"}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="mr-1 h-3 w-3" />
                      <span>{Math.floor(Math.random() * 100) + 10} joined</span>
                    </div>
                  </div>
                  <CardTitle>
                    City{" "}
                    {i % 3 === 0
                      ? "Marathon"
                      : i % 3 === 1
                      ? "Bike Tour"
                      : "Swim Meet"}{" "}
                    {i + 1}
                  </CardTitle>
                  <CardDescription>
                    {i % 3 === 0
                      ? "Join us for the annual city marathon. All skill levels welcome."
                      : i % 3 === 1
                      ? "A scenic bike tour through the city and surrounding areas."
                      : "Open water swimming competition at the city lake."}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2 text-sm">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>June {10 + i}, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{7 + i}:00 AM</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>City Park, Downtown</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white border-0">
                    Register Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
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
        </div>
      </section>
    </>
  );
}
