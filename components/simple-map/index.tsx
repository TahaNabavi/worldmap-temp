"use client";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";
const countryCoords: Record<string, [number, number]> = {
  IR: [53.688, 32.4279],
  US: [-95.7129, 37.0902],
  CN: [104.1954, 35.8617],
};

const colors = {
  low: "#16a34a",
  medium: "#facc15",
  high: "#dc2626",
};

type Level = "low" | "medium" | "high";

type CountryRisk = {
  level: Level;
  value: string;
};

export const SimpleMap = ({ data }: { data: Record<string, CountryRisk> }) => {
  return (
    <>
      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 90 }}>
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#2F2F2F"
                  stroke="#636363"
                />
              );
            })
          }
        </Geographies>
        {Object.entries(data).map(([countryCode, risk]) => {
          const coords = countryCoords[countryCode];
          if (!coords) return null;

          return (
            <Marker key={countryCode} coordinates={coords}>
              <circle r={4} fill={colors[risk.level]} />
            </Marker>
          );
        })}
      </ComposableMap>
    </>
  );
};
