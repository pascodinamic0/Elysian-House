"use client";

import { useState, useEffect } from "react";
import { useReducedMotion } from "./use-reduced-motion";

interface UseTypewriterOptions {
  /** Array of words to rotate through */
  rotatingWords: readonly string[];
  /** Speed of typing in milliseconds per character */
  typewriterSpeed?: number;
  /** Pause duration after completing a word before moving to next, in milliseconds */
  pauseAfterWord?: number;
}

/**
 * Hook for typewriter effect with rotating words
 * 
 * Usage:
 * const { displayedText, isTypingComplete } = useTypewriter({
 *   rotatingWords: ["start..", "scale..", "conquer.."],
 *   typewriterSpeed: 80,
 *   pauseAfterWord: 1500,
 * });
 */
export function useTypewriter({
  rotatingWords,
  typewriterSpeed = 80,
  pauseAfterWord = 1500,
}: UseTypewriterOptions) {
  const prefersReducedMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [visibleLength, setVisibleLength] = useState<number>(0);

  const currentWord: string = rotatingWords[wordIndex];
  const isTypingComplete: boolean = visibleLength >= currentWord.length;
  const displayedText: string = prefersReducedMotion
    ? currentWord
    : currentWord.slice(0, visibleLength);

  useEffect(() => {
    if (prefersReducedMotion) return;

    if (visibleLength < currentWord.length) {
      const id = setTimeout(() => {
        setVisibleLength((prev) => prev + 1);
      }, typewriterSpeed);
      return () => clearTimeout(id);
    }

    // Word complete: pause then move to next word
    const id = setTimeout(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
      setVisibleLength(0);
    }, pauseAfterWord);
    return () => clearTimeout(id);
  }, [prefersReducedMotion, currentWord, visibleLength, rotatingWords.length, typewriterSpeed, pauseAfterWord]);

  return {
    displayedText,
    isTypingComplete,
  };
}
