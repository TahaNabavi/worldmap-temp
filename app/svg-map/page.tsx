import { SVGMap } from "@/components/svg-map";

export default function Demo() {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <SVGMap
        width={800}
        height={400}
        markers={[
          { countryCode: "IR", color: "#10b981" },
          { countryCode: "US", color: "#ef4444" },
          { countryCode: "CN", color: "#f59e0b" },
          { countryCode: "DE", color: "#f59e0b" },
        ]}
      />
    </div>
  );
}
