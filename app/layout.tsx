import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ModernHeader from "@/components/header"
import ModernFooter from "@/components/footer"
import MotionEffects from "@/components/MotionEffects"
import FloatingActions from "@/components/FloatingActions"

const inter = Inter({ subsets: ["latin"] })
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tennissine.space"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tennissine's Space - Custom Software Solutions for Your Business",
    template: "%s | Tennissine's Space",
  },
  description: "We build ERP systems,E-commerce platforms, POS software,Custom Softwares,SaaS Solutions,Websites,Management Systems,Mobile Applications, that actually work.",
  icons: {
    icon: "/images/logos/Main Logo-04.png",
    shortcut: "/images/logos/Main Logo-04.png",
    apple: "/images/logos/Main Logo-04.png",
  },
  manifest: "/site.webmanifest",
  generator: "Tennissine's Space",
  openGraph: {
    title: "Tennissine's Space - Custom Software Solutions for Your Business",
    description: "We build ERP systems,E-commerce platforms, POS software,Custom Softwares,SaaS Solutions,Websites,Management Systems,Mobile Applications, that actually work.",
    url: siteUrl,
    images: [
      {
        url: "/images/logos/Main Logo-02.png",
        width: 1200,
        height: 630,
        alt: "Tennissine's Space - Custom Software Solutions for Your Business",
      },
    ],
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <MotionEffects />
          <ModernHeader />
          <main>{children}</main>
          <ModernFooter />
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  )
}