"use client";
import Link from "next/link";
import React, { useMemo, useState, useEffect } from "react";

type JournalEntry = {
  id: string;
  content: string;
  mood: string[];
  intensity: number;
  createdAt: string;
  analysis?: {
    summary?: string;
  };
};

// const journalEntries: JournalEntry[] = [
//   {
//     date: "April 22, 2024",
//     preview: "I feel so overwhelmed by everything today...",
//     fullText:
//       "I feel so overwhelmed by everything today. I can’t seem to catch up and everything feels heavy.",
//     insight:
//       "You may be carrying more than you need to. What would it look like to ask for support?",
//   },
//   {
//     date: "April 19, 2024",
//     preview: "I just can't stop comparing myself to others...",
//     fullText:
//       "I just can't stop comparing myself to others. Everyone else seems to be doing so well and I feel so inadequate.",
//     insight:
//       "This is the voice of your inner critic. What would happen if you trusted your own path?",
//   },
//   {
//     date: "April 15, 2024",
//     preview: "I felt really happy spending time in nature...",
//     fullText:
//       "I felt really happy spending time in nature. It reminded me that slowing down is allowed.",
//     insight:
//       "Peace appears when you allow yourself to slow down. What helps you return to that place?",
//   },
//   {
//     date: "April 12, 2024",
//     preview: "Why do I always worry about the future?",
//     fullText:
//       "Why do I always worry about the future? Even when things are fine, my mind searches for problems.",
//     insight:
//       "Your mind may be seeking control. What would acceptance look like today?",
//   },
// ];

export default function HistoryPage() {
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(true);

  const HEADER_GRADIENT_STYLE = useMemo(
    () => ({
      background: "linear-gradient(to right, #e0e7ff, #c7d2fe)",
    }),
    []
  );

  const PAGE_BACKGROUND_COLOR = "bg-[#f8f8fa]";

  // ✅ Functionality from Code1
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null); // Initial: April 19, 2024

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch("/api/journal/history");
        const data = await res.json();

        setJournals(data.journals || []);

        // ✅ set first entry as selected
        if (data.journals?.length > 0) {
          setSelectedEntry(data.journals[0]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);
  if (loading) return <p className="p-6">Loading...</p>;

  // if (!journals.length) {
  //   return <p className="p-6">No journal entries yet.</p>;
  // }
  return (
    // <div className={`min-h-screen ${PAGE_BACKGROUND_COLOR} font-sans`}>
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 sm:p-8 flex flex-col items-center">
      {/* 1. Top Banner Section (Code2 style) */}
      {/* <header
        className="relative w-full h-[140px] rounded-b-xl overflow-hidden flex items-center justify-center shadow-md"
        style={HEADER_GRADIENT_STYLE}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.4), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.4), transparent 70%)",
          }}
        />

        <h1 className="relative z-10 text-4xl md:text-5xl font-semibold text-indigo-800 tracking-tight">
          Past Journal Entries
        </h1>
      </header> */}
      <div className="w-full mb-3">
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
      <header className="w-full max-w-7xl mx-auto px-6 py-10
bg-[url('/journal_page.png')] bg-cover bg-center bg-no-repeat
rounded-t-3xl shadow-lg mb-8 
flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#4F5D8C] tracking-tight mb-2">
          Past Journal Entries
        </h1>
      </header>
      {/* 2. Main Content Layout (Code2 structure) */}
      <main className="container mx-auto max-w-7xl px-0 py-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* LEFT: Journal List Panel */}
          {/* <div className="bg-white rounded-xl shadow-md p-6"> */}
          <div className="bg-white rounded-xl shadow-md p-6 h-[500px] flex flex-col">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Journal Entries
            </h2>

            {/* <div className="space-y-4"> */}
            <div className="space-y-4 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-transparent ">
              {journals.length === 0 ? (
                <div className="text-center text-gray-500 mt-10">
                  <p className="text-lg">No journal entries yet 📝</p>
                  {/* <p className="text-sm mt-2">Start writing to see your history here</p> */}
                  <Link href="/journalDemo" className="text-sm mt-2 text-indigo-600 hover:underline">
                    Start writing to see your history here
                  </Link>
                </div>
              ) : (journals.map((entry: JournalEntry) => {
                const isActive = selectedEntry?.id === entry.id;

                return (
                  <button
                    key={entry.id}
                    type="button"
                    onClick={() => setSelectedEntry(entry)}
                    className={`w-full text-left flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors duration-200
                      ${isActive ? "bg-indigo-50 ring-1 ring-indigo-200" : "hover:bg-gray-50"}
                    `}
                  >
                    <div>
                      <p className="font-bold text-gray-700">{new Date(entry.createdAt).toDateString()}</p>
                      <p className="text-gray-500 italic text-sm">
                        "{entry.content.slice(0, 50)}"
                      </p>
                    </div>
                    <span className="text-gray-400 font-bold">&gt;</span>
                  </button>
                );
              })
              )}

            </div>
          </div>

          {/* MIDDLE: Entry Detail Panel (updates on click) */}
          <div className="bg-white rounded-xl shadow-md p-6">
            {/* Selected Entry Date Header */}
            <p className="text-lg font-bold text-gray-800 mb-3">
              {selectedEntry && new Date(selectedEntry.createdAt).toDateString()}
            </p>

            <div className="border-t border-gray-200 pt-4" />

            {/* Journal content */}
            <div className="bg-gray-50 rounded-lg p-4 text-gray-700 leading-relaxed mt-4 mb-6">
              <p>{selectedEntry?.content}</p>
            </div>
            {/* 🔥 Mood Tags */}
            {/* <div className="flex gap-2 flex-wrap mb-6">
              {selectedEntry?.mood?.map((m) => (
                <span
                  key={m}
                  className="px-2 py-1 text-xs bg-indigo-100 text-indigo-600 rounded-full"
                >
                  {m}
                </span>
              ))}
            </div> */}
            {/* AI Insight Section */}
            <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl border border-dashed border-gray-200">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold text-sm">
                ?
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  AI Insight
                </h3>
                <p className="text-indigo-600 italic">
                  "{selectedEntry?.analysis?.summary || 'No insight yet'}"
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Gradient AI Insight Card (static like Code2) */}
          <div
            className="hidden lg:block rounded-xl shadow-md p-6 text-white"
            style={{
              background: "linear-gradient(to bottom right, #6366f1, #a855f7)",
            }}
          >
            <h2 className="text-xl font-semibold mb-2">AI Insight</h2>
            <p className="text-sm opacity-90 mb-4">• Correlations</p>

            <div className="border-t border-indigo-300/70 pt-4 mb-4" />

            <p className="italic leading-relaxed">
              "Over time, consistent self-reflection reveals patterns. Your
              tendency to compare might be linked to feelings of insecurity or a
              desire for external validation. Recognizing this is the first step
              toward self-compassion."
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
