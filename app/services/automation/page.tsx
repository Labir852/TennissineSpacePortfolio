import type { Metadata } from "next";
import ServiceDetailClient from "@/components/services/ServiceDetailClient";

export const metadata: Metadata = {
  title: "Workflow Automation - Tennissine's Space",
  description: "Intelligent workflow automation using AI and bots to eliminate repetitive tasks.",
};

export default function AutomationServicePage() {
  return <ServiceDetailClient slug="automation" />;
}
