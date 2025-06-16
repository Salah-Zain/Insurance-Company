import React from 'react';
import { ArrowUpRight, Shield, Zap, Users, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const About = () => {

    const highlights = [
        {
          title: "Competitive Trust",
          description: "We build trust through transparent pricing, fair claims handling, and consistent communication throughout your insurance journey."
        },
        {
          title: "24x7 Support",
          description: "Our customer service team is available round the clock to address your queries and provide assistance whenever you need it."
        },
        {
          title: "Fast Claim Process",
          description: "We streamline our claims process to ensure quick and efficient resolution, getting you back on track as soon as possible."
        },
        {
          title: "Customized Policies",
          description: "We understand that every customer has unique needs, so we offer flexible policies tailored to your specific requirements."
        }
      ];


        const [formData, setFormData] = useState({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: ''
        });
      
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData(prev => ({
            ...prev,
            [name]: value
          }));
        };
      
        const handleSubmit = () => {
          console.log('Form submitted:', formData);
          // Handle form submission logic here
        };
      
    
  return (
    <>
    <Navbar />
      {/* Desktop Layout (md and above) */}
      <section className="hidden md:block bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-widest mb-4 opacity-90">ABOUT</p>
                <h2 className="text-5xl font-light mb-8">Our Story</h2>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Founded in 2005, Insurance World began with a simple mission: to make car 
                  insurance more accessible, transparent, and tailored to the individual needs of 
                  drivers across the country.
                </p>
                
                <p>
                  What started as a small office with five dedicated employees has grown into a 
                  nationwide provider with over 500 insurance specialists, serving thousands of 
                  satisfied customers.
                </p>
                
                <p>
                  Despite our growth, we've maintained our commitment to personalized service, 
                  ensuring that each customer receives the attention and coverage they deserve.
                </p>
              </div>
              
              <div className="flex items-center space-x-4 pt-4">
                <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Get Insurance Now
                </button>
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all">
                  <ArrowUpRight className="text-white" size={20} />
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Happy woman with car"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Layout (below md) */}
      <section className="md:hidden bg-gradient-to-b from-blue-400 via-purple-500 to-purple-600 text-white min-h-screen">
        <div className="px-6 py-8">
          {/* Image at top */}
          <div className="mb-8">
            <div className="rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Happy woman with car"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          
          {/* Content below */}
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-widest mb-4 opacity-90">ABOUT</p>
              <h2 className="text-4xl font-light mb-8">Our Story</h2>
            </div>
            
            <div className="space-y-6 text-base leading-relaxed">
              <p>
                Founded in 2005, Insurance World began with a simple mission: to make car 
                insurance more accessible, transparent, and tailored to the individual needs of 
                drivers across the country.
              </p>
              
              <p>
                What started as a small office with five dedicated employees has grown into a 
                nationwide provider with over 500 insurance specialists, serving thousands of 
                satisfied customers.
              </p>
              
              <p>
                Despite our growth, we've maintained our commitment to personalized service, 
                ensuring that each customer receives the attention and coverage they deserve.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 pt-8">
              <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex-1">
                Get Insurance Now
              </button>
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all">
                <ArrowUpRight className="text-white" size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden md:block bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-medium text-gray-800 text-center mb-12">Our Proud Partners</h2>
          
          <div className="flex items-center justify-between space-x-8">
            {/* PWC */}
            <div className="flex items-center justify-center h-12">
              <div className="flex items-center space-x-1">
                <div className="w-8 h-8 bg-orange-500 flex items-center justify-center">
                  <div className="w-6 h-6 bg-orange-600 transform rotate-45"></div>
                </div>
                <span className="text-2xl font-bold text-gray-800">pwc</span>
              </div>
            </div>
            
            {/* Grant Thornton */}
            <div className="flex items-center justify-center h-12">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="text-xl font-medium text-gray-800">Grant Thornton</span>
              </div>
            </div>
            
            {/* EY */}
            <div className="flex items-center justify-center h-12">
              <div className="flex items-center space-x-1">
                <div className="w-6 h-6 bg-yellow-400 transform rotate-45"></div>
                <span className="text-2xl font-bold text-gray-800">EY</span>
              </div>
            </div>
            
            {/* Deloitte */}
            <div className="flex items-center justify-center h-12">
              <span className="text-2xl font-bold text-gray-800">Deloitte</span>
              <div className="w-2 h-2 bg-green-500 rounded-full ml-1"></div>
            </div>
            
            {/* Accenture */}
            <div className="flex items-center justify-center h-12">
              <span className="text-2xl font-medium text-purple-600">accenture</span>
              <div className="w-1 h-8 bg-purple-600 ml-2"></div>
            </div>
            
            {/* Infosys */}
            <div className="flex items-center justify-center h-12">
              <span className="text-2xl font-medium text-blue-500">Infosys</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Layout (below md) */}
      <section className="md:hidden bg-gray-50 py-12">
        <div className="px-6">
          <h2 className="text-2xl font-medium text-gray-800 text-center mb-8">Our Partners</h2>
          
          <div className="flex items-center justify-center space-x-12">
            {/* EY */}
            <div className="flex items-center justify-center h-12">
              <div className="flex items-center space-x-1">
                <div className="w-6 h-6 bg-yellow-400 transform rotate-45"></div>
                <span className="text-2xl font-bold text-gray-800">EY</span>
              </div>
            </div>
            
            {/* Deloitte */}
            <div className="flex items-center justify-center h-12">
              <span className="text-2xl font-bold text-gray-800">Deloitte</span>
              <div className="w-2 h-2 bg-green-500 rounded-full ml-1"></div>
            </div>
          </div>
        </div>
      </section>

       {/* Desktop Layout (md and above) */}
       <section className="hidden md:block bg-gradient-to-br from-blue-100 to-blue-200 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-medium text-gray-800 text-center mb-16">Values We Always Keep</h2>
          
          <div className="grid grid-cols-3 gap-8">
            {/* Trust Card */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center transform rotate-12">
                  <Shield className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                We build lasting relationships with our customers based on honesty, transparency, and reliability.
              </p>
            </div>

            {/* Efficiency Card */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-black rounded-full relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Zap className="text-black" size={24} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 border-4 border-black rounded-full"></div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-4 border-black rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Efficiency</h3>
              <p className="text-gray-600 leading-relaxed">
                We value your time and strive to make every interaction, from getting a quote to filing a claim, as smooth and efficient as possible.
              </p>
            </div>

            {/* Customer First Card */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="flex justify-center mb-6">
                <Users className="text-black" size={64} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Customer First</h3>
              <p className="text-gray-600 leading-relaxed">
                Our customers are at the heart of everything we do. We're committed to providing exceptional service that exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Layout (below md) */}
      <section className="md:hidden bg-gradient-to-br from-blue-100 to-blue-200 py-12">
        <div className="px-6">
          <h2 className="text-3xl font-medium text-gray-800 text-center mb-12">Values We Always Keep</h2>
          
          <div className="space-y-6">
            {/* Trust Card */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center transform rotate-12">
                  <Shield className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                We build lasting relationships with our customers based on honesty, transparency, and reliability.
              </p>
            </div>

            {/* Efficiency Card */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-black rounded-full relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Zap className="text-black" size={24} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 border-4 border-black rounded-full"></div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-4 border-black rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Efficiency</h3>
              <p className="text-gray-600 leading-relaxed">
                We value your time and strive to make every interaction, from getting a quote to filing a claim, as smooth and efficient as possible.
              </p>
            </div>

            {/* Customer First Card */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="flex justify-center mb-6">
                <Users className="text-black" size={64} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Customer First</h3>
              <p className="text-gray-600 leading-relaxed">
                Our customers are at the heart of everything we do. We're committed to providing exceptional service that exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Desktop Layout (md and above) */}
      <section className="hidden md:block bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-medium text-gray-800 text-center mb-12">Our Key Highlights</h2>
          
          <div className="grid grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-1" fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{highlight.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Layout (below md) */}
      <section className="md:hidden bg-gray-50 py-12">
        <div className="px-6">
          <h2 className="text-2xl font-medium text-gray-800 text-center mb-8">Our Key Highlights</h2>
          
          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-1" fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{highlight.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 flex items-center justify-center p-4">
      {/* Desktop Layout (md and up) */}
      <div className="hidden md:flex bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full">
        {/* Left Panel - Contact Info */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8 w-2/5 relative">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="text-indigo-100 mb-8">Say something to start a live chat!</p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5" />
              <span>+1012 3456 789</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-5 h-5" />
              <span>demo@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5" />
              <span>132 Dartmouth Street Boston,<br />Massachusetts 02156 United States</span>
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute bottom-8 right-8 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
          <div className="absolute bottom-16 right-16 w-16 h-16 bg-white bg-opacity-20 rounded-full"></div>
        </div>

        {/* Right Panel - Form */}
        <div className="p-8 w-3/5">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 pb-2 focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 pb-2 focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 pb-2 focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+1 012 3456 789"
                  className="w-full border-b border-gray-300 pb-2 focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message..."
                rows={4}
                className="w-full border-b border-gray-300 pb-2 focus:border-indigo-500 focus:outline-none resize-none"
              />
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (below md) */}
      <div className="md:hidden bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-6 text-center relative">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-indigo-100 mb-6 text-sm">Say something to start a live chat!</p>
          
          <div className="space-y-4 text-sm">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-4 h-4" />
              <span>+1012 3456 789</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-4 h-4" />
              <span>demo@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-4 h-4" />
              <span>132 Dartmouth Street Boston,<br />Massachusetts 02156 United States</span>
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute bottom-4 right-4 w-20 h-20 bg-white bg-opacity-10 rounded-full"></div>
          <div className="absolute bottom-8 right-8 w-10 h-10 bg-white bg-opacity-20 rounded-full"></div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full border-b border-gray-300 pb-2 focus:border-indigo-500 focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full border-b border-gray-300 pb-2 focus:border-indigo-500 focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-b border-gray-300 pb-2 focus:border-indigo-500 focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="+1 012 3456 789"
                className="w-full border-b border-gray-300 pb-2 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message..."
                rows={3}
                className="w-full border-b border-gray-300 pb-2 focus:border-indigo-500 focus:outline-none resize-none"
              />
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />



    </>
  );
};

export default About;