'use client';

import React, { useState } from 'react';
import Image from "next/image";
const AiCompanionIcon = () => (
  <svg
    className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img" // Added role for semantic meaning
    aria-labelledby="ai-companion-logo-title" // Links to the title element
  >
    <title id="ai-companion-logo-title">AI Self-Reflection Companion Logo</title> {/* Provides accessible name */}
    <path
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 12H8.51"
      stroke="currentColor"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12H12.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}
const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
  <div className="bg-white/50 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-200/50 dark:border-gray-700/50">
    {/* Icon */}
    <div className="flex justify-center mb-6">
      <Image
        src={icon}
        alt={title}
        width={80}
        height={80}
        className="object-contain"
        priority
      />
    </div>

    {/* Title */}
    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
      {title}
    </h3>

    {/* Description */}
    <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
      {description}
    </p>
  </div>
);


export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-indigo-950 dark:to-black text-gray-800 dark:text-gray-200">
      
      <header className="sticky top-0 z-50 bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative">
          <div className="flex items-center space-x-3 z-20">
            <AiCompanionIcon />
            <span className="font-semibold text-lg text-gray-800 dark:text-gray-100">
              AI Self-Reflection Companion
            </span>
          </div>
          {/* <div className="hidden md:flex items-center space-x-8"> */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-8">
            <a href="/journalDemo" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Journal</a>
            <a href="/insights" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Insights</a>
            <a href="/history" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">History</a>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div
              id="mobile-menu"
              className="md:hidden absolute top-full left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-t border-gray-200/50 dark:border-gray-800/50 py-4 pb-8 shadow-lg z-10"
            >
              <div className="flex flex-col items-center space-y-4">
                <a href="/journalDemo" className="text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>Journal</a>
                <a href="/insights" className="text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>Insights</a>
                <a href="/history" className="text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>History</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">
        <section id="hero" className="py-20 md:py-32">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              AI Self-Reflection Companion
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A journaling space for introspective growth and mindful reflection.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="/journalDemo"
                // className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900"
                className="bg-indigo-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900"
              >
                Start Journaling
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Free to use • Private & secure • Personalized insights
            </p>
          </div>
        </section>

<section className="py-20 md:py-24 bg-white/20 dark:bg-black/10 backdrop-blur-sm">
  <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <FeatureCard
        icon="/journal.png"
        title="Daily Journaling"
        description="Log your thoughts and feelings to uncover patterns over time."
      />

      <FeatureCard
        icon="/brain.png"
        title="AI Reflections"
        description="Receive gentle, personalized insights on recurring emotions and inner patterns."
      />

      <FeatureCard
        icon="/growth.png"
        title="Track Your Growth"
        description="Reveal emotional trends, recurring themes, and areas for mindful growth."
      />

    </div>
  </div>
</section>

        
        <section id="reflection" className="py-20 md:py-32">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Find a moment of stillness
            </h2>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Self-awareness is the first step toward understanding the ego, fear, and desire that shape our lives. By creating a private space for reflection, you can observe your inner world without judgment, fostering a deeper connection with your true self. Your thoughts are yours alone; we are committed to ensuring your privacy and providing a secure environment for your growth.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-8">
        <div className="container mx-auto px-6 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} AI Self-Reflection Companion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
