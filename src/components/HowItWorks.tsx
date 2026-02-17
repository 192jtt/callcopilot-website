import { ArrowRight, Rocket } from "lucide-react";

export function HowItWorks() {
  return (
    <div id="how-it-works" className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-800 text-purple-300 px-4 py-2 rounded-full mb-6">
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-medium">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Up and running in minutes
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            No complex setup. Just install and start winning.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-gray-900 border-2 border-purple-800/50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Install the app
              </h3>
              <p className="text-gray-400">
                Download our desktop app for macOS. Works with Zoom out of the
                box — more platforms coming soon.
              </p>
            </div>
            <ArrowRight className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 text-purple-700" />
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-gray-900 border-2 border-purple-800/50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Join your call
              </h3>
              <p className="text-gray-400">
                CallCopilot automatically detects when you&apos;re on a sales call
                and starts listening.
              </p>
            </div>
            <ArrowRight className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 text-purple-700" />
          </div>

          {/* Step 3 */}
          <div className="bg-gray-900 border-2 border-purple-800/50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Get coached live
            </h3>
            <p className="text-gray-400">
              Receive real-time suggestions, track MEDDPICC, and close more
              deals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
