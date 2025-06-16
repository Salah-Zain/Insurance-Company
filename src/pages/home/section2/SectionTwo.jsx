import React from 'react'
import { Settings, Users, ThumbsUp, Headphones } from 'lucide-react';


const SectionTwo = () => {

    const stats = [
        {
          icon: <Settings className="w-12 h-12" />,
          title: "Years of Experience",
          value: "1",
          suffix: "+"
        },
        {
          icon: <Users className="w-12 h-12" />,
          title: "Satisfied Clients",
          value: "10",
          suffix: "K"
        },
        {
          icon: <ThumbsUp className="w-12 h-12" />,
          title: "Claim Approvals Rate",
          value: "8",
          suffix: "%"
        },
        {
          icon: <Headphones className="w-12 h-12" />,
          title: "Customer Support",
          value: "16x7",
          suffix: ""
        }
      ];

  return (

    // section 2-1
    <div className="bg-white">
      {/* Desktop Layout (>= md) */}
      <div className="hidden md:flex items-center max-w-7xl mx-auto px-8 py-16">
        {/* Left Content */}
        <div className="flex-1 pr-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            The No.1 Car Insurance Agency in the World
          </h2>
          
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet consectetur. Nec congue quis malesuada nec quis 
              senectus duis. Orci sapien morbi habitasse aliquam fusce mauris. Libero ac pharetra 
              amet amet sed sed vitae. Eget eleifend tortor enim vel eget dolor.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nec congue quis malesuada nec quis 
              senectus duis. Orci sapien morbi habitasse aliquam fusce mauris. Libero ac pharetra 
              amet amet sed sed vitae. Eget eleifend tortor enim vel eget dolor.
            </p>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="flex-1 flex justify-end">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face" 
              alt="Professional insurance agent" 
              className="w-96 h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout (< md) */}
      <div className="md:hidden px-6 py-12">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            The No.1 Car Insurance Agency in the World
          </h2>
          
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur. Nec congue quis malesuada nec quis 
            senectus duis. Orci sapien morbi habitasse aliquam fusce mauris. Libero ac pharetra 
            amet amet sed sed vitae. Eget eleifend tortor enim vel eget dolor.
          </p>
          
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
              alt="Professional insurance agent" 
              className="w-72 h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      {/* // section 2-2 */}

      <div className="bg-gray-50 mb-36 mt-16">
      {/* Desktop Layout (>= md) - Horizontal */}
      <div className="hidden md:block max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative">
              {/* Vertical divider - hide on last item */}
              {index < stats.length - 1 && (
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-300"></div>
              )}
              
              <div className="flex flex-col items-center space-y-4">
                {/* Icon */}
                <div className="text-gray-700 mb-2">
                  {stat.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-gray-700 font-medium text-lg">
                  {stat.title}
                </h3>
                
                {/* Value */}
                <div className="text-6xl font-bold text-purple-900 tracking-tight">
                  {stat.value}
                  <span className="ml-1">{stat.suffix}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout (< md) - Vertical */}
      <div className="md:hidden max-w-sm mx-auto px-6">
        <div className="space-y-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative">
              {/* Horizontal divider - hide on last item */}
              {index < stats.length - 1 && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 w-16 h-px bg-gray-300"></div>
              )}
              
              <div className="flex flex-col items-center space-y-3">
                {/* Icon */}
                <div className="text-gray-700 mb-1">
                  {stat.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-gray-700 font-medium text-base">
                  {stat.title}
                </h3>
                
                {/* Value */}
                <div className="text-5xl font-bold text-purple-900 tracking-tight">
                  {stat.value}
                  <span className="ml-1">{stat.suffix}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>


    
  )
}

export default SectionTwo