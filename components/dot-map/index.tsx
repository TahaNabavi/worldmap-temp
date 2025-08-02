"use client";

import { useRef } from "react";
import DottedMap from "dotted-map";

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

interface MapProps {
  markers?: Marker[];
  lineColor?: string;
}

export function DotMap({ markers = [], lineColor = "#0ea5e9" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });
  const svgMap = map.getSVG({
    radius: 0.54,
    color: "#FFFFFF40",
    shape: "circle",
    backgroundColor: "black",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (105 - lat) * (400 / 180);
    return { x, y };
  };

  return (
    <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg  relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {markers.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={
                  projectPoint(
                    countryCentroids[dot.countryCode].lat,
                    countryCentroids[dot.countryCode].lng
                  ).x
                }
                cy={
                  projectPoint(
                    countryCentroids[dot.countryCode].lat,
                    countryCentroids[dot.countryCode].lng
                  ).y
                }
                r="2"
                fill={lineColor}
              />
              <circle
                cx={
                  projectPoint(
                    countryCentroids[dot.countryCode].lat,
                    countryCentroids[dot.countryCode].lng
                  ).x
                }
                cy={
                  projectPoint(
                    countryCentroids[dot.countryCode].lat,
                    countryCentroids[dot.countryCode].lng
                  ).y
                }
                r="2"
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="2"
                  to="8"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
