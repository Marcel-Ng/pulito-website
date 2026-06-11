// app/support/page.tsx

import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#07152d] text-white">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-[#19e0d4] uppercase tracking-widest font-semibold mb-4">
          Support
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          We're here
          <br />
          to help.
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mb-12">
          If you have questions about your order, pickup, delivery, account, or
          payments, our support team is ready to assist.
        </p>

        <div className="bg-[#0d1d3b] border border-white/10 rounded-3xl p-8 md:p-10">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">Email Support</h2>

            <a
              href="mailto:support@getpulito.com"
              className="text-[#19e0d4] text-lg hover:underline"
            >
              support@getpulito.com
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Phone Support</h2>

            <a
              href="tel:08066807299"
              className="text-[#19e0d4] text-lg hover:underline"
            >
              0806 680 7299
            </a>
          </div>
        </div>

        <div className="mt-12 text-gray-400">
          <p>
            Our team aims to respond to all support requests as quickly as
            possible during business hours.
          </p>
        </div>

        <div className="mt-16">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#19e0d4] px-8 py-4 text-black font-semibold hover:opacity-90 transition"
          >
            Return Home
          </Link>
        </div>
      </section>
    </main>
  );
}

// import Header from "../components/header";

// export default function SupportPage() {
//   return (
//     <main className="min-h-screen bg-gray-900 text-white font-manrope max-w-4xl mx-auto px-6 py-12">
//       <Header />

//       <h1 className="text-4xl font-bold mb-8 mt-8">Support</h1>

//       <p className="mb-6 text-gray-600">How can we help you?</p>

//       <section className="space-y-6">
//         <div>
//           <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
//           <p>
//             If you have any questions, concerns, or feedback, please reach out
//             to us at{" "}
//             <a
//               href="mailto:support@getpulito.com"
//               className="text-blue-400 underline"
//             >
//               support@getpulito.com
//             </a>
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }
