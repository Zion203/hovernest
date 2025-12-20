import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin, Compass, Zap, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'survey-mapping',
      title: 'Survey & Mapping Services',
      description: 'Embark on the forefront of modern aerial surveying with our Drone Mapping services, a cutting-edge technique that integrates high-resolution cameras, the Global Positioning System (GPS), and Inertial Navigation Systems (INS).',
      features: [
        'High-resolution aerial imagery',
        'Precise GPS/INS integration',
        'Real-time data processing',
        'Custom mapping solutions',
        'Multi-spectral imaging options',
        'Ortho-rectified outputs'
      ],
      icon: Compass,
      color: '#6E44FF'
    },
    {
      id: 'professional-services',
      title: 'Professional Drone Services',
      description: 'Complete drone solutions for survey, mapping, and training. Our professional team delivers end-to-end services with expertise across agriculture, infrastructure inspection, and urban planning.',
      features: [
        'Expert surveying teams',
        'Comprehensive training programs',
        'Mission-specific customization',
        'Industry certifications',
        'On-site support',
        'Data delivery & analysis'
      ],
      icon: Users,
      color: '#A78BFA'
    },
    {
      id: 'drone-training',
      title: 'Drone Training & Certification',
      description: 'Comprehensive training programs designed for professionals looking to master drone operations, flight planning, data analysis, and industry-specific applications.',
      features: [
        'Beginner to advanced courses',
        'Hands-on flight training',
        'Data analysis workshops',
        'Industry-specific applications',
        'Certification programs',
        'Continuous support'
      ],
      icon: Zap,
      color: '#7C3AED'
    }
  ];

  const serviceCategories = [
    {
      sector: 'Agriculture',
      description: 'Crop monitoring, yield optimization, and precision farming solutions',
      benefits: ['Health monitoring', 'Pest detection', 'Irrigation planning']
    },
    {
      sector: 'Civil Industry',
      description: 'Infrastructure inspection, construction monitoring, and land surveying',
      benefits: ['Site documentation', 'Progress tracking', 'Safety assessment']
    },
    {
      sector: 'Commercial Market',
      description: 'Tailored solutions for various commercial applications',
      benefits: ['Custom payloads', 'Flexible missions', 'ROI optimization']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-[#1a0b2e] to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#6E44FF] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A78BFA] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <MapPin className="w-4 h-4 text-[#A78BFA] mr-2" />
            <span className="text-sm font-medium">Professional Services</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Smart drones designed to cater to homeland and civil industry including the commercial market across various sectors such as agriculture
          </p>
        </div>
      </section>

      {/* Our Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Drone Services for Survey, Mapping & Training
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your industry needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 hover:border-[#6E44FF] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#6E44FF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-[#6E44FF] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Survey and Mapping Services Section */}
          <div className="bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE] rounded-3xl p-12 md:p-16">
            <div className="max-w-4xl">
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-[#6E44FF] mb-6">
                <Compass className="w-4 h-4 text-[#6E44FF] mr-2" />
                <span className="text-sm font-semibold text-[#6E44FF]">Featured Service</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Survey and Mapping Services</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Embark on the forefront of modern aerial surveying with our Drone Mapping services, a cutting-edge technique that integrates high-resolution cameras, the Global Positioning System (GPS), and Inertial Navigation Systems (INS). Our comprehensive approach ensures accurate data collection and precise mapping for your projects.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#6E44FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Advanced Technology</h4>
                    <p className="text-sm text-gray-600">Integration of GPS, INS, and high-resolution imaging</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#6E44FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Accurate Data</h4>
                    <p className="text-sm text-gray-600">Precision measurement and georeferencing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#6E44FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Fast Delivery</h4>
                    <p className="text-sm text-gray-600">Quick turnaround on mapping and analysis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#6E44FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Custom Solutions</h4>
                    <p className="text-sm text-gray-600">Tailored to your specific project requirements</p>
                  </div>
                </div>
              </div>
              <Link
                to="/contact?type=service"
                className="inline-flex items-center px-8 py-4 bg-[#6E44FF] text-white rounded-full text-lg font-semibold hover:bg-[#5D35E6] transition-all duration-200 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Read More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions across multiple sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#6E44FF] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.sector}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                <div className="space-y-3">
                  {category.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-[#6E44FF] mr-3" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#6E44FF] to-[#7C3AED] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Get in touch with our team to discuss your project requirements and find the perfect service solution.
          </p>
          <Link
            to="/contact?type=service"
            className="inline-flex items-center px-10 py-5 bg-white text-[#6E44FF] rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-2xl"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
