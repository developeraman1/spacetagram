import { ModeToggle } from "./mode-toggle";
import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-2xl font-extrabold tracking-tight text-foreground hover:opacity-90 transition-opacity"
          >
            Spacetagram
          </Link>
        </div>

        <nav className="flex items-center gap-4">
          <Button 
            asChild 
            variant="ghost" 
            size="sm"
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <a 
              href="https://github.com/developeraman1/spacetagram" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="h-5 w-5" />
              <span className="font-medium">GitHub</span>
            </a>
          </Button>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}