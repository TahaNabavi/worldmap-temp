"use client";

import { DotMap } from "@/components/dot-map";

const Page = () => {
  const data = [
    {
      centroid: { lat: 39.8283, lng: -98.5795 },
      color: "#10b981",
      name: "United States",
    },
    {
      centroid: { lat: 35.8617, lng: 104.1954 },
      color: "#ef4444",
      name: "China",
    },
    { centroid: { lat: 32.4279, lng: 53.688 }, color: "#f59e0b", name: "Iran" },
    {
      centroid: { lat: 51.1657, lng: 10.4515 },
      color: "#3b82f6",
      name: "Germany",
    },
    {
      centroid: { lat: 46.6034, lng: 1.8883 },
      color: "#6366f1",
      name: "France",
    },
    {
      centroid: { lat: -14.235, lng: -51.9253 },
      color: "#84cc16",
      name: "Brazil",
    },
    {
      centroid: { lat: 28.6139, lng: 77.209 },
      color: "#e879f9",
      name: "India",
    },
    {
      centroid: { lat: -25.2744, lng: 133.7751 },
      color: "#0ea5e9",
      name: "Australia",
    },
    {
      centroid: { lat: 55.3781, lng: -3.436 },
      color: "#f472b6",
      name: "United Kingdom",
    },
    {
      centroid: { lat: 60.472, lng: 8.4689 },
      color: "#a855f7",
      name: "Norway",
    },
  ];

  return (
    <div className="p-6">
      <DotMap markers={data} />
    </div>
  );
};

export default Page;
