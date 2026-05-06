import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://redswyft.com"),
  title: {
    default: "Redswyft — Software, sharpened.",
    template: "%s · Redswyft",
  },
  description:
    "Redswyft builds software that gets out of your way. Fast, focused, and built for teams who actually ship.",
  openGraph: {
    title: "Redswyft",
    description:
      "Redswyft builds software that gets out of your way. Fast, focused, and built for teams who actually ship.",
    url: "https://redswyft.com",
    siteName: "Redswyft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Redswyft",
    description: "Software, sharpened.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
