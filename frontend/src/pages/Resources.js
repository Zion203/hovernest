import { Download, FileText, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { resources, faqs } from '../data/mockData';

const Resources = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-[#1a0b2e] to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#A78BFA] rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Resources & Documentation</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Download guides, technical documentation, and find answers to common questions.
          </p>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-[#6E44FF] rounded-xl flex items-center justify-center">
              <Download className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Downloads</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <button
                key={index}
                onClick={() => alert('Download will be available soon')}
                className="group flex items-start p-6 bg-gradient-to-br from-[#F5F3FF] to-white rounded-2xl border-2 border-gray-200 hover:border-[#6E44FF] hover:shadow-xl transition-all duration-300 text-left"
              >
                <div className="w-14 h-14 bg-[#6E44FF] rounded-xl flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#6E44FF] transition-colors duration-200">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <span className="px-2 py-1 bg-gray-100 rounded">{resource.type}</span>
                    <span>{resource.size}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-[#6E44FF] rounded-xl flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl border-2 border-gray-200 px-6 hover:border-[#6E44FF] transition-colors duration-200"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#6E44FF] py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Resources;
