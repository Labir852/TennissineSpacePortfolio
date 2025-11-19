import Link from "next/link"
import { Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react";
import Image from "next/image"

export default function ModernFooter() {
  return (
    <footer className=" bg-no-repeat bg-cover relative overflow-hidden py-8 text-foreground sm:py-16 px-3 sm:px-6 lg:px-8  border-border">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 hover:opacity-90 rounded-full blur-[100px]"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex">
              {/* <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-gradient-from to-gradient-to rounded-lg rotate-45 transform origin-center"></div>
                <div className="absolute inset-[3px] bg-background rounded-lg flex items-center justify-center text-foreground font-bold">
                  T
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
                Tennissine's Space
              </span> */}
              <Image
                src="/images/logos/Main Logo-02.png"
                alt="Tennissine's Space Logo"
                height={200}
                width={300}/>
            </Link>
            <p className="text-foreground mb-6">
              Empowering businesses with customized solutions that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              
              <Link href="#" className="text-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
            <form className="mt-6 flex gap-2">
            <input 
              type="email" 
              placeholder="Your work email" 
              className="bg-surface/10 border border-border rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-gradient-from"
            />
            <button className="bg-gradient-to-r from-gradient-from to-gradient-to px-4 py-2 rounded-lg text-sm font-medium">
              Subscribe
            </button>
          </form>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#features" className="text-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#workmodels" className="text-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#integrations-heading" className="text-foreground hover:text-foreground transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-foreground hover:text-foreground transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/#blog-heading" className="text-foreground hover:text-foreground transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#process" className="text-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#blog-heading" className="text-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-foreground hover:text-foreground transition-colors">
                  Customers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#faq" className="text-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/#integrations-heading" className="text-foreground hover:text-foreground transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-foreground hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground hover:text-foreground transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Tennissine Space. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/security" className="hover:text-foreground transition-colors">Security</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
