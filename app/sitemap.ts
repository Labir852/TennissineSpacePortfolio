import type { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tennissinespace.vercel.app";
  const lastModified = new Date();
  return [
    {
      url: siteUrl,
      lastModified,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified,
    },
  ];
}

