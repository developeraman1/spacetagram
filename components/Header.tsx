import { ModeToggle } from "./mode-toggle";
import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-around w-full h-16 px-4 sticky top-0 z-50 bg-white/30 dark:bg-[#171717]/30 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
          Spacetagram
        </Link>
      </div>
      <nav className="flex items-center space-x-4">
        <Button asChild variant="secondary" aria-label="GitHub">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" />
            Github
          </a>
        </Button>
        <ModeToggle />
      </nav>
    </header>
  );
}
