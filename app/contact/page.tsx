import type { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Redswyft.",
};

export default function ContactPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Get in touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Tell us about your team and what you're trying to ship. We read every
          message and reply within one business day.
        </p>

        <div className="mt-10 rounded-xl border bg-secondary/40 p-6">
          <div className="flex items-start gap-4">
            <Mail className="mt-1 h-6 w-6 text-primary" aria-hidden />
            <div>
              <h2 className="font-semibold">Email us directly</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                The fastest way to reach a human at Redswyft.
              </p>
              <a
                href="mailto:hello@redswyft.com"
                className="mt-3 inline-block text-base font-medium text-primary hover:underline"
              >
                hello@redswyft.com
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Prefer a form? We'll add one once we wire up a backend. For now, email
          works best.
        </p>
      </div>
    </div>
  );
}
