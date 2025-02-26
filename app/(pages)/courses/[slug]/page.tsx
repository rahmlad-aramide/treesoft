import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// This would typically come from a database
const getCourse = (slug: string) => {
  return {
    title: "Frontend Development Fundamentals",
    description:
      "Master HTML, CSS, JavaScript, and modern frontend frameworks.",
    duration: "12 weeks",
    level: "Beginner",
    students: 150,
    rating: 4.8,
    reviews: 48,
    price: "$499",
    instructor: {
      name: "Sarah Johnson",
      role: "Senior Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      bio: "10+ years of experience in frontend development and teaching.",
    },
    image:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    modules: [
      {
        title: "Introduction to Web Development",
        lessons: ["HTML Basics", "CSS Fundamentals", "JavaScript Introduction"],
        duration: "2 weeks",
      },
      {
        title: "Advanced CSS & Responsive Design",
        lessons: ["Flexbox & Grid", "Media Queries", "CSS Animations"],
        duration: "3 weeks",
      },
      {
        title: "JavaScript Deep Dive",
        lessons: ["DOM Manipulation", "Events", "Async Programming"],
        duration: "4 weeks",
      },
      {
        title: "Modern Frontend Frameworks",
        lessons: ["React Basics", "State Management", "Building Projects"],
        duration: "3 weeks",
      },
    ],
    features: [
      "Hands-on Projects",
      "Live Coding Sessions",
      "1-on-1 Mentoring",
      "Career Guidance",
      "Certificate of Completion",
      "Job Placement Assistance",
    ],
  };
};

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourse(params.slug);

  return (
    <div className="flex flex-col">
      {/* Hero Section with Background Image */}
      <section
        className="relative py-24 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 20, 26, 0.8), rgba(16, 20, 26, 0.8)), url(${course.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl">
            <Badge className="mb-4">{course.level}</Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              {course.title}
            </h1>
            <p className="mb-8 text-xl text-gray-300">{course.description}</p>
            <div className="mb-8 flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                {course.duration}
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                {course.students} students
              </div>
              <div className="flex items-center">
                <Star className="mr-2 h-5 w-5" />
                {course.rating} ({course.reviews} reviews)
              </div>
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-[#013101] hover:bg-darkGreen">
                Enroll Now for {course.price}
              </Button>
              <Button variant="outline" size="lg">
                Download Syllabus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-12">
              {/* Course Modules */}
              <Card className="p-6">
                <h2 className="mb-6 text-2xl font-bold">Course Modules</h2>
                <div className="space-y-6">
                  {course.modules.map((module, index) => (
                    <div
                      key={index}
                      className="border-b pb-6 last:border-0 last:pb-0"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-xl font-semibold">
                          {module.title}
                        </h3>
                        <Badge variant="secondary">{module.duration}</Badge>
                      </div>
                      <ul className="space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li
                            key={lessonIndex}
                            className="flex items-center text-muted-foreground"
                          >
                            <BookOpen className="mr-2 h-4 w-4" />
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Course Features */}
              <Card className="p-6">
                <h2 className="mb-6 text-2xl font-bold">
                  What You&apos;ll Get
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-[#013101] dark:text-lightGreen" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Instructor Info */}
            <div>
              <Card className="p-6">
                <h2 className="mb-6 text-2xl font-bold">Your Instructor</h2>
                <div className="text-center">
                  <Image
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                    width={687}
                    height={1031}
                  />
                  <h3 className="mb-1 text-xl font-semibold">
                    {course.instructor.name}
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    {course.instructor.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {course.instructor.bio}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
