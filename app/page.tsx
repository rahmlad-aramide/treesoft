import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Code,
  Palette,
  Smartphone,
  Users,
  Target,
  Clock,
} from "lucide-react";
import Image from "next/image";
import hero from "@/assets/images/hero.avif";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative bg-[#10141A] dark:bg-[#10141A] py-24 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 20, 26, 0.8), rgba(16, 20, 26, 0.8)), url(https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-brightGreen dark:border-lightGreen px-4 py-2 text-xs md:text-sm">
                <Badge
                  variant="secondary"
                  className="mr-2 bg-brightGreen dark:bg-lightGreen"
                >
                  New
                </Badge>
                Cohort 1 - 2025 Enrollment Now Open
              </div>
              <h1 className="text-4xl font-bold leading-normal md:text-6xl relative">
                Transform Your Tech Journey with{" "}
                <span className="dark:text-lightGreen text-white relative z-20 mt-2">
                  Treesoft Academy
                </span>
              </h1>
              <p className="text-lg text-gray-300">
                Join a community of innovators and master the skills that shape
                tomorrow&apos;s technology. From frontend development to UI/UX
                design, we&apos;re here to guide your journey.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button asChild size="lg">
                  <Link href="/register">Start Your Journey</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/courses">Explore Courses</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg shadow-xl">
                <Image
                  src={hero}
                  alt="Students learning"
                  className="rounded-lg"
                  width={1471}
                  height={981}
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-1/2 w-11/12 -translate-x-1/2 transform">
                <div className="grid grid-cols-3 gap-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#013101] dark:text-lightGreen">
                      50+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Students
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#013101] dark:text-lightGreen">
                      15+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Courses
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#013101] dark:text-lightGreen">
                      10+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Instructors
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why Choose Treesoft Academy?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We combine industry expertise with innovative teaching methods to
              provide you with the best learning experience.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Expert Instructors",
                description:
                  "Learn from industry professionals with years of real-world experience.",
              },
              {
                icon: Target,
                title: "Practical Learning",
                description:
                  "Gain hands-on experience through real-world projects and case studies.",
              },
              {
                icon: Clock,
                title: "Flexible Schedule",
                description:
                  "Study at your own pace with our flexible learning options.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none bg-muted/50">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-[#013101] p-3 text-white dark:bg-lightGreen dark:text-black">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="bg-muted py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Featured Courses
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explore our most popular courses designed to help you master the
              latest technologies.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Frontend Development",
                icon: Code,
                description:
                  "Master modern web development with React, Next.js, and more.",
                price: "$499",
                duration: "12 weeks",
              },
              {
                title: "Backend Development",
                icon: BookOpen,
                description: "Build robust server-side applications and APIs.",
                price: "$599",
                duration: "14 weeks",
              },
              {
                title: "Mobile Development",
                icon: Smartphone,
                description: "Create native mobile apps for iOS and Android.",
                price: "$699",
                duration: "16 weeks",
              },
              {
                title: "UI/UX Design",
                icon: Palette,
                description: "Design beautiful and intuitive user interfaces.",
                price: "$449",
                duration: "10 weeks",
              },
            ].map((course, index) => (
              <Card key={index} className="group relative overflow-hidden">
                <CardContent className="p-6">
                  <course.icon className="mb-4 h-12 w-12 text-[#013101] dark:text-lightGreen" />
                  <h3 className="mb-2 text-xl font-semibold group-hover:text-[#013101] dark:group-hover:text-lightGreen">
                    {course.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-[#013101] dark:text-lightGreen">
                      {course.price}
                    </span>
                    <span className="text-muted-foreground">
                      {course.duration}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-[#013101] hover:bg-darkGreen"
            >
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Student Success Stories
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Hear from our graduates who have transformed their careers through
              our programs.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Frontend Developer at Tech Co",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                quote:
                  "The practical approach to learning at Treesoft Academy helped me land my dream job.",
              },
              {
                name: "Michael Chen",
                role: "Mobile Developer at StartUp Inc",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                quote:
                  "The mentorship and guidance I received were invaluable to my career transition.",
              },
              {
                name: "Emily Rodriguez",
                role: "UI/UX Designer at Design Lab",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                quote:
                  "Treesoft Academy's hands-on projects helped me build a strong portfolio.",
              },
            ].map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6 text-center">
                  <Image
                    src={story.image}
                    alt={story.name}
                    className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
                    height={1031}
                    width={687}
                  />
                  <p className="mb-4 text-muted-foreground">
                    &quot;{story.quote}&quot;
                  </p>
                  <h3 className="font-semibold">{story.name}</h3>
                  <p className="text-sm text-muted-foreground">{story.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#001B00] py-24 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Join our community of learners and take the first step towards
              your new career in tech.
            </p>
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button
                asChild
                size="lg"
                className="bg-[#013101] hover:bg-darkGreen"
              >
                <Link href="/register">Enroll Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Talk to an Advisor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
