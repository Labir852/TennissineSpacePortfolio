import type { Metadata } from "next";
import BlogPageClient from "@/components/blog/BlogPageClient";

export const metadata: Metadata = {
  title: "Blog & Insights - Tennissine's Space",
  description: "Stay updated with the latest trends in software development, AI, and digital transformation.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}
