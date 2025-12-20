import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const location = useLocation();
  const [formType, setFormType] = useState('general');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    useCase: '',
    timeline: '',
    message: '',
  });

  // Initialize EmailJS (replace with your actual keys)
  useEffect(() => {
    emailjs.init('L_Qly3VphpiIiwmOY'); // Replace with your EmailJS public key
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    if (type) {
      setFormType(type);
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Store submission in localStorage
      const submission = {
        ...formData,
        formType,
        submittedAt: new Date().toISOString(),
        id: Date.now().toString(),
      };
      
      const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      existingSubmissions.push(submission);
      localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));

      // Send email using EmailJS
      await emailjs.send(
        'service_4s1f8s6', // Replace with your EmailJS service ID
        'template_ksmnjy8', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          use_case: formData.useCase,
          timeline: formData.timeline,
          message: formData.message,
          form_type: formType,
        }
      );

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        useCase: '',
        timeline: '',
        message: '',
      });
      
      // Track analytics event
      if (window.gtag) {
        window.gtag('event', 'form_submit_contact', {
          form_type: formType,
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again or email us directly at info@hovernest.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-[#1a0b2e] to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#A78BFA] rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Talk</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're ready to start a pilot or just have questions, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Fill out the form and we'll get back to you within 24–48 hours. For urgent inquiries,
                  please email us directly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F5F3FF] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#6E44FF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@hovernest.com"
                      className="text-[#6E44FF] hover:text-[#5D35E6] transition-colors duration-200"
                    >
                      info@hovernest.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F5F3FF] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#6E44FF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Chennai, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE] rounded-2xl p-6">
                <p className="text-sm text-gray-700">
                  <strong className="text-[#6E44FF]">Office Hours:</strong><br />
                  Monday – Friday: 9:00 AM – 6:00 PM IST<br />
                  Saturday: 10:00 AM – 4:00 PM IST
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl">
                {success ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                    <p className="text-gray-600 mb-8">
                      A Hovernest specialist will reach out within 24–48 hours.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="px-6 py-3 bg-[#6E44FF] text-white rounded-full font-semibold hover:bg-[#5D35E6] transition-colors duration-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6E44FF] focus:border-transparent transition-all duration-200"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6E44FF] focus:border-transparent transition-all duration-200"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                          Phone (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6E44FF] focus:border-transparent transition-all duration-200"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                          Company *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6E44FF] focus:border-transparent transition-all duration-200"
                          placeholder="Your organization"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="useCase" className="block text-sm font-semibold text-gray-900 mb-2">
                        Use Case *
                      </label>
                      <select
                        id="useCase"
                        name="useCase"
                        required
                        value={formData.useCase}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6E44FF] focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select your use case</option>
                        <option value="medical">Medical Logistics</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="inspection">Industrial Inspection</option>
                        <option value="neurofc">NeuroFC Development</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold text-gray-900 mb-2">
                        Timeline *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        required
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6E44FF] focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (0-1 month)</option>
                        <option value="short">Short-term (1-3 months)</option>
                        <option value="medium">Medium-term (3-6 months)</option>
                        <option value="long">Long-term (6+ months)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6E44FF] focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us about your mission requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-8 py-4 bg-[#6E44FF] text-white rounded-full text-lg font-semibold hover:bg-[#5D35E6] transition-all duration-200 hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {loading ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      We reply within 24–48 hours
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
