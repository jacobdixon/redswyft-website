import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-background to-background"
        aria-hidden
      />
      <div className="container py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border bg-secondary/50 px-3 py-1 text-xs font-medium text-secondary-foreground">
            Now in private beta
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Software,{" "}
            <span className="text-primary">sharpened.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Redswyft builds focused tools for teams who actually ship. No bloat,
            no theatrics — just the smallest amount of software that solves the
            problem.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              Request access
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              How we work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
