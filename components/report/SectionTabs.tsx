"use client";

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type Tab = { id: string; label: string; hint?: string };

const ActiveTab = createContext<string>("");

/**
 * Splits the report into one screen per tab so a reader never has to scroll
 * the whole document. Every panel stays in the DOM, so print shows them all.
 */
export function SectionTabs({ tabs, children }: { tabs: Tab[]; children: React.ReactNode }) {
  const [active, setActive] = useState(tabs[0].id);
  const barRef = useRef<HTMLDivElement>(null);
  const index = tabs.findIndex((t) => t.id === active);

  const go = useCallback(
    (id: string) => {
      if (!tabs.some((t) => t.id === id)) return;
      setActive(id);
      history.replaceState(null, "", `#${id}`);
      const bar = barRef.current;
      if (bar && bar.getBoundingClientRect().top < 0) bar.scrollIntoView({ block: "start" });
    },
    [tabs],
  );

  useEffect(() => {
    // Keep the active tab visible in the bar, which scrolls sideways on phones.
    const tab = document.getElementById(`tab-${active}`);
    const list = tab?.parentElement;
    if (tab && list) list.scrollTo({ left: tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2, behavior: "smooth" });
  }, [active]);

  useEffect(() => {
    // Follow the URL hash so a shared link like #visit-3-oct opens on its tab.
    const sync = () => {
      const fromHash = window.location.hash.slice(1);
      if (tabs.some((t) => t.id === fromHash)) setActive(fromHash);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [tabs]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      if (e.target instanceof Element && e.target.closest("input, textarea, [role=dialog]")) return;
      const next = index + (e.key === "ArrowRight" ? 1 : -1);
      if (next >= 0 && next < tabs.length) go(tabs[next].id);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, tabs, go]);

  const prev = tabs[index - 1];
  const next = tabs[index + 1];

  return (
    <ActiveTab.Provider value={active}>
      <div
        ref={barRef}
        className="sticky top-0 z-20 -mx-5 scroll-mt-0 border-b border-slate-200 bg-white/95 px-5 backdrop-blur sm:-mx-10 sm:px-10 print:hidden"
      >
        <div role="tablist" aria-label="Report sections" className="-mb-px flex gap-1 overflow-x-auto py-2 [scrollbar-width:none]">
          {tabs.map((t, i) => {
            const selected = t.id === active;
            return (
              <button
                key={t.id}
                id={`tab-${t.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${t.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => go(t.id)}
                className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  selected ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span className={`font-mono text-[11px] ${selected ? "text-emerald-300" : "text-emerald-700"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt-6 print:pt-0">{children}</div>

      <nav aria-label="Section navigation" className="mt-10 flex items-center justify-between gap-3 border-t border-slate-200 pt-6 print:hidden">
        {prev ? (
          <button
            type="button"
            onClick={() => go(prev.id)}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            {prev.label}
          </button>
        ) : (
          <span />
        )}
        <span className="hidden text-xs text-slate-400 sm:block">
          {index + 1} of {tabs.length} · use ← → keys
        </span>
        {next ? (
          <button
            type="button"
            onClick={() => go(next.id)}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Next: {next.label}
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <span />
        )}
      </nav>
    </ActiveTab.Provider>
  );
}

export function TabPanel({ id, children }: { id: string; children: React.ReactNode }) {
  const active = useContext(ActiveTab);
  return (
    <div
      id={`panel-${id}`}
      role="tabpanel"
      aria-labelledby={`tab-${id}`}
      className={`space-y-12 ${active === id ? "" : "hidden"} print:mb-12 print:block`}
    >
      {children}
    </div>
  );
}
