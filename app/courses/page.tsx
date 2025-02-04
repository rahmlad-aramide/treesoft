import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Clock, Users, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    title: "Frontend Development Fundamentals",
    description:
      "Master HTML, CSS, JavaScript, and modern frontend frameworks.",
    duration: "12 weeks",
    level: "Beginner",
    students: 150,
    price: "$499",
    image:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Advanced React & Next.js",
    description: "Build modern web applications with React and Next.js.",
    duration: "10 weeks",
    level: "Intermediate",
    students: 120,
    price: "$599",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "UI/UX Design Mastery",
    description: "Learn to create beautiful and functional user interfaces.",
    duration: "8 weeks",
    level: "Beginner",
    students: 90,
    price: "$449",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Mobile App Development",
    description: "Build iOS and Android apps using React Native.",
    duration: "14 weeks",
    level: "Intermediate",
    students: 80,
    price: "$699",
    image:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Backend Development with Node.js",
    description: "Learn server-side programming with Node.js and Express.",
    duration: "12 weeks",
    level: "Intermediate",
    students: 100,
    price: "$599",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Full Stack Web Development",
    description: "Comprehensive course covering both frontend and backend.",
    duration: "16 weeks",
    level: "Advanced",
    students: 70,
    price: "$899",
    image:
      "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

export default function CoursesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="bg-[#10141A] py-24 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 20, 26, 0.8), rgba(16, 20, 26, 0.8)), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Courses</h1>
            <p className="text-lg text-gray-300">
              Transform your career with our comprehensive tech courses. Learn
              from industry experts and get hands-on experience with real-world
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <Card key={index} className="overflow-hidden flex flex-col">
                <CardHeader className="p-0">
                  <Image
                    src={course.image}
                    alt={course.title}
                    className="h-48 w-full object-cover"
                    width={1470}
                    height={980}
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <Badge variant="secondary">{course.level}</Badge>
                    <span className="text-lg font-bold text-darkGreen dark:text-lightGreen">
                      {course.price}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{course.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      {course.students} students
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted p-6 mt-auto">
                  <Button
                    asChild
                    className="w-full bg-[#013101] hover:bg-darkGreen"
                  >
                    <Link href={`/courses/${course.title}`}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
