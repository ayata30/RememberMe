"use client";

import React from "react";
import { morningDhikr } from "../data/dhikr";

export default function DhikrPage() {
  const [taps, setTaps] = React.useState(
    Array(morningDhikr.length).fill(0)
  );

  function handleDhikrTap(index: number) {
    setTaps((prev) => {
      const newTaps = [...prev];
      if (newTaps[index] < morningDhikr[index].count) {
        newTaps[index] += 1;
      }
      return newTaps;
    });
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-blue-100 p-6">
      <h1 className="text-4xl font-bold mb-6">RememberMe : Morning Dhikr</h1>
      <div className="space-y-4 w-full max-w-md">
        {morningDhikr.map((item, index) => (
          <button
            key={index}
            onClick={() => handleDhikrTap(index)}
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition w-full"
          >
            {item.text} — {taps[index]} / {item.count}
          </button>
        ))}
      </div>
    </main>
  );
}
