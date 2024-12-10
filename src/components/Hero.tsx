import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="bg-background min-h-screen">
      <main className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <Link href="https://github.com/eliasnau" target="_blank">
            <Button variant="outline" className="rounded-full">
              <Github className="mr-2 h-4 w-4" />
              Follow @eliasnau on GitHub
            </Button>
          </Link>
        </div>
        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          The Most Advanced{" "}
          <span className="bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#EC4899] bg-clip-text text-transparent">
            Express.js Starter
          </span>{" "}
          Template
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Production-ready foundation featuring enterprise-grade authentication,
          authorization, and scalability. Built with TypeScript and modern best
          practices for secure, scalable Node.js applications.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/docs">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90"
            >
              Get Started
            </Button>
          </Link>
          <Link href="https://github.com/eliasnau/phantom" target="_blank">
            <Button size="lg" variant="outline">
              <Github className="mr-2 h-4 w-4" />
              Star on GitHub
            </Button>
          </Link>
        </div>
        <div className="mt-32">
          <h2 className="text-xl font-semibold text-muted-foreground">
            Sponsored by
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex items-center justify-center">
              <Image
                src="/idk.svg"
                alt="Become a sponsor"
                width={120}
                height={40}
                className="h-8 object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/sponsors/idk.svg"
                alt="Become a sponsor"
                width={120}
                height={40}
                className="h-8 object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/sponsors/idk.svg"
                alt="Become a sponsor"
                width={120}
                height={40}
                className="h-8 object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/sponsors/idk.svg"
                alt="Become a sponsor"
                width={120}
                height={40}
                className="h-8 object-contain"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
