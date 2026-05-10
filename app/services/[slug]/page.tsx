import type { Metadata } from "next";
import ServiceDetailClient from "@/components/services/ServiceDetailClient";

export const metadata: Metadata = {
  title: "Service Details - Tennissine's Space",
  description: "Learn more about our specialized software services and solutions.",
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  return <ServiceDetailClient slug={params.slug} />;
}
