"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  lines: string[];
  typeSpeed?: number; // ms per character
  pauseBetween?: number; // ms pause between lines
  startDelay?: number; // initial delay
  cursor?: boolean; // show blinking cursor
}

export function TypewriterText({
  lines,
  typeSpeed = 80,
  pauseBetween = 400,
  startDelay = 500,
  cursor = true,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const timeout = setTimeout(
      () => {
        if (currentChar === 0) setIsTyping(true);

        if (currentChar < lines[currentLine].length) {
          setCurrentChar((prev) => prev + 1);
        } else {
          setIsTyping(false);
          // Move to next line after pause
          setTimeout(() => {
            setDisplayText((prev) => [...prev, lines[currentLine]]);
            setCurrentLine((prev) => prev + 1);
            setCurrentChar(0);
          }, pauseBetween);
        }
      },
      currentChar === 0 ? startDelay : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentLine, currentChar, lines, typeSpeed, pauseBetween, startDelay]);

  // Build current displayed lines
  const fullLines = [...displayText];
  if (currentLine < lines.length && isTyping) {
    fullLines.push(lines[currentLine].substring(0, currentChar));
  }

  return (
    <div className="inline-block">
      {fullLines.map((line, i) => (
        <div key={i}>
          {line}
          {i === fullLines.length - 1 && cursor && (
            <span className="inline-block w-1 h-12 ml-1 bg-teal-400 animate-pulse" />
          )}
        </div>
      ))}
    </div>
  );
}

export function CyclingTypewriter() {
  //   const phrases = [
  //     "The easiest laundry",
  //     "and delivery service",
  //     "in Nigeria.",
  //   ];

  const phrases = [
    "Trusted Partners.",
    "Clear Prices.",
    "Pickup & Delivery.",
    "Stress-Free Laundry.",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 80; // ms per character when typing
    const deletingSpeed = 50; // faster when deleting
    const pauseAfterTyping = 1500; // pause before deleting
    const pauseAfterDeleting = 600; // pause before next phrase

    let timer: NodeJS.Timeout;

    if (!isDeleting && charIndex < phrases[currentPhraseIndex].length) {
      // Typing forward
      timer = setTimeout(() => {
        setDisplayText((prev) => prev + phrases[currentPhraseIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (
      !isDeleting &&
      charIndex === phrases[currentPhraseIndex].length
    ) {
      // Finished typing → pause then start deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterTyping);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting → move to next phrase
      timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, pauseAfterDeleting);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentPhraseIndex]);

  return (
    <p className="inline-block">
      {displayText}
      <span className="inline-block w-1 h-12 ml-1 bg-teal-400 animate-pulse" />
    </p>
  );
}
