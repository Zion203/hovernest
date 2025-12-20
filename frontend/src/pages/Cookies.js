const Cookies = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> January 2025
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. What Are Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cookies are small text files that are placed on your device when you visit our website. They help
              us provide you with a better experience by remembering your preferences and understanding how you
              use our site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Types of Cookies We Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the following types of cookies:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Track your activity to deliver relevant advertisements</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Managing Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Most web browsers allow you to control cookies through their settings. You can set your browser to
              refuse cookies or to alert you when cookies are being sent. However, please note that some parts
              of our website may not function properly if you disable cookies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may use third-party services such as Google Analytics and Meta Pixel that also use cookies to
              collect information about your use of our website. These third parties have their own privacy
              policies governing their use of information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about our use of cookies, please contact us at{' '}
              <a href="mailto:privacy@hovernest.com" className="text-[#6E44FF] hover:text-[#5D35E6]">
                privacy@hovernest.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
