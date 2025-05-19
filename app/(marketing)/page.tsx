import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart2,
  Clock,
  MapPin,
  Trophy,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero";

export default function HomePage() {
  return (
    <>
      {/* <section className="w-full py-12 ">
        <div className="container px-4 md:px-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Track Your Fitness Journey Like Never Before
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Connect with Strava, track your activities, join events, and
                  achieve your fitness goals with FitTrack.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="gap-1.5">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1576482231911-267f18422577"
              width={550}
              height={550}
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section> */}

      <HeroSection />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Features
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to track your fitness journey and connect
                with other athletes.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 p-3 text-primary-foreground">
                <BarChart2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Activity Tracking</h3>
              <p className="text-center text-muted-foreground">
                Sync with Strava to automatically track your runs, rides, swims
                and more.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 p-3 text-primary-foreground">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Community</h3>
              <p className="text-center text-muted-foreground">
                Connect with friends, join groups, and participate in challenges
                together.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 p-3 text-primary-foreground">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Events</h3>
              <p className="text-center text-muted-foreground">
                Discover and join local events, races, and group activities in
                your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Upcoming Events
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our community events and challenge yourself.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col space-y-3 rounded-lg border p-6"
              >
                <div className="rounded-md bg-muted  w-full aspect-video flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-muted-foreground/50" />
                  <img
                    src="https://plus.unsplash.com/premium_photo-1663090417989-b399378d45ac?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="rounded-lg"
                    alt=""
                  />
                </div>
                <h3 className="text-xl font-bold">City Marathon {i}</h3>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>June {10 + i}, 2025</span>
                </div>
                <p className="text-muted-foreground">
                  Join us for the annual city marathon. All skill levels
                  welcome.
                </p>
                <Link href="/events">
                  <Button variant="outline" className="w-full mt-2">
                    View Details
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/events">
              <Button size="lg" variant="outline">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to start your fitness journey?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of athletes who are already tracking their
                progress and achieving their goals.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  {/* <Button size="lg">Sign Up Now</Button> */}
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white border-0"
                  >
                    Sign Up Now
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={600}
              height={400}
              alt="Athletes running"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
