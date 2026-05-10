import Link from "next/link"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
            Privacy Policy
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Your information, handled with care
          </h1>
          <p className="text-foreground/70">
            We collect only the details needed to respond to enquiries and
            deliver projects. We never sell your data.
          </p>
        </div>

        <div className="space-y-6 bg-surface/5 border border-border/50 rounded-2xl p-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">What we collect</h2>
            <ul className="list-disc list-inside text-foreground/70 space-y-1">
              <li>Contact details shared via our forms or direct emails</li>
              <li>Project context you provide to scope work</li>
              <li>Basic site analytics to improve the experience</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">How we use it</h2>
            <p className="text-foreground/70">
              Information is used to reply to messages, prepare proposals, and
              deliver agreed services. Access is limited to the project team.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Your choices</h2>
            <p className="text-foreground/70">
              You can request, update, or delete your information at any time.
              Reach us and we will act promptly.
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
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}

