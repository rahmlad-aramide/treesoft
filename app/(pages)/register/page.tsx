"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const { toast } = useToast();
  const [step, setStep] = useState("personal");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    toast({
      title: "Registration Successful!",
      description:
        "Welcome to Treesoft Academy. Check your email for next steps.",
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section with Background Image */}
      <section
        className="relative py-24 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 20, 26, 0.8), rgba(16, 20, 26, 0.8)), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Join Treesoft Academy
            </h1>
            <p className="text-lg text-gray-300">
              Start your journey to becoming a tech professional. Fill out the
              form below to register for our courses.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Student Registration</CardTitle>
              <CardDescription>
                Please fill out all required information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs
                defaultValue={step}
                value={step}
                // @ts-ignore
                onChange={setStep}
                className="w-full"
              >
                <TabsList className="hidden md:grid w-full grid-cols-3">
                  <TabsTrigger
                    value="personal"
                    className={
                      "data-[state=active]:bg-[#013101] data-[state=active]:text-white dark:data-[state=active]:bg-lightGreen dark:data-[state=active]:text-black"
                    }
                  >
                    Personal Info
                  </TabsTrigger>
                  <TabsTrigger
                    value="course"
                    className={
                      "data-[state=active]:bg-[#013101] data-[state=active]:text-white dark:data-[state=active]:bg-lightGreen dark:data-[state=active]:text-black"
                    }
                  >
                    Course Selection
                  </TabsTrigger>
                  <TabsTrigger
                    value="payment"
                    className={
                      "data-[state=active]:bg-[#013101] data-[state=active]:text-white dark:data-[state=active]:bg-lightGreen dark:data-[state=active]:text-black"
                    }
                  >
                    Payment
                  </TabsTrigger>
                </TabsList>

                <form onSubmit={handleSubmit} className="md:mt-8 space-y-8">
                  <TabsContent value="personal">
                    <div className="grid gap-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (234) 567-8900"
                          required
                        />
                      </div>
                      <div className="flex justify-end">
                        <Button
                          type="button"
                          className="bg-[#013101] hover:bg-darkGreen"
                          onClick={() => {
                            setStep("course");
                          }}
                        >
                          Next Step
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="course">
                    <div className="grid gap-6">
                      <div className="space-y-2">
                        <Label>Select Course</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="frontend">
                              Frontend Development
                            </SelectItem>
                            <SelectItem value="backend">
                              Backend Development
                            </SelectItem>
                            <SelectItem value="mobile">
                              Mobile App Development
                            </SelectItem>
                            <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Learning Format</Label>
                        <RadioGroup defaultValue="live" className="grid gap-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="live" id="live" />
                            <Label htmlFor="live">Live Online Classes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="self-paced"
                              id="self-paced"
                            />
                            <Label htmlFor="self-paced">
                              Self-Paced Learning
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="hybrid" id="hybrid" />
                            <Label htmlFor="hybrid">
                              Hybrid (Live + Self-Paced)
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="flex justify-between">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setStep("personal");
                          }}
                        >
                          Previous
                        </Button>
                        <Button
                          type="button"
                          className="bg-[#013101] hover:bg-darkGreen"
                          onClick={() => {
                            setStep("payment");
                          }}
                        >
                          Next Step
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="payment">
                    <div className="grid gap-6">
                      <div className="rounded-lg border p-4">
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-semibold">
                              Frontend Development
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              12 weeks, Live Online Classes
                            </p>
                          </div>
                          <p className="text-xl font-bold">$499</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle2 className="mr-2 h-4 w-4 text-[#013101] dark:text-lightGreen" />
                            Access to all course materials
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle2 className="mr-2 h-4 w-4 text-[#013101] dark:text-lightGreen" />
                            Live mentoring sessions
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle2 className="mr-2 h-4 w-4 text-[#013101] dark:text-lightGreen" />
                            Project reviews and feedback
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="card">Card Number</Label>
                        <Input
                          id="card"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" required />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setStep("course");
                          }}
                        >
                          Previous
                        </Button>
                        <Button
                          type="submit"
                          className="bg-[#013101] hover:bg-darkGreen"
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </form>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
