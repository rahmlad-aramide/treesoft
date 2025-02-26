import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User } from "lucide-react";
import Image from "next/image";

// This would typically come from a database
const getBlogPost = (slug: string) => {
  return {
    title: "Getting Started with React: A Beginner's Guide",
    date: "April 15, 2024",
    author: "Sarah Johnson",
    readTime: "8 min read",
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    content: `
      <h2>Introduction to React</h2>
      <p>React is a JavaScript library for building user interfaces. It was developed by Facebook and has become one of the most popular frontend frameworks in the world.</p>
      
      <h2>Why Learn React?</h2>
      <p>React's component-based architecture makes it easy to build and maintain large applications. Its virtual DOM implementation provides excellent performance, and its extensive ecosystem offers solutions for almost any web development need.</p>
      
      <h2>Getting Started</h2>
      <p>To start with React, you'll need a basic understanding of HTML, CSS, and JavaScript. This guide will walk you through the fundamentals of React, including components, props, state, and hooks.</p>
      
      <h2>Key Concepts</h2>
      <ul>
        <li>Components and Props</li>
        <li>State and Lifecycle</li>
        <li>Event Handling</li>
        <li>Conditional Rendering</li>
      </ul>
    `,
    relatedPosts: [
      {
        title: "Understanding React Hooks",
        slug: "understanding-react-hooks",
        image:
          "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      },
      {
        title: "Building Your First React App",
        slug: "building-first-react-app",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      },
    ],
  };
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  return (
    <div className="flex flex-col">
      {/* Hero Section with Background Image */}
      <section
        className="relative py-24 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 20, 26, 0.8), rgba(16, 20, 26, 0.8)), url(${post.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-300">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center">
                <CalendarDays className="mr-2 h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card className="blog p-8">
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </Card>
            </div>
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="mb-4 text-xl font-semibold">Related Posts</h3>
                <div className="space-y-4">
                  {post.relatedPosts.map((relatedPost, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="h-16 w-16 rounded-lg object-cover"
                        width={1470}
                        height={1103}
                      />
                      <h4 className="font-medium hover:text-[#013101] dark:hover:text-lightGreen">
                        {relatedPost.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
