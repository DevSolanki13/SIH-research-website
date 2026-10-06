import React from "react";
import Image from "next/image";
import { PrintButton } from "@/components/report/PrintButton";

export function ReportShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh px-3 py-4 sm:px-6 sm:py-10 print:p-0">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white ring-1 ring-slate-200 shadow-[0_24px_60px_-32px_rgb(23_32_23/0.25)] print:max-w-none print:rounded-none print:shadow-none print:ring-0">
        <header className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-5 sm:px-10 sm:py-7">
          <div className="flex items-center gap-3">
            <Image src="/brand/bhaav-icon.png" alt="Bhaav logo" width={40} height={40} className="rounded-[10px]" priority />
            <span className="leading-tight">
              <span className="flex items-baseline gap-1.5">
                <span className="text-lg font-bold tracking-tight text-slate-900">Bhaav</span>
                <span className="font-deva text-sm font-bold text-emerald-700">भाव</span>
              </span>
              <span className="block text-xs text-slate-500">Team Error 200 · SIH 2026</span>
            </span>
          </div>
          <PrintButton />
        </header>

        <main className="space-y-6 px-5 py-8 sm:px-10 sm:py-10">{children}</main>

        <footer className="rounded-b-2xl border-t border-slate-200 bg-slate-50 px-5 py-6 text-center sm:px-10">
          <p className="font-deva text-sm font-bold text-amber-700">योग्य भाव, पक्की पावती</p>
          <p className="mt-1 text-xs text-slate-500">
            Bhaav · Field Visit &amp; Ground Research Documentation · Vasai–Virar · 29 Sept &amp; 3 Oct 2026
          </p>
        </footer>
      </div>
    </div>
  );
}

export function ReportTitle({ title, subtitle, date }: { title: string; subtitle: string; date: string }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-slate-50 px-5 py-5 ring-1 ring-slate-200 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{title}</h1>
        <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
      </div>
      <p className="shrink-0 text-sm text-slate-500">
        Date: <span className="font-mono font-semibold text-slate-800">{date}</span>
      </p>
    </div>
  );
}

export function SectionHeading({ num, title, kicker }: { num: number; title: string; kicker?: string }) {
  return (
    <div className="mb-4">
      {kicker && <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-amber-700">{kicker}</p>}
      <h2 className="text-lg font-bold tracking-tight text-slate-900">
        <span className="mr-1.5 font-mono text-emerald-700">{num}.</span>
        {title}
      </h2>
    </div>
  );
}

const toneClass = {
  go: "font-semibold text-emerald-700",
  stop: "font-semibold text-red-700",
  neutral: "text-slate-700",
} as const;

export function SpecTable({
  head,
  rows,
  variant = "dark",
}: {
  head: [string, string];
  rows: { k: string; v: string; tone?: "go" | "stop" | "neutral" }[];
  variant?: "dark" | "brand";
}) {
  return (
    <div className="overflow-hidden rounded-xl ring-1 ring-slate-200">
      <table className="w-full border-collapse text-left text-sm">
        <thead className={variant === "dark" ? "bg-slate-900 text-white" : "bg-emerald-700 text-white"}>
          <tr>
            <th scope="col" className="w-[42%] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em]">
              {head[0]}
            </th>
            <th scope="col" className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em]">
              {head[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.k} className="border-t border-slate-200 even:bg-slate-50/70">
              <th scope="row" className="px-4 py-3 align-top font-semibold text-slate-900">
                {r.k}
              </th>
              <td className={`px-4 py-3 ${toneClass[r.tone ?? "neutral"]}`}>{r.v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tagClass = {
  VERIFIED: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  FIELD: "bg-sky-50 text-sky-800 ring-sky-200",
  SOURCED: "bg-slate-100 text-slate-700 ring-slate-300",
  ESTIMATED: "bg-amber-50 text-amber-800 ring-amber-200",
} as const;

export function SourceTag({ tag }: { tag: keyof typeof tagClass }) {
  return (
    <span className={`inline-block whitespace-nowrap rounded-md px-1.5 py-0.5 text-[10px] font-bold tracking-[0.06em] ring-1 ${tagClass[tag]}`}>
      {tag}
    </span>
  );
}

export function TableHead({ cols }: { cols: { label: string; className?: string }[] }) {
  return (
    <thead className="bg-slate-900 text-white">
      <tr>
        {cols.map((c) => (
          <th
            key={c.label}
            scope="col"
            className={`px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] ${c.className ?? ""}`}
          >
            {c.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
