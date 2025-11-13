"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Check, Copy } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [copiedItem, setCopiedItem] = useState<"email" | "phone" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => {
        setCopiedItem(null);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-[100px] pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section - Description */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                At Tennissine's Space, we specialize in transforming your vision into cutting-edge technology solutions. 
                Whether you're looking to develop a custom software application, modernize your existing systems, or 
                need expert consultation on your digital strategy, we're here to help.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Our team of experienced developers and designers is committed to delivering solutions that not only 
                meet your requirements but exceed your expectations. We understand that every project is unique, and 
                we take the time to understand your business needs, goals, and challenges.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Reach out to us today, and let's discuss how we can help elevate your digital presence and drive 
                your business forward.
              </p>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-4 pt-8">
              <div 
                className="flex items-start gap-4 p-4 rounded-lg bg-surface/10 border border-border/50 hover:bg-surface/20 transition-colors cursor-pointer group"
                onClick={() => copyToClipboard("tennissine.space@gmail.com", "email")}
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-gradient-from to-gradient-to">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-foreground/70 text-sm">tennissine.space@gmail.com</p>
                    {copiedItem === "email" ? (
                      <><Check className="h-4 w-4 text-green-500" /> Copied to clipboard</>
                    ) : (
                      <Copy className="h-4 w-4 text-foreground/40 group-hover:text-foreground/70 transition-colors" /> 
                    )}
                  </div>
                </div>
              </div>

              <div 
                className="flex items-start gap-4 p-4 rounded-lg bg-surface/10 border border-border/50 hover:bg-surface/20 transition-colors cursor-pointer group"
                onClick={() => copyToClipboard("+8801842724386", "phone")}
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-gradient-from to-gradient-to">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-foreground/70 text-sm">+880 1842 724386</p>
                    {copiedItem === "phone" ? (
                      <><Check className="h-4 w-4 text-green-500" /> Copied to clipboard</>
                    ) : (
                      <Copy className="h-4 w-4 text-foreground/40 group-hover:text-foreground/70 transition-colors" />
                    )}
                  </div>
                </div>
              </div>

              {/* <div className="flex items-start gap-4 p-4 rounded-lg bg-surface/10 border border-border/50 hover:bg-surface/20 transition-colors">
                <div className="p-2 rounded-lg bg-gradient-to-r from-gradient-from to-gradient-to">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <p className="text-foreground/70 text-sm">Khilkh</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="lg:sticky lg:top-[120px] lg:h-fit">
            <div className="bg-surface/10 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-gradient-from focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-gradient-from focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Subject <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-gradient-from focus:border-transparent transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-gradient-from focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-gradient-from to-gradient-to text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Status Message */}
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400"
                        : "bg-destructive/10 border border-destructive/20 text-destructive"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

