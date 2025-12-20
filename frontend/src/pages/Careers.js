import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { careerRoles } from '../data/mockData';

const Careers = () => {
  const perks = [
    'Build days — hands-on prototyping time',
    'Flight days — test your work in real missions',
    'Mentorship from industry veterans',
    'IP credits on patents and publications',
    'Competitive compensation and equity',
    'Flexible work arrangements',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-[#1a0b2e] to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#A78BFA] rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <Briefcase className="w-4 h-4 text-[#A78BFA] mr-2" />
            <span className="text-sm font-medium">Join Our Team</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join the Team That Ships Real Air Time</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Work on cutting-edge autonomous systems, from AI flight controllers to multipurpose VTOL platforms.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Hovernest?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-gradient-to-br from-[#F5F3FF] to-white rounded-2xl border border-gray-200"
              >
                <div className="w-8 h-8 bg-[#6E44FF] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="text-gray-700 font-medium">{perk}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Open Positions</h2>
          <div className="space-y-4">
            {careerRoles.map((role, index) => (
              <Link
                key={index}
                to="/contact?type=career"
                className="group flex items-center justify-between p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#6E44FF] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#6E44FF] transition-colors duration-200">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-2 text-[#6E44FF]" />
                      {role.department}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-[#6E44FF]" />
                      {role.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-[#6E44FF]" />
                      {role.type}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-[#6E44FF] group-hover:translate-x-2 transition-all duration-200" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#6E44FF] to-[#7C3AED] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't see the right role?</h2>
          <p className="text-xl text-white/90 mb-10">
            We're always looking for talented individuals. Send us your resume and let's talk.
          </p>
          <Link
            to="/contact?type=career"
            className="inline-flex items-center px-8 py-4 bg-white text-[#6E44FF] rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-2xl"
          >
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Careers;
