import type { Metadata } from "next";
import ServiceDetailClient from "@/components/services/ServiceDetailClient";

export const metadata: Metadata = {
  title: "Web Development - Tennissine's Space",
  description: "Fast, responsive, and SEO-optimized premium websites that drive conversions.",
};

export default function WebServicePage() {
  return <ServiceDetailClient slug="web" />;
}
