import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/hooks/use-theme"
import ModernHeader from "@/components/header"
import ParallaxBackground from "@/components/ParallaxBackground"
import CursorFollower from "@/components/CursorFollower"
import ModernFooter from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  title: "Tennissine's Space - Elevate Your Digital Experience",
  description: "Transform your vision to technology and make your business reach to more people. Automate workflows, gain insights, and boost productivity.",
  icons: {
    icon: "/images/logos/Main Logo-04.png",
    shortcut: "/images/logos/Main Logo-04.png",
    apple: "/images/logos/Main Logo-04.png",
  },
  manifest: "/site.webmanifest",
  generator: "Tennissine's Space",
  openGraph: {
    title: "Tennissine's Space - Elevate Your Digital Experience",
    description: "Transform your vision to technology and make your business reach to more people. Automate workflows, gain insights, and boost productivity.",
    images: [
      {
        url: "/images/logos/Main Logo-02.png",
        width: 1200,
        height: 630,
        alt: "Tennissine's Space - AI-powered platform",
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
      <head>
        {/* Add any other head tags if needed, metadata object handles common ones */}
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ParallaxBackground />
          <CursorFollower />
          <ModernHeader />
          <main>{children}</main>
          <ModernFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}