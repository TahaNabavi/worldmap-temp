"use client";

import { SimpleMap } from "@/components/simple-map";

const Page = () => {
  const data = {
    IR: { level: "low", value: "3%" },
    US: { level: "high", value: "75%" },
    CN: { level: "medium", value: "50%" },
  } as const;

  return (
    <div className="p-6">
      <SimpleMap data={data}  />
    </div>
  );
};

export default Page;
