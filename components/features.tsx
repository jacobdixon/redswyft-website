import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, ShieldCheck, GitBranch, LineChart } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast by default",
    description:
      "Sub-second interactions, lean payloads, and an honest performance budget. We treat speed as a feature, not a goal.",
  },
  {
    icon: ShieldCheck,
    title: "Safe to operate",
    description:
      "Audit logs, granular permissions, and SOC 2-aligned practices from day one. Your data stays where you expect it.",
  },
  {
    icon: GitBranch,
    title: "Built to extend",
    description:
      "Clean APIs, webhooks, and a CLI that does what its docs say. Bring your own tools and integrate in an afternoon.",
  },
  {
    icon: LineChart,
    title: "Outcomes you can see",
    description:
      "Every workflow ends with a number you can point at. Measure what matters and move on.",
  },
];

export function Features() {
  return (
    <section className="border-b">
      <div className="container py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Built for teams that ship
          </h2>
          <p className="mt-4 text-muted-foreground">
            Four principles we won't compromise on.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="h-full">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary" aria-hidden />
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
