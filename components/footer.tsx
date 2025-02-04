import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="px-4 md:container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6" />
              <span className="font-bold">Treesoft Academy</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transforming ideas into innovative digital solutions since 2024.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Courses</h3>
            <div className="flex flex-col flex-wrap gap-4 text-sm">
              <Link
                href="/courses/frontend-development"
                className="hover:text-[#013101] dark:hover:text-lightGreen"
              >
                Frontend Development
              </Link>
              <Link
                href="/courses/backend-development"
                className="hover:text-[#013101] dark:hover:text-lightGreen"
              >
                Backend Development
              </Link>
              <Link
                href="/courses/mobile-app-development"
                className="hover:text-[#013101] dark:hover:text-lightGreen"
              >
                Mobile App Development
              </Link>
              <Link
                href="/courses/ui-ux-design"
                className="hover:text-[#013101] dark:hover:text-lightGreen"
              >
                UI/UX Design
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <div className="flex flex-col flex-wrap gap-4 text-sm">
              <Link
                href="/about"
                className="hover:text-[#013101] dark:hover:text-lightGreen"
              >
                About Us
              </Link>
              <Link
                href="/courses"
                className="hover:text-[#013101] dark:hover:text-lightGreen"
              >
                Courses
              </Link>
              <Link
                href="/blog"
                className="hover:text-[#013101] dark:hover:text-lightGreen"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="hover:text-[#013101] dark:hover:text-lightGreen"
              >
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>Email: info@treesoftacademy.com</p>
              <p>Phone: +1 (234) 567-8900</p>
              <p>Address: 123 Tech Street</p>
              <p>City, Country</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © 2024 - {new Date().getFullYear()} Treesoft Academy. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
