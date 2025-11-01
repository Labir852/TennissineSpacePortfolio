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
  title: "Tennissine's Space - Elevate Your Digital Experience",
  description: "Transform how you work with our AI-powered platform. Automate workflows, gain insights, and boost productivity.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  generator: "Mohamed Djoudir",
  openGraph: {
    title: "Tennissine's Space - Elevate Your Digital Experience",
    description: "Transform how you work with our AI-powered platform. Automate workflows, gain insights, and boost productivity.",
    images: [
      {
        url: "/image.png",
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