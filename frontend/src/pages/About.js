import { Award, Target, Users, Lightbulb } from 'lucide-react';
import { teamMembers } from '../data/mockData';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Safety First',
      description: 'Every design decision prioritizes mission safety and operational reliability.',
    },
    {
      icon: Target,
      title: 'Truth in Data',
      description: 'Transparent performance metrics, honest specifications, real-world validation.',
    },
    {
      icon: Users,
      title: 'Field Before Slide',
      description: 'We test in real conditions before presenting results. No shortcuts.',
    },
    {
      icon: Lightbulb,
      title: 'Open for Developers',
      description: 'Open SDK, clear documentation, and collaborative innovation.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-[#1a0b2e] to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-[#6E44FF] rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Built to Make Missions Matter</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From grocery-store roots to frontier robotics. Built in India with a global mindset.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Make critical logistics <span className="text-[#6E44FF] font-semibold">autonomous</span>,{' '}
            <span className="text-[#6E44FF] font-semibold">accessible</span>, and{' '}
            <span className="text-[#6E44FF] font-semibold">safe</span>.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Hovernest began with a simple question: Why can't critical supplies reach people when they need
              them most? In remote hospitals, mountain villages, and agricultural fields, the answer was
              always the same—terrain, infrastructure, and logistics.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              What started in a small workshop in India has grown into a team of aerospace engineers,
              roboticists, and field operators united by a common goal: make autonomous flight reliable,
              accessible, and mission-ready.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we're building AI-native VTOL systems that don't just fly—they think, adapt, and deliver
              where it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl hover:bg-[#F5F3FF] transition-colors duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#6E44FF] to-[#7C3AED] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-xl text-gray-600">
              Experts from aerospace, robotics, AI, and field operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#6E44FF] hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-[#6E44FF] font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-20 bg-gradient-to-br from-[#6E44FF] to-[#7C3AED] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Built in India. Deployed Globally.
          </h2>
        </div>
      </section>
    </div>
  );
};

export default About;
