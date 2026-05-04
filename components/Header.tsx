import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Devmotors
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className="text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            Skills
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}