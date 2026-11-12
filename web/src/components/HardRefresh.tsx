"use client";

import { useEffect } from "react";

const STORAGE_KEY = "gbbois-build-id";
const CHECK_MS = 20_000;

/**
 * Polls /version.json so tabs left open pick up a new deploy
 * and reload once (hard refresh of the document).
 */
export function HardRefresh() {
  useEffect(() => {
    let cancelled = false;

    async function check() {
      try {
        const res = await fetch(`/version.json?t=${Date.now()}`, {
          cache: "no-store",
        });
        if (!res.ok || cancelled) return;
        const data = (await res.json()) as { buildId?: string };
        const next = data.buildId?.trim();
        if (!next) return;

        const prev = sessionStorage.getItem(STORAGE_KEY);
        if (!prev) {
          sessionStorage.setItem(STORAGE_KEY, next);
          return;
        }
        if (prev !== next) {
          sessionStorage.setItem(STORAGE_KEY, next);
          window.location.reload();
        }
      } catch {
        // ignore network blips
      }
    }

    const onVisible = () => {
      if (document.visibilityState === "visible") void check();
    };

    void check();
    const timer = window.setInterval(() => void check(), CHECK_MS);
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", onVisible);

    return () => {
      cancelled = true;
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", onVisible);
    };
  }, []);

  return null;
}
