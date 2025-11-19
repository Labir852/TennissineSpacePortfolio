import type { Metadata } from "next";
import ContactPageClient from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Tennissine's Space",
  description:
    "Tell us about your product idea, integration needs, or support request. Our team responds within one business day.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Partner with Tennissine's Space",
    description:
      "Custom software, automation, and product teams on demand. Let's build something ambitious together.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
