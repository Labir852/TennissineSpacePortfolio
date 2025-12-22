import Link from "next/link"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
            Terms of Service
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Simple terms for working together
          </h1>
          <p className="text-foreground/70">
            These terms outline how we collaborate, protect your information,
            and deliver work.
          </p>
        </div>

        <div className="space-y-6 bg-surface/5 border border-border/50 rounded-2xl p-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Engagement</h2>
            <p className="text-foreground/70">
              Scope, timeline, and pricing are agreed in writing before work
              begins. Changes are reviewed and confirmed together.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Confidentiality</h2>
            <p className="text-foreground/70">
              We keep your business information confidential and use it only to
              deliver the project.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Payments</h2>
            <p className="text-foreground/70">
              Invoices follow the agreed schedule. Late payments may pause
              delivery until resolved.
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
            Start a Project
          </Link>
        </div>
      </div>
    </main>
  )
}

