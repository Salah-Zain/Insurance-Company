import React, { useState } from 'react'
import { Plus, Minus, MessageCircle, Phone } from 'lucide-react';

const SectionFive = () => {

    const [openFAQ, setOpenFAQ] = useState(null);

    const partners = [
      { name: "PwC", logo: "pwc" },
      { name: "Grant Thornton", logo: "grant-thornton" },
      { name: "EY", logo: "ey" },
      { name: "Deloitte", logo: "deloitte" },
      { name: "Accenture", logo: "accenture" },
      { name: "Infosys", logo: "infosys" },
      { name: "IBM", logo: "ibm" }
    ];
  
    const faqs = [
      {
        question: "How the Insurance Process Work?",
        answer: "Our insurance process is straightforward and customer-friendly. First, you provide your vehicle details and personal information. Then, we assess your requirements and provide customized quotes. After you select a plan, we process your application and issue your policy digitally within 24 hours."
      },
      {
        question: "Are there any Risk Factors?",
        answer: "Like any financial product, insurance policies have certain considerations. We transparently communicate all terms, conditions, and exclusions upfront. Our team ensures you understand coverage limitations, claim procedures, and renewal terms to make informed decisions."
      },
      {
        question: "How to Make Sure Insurance is Claimed?",
        answer: "To ensure smooth claim processing, always report incidents immediately, maintain proper documentation, follow our step-by-step claim process, and stay in touch with our claims team. We provide 24/7 claim support and digital tracking for complete transparency."
      },
      {
        question: "What all the Features Provided in Insurance",
        answer: "Our comprehensive insurance includes vehicle damage coverage, third-party liability, theft protection, natural disaster coverage, roadside assistance, zero depreciation options, engine protection, and return-to-invoice benefits. Additional add-ons are available based on your needs."
      }
    ];
  
    const toggleFAQ = (index) => {
      setOpenFAQ(openFAQ === index ? null : index);
    };


    const PartnerLogo = ({ partner }) => (

        <div className="flex items-center justify-center h-12 px-4 grayscale hover:grayscale-0 transition-all duration-300">
          {partner.logo === 'pwc' && (
            <div className="text-orange-500 font-bold text-lg">pwc</div>
          )}
          {partner.logo === 'grant-thornton' && (
            <div className="flex items-center space-x-1">
              <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
              <span className="text-gray-700 font-medium text-sm">Grant Thornton</span>
            </div>
          )}
          {partner.logo === 'ey' && (
            <div className="text-yellow-500 font-bold text-xl">EY</div>
          )}
          {partner.logo === 'deloitte' && (
            <div className="text-green-600 font-bold text-lg">Deloitte</div>
          )}
          {partner.logo === 'accenture' && (
            <div className="text-purple-600 font-bold text-lg">accenture</div>
          )}
          {partner.logo === 'infosys' && (
            <div className="text-blue-600 font-bold text-lg">infosys</div>
          )}
          {partner.logo === 'ibm' && (
            <div className="text-blue-800 font-bold text-xl">IBM</div>
          )}
        </div>
      );

return (
  <div className="bg-gray-50 py-8 md:py-16">
    <div className="container mx-auto px-4">
      
      {/* Partners Section */}
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 md:mb-12">
          Our Partners
        </h2>
        
        {/* Desktop Partners Grid */}
        <div className="hidden md:flex justify-center items-center space-x-8 lg:space-x-12 flex-wrap gap-y-6">
          {partners.map((partner, index) => (
            <PartnerLogo key={index} partner={partner} />
          ))}
        </div>
        
        {/* Mobile Partners Grid */}
        <div className="md:hidden flex gap-14 overflow-x-auto md:flex-col items-center max-w-7xl mx-auto ">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
              <PartnerLogo partner={partner} />
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 py-4">
        
        {/* Left Column - Title and Description */}
        <div className="space-y-6">
          <div className='text-center md:text-start'>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Any Questions ?<br />
              We Got You.
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-tight max-w-md">
              We Always Make Sure to Understand our Client Questions and clear them , these are some Frequently questions asked.
            </p>
          </div>
          
         
        </div>

        {/* Right Column - FAQ Items */}
        <div className="space-y-4 mt-4 w-[50%]">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-medium text-gray-800 text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <Minus className="w-5 h-5 text-gray-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4 border-t border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
         {/* Contact Buttons */}
         <div className="flex flex-col items-center w-full gap-4 sm:flex-row sm:items-center max-w-7xl mx-auto px-8">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>Connect With WhatsApp</span>
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Call Our Agent</span>
            </button>
          </div>
    </div>
  </div>
  )
}

export default SectionFive
