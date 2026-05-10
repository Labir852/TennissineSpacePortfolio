import type { Metadata } from "next";
import ServiceDetailClient from "@/components/services/ServiceDetailClient";

export const metadata: Metadata = {
  title: "Custom Software Development - Tennissine's Space",
  description: "Bespoke software solutions built specifically for your unique business needs and challenges.",
};

export default function SoftwareServicePage() {
  return <ServiceDetailClient slug="software" />;
}
