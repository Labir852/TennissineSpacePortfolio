import type { Metadata } from "next";
import CareersPageClient from "@/components/careers/CareersPageClient";

export const metadata: Metadata = {
  title: "Careers - Tennissine's Space",
  description: "Join our team of passionate engineers and designers and help us build the future of software.",
};

export default function CareersPage() {
  return <CareersPageClient />;
}
