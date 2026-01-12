import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, Award } from 'lucide-react';
import { valuePillars, useCases, stats, trustBadges, testimonial } from '../data/mockData';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a0b2e] to-gray-900">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#6E44FF] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A78BFA] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="text-white space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <Star className="w-4 h-4 text-[#A78BFA] mr-2" />
                <span className="text-sm font-medium">AI-Native Drone Systems</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Drones that{' '}
                <span className="bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#6E44FF] bg-clip-text text-transparent">
                  Think
                </span>
                .<br />
                Missions that{' '}
                <span className="bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#6E44FF] bg-clip-text text-transparent">
                  Matter
                </span>
                .
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Hovernest builds AI-native multipurpose VTOL systems and the NeuroFC—a modular flight
                controller that runs real-time AI onboard. From medical corridors to agriculture, we turn
                complex terrain into routine logistics.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact?type=demo"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-[#6E44FF] text-white rounded-full text-lg font-semibold hover:bg-[#5D35E6] transition-all duration-200 hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Request a Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-200 hover:scale-105"
                >
                  Explore Programs
                </Link>
              </div>

              {/* Social Proof */}
              {/* <div className="pt-8">
                <p className="text-sm text-gray-400 mb-4">
                  Trusted by innovators in healthcare, agriculture, and public safety
                </p>
                <div className="flex flex-wrap gap-3">
                  {Array(6)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="w-24 h-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center"
                      >
                        <span className="text-xs text-gray-500">Partner</span>
                      </div>
                    ))}
                </div>
              </div> */}
            </div>

            {/* Right: VTOL Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#6E44FF] to-[#A78BFA] rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <img
                  src="/vtol.jpeg"
                  alt="Hovernest Multipurpose VTOL"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Reflection Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/80 to-transparent rounded-b-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#6E44FF]">{stat.value}</p>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
            {trustBadges.slice(0, 2).map((badge, index) => (
              <div key={index} className="text-center hidden md:block">
                <div className="inline-flex items-center px-4 py-2 bg-[#F5F3FF] rounded-full">
                  <Check className="w-4 h-4 text-[#6E44FF] mr-2" />
                  <span className="text-xs font-medium text-gray-700">{badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built for Real-World Missions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three pillars of innovation that power every flight
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {valuePillars.map((pillar, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#6E44FF] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-[#6E44FF]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{pillar.description}</p>
                <ul className="space-y-3">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-[#6E44FF] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Purpose-Built Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One platform, infinite possibilities across industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
              >
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE] rounded-3xl p-12 md:p-16 text-center">
            <div className="flex justify-center mb-6">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#6E44FF] fill-current" />
                ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#6E44FF]"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#6E44FF] to-[#7C3AED] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See Hovernest in your workflow in 14 days.
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Start a pilot program and experience the future of autonomous logistics.
          </p>
          <Link
            to="/contact?type=pilot"
            className="inline-flex items-center px-10 py-5 bg-white text-[#6E44FF] rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-2xl"
          >
            Start a Pilot
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
