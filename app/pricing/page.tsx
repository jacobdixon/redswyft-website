import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, predictable pricing for Redswyft.",
};

const tiers = [
  {
    name: "Starter",
    price: "$0",
    cadence: "free during beta",
    description: "Everything you need to evaluate Redswyft on a real workflow.",
    features: [
      "Up to 3 teammates",
      "Core workflows",
      "Community support",
      "Email-only auth",
    ],
    cta: "Start free",
    href: "/contact",
    featured: false,
  },
  {
    name: "Team",
    price: "$29",
    cadence: "per user / month",
    description: "For teams running Redswyft as part of their daily work.",
    features: [
      "Unlimited teammates",
      "All workflows + automations",
      "SSO (Google, Okta)",
      "Priority support",
      "Audit log",
    ],
    cta: "Talk to us",
    href: "/contact",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "annual",
    description: "Procurement, security review, and a dedicated point of contact.",
    features: [
      "SAML SSO + SCIM",
      "Custom data residency",
      "Security review packet",
      "99.9% uptime SLA",
      "Dedicated CSM",
    ],
    cta: "Contact sales",
    href: "/contact",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Simple pricing
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          One price per teammate. No usage meter, no surprise overages.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={cn(
              "flex h-full flex-col",
              tier.featured && "border-primary shadow-md"
            )}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {tier.name}
                {tier.featured && (
                  <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                    Most popular
                  </span>
                )}
              </CardTitle>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-sm text-muted-foreground">
                  {tier.cadence}
                </span>
              </div>
              <CardDescription className="mt-2">
                {tier.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link
                href={tier.href}
                className={cn(
                  buttonVariants({
                    variant: tier.featured ? "default" : "outline",
                  }),
                  "w-full"
                )}
              >
                {tier.cta}
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
