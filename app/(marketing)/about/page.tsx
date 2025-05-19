import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Heart, Shield, Star, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                About FitTrack
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're on a mission to help you achieve your fitness goals and
                connect with a community of like-minded athletes.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="Our team"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Our Story</h2>
                <p className="text-muted-foreground">
                  FitTrack was founded in 2023 by a group of passionate athletes
                  who wanted to create a better way to track fitness activities
                  and connect with others.
                </p>
                <p className="text-muted-foreground">
                  What started as a small project has grown into a platform used
                  by thousands of athletes around the world. We're committed to
                  helping you achieve your fitness goals, whether you're a
                  beginner or a seasoned athlete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Values
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide everything we do.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 p-3 text-primary-foreground">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Community First</h3>
              <p className="text-center text-muted-foreground">
                We believe in the power of community to motivate and inspire.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 p-3 text-primary-foreground">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Privacy & Security</h3>
              <p className="text-center text-muted-foreground">
                Your data is yours. We're committed to keeping it secure and
                private.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 p-3 text-primary-foreground">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Continuous Improvement</h3>
              <p className="text-center text-muted-foreground">
                We're always working to make FitTrack better for our users.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 p-3 text-primary-foreground">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="text-center text-muted-foreground">
                We strive for excellence in everything we do.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 p-3 text-primary-foreground">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Inclusivity</h3>
              <p className="text-center text-muted-foreground">
                FitTrack is for everyone, regardless of fitness level or
                background.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Join our community today
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start tracking your fitness journey and connect with other
                athletes.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white border-0"
                  >
                    Sign Up <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted h-16 w-16 flex items-center justify-center">
                    <span className="font-bold text-xl">10K+</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Active Users</h3>
                    <p className="text-sm text-muted-foreground">
                      Join our growing community
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted h-16 w-16 flex items-center justify-center">
                    <span className="font-bold text-xl">500+</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Events</h3>
                    <p className="text-sm text-muted-foreground">
                      Organized through our platform
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted h-16 w-16 flex items-center justify-center">
                    <span className="font-bold text-xl">1M+</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Activities</h3>
                    <p className="text-sm text-muted-foreground">
                      Tracked on our platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
