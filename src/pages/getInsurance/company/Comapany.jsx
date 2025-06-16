
import React, { useState } from 'react';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import Navbar from '../../../components/navbar/Navbar';

export const ComapanyInsurance = () => {

    const [formData, setFormData] = useState({
        carMake: '',
        modelYear: '',
        vehicleType: 'GCC',
        fullName: '',
        businessActivity: '',
        emiratesId: '',
        pointContactName: '',
        pointContactMail: '',
        phoneNumber: '+971',
        getUpdates: true,
        receivePromotions: false
      });
    
      const handleInputChange = (field, value) => {
        setFormData(prev => ({
          ...prev,
          [field]: value
        }));
      };
    

  return (
    <div>
      <Navbar />
    <div className="min-h-screen bg-gray-50">
    {/* Header */}
    {/* <div className="bg-white border-b border-gray-200 px-4 py-3 md:px-6 md:py-4">
      <div className="flex items-center">
        <ChevronLeft className="w-5 h-5 text-gray-600 mr-3" />
        <h1 className="text-lg font-medium text-gray-800">
          Get Your Car Insurance in Under Company Name
        </h1>
      </div>
    </div> */}

    {/* Form Container */}
    <div className="px-4 py-6 md:px-6 md:py-8 max-w-6xl mx-auto">

           {/* Header */}
    <div className="bg-white py-3 md:py-8">
      <div className="flex items-center">
        <ChevronLeft className="w-5 h-5 text-gray-600 mr-3" />
        <h1 className="text-lg font-medium text-gray-800">
          Get Your Car Insurance in Under Company Name
        </h1>
      </div>
    </div>
      
      {/* Desktop Layout (md and up) */}
      <div className="hidden md:block">
        {/* <div className="bg-white rounded-lg shadow-sm p-6"> */}
          
          {/* Car Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What Car Do you Drive ?
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your Make, Model & Trim"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.carMake}
                  onChange={(e) => handleInputChange('carMake', e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Model Year
              </label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                value={formData.modelYear}
                onChange={(e) => handleInputChange('modelYear', e.target.value)}
              >
                <option value="">Select a Year Model Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>

            <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Please Confirm Your Vehicle Specification
  </label>
  <div className="flex space-x-4">
    <label className="flex items-center cursor-pointer">
      <input
        type="radio"
        name="vehicleType"
        value="GCC"
        checked={formData.vehicleType === 'GCC'}
        onChange={(e) => handleInputChange('vehicleType', e.target.value)}
        className="w-4 h-4 accent-blue-600"
      />
      <span className="ml-2 text-sm text-gray-700">GCC</span>
    </label>
    <label className="flex items-center cursor-pointer">
      <input
        type="radio"
        name="vehicleType"
        value="Non - GCC"
        checked={formData.vehicleType === 'Non - GCC'}
        onChange={(e) => handleInputChange('vehicleType', e.target.value)}
        className="w-4 h-4 accent-blue-600"
      />
      <span className="ml-2 text-sm text-gray-700">Non - GCC</span>
    </label>
  </div>
</div>

            </div>

          {/* Personal Details Section */}
          <div className=" pt-8">
            <h2 className="text-lg font-medium text-gray-800 mb-6">Tell Us About Your Self</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name As per License
                </label>
                <input
                  type="text"
                  placeholder="Enter your Name As per License"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Activity
                </label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  value={formData.businessActivity}
                  onChange={(e) => handleInputChange('businessActivity', e.target.value)}
                >
                  <option value="">Please Choose Category Which describe Your Business</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="retail">Retail</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">Please Choose Category Which describe Your Business</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Emirates ID Registration
                </label>
                <input
                  type="text"
                  placeholder="Enter ID Your Emirates ID Registration"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.emiratesId}
                  onChange={(e) => handleInputChange('emiratesId', e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Point Contact Name
                </label>
                <input
                  type="text"
                  placeholder="Point Contact Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.pointContactName}
                  onChange={(e) => handleInputChange('pointContactName', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Point Contact Mail
                </label>
                <input
                  type="email"
                  placeholder="Point Contact Mail"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.pointContactMail}
                  onChange={(e) => handleInputChange('pointContactMail', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+971"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Checkboxes and Button */}
          <div className=" pt-6 mt-8">
            <div className="space-y-3 mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.getUpdates}
                  onChange={(e) => handleInputChange('getUpdates', e.target.checked)}
                  className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <span className="ml-3 text-sm text-gray-700">Get Instant Updates With Insurance World</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.receivePromotions}
                  onChange={(e) => handleInputChange('receivePromotions', e.target.checked)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-3 text-sm text-gray-700">I Want to Receive Promotions and offers from Insurance World</span>
              </label>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium flex items-center transition-colors">
              View Insurance
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        {/* </div> */}
      </div>

      {/* Mobile Layout (below md) */}
      <div className="md:hidden space-y-6">
        
        {/* Car Details */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What Car Do you Drive ?
              </label>
              <input
                type="text"
                placeholder="Enter your Make, Model & Trim"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.carMake}
                onChange={(e) => handleInputChange('carMake', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Model Year
              </label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                value={formData.modelYear}
                onChange={(e) => handleInputChange('modelYear', e.target.value)}
              >
                <option value="">Select a Year Model Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Please Confirm Your Vehicle Specification
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="vehicleType"
                    value="GCC"
                    checked={formData.vehicleType === 'GCC'}
                    onChange={(e) => handleInputChange('vehicleType', e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">GCC</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="vehicleType"
                    value="Non - GCC"
                    checked={formData.vehicleType === 'Non - GCC'}
                    onChange={(e) => handleInputChange('vehicleType', e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">Non - GCC</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Details */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Tell Us About Your Self</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name As per License
              </label>
              <input
                type="text"
                placeholder="Enter your Name As per License"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Activity
              </label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                value={formData.businessActivity}
                onChange={(e) => handleInputChange('businessActivity', e.target.value)}
              >
                <option value="">Please Choose Category Which describe Your Business</option>
                <option value="technology">Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="retail">Retail</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Please Choose Category Which describe Your Business</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Emirates ID Registration
              </label>
              <input
                type="text"
                placeholder="Enter ID Your Emirates ID Registration"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.emiratesId}
                onChange={(e) => handleInputChange('emiratesId', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Point Contact Name
              </label>
              <input
                type="text"
                placeholder="Point Contact Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.pointContactName}
                onChange={(e) => handleInputChange('pointContactName', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Point Contact Mail
              </label>
              <input
                type="email"
                placeholder="Point Contact Mail"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.pointContactMail}
                onChange={(e) => handleInputChange('pointContactMail', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Contact Number
              </label>
              <input
                type="tel"
                placeholder="+971"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Checkboxes and Button */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="space-y-3 mb-6">
            <label className="flex items-start">
              <input
                type="checkbox"
                checked={formData.getUpdates}
                onChange={(e) => handleInputChange('getUpdates', e.target.checked)}
                className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-0.5"
              />
              <span className="ml-3 text-sm text-gray-700">Get Instant Updates With Insurance World</span>
            </label>
            
            <label className="flex items-start">
              <input
                type="checkbox"
                checked={formData.receivePromotions}
                onChange={(e) => handleInputChange('receivePromotions', e.target.checked)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-0.5"
              />
              <span className="ml-3 text-sm text-gray-700">I Want to Receive Promotions and offers from Insurance World</span>
            </label>
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium flex items-center justify-center transition-colors">
            View Insurance
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default ComapanyInsurance