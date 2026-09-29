import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroDossier } from "@/components/innovative/HeroDossier";
import { FieldIntelBento } from "@/components/innovative/FieldIntelBento";
import { GroundInsightsGrid } from "@/components/innovative/GroundInsightsGrid";
import { DesignBridgeSection } from "@/components/innovative/DesignBridgeSection";
import { ProductDemoSection } from "@/components/innovative/ProductDemoSection";
import { ProductEvidenceDeck } from "@/components/innovative/ProductEvidenceDeck";
import { ProductStatusBoard } from "@/components/innovative/ProductStatusBoard";
import { StatutorySourcesDeck } from "@/components/innovative/StatutorySourcesDeck";
import { DossierFooter } from "@/components/dossier/DossierFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 relative">
      {/* Floating Island Dynamic Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 space-y-16 pb-16">
        {/* Executive Hero Dossier */}
        <HeroDossier />

        {/* 01: Field Intelligence & Aggregator Profile Bento Grid */}
        <FieldIntelBento />

        {/* 02: Ground Insights & Signal Cards */}
        <GroundInsightsGrid />

        {/* 03: Research-to-Design Bridge & Value Chain */}
        <DesignBridgeSection />

        {/* 04: Product Demo Video & 8-Stage Pipeline */}
        <ProductDemoSection />

        {/* 05: Product Evidence Deck & Live Interactive Tab Views */}
        <ProductEvidenceDeck />

        {/* 06: Honest Implementation Status Board */}
        <ProductStatusBoard />

        {/* 07: Statutory Sources & Government Registry Deck */}
        <StatutorySourcesDeck />
      </main>

      {/* Footer */}
      <DossierFooter />
    </div>
  );
}
