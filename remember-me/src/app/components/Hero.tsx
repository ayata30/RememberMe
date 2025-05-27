// components/Hero.tsx
import Link from "next/link";



export default function Hero() {
  return (
    <div className="text-center py-16 px-6 bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
         Remember God Daily with RememberMe
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-6">
        A nice  way to remember God through daily dhikr.
        Track progress, build streaks, and remember with purpose.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition">
        Navigate below to Start
      </button>
    </div>
  );
}
