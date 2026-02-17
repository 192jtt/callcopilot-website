import { MessageCircle, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "CallCopilot is like having a senior AE whispering in your ear on every call. Our new reps are ramping 3x faster and hitting quota in their first quarter. The ROI is incredible.",
    name: "Sarah Kim",
    title: "VP of Sales, TechCorp",
    initials: "SK",
  },
  {
    quote:
      "Finally, MEDDPICC adoption that actually sticks. Our team loves it because it helps them in the moment, not just in pipeline reviews.",
    name: "Mike Johnson",
    title: "CRO, SalesForce Pro",
    initials: "MJ",
  },
  {
    quote:
      "The objection handling feature alone has saved dozens of deals. When a prospect mentions a competitor, my reps are ready instantly.",
    name: "Amanda Lee",
    title: "Sales Director, GrowthCo",
    initials: "AL",
  },
  {
    quote:
      "We went from 40% to 89% MEDDPICC compliance in 30 days. The real-time prompts make it impossible to miss key questions.",
    name: "Ryan Brooks",
    title: "RevOps Lead, ScaleUp",
    initials: "RB",
  },
];

export function Testimonials() {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-800 text-purple-300 px-4 py-2 rounded-full mb-6">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by sales teams
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See what revenue leaders are saying about CallCopilot.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.initials}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-gray-300 text-lg mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{t.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
