export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-800" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(168,85,247,0.35),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-wide text-violet-200/90">
              SmartIn
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              SaaS Product & Technical Optimization
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-200">
              We bring technical clarity and structural control to non-technical
              SaaS founders — so you stop guessing and start executing the right
              priorities.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 transition"
              >
                Request a Structural Review
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/5 transition"
              >
                See how it works
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["5 days", "Audit delivery"],
                ["Top 10", "Prioritized issues"],
                ["30 min", "Debrief call"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <div className="text-2xl font-semibold text-white">{k}</div>
                  <div className="mt-1 text-sm text-slate-200">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            Clarity before growth.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Early-stage SaaS rarely slows because founders lack effort. It slows
            when priorities become noisy, onboarding becomes unclear, and tech
            decisions compound without a structural plan. SmartIn restores
            control with a focused audit and a roadmap you can execute.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              How SmartIn works
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              We start with a structured review (Phase 1). If you want, we move
              into implementation (Phase 2) and ongoing advisory (Phase 3).
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Phase 1 — Structural Review",
                desc: "Product + UX + performance + technical signals. Output: clear priorities and a roadmap.",
              },
              {
                title: "Phase 2 — Implementation Sprint",
                desc: "We execute the highest-impact fixes: onboarding, conversion, performance, reliability.",
              },
              {
                title: "Phase 3 — Optimization Partner",
                desc: "Monthly support for sequencing, roadmap governance, and technical decision clarity.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIT DELIVERABLES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              The 5-day Structural Review
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              A fixed-scope audit designed for non-technical founders who want
              clarity, not noise.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                What you receive
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {[
                  "Executive summary (1 page): biggest blockers + next 30 days",
                  "Product flow review: landing → signup → activation",
                  "UX friction map: issues ranked by severity",
                  "Performance snapshot: key bottlenecks & quick wins",
                  "Technical signals: scalability/reliability risks",
                  "Top-10 roadmap: Impact × Effort × Risk scoring",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-violet-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-base font-semibold">Who it’s for</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Early-stage B2B SaaS teams that shipped fast and now need structure
              to scale.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              {[
                "Pre-seed to Seed (or early Series A)",
                "0–50k MRR (or active waitlist/traction)",
                "1–10 person teams",
                "Non-technical founder-led or founder needs technical clarity",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold">Outcome</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                You leave with clarity, a priority order, and a roadmap your
                team can actually execute — without re-building everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Request a Structural Review
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Send your product link + short context. We’ll confirm fit within
                24 hours.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-200">
                  Prefer email?{" "}
                  <span className="font-semibold text-white">
                    hello@smartin
                  </span>
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  (Replace with your real domain email once you set it up.)
                </p>
              </div>
            </div>

            <form className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="grid grid-cols-1 gap-4">
                <label className="grid gap-2">
                  <span className="text-xs font-medium text-slate-200">
                    Name
                  </span>
                  <input
                    className="h-11 rounded-xl border border-white/10 bg-slate-950/40 px-4 text-sm text-white placeholder:text-slate-500 outline-none focus:border-violet-400"
                    placeholder="Your name"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-medium text-slate-200">
                    Email
                  </span>
                  <input
                    type="email"
                    className="h-11 rounded-xl border border-white/10 bg-slate-950/40 px-4 text-sm text-white placeholder:text-slate-500 outline-none focus:border-violet-400"
                    placeholder="you@company.com"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-medium text-slate-200">
                    Product link
                  </span>
                  <input
                    className="h-11 rounded-xl border border-white/10 bg-slate-950/40 px-4 text-sm text-white placeholder:text-slate-500 outline-none focus:border-violet-400"
                    placeholder="https://yourproduct.com"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-medium text-slate-200">
                    Context
                  </span>
                  <textarea
                    className="min-h-[120px] rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-violet-400"
                    placeholder="What are you building, what’s the main pain, and what would success look like?"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-violet-500 px-6 text-sm font-semibold text-white shadow-sm hover:bg-violet-400 transition"
                >
                  Send request
                </button>

                <p className="text-xs text-slate-400">
                  Form submission is disabled for now. Next step: connect it to
                  an email service or API route.
                </p>
              </div>
            </form>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-xs text-slate-500">
            © {new Date().getFullYear()} SmartIn. All rights reserved.
          </div>
        </div>
      </section>
    </main>
  );
}