"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default Leaflet icon paths if any standard markers are instantiated
if (typeof window !== "undefined") {
  delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  });
}

export interface MapLocationNode {
  id: string;
  name: string;
  simpleName: string;
  type: "primary" | "secondary";
  subtitle: string;
  date?: string;
  category: string;
  description: string;
  sourceNote: string;
  lat: number;
  lng: number;
  googleMapsUrl: string;
}

interface LeafletMapInnerProps {
  nodes: MapLocationNode[];
  selectedNodeId: string;
  onSelectNode: (id: string) => void;
}

// Controller to handle sizing invalidation & smooth panning
function MapController({ center }: { center: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    // Critical: Invalidate size immediately and after layout settles so tiles load properly
    map.invalidateSize();
    const t1 = setTimeout(() => map.invalidateSize(), 150);
    const t2 = setTimeout(() => map.invalidateSize(), 400);
    const t3 = setTimeout(() => map.invalidateSize(), 800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [map]);

  useEffect(() => {
    map.panTo(center, { animate: true, duration: 0.8 });
  }, [center, map]);

  return null;
}

export default function LeafletMapInner({
  nodes,
  selectedNodeId,
  onSelectNode,
}: LeafletMapInnerProps) {
  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];
  const [tileMode, setTileMode] = useState<"standard" | "voyager">("standard");

  const createPrimaryIcon = (isSelected: boolean) =>
    L.divIcon({
      className: "custom-leaflet-marker",
      html: `
        <div style="display:flex; flex-direction:column; align-items:center; transform:translate(-50%, -50%); cursor:pointer;">
          <div style="position:relative; display:flex; align-items:center; justify-content:center;">
            <span style="position:absolute; width:40px; height:40px; border-radius:9999px; background:rgba(16,185,129,0.3); animation:ping 1.5s cubic-bezier(0,0,0.2,1) infinite;"></span>
            <span style="width:30px; height:30px; border-radius:9999px; background:#047857; border:2.5px solid #ffffff; color:#ffffff; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 8px -1px rgba(0,0,0,0.3); ${
              isSelected ? "box-shadow:0 0 0 4px rgba(167,243,208,0.9);" : ""
            }">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3" fill="#047857"></circle></svg>
            </span>
          </div>
          <div style="margin-top:4px; padding:3px 8px; border-radius:6px; font-family:monospace; font-size:10px; font-weight:800; background:#065f46; color:#ffffff; border:1px solid #047857; white-space:nowrap; box-shadow:0 2px 6px rgba(0,0,0,0.2); text-align:center; display:flex; flex-direction:column; gap:1px;">
            <span>📍 BHAAV FIELD VISIT</span>
            <span style="font-size:8px; font-weight:600; opacity:0.9; color:#a7f3d0;">Vasai–Virar</span>
          </div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });

  const createSecondaryIcon = (name: string, isSelected: boolean) =>
    L.divIcon({
      className: "custom-leaflet-marker",
      html: `
        <div style="display:flex; flex-direction:column; align-items:center; transform:translate(-50%, -50%); cursor:pointer;">
          <span style="width:20px; height:20px; border-radius:9999px; background:${
            isSelected ? "#2563eb" : "#ffffff"
          }; border:2.5px solid #2563eb; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 5px rgba(0,0,0,0.15); ${
        isSelected ? "box-shadow:0 0 0 4px rgba(191,219,254,0.9);" : ""
      }">
            <span style="width:6px; height:6px; border-radius:9999px; background:${
              isSelected ? "#ffffff" : "#2563eb"
            };"></span>
          </span>
          <div style="margin-top:3px; padding:2px 7px; border-radius:5px; font-family:monospace; font-size:9.5px; font-weight:700; background:${
            isSelected ? "#0f172a" : "#ffffff"
          }; color:${
        isSelected ? "#ffffff" : "#1e293b"
      }; border:1px solid ${isSelected ? "#0f172a" : "#cbd5e1"}; white-space:nowrap; box-shadow:0 2px 5px rgba(0,0,0,0.12); display:flex; flex-direction:column; align-items:center; gap:1px;">
            <span>${name}</span>
            <span style="font-size:7.5px; font-weight:600; opacity:0.8; color:${
              isSelected ? "#93c5fd" : "#64748b"
            };">MPCB Record</span>
          </div>
        </div>
      `,
      iconSize: [26, 26],
      iconAnchor: [13, 13],
    });

  return (
    <div
      className="w-full h-full min-h-[440px] relative bg-slate-100"
      style={{ height: "100%", minHeight: "440px" }}
    >
      <MapContainer
        center={[19.405, 72.848]}
        zoom={12}
        minZoom={10}
        maxZoom={18}
        scrollWheelZoom={false}
        zoomControl={false}
        style={{ width: "100%", height: "100%", minHeight: "440px" }}
        className="w-full h-full min-h-[440px]"
      >
        <ZoomControl position="bottomright" />

        {/* Tile Provider: Standard OpenStreetMap (Primary) or Clean OpenStreetMap Voyager */}
        {tileMode === "standard" ? (
          <TileLayer
            key="osm-standard"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={19}
          />
        ) : (
          <TileLayer
            key="osm-voyager"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener noreferrer">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            subdomains={["a", "b", "c", "d"]}
            maxZoom={20}
          />
        )}

        <MapController center={[selectedNode.lat, selectedNode.lng]} />

        {nodes.map((node) => {
          const isSelected = selectedNodeId === node.id;
          const isPrimary = node.type === "primary";
          const icon = isPrimary
            ? createPrimaryIcon(isSelected)
            : createSecondaryIcon(node.simpleName, isSelected);

          return (
            <Marker
              key={node.id}
              position={[node.lat, node.lng]}
              icon={icon}
              eventHandlers={{
                click: () => onSelectNode(node.id),
              }}
            />
          );
        })}
      </MapContainer>

      {/* Subtle Tile Layer Switcher pill in top-right */}
      <div className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur-md px-2 py-1 rounded-lg border border-slate-300 shadow-xs flex items-center gap-1.5 text-[10px] font-mono">
        <span className="text-slate-400 font-bold">Map Tile:</span>
        <button
          type="button"
          onClick={() => setTileMode("standard")}
          className={`px-2 py-0.5 rounded transition-all font-semibold ${
            tileMode === "standard"
              ? "bg-emerald-700 text-white shadow-2xs"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
        >
          OSM Standard
        </button>
        <button
          type="button"
          onClick={() => setTileMode("voyager")}
          className={`px-2 py-0.5 rounded transition-all font-semibold ${
            tileMode === "voyager"
              ? "bg-emerald-700 text-white shadow-2xs"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
        >
          OSM Voyager
        </button>
      </div>
    </div>
  );
}
