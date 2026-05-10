import type { Metadata } from "next";
import ServiceDetailClient from "@/components/services/ServiceDetailClient";

export const metadata: Metadata = {
  title: "System Integration - Tennissine's Space",
  description: "Seamlessly connect your disparate systems to ensure data flow and operational efficiency.",
};

export default function IntegrationServicePage() {
  return <ServiceDetailClient slug="integration" />;
}
