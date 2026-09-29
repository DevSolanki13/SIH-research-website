import React from "react";
import { FEATURE_GROUPS, PRODUCT_FEATURES } from "@/data/features";
import { StatusBadge } from "../ui/StatusBadge";
import { Shield, Sparkles, Scale, Layers } from "lucide-react";

export function FeatureGroups() {
  const getGroupIcon = (groupId: string) => {
    switch (groupId) {
      case "fair-transaction":
        return <Scale className="w-4 h-4 text-emerald-600" />;
      case "trust-fraud":
        return <Shield className="w-4 h-4 text-blue-600" />;
      case "formalisation-bulk":
        return <Layers className="w-4 h-4 text-amber-600" />;
      case "traceability-access":
        return <Sparkles className="w-4 h-4 text-emerald-600" />;
      default:
        return <Scale className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
          Grouped Capabilities Architecture
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
          Structured into 4 operational clusters with verified implementation statuses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FEATURE_GROUPS.map((group) => {
          const groupFeatures = PRODUCT_FEATURES.filter(
            (feat) => feat.groupId === group.id
          );

          return (
            <div
              key={group.id}
              className="flex flex-col justify-between rounded-2xl bg-white border border-slate-200 p-6 shadow-sm"
            >
              <div>
                {/* Group Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                      {getGroupIcon(group.id)}
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-emerald-700 uppercase font-bold">
                        Group {group.code}
                      </div>
                      <h4 className="text-base font-bold text-slate-900">
                        {group.name}
                      </h4>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded-full border border-slate-200">
                    {groupFeatures.length} Features
                  </span>
                </div>

                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  {group.summary}
                </p>

                {/* Features Inside This Group */}
                <div className="space-y-2.5">
                  {groupFeatures.map((feat) => (
                    <div
                      key={feat.id}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs sm:text-sm font-bold text-slate-900">
                          {feat.name}
                        </span>
                        <StatusBadge status={feat.status} size="sm" />
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
