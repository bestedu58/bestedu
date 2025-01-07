import { Button } from "@/components/ui/button";
import { Award, BookOpen, Users } from "lucide-react";
import Link from "next/link";

function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 bg-gradient-to-tr from-slate-800/50 via-pink-600/30 to-slate-600/50">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="motion-preset-fade motion-delay-500 motion-translate-y-in-100 space-y-2">
                <h1 className="font-bold font-play text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Unlock Your Learning Potential with BestEdu
                </h1>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Discover a world of knowledge with our cutting-edge online
                  learning platform. Learn from the best, anytime, anywhere.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/posts">
                  <Button variant="outline">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-center font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose BestEdu?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <BookOpen className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 font-bold text-xl">
                  Extensive Course Library
                </h3>
                <p className="text-gray-600">
                  Access thousands of courses across various subjects and
                  disciplines.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 font-bold text-xl">Expert Instructors</h3>
                <p className="text-gray-600">
                  Learn from industry professionals and renowned academics.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 font-bold text-xl">
                  Recognized Certifications
                </h3>
                <p className="text-gray-600">
                  Earn certificates that are valued by employers worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Page;
