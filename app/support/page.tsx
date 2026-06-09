import Header from "../components/header";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white font-manrope max-w-4xl mx-auto px-6 py-12">
      <Header />

      <h1 className="text-4xl font-bold mb-8 mt-8">Support</h1>

      <p className="mb-6 text-gray-600">How can we help you?</p>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>
            If you have any questions, concerns, or feedback, please reach out
            to us at{" "}
            <a
              href="mailto:support@getpulito.com"
              className="text-blue-400 underline"
            >
              support@getpulito.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
