import Hero from "./components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Select a Dhikr Set...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">🌅 Morning Adhkar</h3>
            <p className="text-gray-700 mb-4">Start your day with remembrance!</p>
            <Link href="/dhikr/morning">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Start
              </button>
            </Link>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">🌙 Evening Adhkar</h3>
            <p className="text-gray-700 mb-4">End your day with remembrance!</p>
            <Link href="/dhikr/evening">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Start
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
