import { useState } from 'react';
import { X, MapPin, Package, Clock } from 'lucide-react';
import { galleryImages } from '../data/mockData';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'vtol', label: 'VTOL' },
    { id: 'neurofc', label: 'NeuroFC' },
    { id: 'medical', label: 'Medical' },
    { id: 'agri', label: 'Agriculture' },
    { id: 'inspection', label: 'Inspection' },
    { id: 'rnd', label: 'R&D Labs' },
  ];

  const filteredImages =
    selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-[#1a0b2e] to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/2 w-96 h-96 bg-[#A78BFA] rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">From Lab Benches to Mountain Corridors</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our missions, technology, and field operations across diverse terrains and applications.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-[#6E44FF] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setLightboxImage(image)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer bg-gray-200"
              >
                <img
                  src={image.image}
                  alt={image.caption}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-lg mb-1">{image.caption}</h3>
                  <div className="flex items-center text-sm text-gray-300 space-x-3">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {image.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {image.flightHours}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.image}
              alt={lightboxImage.caption}
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl mb-6"
            />
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">{lightboxImage.caption}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-[#A78BFA]" />
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="font-semibold">{lightboxImage.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Package className="w-5 h-5 text-[#A78BFA]" />
                  <div>
                    <p className="text-xs text-gray-400">Payload</p>
                    <p className="font-semibold">{lightboxImage.payload}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-[#A78BFA]" />
                  <div>
                    <p className="text-xs text-gray-400">Flight Hours</p>
                    <p className="font-semibold">{lightboxImage.flightHours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
