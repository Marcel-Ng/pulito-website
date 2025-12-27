import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white font-manrope">
      <Header />
      {/* Hero Section */}
      {/* Hero Section - Gokada Style Full-Screen Minimal */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 px-6 text-center">
        {/* Optional subtle overlay for depth */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight mb-8">
            The easiest laundry
            <br />
            and delivery service
            <br />
            in Nigeria.
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-16">
            Trusted Partners. Clear Prices. Pickup & Delivery. Stress-Free
            Laundry.
          </p>

          <button className="bg-teal-400 text-gray-900 text-xl md:text-2xl px-10 py-4 rounded-full font-bold hover:bg-teal-300 transition shadow-lg">
            Request Pickup Now
          </button>

          <p className="mt-8 text-lg text-gray-500">
            Currently Serving Lagos, Nigeria.
          </p>
        </div>
      </section>
      {/* What Pulito Does */}
      <section className="py-28 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-10 tracking-tight">
            Finding a good laundry shouldn’t be hard.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Pulito connects customers to trusted local laundries, manages pickup
            and delivery, and ensures clear pricing and timelines — for a better
            experience on both sides.
          </p>
        </div>
      </section>
      {/* How It Works */}
      <section id="how" className="py-28 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-20 tracking-tight">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="bg-gray-800 rounded-2xl w-72 h-72 mx-auto mb-8 flex items-center justify-center border-2 border-dashed border-gray-600">
                <p className="text-gray-500 text-center px-4">
                  Image: Request pickup
                </p>
              </div>
              <h3 className="text-3xl font-bold mb-4">1. Request a pickup</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Tell us where you are and what you need washed.
              </p>
            </div>
            <div>
              <div className="bg-gray-800 rounded-2xl w-72 h-72 mx-auto mb-8 flex items-center justify-center border-2 border-dashed border-gray-600">
                <p className="text-gray-500 text-center px-4">
                  Image: We match you
                </p>
              </div>
              <h3 className="text-3xl font-bold mb-4">2. We match you</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Pulito connects you to a trusted laundry partner.
              </p>
            </div>
            <div>
              <div className="bg-gray-800 rounded-2xl w-72 h-72 mx-auto mb-8 flex items-center justify-center border-2 border-dashed border-gray-600">
                <p className="text-gray-500 text-center px-4">
                  Image: Clothes get washed
                </p>
              </div>
              <h3 className="text-3xl font-bold mb-4">3. Clothes get washed</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Professional cleaning with care.
              </p>
            </div>
            <div>
              <div className="bg-gray-800 rounded-2xl w-72 h-72 mx-auto mb-8 flex items-center justify-center border-2 border-dashed border-gray-600">
                <p className="text-gray-500 text-center px-4">
                  Image: Delivered back
                </p>
              </div>
              <h3 className="text-3xl font-bold mb-4">4. Delivered back</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Clean clothes returned on time.
              </p>
            </div>
          </div>
          <p className="text-5xl md:text-6xl font-extrabold text-center mt-20 text-teal-400 tracking-tight">
            Simple.
          </p>
        </div>
      </section>
      {/* Trusted Partners Section 1 - Text Left, Image Right */}
      <section className="py-28 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
              The best laundry partners
              <br />
              you have ever seen
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              First, they perfected cleaning your clothes.
              <br />
              Now, they deliver with care and professionalism.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="bg-gray-800 rounded-3xl w-96 h-96 md:w-full md:max-w-lg md:h-auto overflow-hidden border-2 border-dashed border-gray-600 flex items-center justify-center">
              {/* Placeholder - replace src with your real image */}
              <p className="text-gray-500 text-center px-8">
                Image: Smiling professional laundry delivery partner
              </p>
              {/* Example with real image later: <Image src="/partner1.jpg" width={800} height={800} alt="Trusted laundry partner" className="object-cover" /> */}
            </div>
          </div>
        </div>
      </section>
      {/* Trusted Partners Section 2 - Image Left, Text Right */}
      <section className="py-28 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="bg-gray-800 rounded-3xl w-96 h-96 md:w-full md:max-w-lg md:h-auto overflow-hidden border-2 border-dashed border-gray-600 flex items-center justify-center">
              {/* Placeholder */}
              <p className="text-gray-500 text-center px-8">
                Image: Group of quality laundry riders/partners
              </p>
            </div>
          </div>
          <div className="text-left order-1 md:order-2">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
              Quality riders and
              <br />
              trusted partners
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Vetted, trained, and dedicated — ensuring your clothes are handled
              with the utmost care from pickup to delivery.
            </p>
          </div>
        </div>
      </section>
      {/* Add the rest of your sections here with similar typography adjustments... */}
      {/* Footer */}
      <footer className="py-16 px-6 bg-black text-center">
        <p className="text-4xl md:text-5xl font-extrabold text-teal-400 tracking-tight">
          Pulito — Cleaning made easy.
        </p>
      </footer>
    </main>
  );
}
