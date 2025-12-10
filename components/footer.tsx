"use client"
import { Twitter, Instagram, Linkedin, Github, Mail, MapPin, Phone, ArrowUp, Sparkles } from "lucide-react";
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ModernFooter() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")

  // Show back-to-top button when scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log("Subscribed:", email)
    setEmail("")
    // You can add a success message here
  }

  const quickLinks = [
    { label: "Services", href: "/#features" },
    { label: "Process", href: "/#process" },
    { label: "Work", href: "/#workmodels" },
    { label: "Testimonials", href: "/#testimonials" },
  ]

  const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/#faq" },
    { label: "Blog", href: "/blog" },
  ]

  const socialLinks = [
    { icon: <Twitter className="h-4 w-4" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-4 w-4" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="h-4 w-4" />, href: "#", label: "Instagram" },
    { icon: <Github className="h-4 w-4" />, href: "#", label: "GitHub" },
  ]

  const contactInfo = [
    { icon: <Mail className="h-4 w-4" />, text: "tennissine.space@gmail.com" },
    { icon: <Phone className="h-4 w-4" />, text: "+8801842724386" },
    { icon: <MapPin className="h-4 w-4" />, text: "Dhaka, Bangladesh" },
  ]

  return (
    <footer className="relative bg-background border-t border-border/30 pt-12 pb-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from to-gradient-to rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 rounded-full blur-[100px]"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from to-gradient-to rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 rounded-full blur-[100px]"></div>
        
      </div>
      {/* Minimal background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/5 to-gradient-to/5 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="relative">
                <Image
                  src="/images/logos/Main Logo-02.png"
                  alt="Tennissine's Space Logo"
                  width={160}
                  height={40}
                  className="object-contain"
                />
              </div>
            </Link>
            
            <p className="text-foreground/70 text-sm mb-6 max-w-md">
              Building custom software solutions for businesses that want to grow smarter.
            </p>

            {/* Contact info */}
            <div className="space-y-2 mb-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-foreground/60">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="p-2 rounded-lg bg-surface/10 border border-border/30 hover:bg-surface/20 transition-colors group"
                  aria-label={social.label}
                >
                  <span className="text-foreground/60 group-hover:text-foreground">
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground/90">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <Sparkles className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground/90">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <Sparkles className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3 text-foreground/90">Stay Updated</h4>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your work email"
                    className="w-full px-3 py-2 text-sm bg-surface/5 border border-border/30 rounded-lg focus:outline-none focus:ring-1 focus:ring-gradient-from/30"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-sm bg-gradient-to-r from-gradient-from/10 to-gradient-to/10 hover:from-gradient-from/20 hover:to-gradient-to/20 text-foreground/80 border border-border/30 py-2 rounded-lg transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border/30 my-8"></div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-foreground/50">
            © {new Date().getFullYear()} Tennissine's Space. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-sm">
            <Link 
              href="/privacy" 
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link 
              href="/cookies" 
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>

        {/* Back to top button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-gradient-from to-gradient-to text-white shadow-lg hover:shadow-xl transition-all z-50"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
      </div>
    </footer>
  )
}