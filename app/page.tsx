import React from "react";
import { ArrowRight, Check, X } from "lucide-react";
import {
  ReportShell,
  ReportTitle,
  SectionHeading,
  SpecTable,
  TableHead,
  SourceTag,
} from "@/components/report/ReportShell";
import { PhotoEvidence } from "@/components/report/PhotoEvidence";
import { SectionTabs, TabPanel, type Tab } from "@/components/report/SectionTabs";
import {
  visit,
  investigationSpecs,
  marketProfile,
  photos,
  findingsNarrative,
  collectorVisit,
  aggregatorVisit,
  bridgeActors,
  designBridge,
  recyclers,
  recyclerQuotes,
} from "@/data/fieldVisit";

const reportTabs: Tab[] = [
  { id: "collectors-29-sept", label: "Collectors · 29 Sept" },
  { id: "collectors-3-oct", label: "Collectors · 3 Oct" },
  { id: "aggregator-3-oct", label: "Aggregator · 3 Oct" },
  { id: "recyclers", label: "Recyclers" },
  { id: "design", label: "Design" },
];

function Findings({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ol className="space-y-3">
      {items.map((f, i) => (
        <li key={f.title} className="flex gap-3 rounded-xl p-4 ring-1 ring-slate-200 sm:p-5">
          <span className="font-mono text-xs font-bold text-amber-700">{String(i + 1).padStart(2, "0")}</span>
          <span>
            <span className="block text-sm font-bold text-slate-900">{f.title}</span>
            <span className="mt-1 block text-[15px] leading-relaxed text-slate-700">{f.body}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

function PriceTable({ rows, date }: { rows: { item: string; rate: string }[]; date: string }) {
  return (
    <div>
      <div className="overflow-hidden rounded-xl ring-1 ring-slate-200">
        <table className="w-full border-collapse text-left text-sm">
          <TableHead cols={[{ label: "Item" }, { label: "Price quoted", className: "text-right" }]} />
          <tbody>
            {rows.map((r) => (
              <tr key={r.item} className="border-t border-slate-200 even:bg-slate-50/70">
                <td className="px-4 py-2.5 text-slate-700">{r.item}</td>
                <td className="px-4 py-2.5 text-right font-mono font-bold text-slate-900">{r.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        <SourceTag tag="FIELD" /> <span className="ml-1">Prices as told to us on {date}, not checked.</span>
      </p>
    </div>
  );
}

export default function FieldVisitReport() {
  const lapsed = recyclers.filter((r) => !r.valid).length;

  return (
    <ReportShell>
      <ReportTitle title={visit.title} subtitle={visit.summary} date={`${visit.dateLabel} · ${collectorVisit.dateLabel}`} />
      <SectionTabs tabs={reportTabs}>
        <TabPanel id="collectors-29-sept">
          <section>
            <SectionHeading num={1} title="Visit 1: Scrap Shops in Vasai West, 29 Sept 2026" kicker="Collectors" />
            <div className="grid gap-4 lg:grid-cols-2">
              <SpecTable head={["Investigation parameter", "Details"]} rows={investigationSpecs} />
              <SpecTable head={["Shop & market profile", "Details"]} rows={marketProfile} variant="brand" />
            </div>
          </section>

          <section>
            <PhotoEvidence items={photos} dateLabel={visit.dateLabel} />
          </section>

          <section>
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
        </TabPanel>

        <TabPanel id="collectors-3-oct">
          <section>
            <SectionHeading num={2} title="Visit 2: Three Collectors in Virar West, 3 Oct 2026" kicker="Collectors" />
            <div className="grid gap-4 lg:grid-cols-2">
              <SpecTable head={["Investigation parameter", "Details"]} rows={collectorVisit.specs} />
              <SpecTable head={["What the collectors told us", "Details"]} rows={collectorVisit.profile} variant="brand" />
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-3">
            <div className="space-y-4">
              <PhotoEvidence
                items={collectorVisit.photos}
                dateLabel={collectorVisit.dateLabel}
                startAt={photos.length + 1}
                gridClassName="grid-cols-1 max-w-xs"
              />
              <PriceTable rows={collectorVisit.prices} date={collectorVisit.dateLabel} />
            </div>
            <div className="space-y-4 lg:col-span-2">
              <Findings items={collectorVisit.findings} />
              <p className="rounded-xl border-l-4 border-amber-600 bg-amber-50/60 px-4 py-3 text-sm leading-relaxed text-slate-700">
                <strong className="text-slate-900">What this changes for Bhaav:</strong> we lead with price (the
                MetalMandi rate), not paperwork. The seller signs that the scrap is theirs, which protects the shop, and
                no public receipt names the seller or the shop.
              </p>
            </div>
          </section>
        </TabPanel>

        <TabPanel id="aggregator-3-oct">
          <section>
            <SectionHeading num={3} title="Visit 3: An Aggregator in Virar West, 3 Oct 2026" kicker="Aggregator" />
            <div className="grid gap-4 lg:grid-cols-2">
              <SpecTable head={["Investigation parameter", "Details"]} rows={aggregatorVisit.specs} />
              <SpecTable head={["What the aggregator told us", "Details"]} rows={aggregatorVisit.profile} variant="brand" />
            </div>
          </section>

          <section>
            <PhotoEvidence
              items={aggregatorVisit.photos}
              dateLabel={aggregatorVisit.dateLabel}
              startAt={photos.length + collectorVisit.photos.length + 1}
            />
          </section>

          <section className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Findings items={aggregatorVisit.findings} />
            </div>
            <PriceTable rows={aggregatorVisit.prices} date={aggregatorVisit.dateLabel} />
          </section>
        </TabPanel>

        <TabPanel id="recyclers">
          <section>
            <SectionHeading num={4} title="Recyclers Contacted: Checked Against the MPCB Register" kicker="Recyclers" />
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
                      <td
                        className={`px-4 py-3 font-semibold ${r.valid ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-700"}`}
                      >
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
                in the register (fetched 31 Aug 2026), and a collector has no way to tell. Across the whole register,
                only <strong className="text-slate-900">67 of 161</strong> MPCB-listed recyclers were valid on 4 Oct 2026.
                Bhaav shows only those.
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
        </TabPanel>

        <TabPanel id="design">
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
        </TabPanel>
      </SectionTabs>
    </ReportShell>
  );
}
