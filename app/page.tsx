import Link from "next/link";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <section>
        <div className="container py-20 md:py-28">
          <div className="mx-auto flex max-w-3xl flex-col items-center rounded-2xl border bg-secondary/40 p-10 text-center md:p-14">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to see it?
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Redswyft is in private beta. Tell us a bit about your team and
              we'll get you in.
            </p>
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "mt-8")}
            >
              Request access
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
