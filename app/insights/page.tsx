import React from 'react';
import Link from "next/link";
export default function InsightsPage() {
  const HEADER_GRADIENT = {
    background: 'linear-gradient(to right, #c7cfe3, #b7c0dc)',
  };

  const TEXT_DARK_SLATE = 'text-[#2f3a5a]';
  const BG_VERY_LIGHT_GRAY = 'bg-[#f5f6f9]';

  return (
    // <div className={`min-h-screen ${BG_VERY_LIGHT_GRAY}`}>
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 sm:p-8 flex flex-col items-center">
     <div className="w-full pl-4 sm:pl-6">
  <Link
    href="/"
    className="group inline-flex items-center gap-2 
             px-4 py-2 
             rounded-full
             bg-white/70 backdrop-blur-md
             border border-white/40
             shadow-md
             text-[#4F5D8C]
             font-medium
             transition-all duration-300
             hover:bg-gradient-to-r
             hover:from-[#55659C] 
             hover:to-[#6677B4]
             hover:text-white
             hover:shadow-indigo-300/50"
  >
    <span className="transition-transform duration-300 group-hover:-translate-x-1">
      ←
    </span>
    Back to Home
  </Link>
</div>

      {/* <header
        // className="relative w-full h-[140px] rounded-b-xl overflow-hidden flex items-center justify-center"
        // style={HEADER_GRADIENT}
         className="relative w-full h-[140px] rounded-b-xl overflow-hidden flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: "url('/journal_page.png')",
  }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 10% 20%, #ffffff, transparent)`,
          }}
        ></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 90% 80%, #ffffff, transparent)`,
          }}
        ></div>

        <h1 className={`relative z-10 text-3xl md:text-4xl font-semibold ${TEXT_DARK_SLATE}`}>
          Insights & Patterns
        </h1>
      </header> */}
 <header className="w-full max-w-5xl mx-auto px-6 py-10
bg-[url('/journal_page.png')] bg-cover bg-center bg-no-repeat
rounded-t-3xl shadow-lg mb-8 
flex flex-col items-center">
  <h1 className="text-4xl sm:text-5xl font-bold text-[#4F5D8C] tracking-tight mb-2">
          Insights & Patterns
        </h1>
        <p className="text-lg sm:text-xl font-light text-[#5F6FA3]">
          Discover trends and deeper understanding
        </p>
</header>

      {/* Main Container */}
      <main className="container mx-auto max-w-5xl px-0 py-3">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Emotional Trends */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-700">Emotional Trends</h2>
            <div className="border-t border-gray-200 mt-3 mb-4"></div> {/* Divider */}

            <div className="space-y-5">
              {/* Anxiety Trend */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="rounded-full w-8 h-8 flex items-center justify-center bg-orange-100 text-orange-500 font-bold text-sm">
                    A
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 font-medium mb-2">Anxiety</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-400 h-2 rounded-full w-[70%]"></div>
                  </div>
                </div>
              </div>

              {/* Self-Doubt Trend */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="rounded-full w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-500 font-bold text-sm">
                    S
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 font-medium mb-2">Self-Doubt</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full w-[55%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Recurring Themes + Reflection Prompt stacked */}
          <div className="flex flex-col space-y-6">
            {/* Recurring Themes Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-700">Recurring Themes</h2>
              <div className="border-t border-gray-200 mt-3 mb-4"></div> {/* Divider */}
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg px-4 py-3 text-gray-700">Fear of Failure</div>
                <div className="bg-gray-50 rounded-lg px-4 py-3 text-gray-700">Need for Approval</div>
              </div>
            </div>

            {/* Reflection Prompt Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-700">Reflection Prompt</h2>
              <div className="border-t border-gray-200 mt-3 mb-4"></div> {/* Divider */}
              <div className="bg-gray-50 rounded-lg p-4 text-gray-600 italic">
                'What would change if you let go of the need for control?'
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION (Full Width Under Grid): Weekly Summary card */}
        <div className="mt-8 bg-white rounded-xl border border-gray-200 shadow-sm p-6 bg-indigo-50">
          <h2 className="text-lg font-semibold text-gray-700">Weekly Summary</h2>
          <div className="border-t border-gray-200 mt-3 mb-4"></div> {/* Divider */}
          <p className="text-gray-700">
            In the past week, you’ve often felt anxious when seeking validation. Remember, your worth is not defined by others.
          </p>
        </div>
      </main>
    </div>
  );
}