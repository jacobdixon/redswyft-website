import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block h-5 w-5 rounded bg-primary" aria-hidden />
          <span className="text-sm font-medium">Redswyft</span>
          <span className="text-sm text-muted-foreground">
            © {year}. All rights reserved.
          </span>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link href="/about" className="hover:text-foreground">About</Link>
          <Link href="/pricing" className="hover:text-foreground">Pricing</Link>
          <Link href="/blog" className="hover:text-foreground">Blog</Link>
          <Link href="/contact" className="hover:text-foreground">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
