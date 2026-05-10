import type { Metadata } from "next";
import ServiceDetailClient from "@/components/services/ServiceDetailClient";

export const metadata: Metadata = {
  title: "Technical Consulting - Tennissine's Space",
  description: "Expert guidance on technology strategy, architecture, and digital transformation.",
};

export default function ConsultingServicePage() {
  return <ServiceDetailClient slug="consulting" />;
}
