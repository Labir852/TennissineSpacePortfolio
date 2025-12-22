import Link from "next/link"

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
            Cookie Policy
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            How we use cookies
          </h1>
          <p className="text-foreground/70">
            We use a small number of cookies to keep the site running smoothly
            and to understand usage.
          </p>
        </div>

        <div className="space-y-6 bg-surface/5 border border-border/50 rounded-2xl p-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Essential cookies</h2>
            <p className="text-foreground/70">
              Required for security and basic functionality. These cannot be
              switched off.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Analytics</h2>
            <p className="text-foreground/70">
              Used to measure traffic and improve the experience. Data is
              aggregated and anonymous.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Your control</h2>
            <p className="text-foreground/70">
              You can clear cookies in your browser settings at any time. Using
              the site implies consent to essential cookies.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="px-4 py-2 rounded-lg border border-border hover:bg-accent/10 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-gradient-from to-gradient-to text-white hover:opacity-90 transition-opacity"
          >
            Talk to Us
          </Link>
        </div>
      </div>
    </main>
  )
}

