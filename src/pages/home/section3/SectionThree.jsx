import React from 'react'
import { Shield, User, Car, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';


export const SectionThree = () => {

    const services = [
        {
          icon: <Shield className="w-8 h-8 text-blue-500" />,
          title: "Comprehensive Coverage",
          description: "Lorem ipsum dolor sit amet consectetur. Neque elit pharetra pellentesque pulvinar malesuada porttitor et. Fringilla dictum semper sagittis purus. Lorem eget ornare nunc quam cursus feugiat velit elit odio. Nisl egestas nullam risus nec viverra est vitae lacus."
        },
        {
          icon: <User className="w-8 h-8 text-blue-500" />,
          title: "Personalized Plans",
          description: "Lorem ipsum dolor sit amet consectetur. Neque elit pharetra pellentesque pulvinar malesuada porttitor et. Fringilla dictum semper sagittis purus. Lorem eget ornare nunc quam cursus feugiat velit elit odio. Nisl egestas nullam risus nec viverra est vitae lacus."
        },
        {
          icon: <Car className="w-8 h-8 text-orange-500" />,
          title: "New And Used Vehicles",
          description: "Lorem ipsum dolor sit amet consectetur. Neque elit pharetra pellentesque pulvinar malesuada porttitor et. Fringilla dictum semper sagittis purus. Lorem eget ornare nunc quam cursus feugiat velit elit odio. Nisl egestas nullam risus nec viverra est vitae lacus."
        },
        {
          icon: <Trophy className="w-8 h-8 text-yellow-500" />,
          title: "Award Winning Services",
          description: "Lorem ipsum dolor sit amet consectetur. Neque elit pharetra pellentesque pulvinar malesuada porttitor et. Fringilla dictum semper sagittis purus. Lorem eget ornare nunc quam cursus feugiat velit elit odio. Nisl egestas nullam risus nec viverra est vitae lacus."
        }
      ];
    
      const testimonials = [
        {
          name: "Jesse Pinkmen",
          position: "CEO Lamborghini Ltd.",
          content: "Quisquam similique molestiae quis quod dolorum et. Aliquid blanditiis voluptatem maxime qui et voluptas minus. Non provident pariatur nisl. Repellat voluptas culpa eum.",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
        },
        {
          name: "Jesse Pinkmen",
          position: "CEO Lamborghini Ltd.",
          content: "Quisquam similique molestiae quis quod dolorum et. Aliquid blanditiis voluptatem maxime qui et voluptas minus. Non provident pariatur nisl. Repellat voluptas culpa eum.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
        },
        {
          name: "Jesse Pinkmen",
          position: "CEO Lamborghini Ltd.",
          content: "Quisquam similique molestiae quis quod dolorum et. Aliquid blanditiis voluptatem maxime qui et voluptas minus. Non provident pariatur nisl. Repellat voluptas culpa eum.",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
        }
      ];
    

  return (
    <div className="min-h-screen bg-gray-50">
    {/* Services Section */}
    <div className="bg-[#4F5C93] text-white ">
      <div className="md:flex md:flex-col items-center max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Our Insurance Services</h1>
          <p className="text-indigo-100 max-w-2xl mx-auto">
            We offer comprehensive protection for your vehicles with flexible and affordable plans.
          </p>
        </div>

        {/* Desktop Layout (md and up) */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 mb-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white text-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout (less than md) */}
        <div className="md:hidden space-y-4 mb-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white text-gray-800 rounded-lg p-4 shadow-lg">
              <div className="flex flex-col items-start space-x-3">
                <div className="flex gap-4 py-4">
                  {service.icon}
                  <h3 className="text-base font-semibold  mb-2">{service.title}</h3>
                </div>
                <div>
                  <p className="text-gray-600 text-sm leading-tight">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg inline-flex items-center space-x-2">
            <span>Get Insurance Now</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>

    {/* Testimonials Section */}
    <div className="bg-white py-12 md:py-16">
      <div className="md:flex md:flex-col items-center max-w-7xl mx-auto px-8 py-16">
        <div className="w-full flex justify-between items-start mb-8">
          <div className='text-center md:text-start '>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Customer Testimonials</h2>
            <p className="text-gray-600 max-w-md">
              Don't just take our word for it. See what our satisfied customers have to say about our insurance services.
            </p>
          </div>
          <div className="hidden md:flex space-x-2">
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop Testimonials */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="text-blue-500 text-4xl mb-4">"</div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>

        {/* Mobile Testimonial */}
        <div className="md:hidden">
          <div className="bg-gray-50 rounded-lg px-6 py-4 shadow-gray-300 shadow-sm ">
            <div className="text-blue-500 text-4xl">"</div>
            <div className="flex justify-between items-center space-x-3">
            <div>
                <h4 className="font-semibold text-gray-800">{testimonials[0].name}</h4>
              </div>
              <img
                src={testimonials[0].avatar}
                alt={testimonials[0].name}
                className="w-10 h-10 rounded-full object-cover"
              />
            
            </div>
                <p className="text-sm text-gray-500 py-3">{testimonials[0].position}</p>
            <p className="text-gray-600 text-sm leading-tight">{testimonials[0].content}</p>
          </div>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SectionThree
