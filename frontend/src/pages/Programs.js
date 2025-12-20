import { Link } from 'react-router-dom';
import { ArrowRight, Check, Rocket } from 'lucide-react';
import { programs, processTimeline } from '../data/mockData';

const Programs = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-[#1a0b2e] to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#A78BFA] rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <Rocket className="w-4 h-4 text-[#A78BFA] mr-2" />
            <span className="text-sm font-medium">Pilot Programs</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Programs that Turn Ideas into Air Hours</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose a track that matches your mission. We streamline trials, training, and compliance so you
            can fly sooner, safer, smarter.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">5-Step Program Process</h2>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
            {processTimeline.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                {index < processTimeline.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-[#6E44FF] to-[#A78BFA]"></div>
                )}
                <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-[#6E44FF] to-[#7C3AED] rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">
                  {index + 1}
                </div>
                <p className="font-semibold text-gray-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                id={program.id}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#6E44FF] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                {/* Outcomes */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Outcomes</h4>
                  <ul className="space-y-2">
                    {program.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-[#6E44FF] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                    Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {program.deliverables.map((deliverable, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#F5F3FF] text-[#6E44FF] rounded-full text-sm font-medium"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact?type=program"
                  className="inline-flex items-center text-[#6E44FF] font-semibold hover:text-[#5D35E6] transition-colors duration-200"
                >
                  Book a Scoping Call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#6E44FF] to-[#7C3AED] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to start your pilot program?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Schedule a scoping call to discuss your mission requirements and program timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact?type=program"
              className="inline-flex items-center px-8 py-4 bg-white text-[#6E44FF] rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-2xl"
            >
              Book a Scoping Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-200"
            >
              Download Program Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
