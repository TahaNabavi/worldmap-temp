"use client";

import { DotMap } from "@/components/dot-map";

const Page = () => {
  const data = [
    { countryCode: "IR", color: "#10b981" },
    { countryCode: "US", color: "#ef4444" },
    { countryCode: "CN", color: "#f59e0b" },
    { countryCode: "DE", color: "#f59e0b" },
  ];

  return (
    <div className="p-6">
      <DotMap markers={data} />
    </div>
  );
};

export default Page;
