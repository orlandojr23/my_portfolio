"use client";

import { useEffect } from "react";

export default function ScrollRestoration() {
  useEffect(() => {
    // Prevent the browser from automatically restoring the scroll position on refresh
    if (typeof window !== "undefined" && "history" in window) {
      window.history.scrollRestoration = "manual";
      
      // Force the window to scroll to the very top on mount
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
