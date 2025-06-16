import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const GetInsurance = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);

  const handleSelection = (type) => {
    setSelectedType(type);
    console.log('Selected registration type:', type);
    if (type === 'personal') {
      navigate('/personal-insurance');
    } else if (type === 'company') {
      navigate('/company-insurance');
    }
  };
  
  return (
    <div>
      <Navbar />
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Title */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed max-w-2xl mx-auto">
            Will the registration of the vehicle be completed under your personal name or that of your company?
          </h1>
        </div>

        {/* Desktop Layout (md and up) */}
        <div className="hidden md:flex gap-8 justify-center">
          {/* Personal Name Card */}
          <div 
            onClick={() => handleSelection('personal')}
            className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 w-80 cursor-pointer border-2 ${
              selectedType === 'personal' ? 'border-blue-500 shadow-blue-100' : 'border-transparent hover:border-gray-200'
            }`}
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Name</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur
              </p>
              
              {/* Illustration */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  {/* Person illustration */}
                  <div className="w-16 h-20 bg-orange-400 rounded-t-full relative">
                    {/* Head */}
                    <div className="w-8 h-8 bg-orange-300 rounded-full absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    {/* Arms */}
                    <div className="absolute top-4 -left-2 w-4 h-8 bg-orange-400 rounded-full transform rotate-45"></div>
                    <div className="absolute top-4 -right-2 w-4 h-8 bg-orange-400 rounded-full transform -rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Name Card */}
          <div 
            onClick={() => handleSelection('company')}
            className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 w-80 cursor-pointer border-2 ${
              selectedType === 'company' ? 'border-blue-500 shadow-blue-100' : 'border-transparent hover:border-gray-200'
            }`}
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Company Name</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur
              </p>
              
              {/* Illustration */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  {/* Business person with car */}
                  <div className="flex items-end space-x-2">
                    {/* Person */}
                    <div className="w-12 h-16 bg-gray-700 rounded-t-lg relative">
                      {/* Head */}
                      <div className="w-6 h-6 bg-orange-300 rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
                      {/* Tie */}
                      <div className="w-2 h-6 bg-red-500 absolute top-1 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                    {/* Car */}
                    <div className="w-16 h-8 bg-red-500 rounded-lg relative">
                      {/* Wheels */}
                      <div className="w-3 h-3 bg-gray-800 rounded-full absolute -bottom-1 left-1"></div>
                      <div className="w-3 h-3 bg-gray-800 rounded-full absolute -bottom-1 right-1"></div>
                      {/* Windows */}
                      <div className="w-8 h-3 bg-blue-200 rounded-t-lg absolute top-1 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                    {/* Location pin */}
                    <div className="w-4 h-6 bg-red-500 rounded-full relative">
                      <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1/2 transform -translate-x-1/2"></div>
                      <div className="w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-red-500 absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (below md) */}
        <div className="md:hidden space-y-6">
          {/* Personal Name Card */}
          <div 
            onClick={() => handleSelection('personal')}
            className={`bg-white rounded-xl shadow-md p-6 cursor-pointer border-2 transition-all duration-300 ${
              selectedType === 'personal' ? 'border-blue-500 shadow-blue-100' : 'border-transparent'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Name</h3>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
              
              {/* Illustration */}
              <div className="flex-shrink-0">
                <div className="w-12 h-15 bg-orange-400 rounded-t-full relative">
                  {/* Head */}
                  <div className="w-6 h-6 bg-orange-300 rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
                  {/* Arms */}
                  <div className="absolute top-3 -left-1 w-3 h-6 bg-orange-400 rounded-full transform rotate-45"></div>
                  <div className="absolute top-3 -right-1 w-3 h-6 bg-orange-400 rounded-full transform -rotate-45"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Name Card */}
          <div 
            onClick={() => handleSelection('company')}
            className={`bg-white rounded-xl shadow-md p-6 cursor-pointer border-2 transition-all duration-300 ${
              selectedType === 'company' ? 'border-blue-500 shadow-blue-100' : 'border-transparent'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Company Name</h3>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
              
              {/* Illustration */}
              <div className="flex-shrink-0">
                <div className="flex items-end space-x-1">
                  {/* Person */}
                  <div className="w-8 h-12 bg-gray-700 rounded-t-lg relative">
                    {/* Head */}
                    <div className="w-4 h-4 bg-orange-300 rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
                    {/* Tie */}
                    <div className="w-1 h-4 bg-red-500 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                  </div>
                  {/* Car */}
                  <div className="w-12 h-6 bg-red-500 rounded-lg relative">
                    {/* Wheels */}
                    <div className="w-2 h-2 bg-gray-800 rounded-full absolute -bottom-1 left-0"></div>
                    <div className="w-2 h-2 bg-gray-800 rounded-full absolute -bottom-1 right-0"></div>
                    {/* Windows */}
                    <div className="w-6 h-2 bg-blue-200 rounded-t-lg absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                  </div>
                  {/* Location pin */}
                  <div className="w-3 h-4 bg-red-500 rounded-full relative">
                    <div className="w-1 h-1 bg-white rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                    <div className="w-0 h-0 border-l-1 border-r-1 border-t-2 border-transparent border-t-red-500 absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

     
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default GetInsurance
