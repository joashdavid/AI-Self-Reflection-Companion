"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@heroui/react";
const JournalPage = () => {
  const [intensity, setIntensity] = useState(3); // Default to Neutral
  const [reflectionEnabled, setReflectionEnabled] = useState(false);
  const [wisdomEnabled, setWisdomEnabled] = useState(false);
  const [wisdomSelection, setWisdomSelection] = useState("Bible Verse"); // Default selection
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // const intensityDescriptions = {
  //   1: "Calm",
  //   2: "Mild emotional charge",
  //   3: "Neutral",
  //   4: "Moderate emotional charge",
  //   5: "Strong emotional charge",
  // };
  const intensityDescriptions: Record<number, string> = {
  1: "Calm",
  2: "Mild emotional charge",
  3: "Neutral",
  4: "Moderate emotional charge",
  5: "Strong emotional charge",
};
  const wisdomContent = {
  "Bible Verse": {
    quote: "Where your treasure is, there your heart will be also.",
    author: "Matthew 6:21",
  },
  "Stoic Quote": {
    quote: "You have power over your mind — not outside events.",
    author: "Marcus Aurelius",
  },
  "Neutral Wisdom": {
    quote: "Small daily improvements lead to stunning results.",
    author: "Robin Sharma",
  },
};
// Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const options = [
    { label: "Bible Verse", icon: "📖" },
    { label: "Stoic Quote", icon: "🏛️" },
    { label: "Neutral Wisdom", icon: "🌿" },
  ];
    const selectedWisdom =
    wisdomContent[wisdomSelection as keyof typeof wisdomContent];

  return (
    
    // <div className="min-h-screen from-purple-50 to-blue-50 p-4 sm:p-8 flex flex-col items-center">
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 sm:p-8 flex flex-col items-center">
     
      {/* Page Header */}
      {/* <header className="w-full max-w-4xl bg-gradient-to-r from-purple-200 via-blue-100 to-green-100 p-6 sm:p-8 rounded-t-3xl shadow-lg mb-8 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight mb-2">
          AI Self-Reflection Companion
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 font-light">
          A space for mindful reflection
        </p>
        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full"></div>
      </header> */}
      <div className="w-full pl-4 sm:pl-6 mb-3">
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
      <header className="w-full max-w-7xl 
bg-[url('/journal_page.png')] bg-cover bg-center bg-no-repeat
p-6 sm:p-8 rounded-t-3xl shadow-lg mb-8 
flex flex-col items-center">
  <h1 className="text-4xl sm:text-5xl font-bold text-[#4F5D8C] tracking-tight mb-2">
          AI Self-Reflection Companion
        </h1>
        <p className="text-lg sm:text-xl font-light text-[#5F6FA3]">
          A space for mindful reflection
        </p>
</header>
      {/* Main Content Area */}
      {/* <main className="w-full max-w-7xl bg-white p-6 sm:p-10 rounded-b-3xl shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8"> */}
      <main className="w-full max-w-7xl bg-white p-6 sm:p-10 rounded-b-3xl shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* LEFT COLUMN: Journal Entry */}
        <section className="flex flex-col">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">
            Journal Entry
          </h2>
          <div className="w-full h-0.5 bg-gray-200 mb-6"></div> {/* Divider */}

          <p className="text-gray-600 text-lg mb-4">What are you feeling today?</p>

          <div className="relative mb-6">
            <textarea
              className="w-full h-48 sm:h-64 p-4 text-lg text-gray-800 bg-blue-50 rounded-xl border-2 border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 outline-none resize-none shadow-sm placeholder:text-gray-400"
              placeholder="I feel like I'm not doing enough at work. Everyone else seems more successful..."
            ></textarea>
            <svg
              className="absolute bottom-4 right-4 w-6 h-6 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>

          {/* Intensity Section */}
          {/* <div className="mb-8 p-4 bg-purple-50 rounded-xl border border-purple-100 shadow-sm"> */}
          <div className="mb-8 p-4 bg-blue-50 rounded-xl border border-[#D4D9F0] shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Intensity</h3>
            <div className="relative mb-2">
              <input
                type="range"
                min="1"
                max="5"
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full h-2 bg-[#C9D1F0] rounded-lg appearance-none cursor-pointer accent-[#5C6FA8] transition-colors duration-200"
                style={{ WebkitAppearance: 'none' }} // Needed for accent-color to work well in some browsers
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>1 Calm</span>
                <span>3 Neutral</span>
                <span>5 Intense</span>
              </div>
            </div>
            <p className="text-center text-lg text-gray-600 mt-4">
              Current: <span className="font-bold text-[#5C6FA8]">{intensity}</span> ({intensityDescriptions[intensity]})
            </p>
          </div>


          {/* Emotion Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button className="flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium shadow-sm hover:bg-red-200 transition-colors">
              😟 Anxious
            </button>
            <button className="flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium shadow-sm hover:bg-yellow-200 transition-colors">
              😔 Insecure
            </button>
            <button className="flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium shadow-sm hover:bg-purple-200 transition-colors">
              😵 Overwhelmed
            </button>
          </div>

          {/* Primary Action Button */}
          {/* <button className="mt-auto w-full lg:w-3/4 self-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 text-white text-xl font-semibold shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all transform hover:-translate-y-0.5"> */}
          <button className="mt-auto w-full lg:w-3/4 self-center px-8 py-3 rounded-full 
bg-gradient-to-r from-[#5C6FA8] to-[#6F82BD] 
text-white text-xl font-semibold shadow-lg 
hover:from-[#55659C] hover:to-[#6677B4] 
transition-all transform hover:-translate-y-0.5">
            Log Journal
          </button>
        </section>

        {/* MIDDLE COLUMN: Reflection */}
        <section className="flex flex-col">
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-md h-full border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700">Reflection</h2>
              {/* Toggle Switch */}
              {/* <label htmlFor="reflection-toggle" className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="reflection-toggle"
                    className="sr-only"
                    checked={reflectionEnabled}
                    onChange={() => setReflectionEnabled(!reflectionEnabled)}
                  />
                  <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
                  <div
                    className={`${
                      reflectionEnabled ? "bg-[#4F5D8C] right-1" : "bg-white left-1"
                    } absolute top-1 w-6 h-6 rounded-full transition-all duration-300`}
                  ></div>
                </div>
              </label> */}
            </div>

            <div className="w-full h-0.5 bg-gray-200 mb-6"></div> {/* Divider */}

            <p className="text-gray-600 text-lg mb-4">What are you trying to protect right now?</p>
            <textarea
              className="w-full h-24 p-4 text-lg text-gray-800 bg-blue-50 rounded-xl border-2 border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 outline-none resize-none shadow-sm placeholder:text-gray-400 mb-6"
              placeholder="E.g., my peace, my reputation, my sense of control..."
            ></textarea>

            <p className="text-gray-600 text-lg mb-4">What would acceptance look like here?</p>
            <textarea
              className="w-full h-24 p-4 text-lg text-gray-800 bg-blue-50 rounded-xl border-2 border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 outline-none resize-none shadow-sm placeholder:text-gray-400 mb-3"
              placeholder="E.g., letting go of expectations, embracing the unknown..."
            ></textarea>
            <button className="mt-auto w-full lg:w-3/4 self-center px-8 py-3 rounded-full 
bg-gradient-to-r from-[#5C6FA8] to-[#6F82BD] 
text-white text-xl font-semibold shadow-lg 
hover:from-[#55659C] hover:to-[#6677B4] 
transition-all transform hover:-translate-y-0.5 mb-3">
            Submit
          </button>

            {/* Wisdom (Optional) */}
            <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-700">Wisdom Quote</h3>
                <label htmlFor="wisdom-toggle" className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="wisdom-toggle"
                      className="sr-only"
                      checked={wisdomEnabled}
                      onChange={() => setWisdomEnabled(!wisdomEnabled)}
                    />
                    <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
                    <div
                      className={`${
                        wisdomEnabled ? "bg-[#4F5D8C] right-1" : "bg-white left-1"
                      } absolute top-1 w-6 h-6 rounded-full transition-all duration-300`}
                    ></div>
                  </div>
                </label>
              </div>

              {wisdomEnabled && (
                <>
                  {/* <select
                    value={wisdomSelection}
                    onChange={(e) => setWisdomSelection(e.target.value)}
                    className="w-full p-3 mb-4 text-lg bg-blue-50 rounded-xl border-2 border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 outline-none shadow-sm text-gray-700"
                  >
                    <option value="Bible Verse">Bible Verse</option>
                    <option value="Stoic Quote">Stoic Quote</option>
                    <option value="Neutral Wisdom">Neutral Wisdom</option>
                  </select>
                  <div className="bg-purple-50 p-6 rounded-xl shadow-sm border border-purple-100">
                    <p className="italic text-gray-800 text-lg mb-2">
                      "Where your treasure is, there your heart will be also."
                    </p>
                    <p className="text-right text-gray-600">— Matthew 6:21</p>
                  </div> */}

                  {/* <div className="relative mb-4"> */}
                  <div className="w-full max-w-md mx-auto" ref={dropdownRef}>
      {/* Dropdown */}
      <div className="relative mb-4">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full px-4 py-3 text-left bg-white rounded-2xl border border-[#B9B6E3] shadow-sm
          flex justify-between items-center
          hover:border-[#6E78B7] hover:shadow-md
          transition-all duration-200"
        >
          <span className="text-gray-700 font-medium">
            {wisdomSelection}
          </span>

          <svg
            className={`w-5 h-5 text-[#B9B6E3] transition-transform duration-200 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {dropdownOpen && (
          <div className="absolute z-10 mt-2 w-full bg-white rounded-2xl shadow-lg border border-[#B9B6E3] overflow-hidden animate-fadeIn">
            {options.map((option) => (
              <div
                key={option.label}
                onClick={() => {
                  setWisdomSelection(option.label);
                  setDropdownOpen(false);
                }}
                className={`px-4 py-3 flex items-center gap-3 cursor-pointer transition-colors text-gray-800
                ${
                  wisdomSelection === option.label
                    // ? "bg-[#4F5D8C] text-blue-600"
                    // : "hover:bg-[#B9B6E3]"
                    ? "bg-[#4F5D8C] text-slate-900"
                    : "hover:bg-[#B9B6E3]"
                }`}
              >
                <span>{option.icon}</span>
                <span className="font-medium">{option.label}</span>

                {wisdomSelection === option.label && (
                  <span className="ml-auto text-amber-400">✓</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quote Card */}
      <div className="bg-blue-50 p-6 rounded-2xl shadow-sm border border-indigo-300 transition-all duration-300">
        <p className="italic text-gray-800 text-lg mb-2">
          "{selectedWisdom.quote}"
        </p>
        <p className="text-right text-gray-600">
          — {selectedWisdom.author}
        </p>
      </div>
    </div>
  

                </>
              )}
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN: AI Reflection Panel */}
        <aside className="flex flex-col">
          <div className="bg-gradient-to-b from-[#4F5D8C] via-[#6E78B7] to-[#B9B6E3] 
                  p-6 sm:p-8 rounded-3xl shadow-md h-full flex flex-col">
            <h2 className="text-3xl font-semibold text-white mb-6">
              AI Reflection
            </h2>

            {/* Emotional Tone Block */}
            <div className="bg-white/10 p-4 rounded-md mb-4">
              <div className="flex items-center text-white mb-2">
                <span className="text-xl mr-2">😊</span>
                <h3 className="text-xl font-semibold">Emotional Tone</h3>
              </div>
              <p className="text-white text-lg font-light leading-relaxed">
                You seem to be grappling with feelings of inadequacy and self-doubt.
              </p>
            </div>

            {/* Inner Patterns Block */}
            <div className="bg-white/10 p-4 rounded-md mb-4">
              <h3 className="text-xl font-semibold text-white mb-2">Inner Patterns</h3>
              <ul className="list-disc list-inside text-white text-lg font-light leading-relaxed space-y-1">
                <li>Struggling with comparison to others.</li>
                <li>Questioning your own worth and efforts.</li>
              </ul>
            </div>

            {/* Gentle Insight Block */}
            <div className="bg-white/10 p-4 rounded-md">
              <h3 className="text-xl font-semibold text-white mb-2">Gentle Insight</h3>
              <p className="text-white text-lg font-light leading-relaxed">
                Consider where these feelings of unworthiness might stem from and how you can cultivate self-compassion.<br/>
                Embracing your journey, rather than comparing it, can bring profound peace.
              </p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default JournalPage;
