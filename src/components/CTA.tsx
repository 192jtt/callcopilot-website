"use client";

import { useState } from "react";

export function CTA() {
  const [email, setEmail] = useState("");

  return (
    <div
      id="cta"
      className="py-24 bg-gradient-to-br from-purple-950 via-purple-900 to-gray-900 relative overflow-hidden"
    >
      {/* Background grid decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-purple-300">win more deals</span>?
          </h2>
          <p className="text-lg text-purple-200 mb-10">
            Join the waitlist and be the first to experience AI-powered sales
            coaching. We&apos;re onboarding new users every week.
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
                className="flex-1 px-4 py-3 rounded-lg border-2 border-purple-700 bg-gray-900/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-white hover:bg-gray-100 text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap shadow-lg"
              >
                Join the Waitlist
              </button>
            </form>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-purple-200">
            <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Early bird
            </div>
            <span>
              Early waitlist members get 3 months free on any paid plan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
