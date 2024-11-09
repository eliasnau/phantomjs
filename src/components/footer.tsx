"use client";
import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Phantom Starter</h3>
            <p className="text-sm text-muted-foreground">
              © Codity {new Date().getFullYear()} All rights reserved
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/eliasnau/phantom"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com/elias_nau"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
