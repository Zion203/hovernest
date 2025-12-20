const Privacy = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> January 2025
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We collect information you provide directly to us, such as when you create an account, fill out
              a form, request a demo, or contact us for support. This may include your name, email address,
              phone number, company information, and any other information you choose to provide.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We use the information we collect to provide, maintain, and improve our services, to process
              your requests, to communicate with you, and to send you technical notices and support messages.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your
              information with service providers who assist us in operating our website and conducting our
              business, subject to confidentiality agreements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              You have the right to access, update, or delete your personal information at any time. To
              exercise these rights, please contact us at{' '}
              <a href="mailto:privacy@hovernest.com" className="text-[#6E44FF] hover:text-[#5D35E6]">
                privacy@hovernest.com
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:info@hovernest.com" className="text-[#6E44FF] hover:text-[#5D35E6]">
                info@hovernest.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
