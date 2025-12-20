import { Link } from 'react-router-dom';
import { MapPin, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: [
      { name: 'Multipurpose VTOL', path: '/products#vtol' },
      { name: 'Fixed-Wing', path: '/products#fixed-wing' },
      { name: 'Agriculture Drone', path: '/products#agri-drone' },
      { name: 'Parts & Accessories', path: '/products#parts' },
    ],
    Programs: [
      { name: 'Medical Corridor', path: '/programs#medical' },
      { name: 'Agriculture', path: '/programs#agri' },
      { name: 'Industrial Inspection', path: '/programs#industrial' },
      { name: 'NeuroFC Developer', path: '/programs#developer' },
    ],
    Company: [
      { name: 'About', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Internships', path: '/internships' },
      { name: 'Blog', path: '/blog' },
    ],
    Resources: [
      { name: 'Documentation', path: '/resources' },
      { name: 'R&D', path: '/research' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-[#1a0b2e] to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <img
                src="https://customer-assets.emergentagent.com/job_0afa4b6f-648f-43be-9f28-1ca6171a4f9c/artifacts/gz40ovum_hovernest%20logo%20-%20Edited.png"
                alt="Hovernest"
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-2xl font-bold">Hovernest</span>
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Building AI-native multipurpose VTOL systems for medical, agriculture, and industrial missions.
            </p>
            <p className="text-[#A78BFA] font-semibold text-sm">
              Built in India. Deployed Globally.
            </p>
            
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 text-[#A78BFA]" />
                <span>Chennai, India</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4 text-[#A78BFA]" />
                <a href="mailto:info@hovernest.com" className="hover:text-[#A78BFA] transition-colors duration-200">
                  info@hovernest.com
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 flex items-center space-x-4">
              <a
                href="https://www.instagram.com/hovernest.com_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-[#A78BFA] transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/hovernest/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-[#A78BFA] transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Hovernest_com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-[#A78BFA] transition-all duration-200 hover:scale-110"
                aria-label="X"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-[#A78BFA] transition-colors duration-200 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Hovernest. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-[#A78BFA] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[#A78BFA] transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-[#A78BFA] transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
