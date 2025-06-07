import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-gradient-to-br from-[#fefce8] to-[#ecfdf5] text-gray-800 px-6 py-28">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-green-700 text-center mb-6">
          Privacy Policy
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-green-500 mx-auto mb-10"></div>

        {/* Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            At <strong>Navaahar</strong>, we are committed to protecting your
            privacy. This Privacy Policy outlines how we collect, use, and
            safeguard your information when you interact with our products and
            website.
          </p>

          <h2 className="text-2xl font-semibold text-green-700 mt-8">
            1. Information We Collect
          </h2>
          <ul className="list-disc ml-6">
            <li>
              Personal information like name, phone number, email, and address.
            </li>
            <li>
              Order history and preferences related to cattle feed products.
            </li>
            <li>Device and browser data to improve your experience.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-700 mt-8">
            2. How We Use Your Data
          </h2>
          <p>We use your information to:</p>
          <ul className="list-disc ml-6">
            <li>Fulfill your orders and deliver our products.</li>
            <li>Respond to inquiries and provide customer support.</li>
            <li>Send promotional content (if you opt in).</li>
            <li>Improve our website and offerings.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-700 mt-8">
            3. Data Security
          </h2>
          <p>
            We implement industry-standard security measures to ensure the
            safety of your personal information.
          </p>

          <h2 className="text-2xl font-semibold text-green-700 mt-8">
            4. Sharing of Information
          </h2>
          <p>
            We do <strong>not</strong> sell or rent your personal data. Your
            data is shared only:
          </p>
          <ul className="list-disc ml-6">
            <li>With service providers who help us fulfill orders.</li>
            <li>When legally required (e.g., law enforcement).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-700 mt-8">
            5. Your Rights
          </h2>
          <p>You can request:</p>
          <ul className="list-disc ml-6">
            <li>Access to your personal data</li>
            <li>Correction or deletion of your information</li>
            <li>To opt out of promotional communications</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-700 mt-8">
            6. Contact Us
          </h2>
          <p>
            If you have any questions about this policy, feel free to contact us
            at:{" "}
            <a
              href="mailto:sales.navaahaar@betulbiofuel.com"
              className="text-yellow-600 hover:underline font-medium"
            >
              sales.navaahaar@betulbiofuel.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
