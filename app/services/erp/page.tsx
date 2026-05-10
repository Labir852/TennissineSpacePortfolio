import type { Metadata } from "next";
import ServiceDetailClient from "@/components/services/ServiceDetailClient";

export const metadata: Metadata = {
  title: "ERP Systems - Tennissine's Space",
  description: "Complete business management systems to streamline operations across your entire organization.",
};

export default function ErpServicePage() {
  return <ServiceDetailClient slug="erp" />;
}
