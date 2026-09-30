import React from "react";
import { ClipboardCheck, ArrowRight, Check, X, Landmark } from "lucide-react";
import {
  ReportShell,
  ReportTitle,
  SectionHeading,
  SpecTable,
  TableHead,
  SourceTag,
} from "@/components/report/ReportShell";
import { PhotoEvidence } from "@/components/report/PhotoEvidence";
import {
  visit,
  investigationSpecs,
  marketProfile,
  findingsNarrative,
  bridgeActors,
  designBridge,
  recyclers,
  recyclerQuotes,
  atAGlance,
  nationalContext,
  sourceTagNote,
  unitEconomics,
  platformEconomics,
  impactMetrics,
  impactMeasured,
  sponsorFit,
  afterSih,
  existingPlayers,
  type SourceTag as SourceTagName,
} from "@/data/fieldVisit";

export default function FieldVisitReport() {
  const lapsed = recyclers.filter((r) => !r.valid).length;

  return (
    <ReportShell>
      <div className="space-y-5">
        <ReportTitle title={visit.title} subtitle={`${visit.shops.join(" · ")} · ${visit.area}`} date={visit.dateLabel} />

        <div>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-amber-700">What we found, at a glance</p>
          <ul className="grid gap-px overflow-hidden rounded-xl bg-slate-200 ring-1 ring-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {atAGlance.map((s) => (
              <li key={s.figure} className="flex flex-col gap-2 bg-white px-4 py-4">
                <span className="text-2xl font-bold tracking-tight text-slate-900">{s.figure}</span>
                <span className="text-sm leading-snug text-slate-600">{s.label}</span>
                <span className="mt-auto">
                  <SourceTag tag={s.tag} />
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            <SourceTag tag="SOURCED" /> <span className="ml-1">{nationalContext}</span>
          </p>
        </div>

        <div className="flex gap-3 rounded-xl border-l-4 border-emerald-600 bg-emerald-50/70 px-4 py-4 text-sm leading-relaxed text-slate-700 sm:px-5">
          <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
          <p>
            <strong className="text-slate-900">Primary ground data source:</strong> the observations in this report were
            gathered on-site on {visit.dateShort} at{" "}
            <strong className="text-slate-900">{visit.shops.join(" and ")}</strong> in Vasai West, through interviews
            with the dealers and their workers and a hands-on test of the Bhaav app. Every photo carries its own GPS
            stamp. Recycler status was checked against the MPCB authorised register.
          </p>
        </div>
      </div>

      <section>
        <SectionHeading num={1} title="Field Investigation Specifications & Shop Profile" />
        <div className="grid gap-4 lg:grid-cols-2">
          <SpecTable head={["Investigation parameter", "Details"]} rows={investigationSpecs} />
          <SpecTable head={["Shop & market profile", "Details"]} rows={marketProfile} variant="brand" />
        </div>
      </section>

      <section>
        <SectionHeading num={2} title="Field Visit Evidence & Ground Photo Documentation" />
        <PhotoEvidence />
      </section>

      <section>
        <SectionHeading num={3} title="Ground Visit Findings & Market Insights" kicker="Collectors & aggregators: what the ground says" />
        <div className="space-y-3 rounded-xl border-l-4 border-slate-900 bg-slate-50 p-5 text-[15px] leading-relaxed text-slate-700 ring-1 ring-slate-200 sm:p-6 sm:text-justify">
          {findingsNarrative.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
          <p className="border-t border-slate-200 pt-3">
            <strong className="text-emerald-800">Research says the same:</strong> dealers under-weigh pickers (GAIA,
            2023); 23 Delhi collectors can&rsquo;t tell who is authorised, and the formal price is lower (Kaur &amp;
            Arya, 2026).
          </p>
        </div>
      </section>

      <section>
        <SectionHeading num={4} title="Recyclers Contacted: Checked Against the MPCB Register" />
        <div className="overflow-x-auto rounded-xl ring-1 ring-slate-200">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <TableHead
              cols={[{ label: "Recycler / dismantler" }, { label: "Type · District" }, { label: "MPCB register status" }]}
            />
            <tbody>
              {recyclers.map((r) => (
                <tr key={r.name} className="border-t border-slate-200">
                  <th scope="row" className="px-4 py-3 font-semibold text-slate-900">
                    {r.name}
                  </th>
                  <td className="px-4 py-3 text-slate-500">
                    {r.kind} · {r.city}
                  </td>
                  <td className={`px-4 py-3 font-semibold ${r.valid ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-700"}`}>
                    <span className="inline-flex items-center gap-1.5">
                      {r.valid ? <Check className="h-4 w-4" strokeWidth={3} /> : <X className="h-4 w-4" strokeWidth={3} />}
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 rounded-xl p-5 ring-1 ring-slate-200 sm:p-6">
          <p className="text-[15px] leading-relaxed text-slate-700">
            <strong className="text-red-700">
              {lapsed} of the {recyclers.length} had lapsed
            </strong>{" "}
            in the register (fetched 31 Aug 2026), and a collector has no way to tell. That is why Bhaav lists only
            recyclers valid today.
          </p>
          <h3 className="mt-5 text-sm font-bold text-emerald-800">What they told us</h3>
          <ol className="mt-2 space-y-2">
            {recyclerQuotes.map((q, i) => (
              <li key={q.quote} className="flex gap-3 text-[15px] leading-relaxed">
                <span className="font-mono font-bold text-emerald-700">{i + 1}.</span>
                <span className="text-slate-700">
                  {q.who ? (
                    <>
                      <em>&ldquo;{q.quote}&rdquo;</em> <strong className="text-slate-900">{q.who}</strong>
                    </>
                  ) : (
                    <em>{q.quote}</em>
                  )}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <SectionHeading num={5} title="Design Bridge: How Field Findings Shaped Bhaav" kicker="Research → design" />
        <ol className="mb-4 grid gap-px overflow-hidden rounded-xl bg-slate-200 ring-1 ring-slate-200 sm:grid-cols-3">
          {bridgeActors.map((a, i) => (
            <li key={a.num} className="relative flex items-center gap-3 bg-white px-4 py-3.5">
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg font-mono text-xs font-bold text-white ${
                  ["bg-slate-900", "bg-amber-600", "bg-emerald-700"][i]
                }`}
              >
                {a.num}
              </span>
              <span>
                <span className="block text-sm font-bold text-slate-900">{a.name}</span>
                <span className="block text-xs text-slate-500">{a.desc}</span>
              </span>
              {i < bridgeActors.length - 1 && (
                <ArrowRight aria-hidden className="absolute right-3 hidden h-4 w-4 text-emerald-600 sm:block" />
              )}
            </li>
          ))}
        </ol>

        <div className="overflow-x-auto rounded-xl ring-1 ring-slate-200">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <TableHead
              cols={[
                { label: "Ground problem", className: "w-[34%]" },
                { label: "Bhaav design response" },
                { label: "Status", className: "w-28" },
              ]}
            />
            <tbody>
              {designBridge.map((r, i) => (
                <tr key={r.problem} className="border-t border-slate-200 align-top even:bg-slate-50/70">
                  <td className="px-4 py-3.5">
                    <span className="flex gap-2">
                      <span className="font-mono text-xs font-bold text-amber-700">{String(i + 1).padStart(2, "0")}</span>
                      <span>
                        <span className="block font-semibold text-slate-900">{r.problem}</span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">{r.observed}</span>
                      </span>
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="flex gap-2">
                      <ArrowRight aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>
                        <span className="block font-semibold text-emerald-800">{r.solution}</span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-slate-600">{r.how}</span>
                      </span>
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-block whitespace-nowrap rounded-md px-2 py-0.5 text-[11px] font-bold ${
                        r.status === "Built in app" ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <SectionHeading num={6} title="Unit Economics: What the Collector Gains, and Who Pays" kicker="Viability" />
        <div className="grid gap-4 lg:grid-cols-5">
          <div className="rounded-xl p-5 ring-1 ring-slate-200 sm:p-6 lg:col-span-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-bold text-emerald-800">The collector&rsquo;s arithmetic</h3>
              <SourceTag tag="ESTIMATED" />
            </div>
            <p className="mt-3 rounded-lg bg-emerald-50 px-4 py-3 text-center font-mono text-[15px] font-bold text-emerald-900 ring-1 ring-emerald-200">
              {unitEconomics.formula}
            </p>
            <dl className="mt-3 space-y-1 text-xs leading-relaxed text-slate-600">
              {unitEconomics.terms.map((t) => (
                <div key={t.k} className="flex gap-2">
                  <dt className="w-4 shrink-0 font-mono font-bold text-slate-900">{t.k}</dt>
                  <dd>{t.v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 overflow-hidden rounded-lg ring-1 ring-slate-200">
              <table className="w-full border-collapse text-left text-sm">
                <TableHead cols={[{ label: "If the authorised rate is…" }, { label: "Net / month", className: "w-28 text-right" }]} />
                <tbody>
                  {unitEconomics.rows.map((r) => (
                    <tr key={r.scenario} className="border-t border-slate-200 even:bg-slate-50/70">
                      <td className="px-4 py-2.5 text-slate-700">{r.scenario}</td>
                      <td className={`px-4 py-2.5 text-right font-mono font-bold ${r.loss ? "text-red-700" : "text-emerald-800"}`}>
                        {r.net}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{unitEconomics.shopLine}</p>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">{unitEconomics.honesty}</p>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl p-5 ring-1 ring-slate-200 sm:p-6">
              <p className="text-[15px] leading-relaxed text-slate-700">
                <strong className="text-slate-900">The field evidence behind it:</strong> recyclers agreed to pay{" "}
                <strong className="text-emerald-800">₹1–2/kg extra</strong> for lots that arrive with geotagged proof.{" "}
                <SourceTag tag="FIELD" />
              </p>
            </div>
            <div className="mt-4">
              <SpecTable head={["How the platform sustains itself", "Proposed"]} rows={platformEconomics} variant="brand" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionHeading num={7} title="Impact, With Every Number's Source" kicker="Social · economic · environmental" />
        <div className="overflow-x-auto rounded-xl ring-1 ring-slate-200">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <TableHead
              cols={[
                { label: "Figure", className: "w-40" },
                { label: "What it measures" },
                { label: "Tag", className: "w-28" },
                { label: "Source", className: "w-52" },
              ]}
            />
            <tbody>
              {impactMetrics.map((m) => (
                <tr key={m.label} className="border-t border-slate-200 align-top even:bg-slate-50/70">
                  <td className="px-4 py-3 font-mono font-bold text-slate-900">{m.figure}</td>
                  <td className="px-4 py-3 text-slate-700">{m.label}</td>
                  <td className="px-4 py-3">
                    <SourceTag tag={m.tag} />
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500">{m.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-slate-500">
          {(Object.keys(sourceTagNote) as SourceTagName[]).map((t, i) => (
            <span key={t}>
              {i > 0 && " · "}
              <strong className="text-slate-700">{t}</strong> = {sourceTagNote[t]}
            </span>
          ))}
        </p>
        <p className="mt-3 rounded-xl border-l-4 border-emerald-600 bg-emerald-50/70 px-4 py-3 text-sm leading-relaxed text-slate-700">
          {impactMeasured}
        </p>
      </section>

      <section>
        <SectionHeading num={8} title="Who Runs It After SIH, and Who Else Is in This Space" kicker="Deployment & positioning" />
        <div className="flex gap-3 rounded-xl border-l-4 border-amber-600 bg-amber-50/60 px-4 py-4 text-[15px] leading-relaxed text-slate-700 sm:px-5">
          <Landmark className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
          <div>
            <p>
              <strong className="text-slate-900">{sponsorFit.title}:</strong> {sponsorFit.body}
            </p>
            <p className="mt-2 text-xs text-slate-500">
              <SourceTag tag="SOURCED" /> <span className="ml-1">{sponsorFit.source}</span>
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SpecTable head={["After SIH", "Who and how"]} rows={afterSih} />
          </div>
          <div className="overflow-x-auto rounded-xl ring-1 ring-slate-200 lg:col-span-3">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <TableHead cols={[{ label: "Existing player", className: "w-40" }, { label: "What it does" }, { label: "Where Bhaav differs" }]} />
              <tbody>
                {existingPlayers.map((p) => (
                  <tr
                    key={p.name}
                    className={`border-t border-slate-200 align-top ${p.name === "Bhaav" ? "bg-emerald-50" : "even:bg-slate-50/70"}`}
                  >
                    <th scope="row" className={`px-4 py-3 font-semibold ${p.name === "Bhaav" ? "text-emerald-800" : "text-slate-900"}`}>
                      {p.name}
                    </th>
                    <td className="px-4 py-3 text-slate-600">{p.what}</td>
                    <td className="px-4 py-3 text-slate-700">{p.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </ReportShell>
  );
}
