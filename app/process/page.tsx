import type { Metadata } from "next";
import ProcessPageClient from "@/components/process/ProcessPageClient";

export const metadata: Metadata = {
  title: "Our Process - Tennissine's Space",
  description: "Learn how we work, from initial planning to final deployment and ongoing support.",
};

export default function ProcessPage() {
  return <ProcessPageClient />;
}
