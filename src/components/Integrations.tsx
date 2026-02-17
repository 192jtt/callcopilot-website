import { Plug, Video } from "lucide-react";

export function Integrations() {
  return (
    <div id="integrations" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-800 text-purple-300 px-4 py-2 rounded-full mb-6">
            <Plug className="w-4 h-4" />
            <span className="text-sm font-medium">Integrations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Works with your meeting apps
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            CallCopilot seamlessly integrates with the tools you already use.
          </p>
        </div>

        {/* Integration Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Zoom */}
          <div className="bg-gradient-to-br from-blue-950/50 to-gray-900 border-2 border-blue-800/50 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Zoom</h3>
              <p className="text-gray-400 text-sm mb-4">
                Desktop & web meetings
              </p>
              <div className="inline-flex items-center gap-1 bg-green-900/50 border border-green-700 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                Live
              </div>
            </div>
          </div>

          {/* Microsoft Teams */}
          <div className="bg-gradient-to-br from-purple-950/50 to-gray-900 border-2 border-purple-800/50 rounded-2xl p-8 text-center relative overflow-hidden opacity-60">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Microsoft Teams
              </h3>
              <p className="text-gray-400 text-sm mb-4">Enterprise meetings</p>
              <div className="inline-flex items-center gap-1 bg-gray-800 border border-gray-700 text-gray-400 px-3 py-1 rounded-full text-xs font-semibold">
                <div className="w-2 h-2 bg-gray-600 rounded-full" />
                Q2 2026
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-gray-800 border border-gray-700 text-gray-400 px-3 py-1 rounded-full text-xs font-medium">
              COMING SOON
            </div>
          </div>

          {/* Google Meet */}
          <div className="bg-gradient-to-br from-teal-950/50 to-gray-900 border-2 border-teal-800/50 rounded-2xl p-8 text-center relative overflow-hidden opacity-60">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Google Meet
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Web-based meetings
              </p>
              <div className="inline-flex items-center gap-1 bg-gray-800 border border-gray-700 text-gray-400 px-3 py-1 rounded-full text-xs font-semibold">
                <div className="w-2 h-2 bg-gray-600 rounded-full" />
                Q2 2026
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-gray-800 border border-gray-700 text-gray-400 px-3 py-1 rounded-full text-xs font-medium">
              COMING SOON
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
