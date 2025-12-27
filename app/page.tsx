// for.  the animations alone both the use client
"use client"; // Add this at top of page.tsx if not already (for animations)

import Image from "next/image";
import Header from "./components/header";

import { motion } from "framer-motion";
import { CyclingTypewriter } from "./components/typwriter";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white font-manrope">
      <Header />
      {/* Hero Section */}
      <Hero />

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
      {/* <section id="how" className="py-28 px-6 bg-gray-900">
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
      </section> */}

      <HowItWorks />
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

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 px-6 text-center">
      {/*  bg-black/10 */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          fill
          alt=""
          className="object-cover opacity-40"
        />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight mb-8"
        >
          The easiest laundry
          <br />
          and delivery service
          <br />
          in Nigeria.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-16"
        >
          {/* Trusted Partners. Clear Prices. Pickup & Delivery. Stress-Free
          Laundry. */}
          <CyclingTypewriter />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <button className="bg-teal-400 text-gray-900 text-xl md:text-2xl px-10 py-4 rounded-full font-bold hover:bg-teal-300 hover:scale-105 transition shadow-lg">
            Request Pickup Now
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 text-lg text-gray-500"
        >
          Currently Serving Lagos, Nigeria.
        </motion.p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="py-28 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Animated Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-20 tracking-tight"
        >
          How It Works
        </motion.h2>

        {/* Steps Grid with Staggered Animation */}
        <div className="grid md:grid-cols-4 gap-12 text-center">
          {[
            {
              title: "1. Request a pickup",
              desc: "Tell us where you are and what you need washed.",
              placeholder: "Image: Request pickup",
            },
            {
              title: "2. We match you",
              desc: "Pulito connects you to a trusted laundry partner.",
              placeholder: "Image: We match you",
            },
            {
              title: "3. Clothes get washed",
              desc: "Professional cleaning with care.",
              placeholder: "Image: Clothes get washed",
            },
            {
              title: "4. Delivered back",
              desc: "Clean clothes returned on time.",
              placeholder: "Image: Delivered back",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.2, // Stagger: each card appears 0.2s after the previous
                ease: "easeOut",
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="flex flex-col items-center"
            >
              <div className="bg-gray-800 rounded-2xl w-72 h-72 mx-auto mb-8 flex items-center justify-center border-2 border-dashed border-gray-600">
                <p className="text-gray-500 text-center px-4">
                  {step.placeholder}
                </p>
              </div>
              <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final "Simple." with pop-in */}
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.8 }} // Appears after steps finish
          className="text-5xl md:text-6xl font-extrabold text-center mt-20 text-teal-400 tracking-tight"
        >
          Simple.
        </motion.p>
      </div>
    </section>
  );
}
