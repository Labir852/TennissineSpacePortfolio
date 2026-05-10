import type { Metadata } from "next";
import ServiceDetailClient from "@/components/services/ServiceDetailClient";

export const metadata: Metadata = {
  title: "POS Solutions - Tennissine's Space",
  description: "Robust point-of-sale systems for retail and restaurant operations with real-time reporting.",
};

export default function PosServicePage() {
  return <ServiceDetailClient slug="pos" />;
}
