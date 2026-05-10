import type { Metadata } from "next";
import CasesPageClient from "@/components/cases/CasesPageClient";

export const metadata: Metadata = {
  title: "Case Studies - Tennissine's Space",
  description: "Explore our portfolio of successful projects and see how we've helped businesses transform with custom software.",
};

export default function CasesPage() {
  return <CasesPageClient />;
}
