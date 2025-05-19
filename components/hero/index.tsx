import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Activity, ArrowRight, BarChart3, Heart, Trophy } from "lucide-react";
import Image from "next/image";
import FitnessImageWithShapes from "./fitness-image-with-shapes";
import AnimatedBackground from "./animated-background";

const HeroSection = () => {
  return (
    // <section className="w-full py-12 ">
    //   <div className="container px-4 md:px-16">
    //     <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
    //       <div className="flex flex-col justify-center space-y-4">
    //         <div className="space-y-2">
    //           <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
    //             Track Your Fitness Journey Like Never Before
    //           </h1>
    //           <p className="max-w-[600px] text-muted-foreground md:text-xl">
    //             Connect with Strava, track your activities, join events, and
    //             achieve your fitness goals with FitTrack.
    //           </p>
    //         </div>
    //         <div className="flex flex-col gap-2 min-[400px]:flex-row">
    //           <Link href="/signup">
    //             <Button size="lg" className="gap-1.5">
    //               Get Started <ArrowRight className="h-4 w-4" />
    //             </Button>
    //           </Link>
    //           <Link href="/about">
    //             <Button size="lg" variant="outline">
    //               Learn More
    //             </Button>
    //           </Link>
    //         </div>
    //       </div>
    //       <Image
    //         src="https://images.unsplash.com/photo-1576482231911-267f18422577"
    //         width={550}
    //         height={550}
    //         alt="Hero"
    //         className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
    //       />
    //     </div>
    //   </div>
    // </section>

    <main className="relative min-h-screen overflow-hidden md:px-16">
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="container relative z-10 px-4 py-12 mx-auto md:py-24">
        {/* Hero Section */}
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left Column - Content */}
          <div className="flex flex-col space-y-6">
            {/* Eyebrow text */}
            <div className="inline-flex items-center self-start gap-2 px-4 py-2 text-sm font-medium rounded-full bg-emerald-500/10 text-emerald-500">
              <Activity className="w-4 h-4" />
              <span>Track. Analyze. Improve.</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Your Fitness Journey,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Reimagined
              </span>
            </h1>

            {/* Subheading */}
            <p className="max-w-md text-lg text-slate-300">
              Track your workouts, monitor your progress, and achieve your
              fitness goals with our comprehensive fitness tracking platform.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-400" />
                <span className="text-sm font-medium text-slate-200">
                  Heart Rate Monitoring
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium text-slate-200">
                  Progress Analytics
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-medium text-slate-200">
                  Goal Setting
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium text-slate-200">
                  Workout Plans
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white border-0"
              >
                Start Your Journey
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white bg-transparent"
              >
                <span>View Features</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Social proof */}
            <div className="pt-6">
              <p className="mb-2 text-sm font-medium text-slate-400">
                TRUSTED BY ATHLETES WORLDWIDE
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-slate-800 bg-slate-700 flex items-center justify-center text-xs font-medium text-slate-300"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-slate-300">
                  <span className="font-semibold">10,000+</span> active users
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image with Shapes */}
          <div className="relative flex items-center justify-center px-6 md:px-0">
            <FitnessImageWithShapes />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
