"use client";

import Image from "next/image";
import { CSSProperties } from "react";

const countryCentroids: Record<string, { lat: number; lng: number }> = {
  US: { lat: 39.8283, lng: -98.5795 },
  IR: { lat: 32.4279, lng: 53.688 },
  CN: { lat: 35.8617, lng: 104.1954 },
  FR: { lat: 46.6034, lng: 1.8883 },
  DE: { lat: 51.1657, lng: 10.4515 },
};

interface Marker {
  countryCode: string;
  color?: string;
}

interface Props {
  markers?: Marker[];
  width?: number;
  height?: number;
}

export function SVGMap({ markers = [], width = 1000, height = 500 }: Props) {
  const project = (lat: number, lng: number) => {
    const x = ((lng + 176) / 360) * width;
    const y = ((97 - lat) / 180) * height;
    return { x, y };
  };

  return (
    <div className="relative" style={{ width, height }}>
      <Image
        src="/world.svg"
        alt="world map"
        fill
        className="object-contain pointer-events-none select-none"
      />

      {markers.map((marker, index) => {
        const coords = countryCentroids[marker.countryCode];
        if (!coords) return null;

        const { x, y } = project(coords.lat, coords.lng);

        const style: CSSProperties = {
          position: "absolute",
          left: x,
          top: y,
          transform: "translate(-50%, -50%)",
          color: marker.color || "red",
        };

        return (
          <div key={index} style={style} className="text-xs font-bold">
            ●
          </div>
        );
      })}
    </div>
  );
}
