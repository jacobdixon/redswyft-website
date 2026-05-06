import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Redswyft is a small software company building focused tools for teams that ship.",
};

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          About Redswyft
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          We're a small software company that believes the best tools are the
          ones you forget you're using. Redswyft was started by operators who
          got tired of bloated software that demands more attention than the
          work itself.
        </p>

        <div className="prose prose-slate mt-12 max-w-none dark:prose-invert">
          <h2>What we believe</h2>
          <p>
            Software should make decisions easier, not bigger. Most products
            grow by addition — more features, more screens, more meetings about
            the screens. We grow by subtraction. Every release should leave the
            product feeling lighter, not heavier.
          </p>

          <h2>How we work</h2>
          <p>
            We build in tight loops with a small group of design partners. If a
            feature can't earn its place by making something measurably faster,
            safer, or simpler, it doesn't ship. We write our own changelog and
            we mean it.
          </p>

          <h2>Where we're going</h2>
          <p>
            Redswyft is in private beta with a handful of teams. If that sounds
            like the kind of software you wish existed, we'd love to hear from
            you.
          </p>
        </div>
      </div>
    </div>
  );
}
