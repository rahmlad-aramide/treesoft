import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    title: "Getting Started with React: A Beginner's Guide",
    excerpt: "Learn the fundamentals of React and start building modern web applications.",
    date: "April 15, 2024",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "The Future of Web Development: What to Expect in 2024",
    excerpt: "Explore the latest trends and technologies shaping the future of web development.",
    date: "April 12, 2024",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Mastering UI/UX Design Principles",
    excerpt: "Essential design principles every developer should know for creating better user experiences.",
    date: "April 10, 2024",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Building Scalable Backend Systems",
    excerpt: "Learn how to design and implement scalable backend architectures.",
    date: "April 8, 2024",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Mobile App Development Best Practices",
    excerpt: "Tips and tricks for building high-quality mobile applications.",
    date: "April 5, 2024",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "The Importance of Continuous Learning in Tech",
    excerpt: "Why staying updated with the latest technologies is crucial for your career.",
    date: "April 3, 2024",
    category: "Career",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#10141A] py-24 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(16, 20, 26, 0.8), rgba(16, 20, 26, 0.8)), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Blog & Articles</h1>
            <p className="text-lg text-gray-300">
              Stay updated with the latest trends, tutorials, and insights in technology and software development.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="h-48 w-full object-cover"
                    width={1470}
                    height={980}
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <Badge>{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      {post.date}
                    </div>
                  </div>
                  <Link href="#" className="group">
                    <h3 className="mb-2 text-xl font-bold group-hover:text-[#013101] group-hover:underline">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6">
                  <Link href={`/blog/${post.title}`} className="text-sm font-medium text-darkGreen dark:text-lightGreen hover:underline">
                    Read More →
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}