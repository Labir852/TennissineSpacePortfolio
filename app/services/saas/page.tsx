import type { Metadata } from "next";
import ServiceDetailClient from "@/components/services/ServiceDetailClient";

export const metadata: Metadata = {
  title: "SaaS Platforms - Tennissine's Space",
  description: "Scalable cloud-based software as a service platforms designed for high availability.",
};

export default function SaasServicePage() {
  return <ServiceDetailClient slug="saas" />;
}
