import Link from "next/link";
const JournalPage = () => {
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
      <header className="w-full max-w-4xl 
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
      <main className="w-full max-w-4xl bg-white p-6 sm:p-10 rounded-b-3xl shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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

        {/* RIGHT COLUMN: AI Reflection Panel */}
        <aside className="flex flex-col">
          {/* <div className="bg-gradient-to-br from-blue-300 to-purple-300 p-6 sm:p-8 rounded-3xl shadow-md h-full flex flex-col justify-center"> */}
          <div className="bg-gradient-to-b from-[#4F5D8C] via-[#6E78B7] to-[#B9B6E3] 
                  p-6 sm:p-8 rounded-3xl shadow-md h-full flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-white mb-6">
              AI Reflection
            </h2>
            <ul className="space-y-4 text-white text-lg font-light leading-relaxed">
              <li>• You seem to be struggling with comparison and self-doubt.</li>
              <li>• What part of you feels unworthy right now?</li>
              <li>• How can you be kinder to yourself in this moment?</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default JournalPage;
