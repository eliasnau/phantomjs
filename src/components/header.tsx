import { Github, Twitter } from "lucide-react";

import Link from "next/link";

import { Origami } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="container mx-auto px-4 py-4">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Origami className="h-6 w-6" />
          <span className="font-semibold">Phantom Starter</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/eliasnau/phantom-starter"
            className="text-foreground hover:text-foreground/80"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://twitter.com/elias_nau"
            className="text-foreground hover:text-foreground/80"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="/docs">
            <Button
              variant="default"
              className="bg-primary text-white hover:bg-primary/90"
            >
              Documentation
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
