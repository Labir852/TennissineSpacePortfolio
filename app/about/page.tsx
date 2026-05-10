import type { Metadata } from "next";
import AboutPageClient from "@/components/about/AboutPageClient";

export const metadata: Metadata = {
  title: "About Tennissine's Space",
  description: "Learn about our mission, our team, and our commitment to building software that drives growth.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
