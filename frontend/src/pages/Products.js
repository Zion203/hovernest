import { Link } from 'react-router-dom';
import { Check, ArrowRight, Package, Zap } from 'lucide-react';
import { products } from '../data/mockData';

const Products = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-[#1a0b2e] to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-[#6E44FF] rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <Package className="w-4 h-4 text-[#A78BFA] mr-2" />
            <span className="text-sm font-medium">Full Product Line</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Precision-Engineered Systems</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From multipurpose VTOL to specialized agricultural drones, every Hovernest product is built for
            reliability, modularity, and mission success.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#6E44FF]/20 to-[#A78BFA]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto max-h-96 object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="inline-flex items-center px-3 py-1 bg-[#F5F3FF] rounded-full mb-4">
                    <Zap className="w-4 h-4 text-[#6E44FF] mr-2" />
                    <span className="text-sm font-semibold text-[#6E44FF]">{product.status}</span>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">{product.name}</h2>
                  <p className="text-xl text-[#6E44FF] font-semibold mb-4">{product.tagline}</p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">{product.description}</p>

                  {/* Specs */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                      Key Specifications
                    </h3>
                    <ul className="grid grid-cols-1 gap-3">
                      {product.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-[#6E44FF] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Starting at</p>
                      <p className="text-3xl font-bold text-gray-900">{product.price}</p>
                    </div>
                    <div className="flex gap-3">
                      <Link
                        to="/contact?type=demo"
                        className="inline-flex items-center px-6 py-3 bg-[#6E44FF] text-white rounded-full font-semibold hover:bg-[#5D35E6] transition-all duration-200 hover:scale-105 shadow-lg"
                      >
                        Request Demo
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                      <Link
                        to="/resources"
                        className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-[#6E44FF] hover:text-[#6E44FF] transition-all duration-200"
                      >
                        Specs Sheet
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Can't find the right fit?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We offer custom configurations and payload integrations for specialized missions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#6E44FF] text-white rounded-full text-lg font-semibold hover:bg-[#5D35E6] transition-all duration-200 hover:scale-105 shadow-xl"
          >
            Discuss Custom Solution
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
