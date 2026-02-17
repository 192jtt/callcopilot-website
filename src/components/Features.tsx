import {
  Sparkles,
  Target,
  MessageSquare,
  Settings,
  FileText,
  BarChart3,
} from "lucide-react";

export function Features() {
  return (
    <div id="features" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-800 text-purple-300 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything you need to
            <br />
            close more deals
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real-time AI coaching that adapts to your methodology and helps your
            team execute flawlessly on every call.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Feature 1 — Real-Time Coaching */}
          <div className="bg-gradient-to-br from-purple-950/50 to-gray-900 border border-purple-800/50 rounded-2xl p-8">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="text-purple-400 text-sm font-semibold mb-3 uppercase tracking-wide">
              Real-Time Coaching
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Live suggestions as you speak
            </h3>
            <p className="text-gray-400 mb-6">
              Get real-time prompts for next questions, objection handlers, and
              MEDDPICC gaps — delivered to your screen while you&apos;re on the call.
            </p>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span className="text-purple-400 text-xs font-semibold">
                  Live Coaching Active
                </span>
              </div>
              <div className="text-purple-400 text-xs font-semibold mb-2">
                NEXT QUESTION TO ASK
              </div>
              <p className="text-white text-sm italic">
                &quot;Who else on your team would need to sign off on this decision,
                and what does their evaluation process typically look like?&quot;
              </p>
            </div>
          </div>

          {/* Feature 2 — MEDDPICC Scoring */}
          <div className="bg-gradient-to-br from-green-950/50 to-gray-900 border border-green-800/50 rounded-2xl p-8">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div className="text-green-400 text-sm font-semibold mb-3 uppercase tracking-wide">
              MEDDPICC Scoring
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Track qualification live
            </h3>
            <p className="text-gray-400 mb-6">
              See which elements you&apos;ve covered and what&apos;s missing — updated in
              real-time.
            </p>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-xs font-semibold">
                  PROGRESS
                </span>
                <span className="text-white text-sm font-bold">
                  5 OF 8 covered
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-600 text-white text-xs px-3 py-1.5 rounded-md">
                  ✓ M
                </span>
                <span className="bg-amber-600 text-white text-xs px-3 py-1.5 rounded-md">
                  ◐ E
                </span>
                <span className="bg-gray-700 text-gray-400 text-xs px-3 py-1.5 rounded-md">
                  ✕ DC
                </span>
                <span className="bg-amber-600 text-white text-xs px-3 py-1.5 rounded-md">
                  ◐ DP
                </span>
                <span className="bg-gray-700 text-gray-400 text-xs px-3 py-1.5 rounded-md">
                  ✕ PP
                </span>
                <span className="bg-green-600 text-white text-xs px-3 py-1.5 rounded-md">
                  ✓ I
                </span>
                <span className="bg-green-600 text-white text-xs px-3 py-1.5 rounded-md">
                  ✓ C
                </span>
                <span className="bg-green-600 text-white text-xs px-3 py-1.5 rounded-md">
                  ✓ CO
                </span>
              </div>
            </div>
          </div>

          {/* Feature 3 — Ask Copilot */}
          <div className="bg-gradient-to-br from-amber-950/50 to-gray-900 border border-amber-800/50 rounded-2xl p-8">
            <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div className="text-amber-400 text-sm font-semibold mb-3 uppercase tracking-wide">
              Ask Copilot
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Instant deal intelligence
            </h3>
            <p className="text-gray-400 mb-6">
              Ask anything about your meetings — pain points, stakeholders,
              objections, and more.
            </p>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="bg-gray-800 rounded-lg px-4 py-3 mb-4">
                <p className="text-gray-500 text-sm">
                  Ask anything about this meeting...
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800 text-amber-400 text-xs px-3 py-1.5 rounded-md">
                  Pain points
                </span>
                <span className="bg-gray-800 text-gray-400 text-xs px-3 py-1.5 rounded-md">
                  Budget signals
                </span>
                <span className="bg-gray-800 text-gray-400 text-xs px-3 py-1.5 rounded-md">
                  Timeline
                </span>
                <span className="bg-gray-800 text-gray-400 text-xs px-3 py-1.5 rounded-md">
                  Competition
                </span>
                <span className="bg-gray-800 text-gray-400 text-xs px-3 py-1.5 rounded-md">
                  Stakeholders
                </span>
              </div>
            </div>
          </div>

          {/* Feature 4 — Custom Playbooks */}
          <div className="bg-gradient-to-br from-blue-950/50 to-gray-900 border border-blue-800/50 rounded-2xl p-8">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <div className="text-blue-400 text-sm font-semibold mb-3 uppercase tracking-wide">
              Custom Playbooks
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Your methodology, your way
            </h3>
            <p className="text-gray-400 mb-6">
              Configure MEDDPICC, SPICED, BANT, or create your own custom
              playbook.
            </p>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="bg-gray-800 px-3 py-2 rounded-md mb-4 inline-block">
                <span className="text-white text-sm font-semibold">
                  MEDDPICC ▼
                </span>
              </div>
              <div className="space-y-2">
                {[
                  { letter: "M", label: "Metrics" },
                  { letter: "E", label: "Economic Buyer" },
                  { letter: "D", label: "Decision Criteria" },
                  { letter: "I", label: "Identify Pain" },
                ].map((item) => (
                  <div
                    key={item.letter}
                    className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-2.5"
                  >
                    <span className="w-6 h-6 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                      {item.letter}
                    </span>
                    <span className="text-white text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 5 — Post-Call Summaries (Full Width) */}
          <div className="md:col-span-2 bg-gradient-to-br from-indigo-950/50 to-gray-900 border border-indigo-800/50 rounded-2xl p-8">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="text-indigo-400 text-sm font-semibold mb-3 uppercase tracking-wide">
              Post-Call Summaries
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Perfect notes, every time
            </h3>
            <p className="text-gray-400 mb-6 max-w-3xl">
              Automatic call summaries with next steps, MEDDPICC updates, and
              CRM field population. No more manual data entry.
            </p>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-semibold">
                    Post-Call Recap
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1.5 rounded-md">
                    Regenerate
                  </span>
                  <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1.5 rounded-md">
                    Copy
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-purple-400 text-xs font-semibold mb-2">
                  SUMMARY
                </div>
                <p className="text-gray-300 text-sm">
                  Discovery call with Sarah Chen (VP Ops) at Nexus Technologies.
                  Evaluating solutions due to slow support response times (2-3
                  days). Budget approved for Q2, decision needed by mid-April.
                  Next steps: send case studies, schedule technical deep-dive
                  with CTO.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-800 rounded-lg px-4 py-2.5">
                  <span className="text-green-400 text-xs font-semibold">
                    M
                  </span>
                  <span className="text-gray-400 text-xs ml-2">
                    Metrics — Complete
                  </span>
                </div>
                <div className="bg-gray-800 rounded-lg px-4 py-2.5">
                  <span className="text-amber-400 text-xs font-semibold">
                    E
                  </span>
                  <span className="text-gray-400 text-xs ml-2">
                    Econ Buyer — Partial
                  </span>
                </div>
                <div className="bg-gray-800 rounded-lg px-4 py-2.5">
                  <span className="text-gray-600 text-xs font-semibold">
                    DC
                  </span>
                  <span className="text-gray-500 text-xs ml-2">
                    Decision Criteria — Gap
                  </span>
                </div>
                <div className="bg-gray-800 rounded-lg px-4 py-2.5">
                  <span className="text-green-400 text-xs font-semibold">
                    I
                  </span>
                  <span className="text-gray-400 text-xs ml-2">
                    Identify Pain — Complete
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
