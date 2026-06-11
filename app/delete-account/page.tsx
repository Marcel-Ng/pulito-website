"use client";

import { useState } from "react";

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      // TODO: Replace with your API endpoint
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phoneNumber,
        }),
      });

      setSubmitted(true);
    } catch (error) {
      alert("Unable to submit your request. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#07152d] text-white flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <h1 className="text-5xl font-bold mb-6 text-[#19e0d4]">
            Request Submitted
          </h1>

          <p className="text-gray-300 text-lg">
            Your account deletion request has been received. Our team will
            review and process your request.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#07152d] text-white">
      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-[#19e0d4] uppercase tracking-widest font-semibold mb-4">
          Account Management
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">Delete Account</h1>

        <p className="text-gray-400 text-lg mb-12 leading-8">
          If you would like to permanently delete your Pulito account, please
          submit the form below. Once your request has been verified, your
          account and associated personal data will be deleted in accordance
          with our Privacy Policy and applicable laws.
        </p>

        <div className="bg-[#0d1d3b] border border-white/10 rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Email Address</label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl bg-[#07152d] border border-white/10 px-4 py-3 outline-none focus:border-[#19e0d4]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Phone Number</label>

              <input
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full rounded-xl bg-[#07152d] border border-white/10 px-4 py-3 outline-none focus:border-[#19e0d4]"
                placeholder="08066807299"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#19e0d4] text-black font-semibold px-8 py-4 rounded-full hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Request Account Deletion"}
            </button>
          </form>
        </div>

        <div className="mt-12 text-gray-400">
          <p>
            Questions? Contact our support team at{" "}
            <a href="mailto:support@getpulito.com" className="text-[#19e0d4]">
              support@getpulito.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
