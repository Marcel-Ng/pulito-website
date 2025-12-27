// app/components/Header.tsx

"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-teal-400 tracking-tight">
          PULITO
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 text-lg font-bold uppercase tracking-wider">
          <a
            href="#how"
            className="text-gray-300 hover:text-teal-400 transition"
          >
            How It Works
          </a>
          <a
            href="#services"
            className="text-gray-300 hover:text-teal-400 transition"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-teal-400 transition"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed inset-x-0 top-0 bottom-0 bg-gray-900 z-40 flex flex-col items-center justify-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white"
              aria-label="Close menu"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <nav className="flex flex-col space-y-12 text-center">
              <a
                href="#how"
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-bold text-gray-300 hover:text-teal-400 transition"
              >
                How It Works
              </a>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-bold text-gray-300 hover:text-teal-400 transition"
              >
                Services
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-bold text-gray-300 hover:text-teal-400 transition"
              >
                Contact
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
