import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="bg-gradient-to-br from-[#fefce8] to-[#ecfdf5] text-gray-800 px-6 py-28">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-green-700 text-center mb-6">
          Terms & Conditions
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-green-500 mx-auto mb-10"></div>

        {/* Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Welcome to <strong>Navaahar</strong>. These Terms & Conditions
            outline the rules and regulations for using our website and
            purchasing our cattle feed products.
          </p>

          <h2 className="text-2xl font-semibold text-green-700 mt-8">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing this website or purchasing our products, you agree to
            be bound by these Terms & Conditions. If you do not agree, please
            refrain from using our services.
          </p>

          <h2 className="text-2xl font-semibold text-green-700 mt-8">
            2. Products & Orders
          </h2>
          <ul className="list-disc ml-6">
            <li>
              All product descriptions and prices are subject to change without
              notice.
            </li>
            <li>Orders are subject to availability and confirmation.</li>
            <li>
              We reserve the right to cancel or refuse any order at our
              discretion.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-700 mt-8">
            3. Payment
          </h2>
          <p>
            Payments must be made in full before the delivery of products. We
            ensure secure payment gateways for all transactions.
          </p>

          <h2 className="text-2xl font-semibold text-green-700 mt-8">
            4. Delivery & Returns
          </h2>
          <ul className="list-disc ml-6">
            <li>Estimated delivery times are provided but not guaranteed.</li>
            <li>
              Returns are accepted only for damaged or incorrect items, subject
              to verification.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-700 mt-8">
            5. User Conduct
          </h2>
          <p>
            Users must not misuse the website or engage in activities that harm
            Navaahar or its users. Any such behavior may result in termination
            of access.
          </p>

          <h2 className="text-2xl font-semibold text-green-700 mt-8">
            6. Intellectual Property
          </h2>
          <p>
            All content on this website (text, images, logos, etc.) is the
            property of Navaahar and may not be used without written permission.
          </p>

          <h2 className="text-2xl font-semibold text-green-700 mt-8">
            7. Changes to Terms
          </h2>
          <p>
            We may update these Terms & Conditions from time to time. Continued
            use of the website indicates your acceptance of the revised terms.
          </p>

          <h2 className="text-2xl font-semibold text-green-700 mt-8">
            8. Contact Us
          </h2>
          <p>
            For any questions regarding these terms, please contact us at:{" "}
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

export default TermsAndConditions;
