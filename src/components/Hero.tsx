"use client";

import { Lock, Sparkles } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [email, setEmail] = useState("");

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl">
              <span className="text-white">Call</span>
              <span className="font-semibold text-white">Copilot</span>
              <span className="text-gray-500">.io</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-400 hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a
              href="#integrations"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Integrations
            </a>
            <a
              href="#pricing"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Pricing
            </a>
          </div>

          <a
            href="#cta"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg transition-colors"
          >
            Join the Waitlist
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-800 text-purple-300 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              Early Access — Limited Spots Available
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Your AI sales coach.</span>
            <br />
            <span className="text-purple-400">Live on every call.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            CallCopilot listens to your sales calls in real-time and coaches you
            through MEDDPICC, objection handling, and next-best questions — so
            you win more deals.
          </p>

          {/* Email Form */}
          <div className="max-w-md mx-auto mb-4">
            <form
              className="flex gap-3"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
              >
                Join the Waitlist
              </button>
            </form>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Lock className="w-4 h-4" />
            <span>No spam. We&apos;ll only email you when it&apos;s your turn.</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                47%
              </div>
              <div className="text-gray-400">Higher win rates</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                3x
              </div>
              <div className="text-gray-400">Faster onboarding</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                89%
              </div>
              <div className="text-gray-400">MEDDPICC compliance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
