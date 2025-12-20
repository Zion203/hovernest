import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, Star } from 'lucide-react';

const Internships = () => {
  const tracks = [
    {
      title: 'Flight Software',
      description: 'Work on real-time embedded systems, autopilot algorithms, and sensor fusion.',
      duration: '3-6 months',
    },
    {
      title: 'Mechanical Design',
      description: 'Design airframe components, payload mounts, and field-serviceable modules.',
      duration: '3-6 months',
    },
    {
      title: 'AI/ML Engineering',
      description: 'Deploy edge AI models for computer vision, path planning, and anomaly detection.',
      duration: '3-6 months',
    },
    {
      title: 'Field Operations',
      description: 'Support pilot programs, collect flight data, and assist in mission planning.',
      duration: '2-4 months',
    },
  ];

  const benefits = [
    'Work on real projects with actual air time',
    'Mentorship from industry experts',
    'Stipend + potential for full-time conversion',
    'IP credits on contributions',
    'Certificate of completion',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-[#1a0b2e] to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#6E44FF] rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <GraduationCap className="w-4 h-4 text-[#A78BFA] mr-2" />
            <span className="text-sm font-medium">Student Programs</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Launch Your Career in Autonomous Flight</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Internships that go beyond theory. Build real systems, fly real missions, and solve real problems.
          </p>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Internship Tracks</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#6E44FF] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center px-3 py-1 bg-[#F5F3FF] rounded-full mb-4">
                  <span className="text-sm font-semibold text-[#6E44FF]">{track.duration}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{track.title}</h3>
                <p className="text-gray-600 leading-relaxed">{track.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">What You'll Get</h2>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center p-6 bg-gradient-to-br from-[#F5F3FF] to-white rounded-2xl border border-gray-200"
              >
                <Star className="w-6 h-6 text-[#6E44FF] mr-4 flex-shrink-0" />
                <p className="text-lg text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Who Should Apply</h2>
          <div className="bg-white rounded-3xl p-10 border-2 border-gray-200">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-[#6E44FF] rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                  1
                </span>
                <span>Currently enrolled in undergraduate or graduate programs (Engineering, CS, Robotics, or related fields)</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-[#6E44FF] rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                  2
                </span>
                <span>Strong fundamentals in your domain + hands-on project experience</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-[#6E44FF] rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                  3
                </span>
                <span>Available for minimum 3 months (full-time or part-time arrangements possible)</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-[#6E44FF] rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                  4
                </span>
                <span>Passion for building things that fly and solving hard problems</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#6E44FF] to-[#7C3AED] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Apply?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Send us your resume, portfolio, and a short note about what excites you about autonomous flight.
          </p>
          <Link
            to="/contact?type=internship"
            className="inline-flex items-center px-8 py-4 bg-white text-[#6E44FF] rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-2xl"
          >
            Apply for Internship
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Internships;
