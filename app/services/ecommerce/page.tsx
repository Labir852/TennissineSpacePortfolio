import type { Metadata } from "next";
import ServiceDetailClient from "@/components/services/ServiceDetailClient";

export const metadata: Metadata = {
  title: "E-commerce Solutions - Tennissine's Space",
  description: "High-converting online stores built on modern platforms with seamless integration.",
};

export default function EcommerceServicePage() {
  return <ServiceDetailClient slug="ecommerce" />;
}
