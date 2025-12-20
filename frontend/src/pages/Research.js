import { Link } from 'react-router-dom';
import { ArrowRight, Check, FlaskConical, FileText } from 'lucide-react';
import { rdStreams, publications } from '../data/mockData';

const Research = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-[#1a0b2e] to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#6E44FF] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-[#A78BFA] rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <FlaskConical className="w-4 h-4 text-[#A78BFA] mr-2" />
            <span className="text-sm font-medium">Research & Development</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Research that Pushes the Flight Envelope</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our R&D spans airframes, autonomy, and energy systems. Three flagship streams are shaping the
            next decade of UAV capability.
          </p>
        </div>
      </section>

      {/* R&D Streams */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {rdStreams.map((stream, index) => (
            <div
              key={stream.id}
              className="bg-white rounded-3xl p-10 md:p-12 border-2 border-gray-200 hover:border-[#6E44FF] hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-[#F5F3FF] rounded-full mb-4">
                    <span className="text-xs font-bold text-[#6E44FF] uppercase tracking-wide">
                      Stream #{index + 1}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{stream.title}</h2>
                  <p className="text-xl text-[#6E44FF] font-semibold mb-6">{stream.aim}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Key Highlights</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {stream.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-[#6E44FF] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div className="bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE] rounded-2xl p-6 mb-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Outcomes</h3>
                <p className="text-gray-700 leading-relaxed">{stream.outcomes}</p>
              </div>

              {/* CTA */}
              {stream.cta && (
                <Link
                  to={stream.id === 'batteryless' ? '/contact?type=whitepaper' : '/contact?type=neurofc'}
                  className="inline-flex items-center px-6 py-3 bg-[#6E44FF] text-white rounded-full font-semibold hover:bg-[#5D35E6] transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  {stream.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Publications & Patents */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Publications & Patents</h2>
            <p className="text-xl text-gray-600">
              Peer-reviewed research and intellectual property in progress
            </p>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-gradient-to-br from-[#F5F3FF] to-white rounded-2xl border border-gray-200 hover:border-[#6E44FF] transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-[#6E44FF] rounded-xl flex items-center justify-center mr-5 flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{pub.title}</h3>
                    <span className="px-3 py-1 bg-[#A78BFA] text-white rounded-full text-xs font-semibold">
                      {pub.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{pub.year}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact?type=whitepaper"
              className="inline-flex items-center text-[#6E44FF] font-semibold hover:text-[#5D35E6] transition-colors duration-200"
            >
              Sign up for early access to papers
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#6E44FF] to-[#7C3AED] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Collaborate with our R&D Team
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Interested in joint research, pilot deployments, or technical partnerships?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-[#6E44FF] rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-2xl"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Research;
