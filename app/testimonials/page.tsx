import type { Metadata } from "next";
import TestimonialsPageClient from "@/components/testimonials/TestimonialsPageClient";

export const metadata: Metadata = {
  title: "Testimonials - Tennissine's Space",
  description: "Read what our clients have to say about their experience working with us.",
};

export default function TestimonialsPage() {
  return <TestimonialsPageClient />;
}
