"use client";

import React, { useState, use } from "react";

const dhikrSets = {
  morning: [
 
    { id: 1, text: "SubhanAllah", count: 33 },
    { id: 2, text: "Alhamdulillah", count: 33 },
    { id: 3, text: "Allahu Akbar", count: 34 },
    { id: 4, text: "Astaghfirullah", count: 100 },
  ],
  evening: [
    { id: 1, text: "Astaghfirullah", count: 100 },
    { id: 2, text: "Alhamdulillah", count: 33 },
    { id: 3, text: "La ilaha illallah", count: 33 },
    { id: 4, text: "Rabbi zidnee ilma", count: 3 },
  ],
};

export default function DhikrPage({ params }: { params: Promise<{ set: string }> }) {
  // Use React's use() hook to unwrap the Promise params
  const unwrappedParams = use(params);
  const { set } = unwrappedParams;

  const list = dhikrSets[set] || dhikrSets.morning;
  const [counts, setCounts] = useState(list.map(() => 0));

  const increment = (index: number) => {
    setCounts((prev) => {
      const updated = [...prev];
      if (updated[index] < list[index].count) {
        updated[index]++;
      }
      return updated;
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          {set.charAt(0).toUpperCase() + set.slice(1)} Dhikr
        </h1>
        <div className="space-y-6">
          {list.map((item, index) => (
            <div
              key={item.id}
              onClick={() => increment(index)}
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:bg-blue-50 transition"
            >
              <h2 className="text-xl font-semibold text-blue-700">{item.text}</h2>
              <p className="text-gray-700 mt-2">
                Count: {counts[index]} / {item.count}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-10">
          Tap the boxes to increase your dhikr count. Stops when completed.
        </p>
      </div>
    </main>
  );
}
