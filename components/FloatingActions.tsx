"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "8801842724386";

type ChatMessage = {
  id: string;
  author: "visitor" | "team";
  text: string;
};

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      author: "team",
      text: "Hi! 👋 Need help with a project? Drop us a message and we'll reply on WhatsApp right away.",
    },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = chatMessage.trim();
    const outgoingText = text || "Hi Tennissine's Space, I'd love to know more about your services.";
    if (text) {
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), author: "visitor", text },
      ]);
      setChatMessage("");
    }

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      outgoingText,
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3">
      {isChatOpen && (
        <div className="w-80 rounded-2xl border border-white/10 bg-background/95 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Chat with Tennissine's Space</p>
              <p className="text-xs text-foreground/60">We reply within minutes on WhatsApp</p>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setIsChatOpen(false)}
              className="rounded-full p-1 text-foreground/60 hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mb-3 max-h-56 overflow-y-auto space-y-3 pr-1">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                  msg.author === "team"
                    ? "bg-white/5 text-foreground/80"
                    : "bg-gradient-to-r from-gradient-from/90 to-gradient-to/90 text-white ml-auto"
                }`}
                style={{ maxWidth: "90%" }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form className="space-y-2" onSubmit={handleSend}>
            <textarea
              rows={2}
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full rounded-xl border border-border bg-background/80 px-3 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-gradient-from"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-[#25D366] py-2 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all"
            >
              Start WhatsApp Chat
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={toggleChat}
        aria-label="WhatsApp chat"
        className="rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all p-3"
      >
        <MessageCircle className="h-5 w-5" />
      </button>

      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="rounded-full bg-gradient-to-r from-gradient-from to-gradient-to text-white shadow-lg shadow-gradient-from/40 hover:shadow-gradient-from/60 transition-all p-3"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

