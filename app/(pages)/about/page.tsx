import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Rocket, Heart } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">About Treesoft Academy</h1>
            <p className="text-lg text-gray-300">
              Established in 2024, Treesoft Academy is a specialized agency in custom software and mobile app development education. Our Frontend Clinic sector leads the way in transforming passionate learners into industry-ready professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-[#001B00] text-white">
              <CardContent className="p-8">
                <Target className="mb-4 h-12 w-12 text-lightGreen" />
                <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
                <p className="text-gray-300">
                  To ignite curiosity, fuel innovation, and cultivate mastery in technology. Through hands-on learning, mentorship from industry experts, and real-world projects, we empower students to break boundaries, build impactful solutions, and thrive in the fast-evolving tech landscape.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#001B00] text-white">
              <CardContent className="p-8">
                <Rocket className="mb-4 h-12 w-12 text-lightGreen" />
                <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
                <p className="text-gray-300">
                  To be the leading tech academy that transforms passionate learners into industry-ready innovators. We envision a future where technology empowers individuals to create, solve, and lead with confidence, shaping the digital world of tomorrow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from curriculum development to student support.",
                icon: Target,
              },
              {
                title: "Innovation",
                description: "We embrace new technologies and teaching methods to provide cutting-edge education.",
                icon: Rocket,
              },
              {
                title: "Community",
                description: "We foster a supportive community where students learn, grow, and succeed together.",
                icon: Heart,
              },
            ].map((value, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <value.icon className="mb-4 h-12 w-12 text-darkGreen dark:text-lightGreen" />
                  <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Team</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                name: "Sarah Johnson",
                role: "Lead Frontend Instructor",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              },
              {
                name: "Michael Chen",
                role: "Backend Development Lead",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              },
              {
                name: "Emily Rodriguez",
                role: "UI/UX Design Instructor",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              },
              {
                name: "David Kim",
                role: "Mobile Development Instructor",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              },
            ].map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                    height={1031}
                    width={687}                  
                  />
                  <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}