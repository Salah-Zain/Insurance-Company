import React from 'react'

const SectionFour = () => {

  const comparisonData = [
    {
      parameter: "Coverage",
      comprehensive: "Provides broad coverage including damage to your own vehicle, theft, fire, natural disasters, and third-party liability.",
      thirdParty: "Covers only damages or injuries caused by your vehicle to a third party (person or property)."
    },
    {
      parameter: "Own Vehicle Damage",
      comprehensive: "Covers repairs or replacement of your car if it's damaged in an accident, regardless of who is at fault.",
      thirdParty: "Does not cover any damage to your own vehicle; you bear the repair costs."
    },
    {
      parameter: "Theft Coverage",
      comprehensive: "Provides compensation if your vehicle is stolen.",
      thirdParty: "No compensation if your vehicle is stolen."
    },
    {
      parameter: "Natural Disasters",
      comprehensive: "Offers protection against damage from floods, fires, earthquakes, storms, etc.",
      thirdParty: "No protection against natural calamities affecting your own vehicle."
    },
    {
      parameter: "Premium Cost",
      comprehensive: "Premiums are higher due to extensive coverage and optional add-ons.",
      thirdParty: "Premiums are lower because coverage is minimal and basic."
    },
    {
      parameter: "Add-On Options",
      comprehensive: "Add-ons like roadside assistance, zero depreciation, engine protection, and return-to-invoice cover available.",
      thirdParty: "Usually no or very limited add-ons are offered."
    },
    {
      parameter: "Which To Choose?",
      comprehensive: "If Your vehicle is new, expensive, or regularly used vehicles where full protection is desirable.",
      thirdParty: "If Your Vehicle is old or low-value vehicles where repair/replacement costs are low and minimal cover is enough."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-red-500 transform rotate-45 opacity-80"></div>
      <div className="absolute top-32 right-20 w-8 h-8 bg-yellow-400 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-blue-600 rounded-t-full transform -translate-y-16"></div>
      
      <div className="md:flex md:flex-col items-center max-w-7xl mx-auto px-8 py-16 relative z-10">
        {/* Header */}
        <div className="w-full mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl text-start font-bold text-white mb-4">
            Comprehensive V/S Third Party Insurance.
          </h1>
          <p className="text-blue-100 text-lg md:text-xl">
            Find Out which one is best for you , in this Comparison
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Illustration - Desktop Only */}
          <div className="hidden lg:flex lg:w-1/3 justify-center">
            <div className="relative">
              {/* Car illustration placeholder */}
              <div className="w-80 h-60 bg-white rounded-lg p-6 shadow-2xl">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-16 h-12 bg-blue-600 rounded text-white flex items-center justify-center text-xs font-bold mb-4 mx-auto">
                      INSURANCE
                    </div>
                    <div className="w-32 h-20 bg-gray-400 rounded-lg mx-auto mb-4"></div>
                    <div className="flex justify-center space-x-2">
                      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                <div className="text-white text-2xl">❤️</div>
              </div>
            </div>
          </div>

          {/* Comparison Table/Content */}
          <div className="w-full lg:w-2/3">
            {/* Desktop Table Layout (md and up) */}
            <div className="hidden md:block bg-white rounded-2xl shadow-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="px-14 py-4 text-left font-semibold text-gray-800 border-r">
                      Parameters
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-800 border-r">
                      Comprehensive Insurance
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-800">
                      Third Party Insurance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-4 font-[500] leading-tight text-gray-800 border-r border-b align-top">
                        {item.parameter}
                      </td>
                      <td className="px-6 py-4 text-gray-700 text-sm border-r border-b align-top leading-relaxed">
                        {item.comprehensive}
                      </td>
                      <td className="px-6 py-4 text-gray-700 text-sm border-b align-top leading-relaxed">
                        {item.thirdParty}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Layout (less than md) */}
            <div className="md:hidden space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-white mb-2">
                  Comprehensive V/S Third Party Insurance
                </h2>
                <p className="text-blue-100 text-sm">
                  Find Out which one is best for you , in this Comparison
                </p>
              </div>

              {comparisonData.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-gray-100 px-4 py-3 border-b">
                    <h3 className="font-semibold text-gray-800">{item.parameter}</h3>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    <div>
                      <h4 className="font-medium text-blue-600 mb-2">Comprehensive Insurance</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.comprehensive}</p>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h4 className="font-medium text-orange-600 mb-2">Third Party Insurance</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.thirdParty}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SectionFour
