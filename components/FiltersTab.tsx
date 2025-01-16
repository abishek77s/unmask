"use client";

import { useState } from "react";

export const FiltersTab = () => {
  const filters = [
    "Trending",
    "Most Viewed",
    "Recently Acquired",
    "Suspicious",
  ];
  const [filter, setFilter] = useState("Trending");

  return (
    <div className="flex flex-wrap px-16  pt-6 gap-4 items-center justify-center">
      {filters.map((f) => (
        <a
          href="#"
          className={
            `px-6 py-2 bg-slate-100 font-geist font-medium rounded-lg lg:text-base ` +
            (filter === f && "border-slate-300 border-b-4 box-border ")
          }
          onClick={() => setFilter(f)}
          key={f}
        >
          {f}
        </a>
      ))}
    </div>
  );
};
