"use client";

import { useState, useEffect, useRef, useCallback, type RefObject } from "react";
import { useReducedMotion } from "./use-reduced-motion";

interface UseScrollLockOptions {
  /** The target element ID to scroll to when unlocking */
  targetId: string;
  /** Whether to enable the scroll lock (default: true) */
  enabled?: boolean;
}

interface UseScrollLockReturn {
  /** Whether scroll is currently locked */
  isLocked: boolean;
  /** Function to scroll to the next section and unlock */
  scrollToNext: () => void;
  /** Whether user prefers reduced motion */
  prefersReducedMotion: boolean;
}

/**
 * useScrollLock — Reusable scroll lock behavior for sections
 * 
 * Locks scroll when the section top reaches near the top of viewport,
 * creating a "wall" effect. User must click button to proceed.
 * 
 * @param sectionRef - Ref to the section element
 * @param options - Configuration options
 * @returns Scroll lock state and controls
 */
export function useScrollLock(
  sectionRef: RefObject<HTMLElement | null>,
  options: UseScrollLockOptions
): UseScrollLockReturn {
  const { targetId, enabled = true } = options;
  const prefersReducedMotion = useReducedMotion();
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const hasLockedOnceRef = useRef<boolean>(false);
  const isUnlockingRef = useRef<boolean>(false);

  const scrollToNext = useCallback(() => {
    // Mark as unlocking to prevent re-lock during smooth scroll
    isUnlockingRef.current = true;
    hasLockedOnceRef.current = true;
    setIsLocked(false);
    
    // Smooth scroll to target with offset for fixed header
    const target = document.getElementById(targetId);
    if (target) {
      // Get header height plus extra breathing room
      const headerOffset = 120;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      
      // Reset unlocking flag after scroll completes
      setTimeout(() => {
        isUnlockingRef.current = false;
      }, 1000);
    }
  }, [targetId]);

  // Lock scroll when section top is near viewport top
  useEffect(() => {
    if (prefersReducedMotion || !enabled) return;

    const checkLock = () => {
      const section = sectionRef.current;
      if (!section || isUnlockingRef.current) return;
      
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const viewportHeight = window.innerHeight;
      
      // Section is "arrived" when the section bottom is near or at the viewport bottom
      // This ensures all content including the scroll button is visible
      // We trigger when bottom is within 100px of viewport bottom
      const sectionArrived = sectionBottom <= viewportHeight + 100 && sectionBottom > viewportHeight * 0.5 && sectionTop < viewportHeight * 0.3;
      
      // Section is "leaving" when scrolling back up - bottom goes below viewport
      const sectionLeaving = sectionBottom > viewportHeight + 150;
      
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/660c50a2-335d-4d85-98ac-6f635e5fd7bf',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'use-scroll-lock.ts:checkLock',message:'Section check',data:{targetId,sectionTop:Math.round(sectionTop),sectionBottom:Math.round(sectionBottom),viewportHeight,sectionArrived,sectionLeaving,isLocked,hasLockedOnce:hasLockedOnceRef.current,isUnlocking:isUnlockingRef.current},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix'})}).catch(()=>{});
      // #endregion
      
      if (sectionArrived && !hasLockedOnceRef.current) {
        // Lock when section arrives at top - "hitting the wall"
        hasLockedOnceRef.current = true;
        
        // Simply lock without forcing scroll position
        // The overflow: hidden will stop further scrolling naturally
        setIsLocked(true);
      } else if (sectionLeaving) {
        // Unlock when scrolling back up (section leaving) - reset for next time
        // #region agent log
        fetch('http://127.0.0.1:7243/ingest/660c50a2-335d-4d85-98ac-6f635e5fd7bf',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'use-scroll-lock.ts:unlock-leaving',message:'UNLOCKING - section leaving (scroll up)',data:{targetId,sectionBottom:Math.round(sectionBottom),wasLocked:isLocked},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix'})}).catch(()=>{});
        // #endregion
        setIsLocked(false);
        hasLockedOnceRef.current = false; // Allow re-lock if user scrolls back down
      }
    };

    // Use requestAnimationFrame for smooth checking
    let rafId: number;
    const throttledCheck = () => {
      rafId = requestAnimationFrame(() => {
        checkLock();
      });
    };

    // Initial check
    checkLock();
    
    window.addEventListener("scroll", throttledCheck, { passive: true });
    window.addEventListener("resize", checkLock);
    
    return () => {
      window.removeEventListener("scroll", throttledCheck);
      window.removeEventListener("resize", checkLock);
      cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion, enabled, sectionRef, isLocked]);

  // When locked: prevent wheel/touch scroll on document
  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/660c50a2-335d-4d85-98ac-6f635e5fd7bf',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'use-scroll-lock.ts:overflow-effect',message:'Overflow effect',data:{targetId,isLocked,enabled},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix'})}).catch(()=>{});
    // #endregion
    
    if (prefersReducedMotion || !isLocked || !enabled) {
      document.body.style.overflow = "";
      return;
    }
    
    document.body.style.overflow = "hidden";

    const preventScroll = (e: WheelEvent | TouchEvent) => {
      if (isUnlockingRef.current) return;
      e.preventDefault();
    };
    
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [prefersReducedMotion, isLocked, enabled, targetId]);

  return {
    isLocked,
    scrollToNext,
    prefersReducedMotion,
  };
}
