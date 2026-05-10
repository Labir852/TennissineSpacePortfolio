import type { Metadata } from "next";
import ServicesPageClient from "@/components/services/ServicesPageClient";

export const metadata: Metadata = {
  title: "Services - Tennissine's Space",
  description: "Explore our wide range of custom software solutions, from ERP and POS systems to e-commerce and mobile applications.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
