import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

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
        <ModeToggle />
      </div>
    </header>
  );
}