"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Send, Check, Copy } from "lucide-react";

export default function ContactPageClient() {
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
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};
    if (formData.name.trim().length < 2) {
      nextErrors.name = "Please enter your full name.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (formData.subject.trim().length < 3) {
      nextErrors.subject = "Subject must be at least 3 characters.";
    }
    if (formData.message.trim().length < 20) {
      nextErrors.message = "Share a bit more detail (20+ characters).";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

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
        setErrors({});
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
    <div className="relative isolate min-h-screen bg-background pt-[100px] pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-repeat opacity-5"></div>
      </div>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
                      <>
                        <Check className="h-4 w-4 text-green-500" /> Copied to clipboard
                      </>
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
                      <>
                        <Check className="h-4 w-4 text-green-500" /> Copied to clipboard
                      </>
                    ) : (
                      <Copy className="h-4 w-4 text-foreground/40 group-hover:text-foreground/70 transition-colors" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-[120px] lg:h-fit">
            <div className="bg-surface/10 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                
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
                    aria-invalid={Boolean(errors.name)}
                    className={`w-full px-4 py-3 rounded-lg bg-background border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-gradient-from focus:border-transparent transition-all ${
                      errors.name ? "border-destructive/80" : "border-border"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-2 text-sm text-destructive">{errors.name}</p>}
                </div>

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
                    aria-invalid={Boolean(errors.email)}
                    className={`w-full px-4 py-3 rounded-lg bg-background border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-gradient-from focus:border-transparent transition-all ${
                      errors.email ? "border-destructive/80" : "border-border"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email}</p>}
                </div>

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
                    aria-invalid={Boolean(errors.subject)}
                    className={`w-full px-4 py-3 rounded-lg bg-background border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-gradient-from focus:border-transparent transition-all ${
                      errors.subject ? "border-destructive/80" : "border-border"
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className="mt-2 text-sm text-destructive">{errors.subject}</p>}
                </div>

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
                    aria-invalid={Boolean(errors.message)}
                    className={`w-full px-4 py-3 rounded-lg bg-background border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-gradient-from focus:border-transparent transition-all resize-none ${
                      errors.message ? "border-destructive/80" : "border-border"
                    }`}
                    placeholder="Tell us about your project or inquiry..."
                  />
                  {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message}</p>}
                </div>

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

