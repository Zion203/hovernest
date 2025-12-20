const Terms = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> January 2025
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              By accessing and using Hovernest's website and services, you accept and agree to be bound by
              these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Use of Services</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              You agree to use our services only for lawful purposes and in accordance with these Terms. You
              are responsible for ensuring that your use of the services complies with all applicable laws and
              regulations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              All content, features, and functionality on our website, including but not limited to text,
              graphics, logos, and software, are the exclusive property of Hovernest and are protected by
              international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hovernest shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages resulting from your use of or inability to use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We reserve the right to modify these Terms at any time. We will notify users of any material
              changes by posting the new Terms on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:legal@hovernest.com" className="text-[#6E44FF] hover:text-[#5D35E6]">
                legal@hovernest.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
