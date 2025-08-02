"use client";

import { useRef, useState } from "react";
import DottedMap from "dotted-map";
import classes from "./styles.module.css";
import PopoverDemo from "../hover-card";

type MapProps = {
  markers?: {
    centroid: { lat: number; lng: number };
    color: string;
  }[];
};

export function DotMap({ markers = [] }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });
  const svgMap = map.getSVG({
    radius: 0.51,
    color: "#FFFFFF40",
    shape: "circle",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (105 - lat) * (400 / 180);
    return { x, y };
  };

  return (
    <div className={classes.box}>
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className={classes.img}
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg ref={svgRef} viewBox="0 0 800 400" className={classes.svg}>
        {markers.map((dot, i) => {
          const { x, y } = projectPoint(dot.centroid.lat, dot.centroid.lng);

          return (
            <PopoverDemo>
              <g key={`point-${i}`}>
                <circle cx={x} cy={y} fill={dot.color} r="2" />
                {/* <circle cx={x} cy={y} fill={dot.color} opacity="0.5" r="2">
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle> */}
              </g>
            </PopoverDemo>
          );
        })}
      </svg>
    </div>
  );
}
