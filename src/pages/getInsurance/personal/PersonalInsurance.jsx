import React from 'react'
import { useState } from 'react';
import { ChevronLeft, Search, Info } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Papa from 'papaparse';
import Navbar from '../../../components/navbar/Navbar';


export const PersonalInsurance = () => {


const SERVICE_ID = 'service_kbe8zmw';
const TEMPLATE_ID = 'template_fwh05md';

emailjs.init('uPaTfEpZFYPBlRccn');

    const [formData, setFormData] = useState({
        carDrive: '',
        modelYear: '',
        vehicleType: 'GCC',
        nameAsPerLicense: '',
        nationality: '',
        birthDate: { day: '', month: '', year: '' },
        mailAddress: '',
        phoneNumber: '+91',
        emirateOfRegistration: '',
        uaeHeldLicenseFor: '',
        getUpdates: true,
        receivePromotions: false
      });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleInputChange = (field, value) => {
        setFormData(prev => ({
          ...prev,
          [field]: value
        }));
        if (errors[field]) {
          setErrors(prevErrors => ({ ...prevErrors, [field]: null }));
        }
      };
    
    const handleBirthDateChange = (field, value) => {
        setFormData(prev => ({
          ...prev,
          birthDate: {
            ...prev.birthDate,
            [field]: value
          }
        }));
        if (errors.birthDate) {
          setErrors(prevErrors => ({ ...prevErrors, birthDate: null }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        const requiredFields = ['carDrive', 'modelYear', 'nameAsPerLicense', 'nationality', 'mailAddress', 'phoneNumber', 'emirateOfRegistration', 'uaeHeldLicenseFor'];
        
        requiredFields.forEach(field => {
            if (!formData[field]) {
                newErrors[field] = 'This field is required.';
            }
        });

        if (!formData.birthDate.day || !formData.birthDate.month || !formData.birthDate.year) {
            newErrors.birthDate = 'Please complete your date of birth.';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.mailAddress && !emailRegex.test(formData.mailAddress)) {
            newErrors.mailAddress = 'Please enter a valid email address.';
        }
        
        // const phoneRegex = /^\+971\d{9}$/;
        if (!formData.phoneNumber) {
            newErrors.phoneNumber = 'Phone number must required';
        }


        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    // const handleSubmit = async () => {
    //     if (!validateForm()) {
    //         setIsSubmitting(false); // Ensure isSubmitting is reset if validation fails early
    //         return;
    //     }

    //     setIsSubmitting(true);

    //     // Format the data for email
    //     const emailData = {
    //         ...formData,
    //         birthDate: `${formData.birthDate.day}/${formData.birthDate.month}/${formData.birthDate.year}`,
    //         submittedAt: new Date().toISOString()
    //     };

    //     // Convert JSON to CSV
    //     // Papaparse expects an array of objects or an array of arrays for unparse.
    //     // We'll convert our single object into an array containing that object.
    //     const csvData = Papa.unparse([emailData]);
    //     const base64Csv = btoa(csvData); // btoa is a built-in function to create base64 encoded data

    //     console.log('Form data to be sent (emailData):', emailData);
    //     console.log('CSV data:', csvData);
    //     console.log('Base64 CSV:', base64Csv);

    //     try {
    //         const templateParams = {
    //             to_email: 'sm912564@gmail.com',
    //             jsonData: JSON.stringify(emailData, null, 2), // Keep this if your email body uses it
    //             csv_attachment_data: base64Csv, // This is the base64 content
    //             csv_filename: 'insurance_submission.csv' // Filename for the attachment
    //         };
            
    //         const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
            
    //         alert('Insurance details submitted successfully!');
    //         console.log('Email sent successfully', response.status, response.text);
    //         setErrors({}); // Clear errors on successful submission
    //         // Optionally reset form
    //         // setFormData({ /* reset to initial state */ });
    //     } catch (error) {
    //         console.error('Failed to send email:', error);
    //         alert('Failed to submit insurance details. Please try again.');
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };

    const handleSubmit = async () => {
      if (!validateForm()) {
          return;  // Stop if validation fails
      }
  
      setIsSubmitting(true);
  
      // Format the data for email
      const emailData = {
          ...formData,
          birthDate: `${formData.birthDate.day}/${formData.birthDate.month}/${formData.birthDate.year}`,
          submittedAt: new Date().toISOString()
      };
  
      // Convert data to CSV
      const csvData = Papa.unparse([emailData]); // Make an array of objects for parsing
      const base64Csv = btoa(csvData);
  
      console.log('Form data to be sent (emailData):', emailData);
      console.log('CSV data:', csvData);
      console.log('Base64 CSV:', base64Csv);
  
      // Template parameters
      const templateParams = {
          to_email: 'sm912564@gmail.com', // Make sure this is set correctly
          jsonData: JSON.stringify(emailData, null, 2), // To include in the email body
          csv_attachment_data: base64Csv, // Base64 content
          csv_filename: 'insurance_submission.csv' // Filename for the CSV
      };
  
      try {
          const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
          
          if (response.status === 200) {
              alert('Insurance details submitted successfully!');
              console.log('Email sent successfully', response.status, response.text);
              setErrors({}); // Clear errors on successful submission
              // Optionally reset form here
              // setFormData({ /* reset to initial state */ });
          } else {
              console.error('Error sending email:', response);
              alert('Failed to send email. Please check your EmailJS configuration.');
          }
      } catch (error) {
          console.error('Failed to send email:', error);
          alert('Failed to submit insurance details. Please try again.');
      } finally {
          setIsSubmitting(false);
      }
  };
  

    return (
      <div>
        <Navbar />
        <div className="min-h-screen bg-gray-50">
            <div className="p-4 md:p-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="flex items-center space-x-3 mb-8 mt-4">
                        <ChevronLeft className="w-5 h-5 text-gray-600 cursor-pointer" />
                        <h1 className="text-lg md:text-xl font-medium text-gray-800">
                            Get Your Car Insurance in Under Personal Name
                        </h1>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:block">
                        <div className="bg-white rounded-lg shadow-sm p-8">
                            {/* Vehicle Information */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        What Car Do you Drive? *
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Enter your Make, Model & Trim"
                                            value={formData.carDrive}
                                            onChange={(e) => handleInputChange('carDrive', e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
                                        />
                                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                    </div>
                                    {errors.carDrive && <p className="text-red-500 text-xs mt-1">{errors.carDrive}</p>}
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Model Year *
                                    </label>
                                    <select
                                        value={formData.modelYear}
                                        onChange={(e) => handleInputChange('modelYear', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select Your Model Year</option>
                                        <option value="2025">2025</option>
                                        <option value="2024">2024</option>
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                    </select>
                                    {errors.modelYear && <p className="text-red-500 text-xs mt-1">{errors.modelYear}</p>}
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
                                                className="mr-2 text-blue-600"
                                            />
                                            GCC
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="vehicleType"
                                                value="Non-GCC"
                                                checked={formData.vehicleType === 'Non-GCC'}
                                                onChange={(e) => handleInputChange('vehicleType', e.target.value)}
                                                className="mr-2 text-blue-600"
                                            />
                                            Non - GCC
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Personal Information */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-gray-800 mb-6">Tell Us About Yourself</h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Name As per License *
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your Name As per License"
                                            value={formData.nameAsPerLicense}
                                            onChange={(e) => handleInputChange('nameAsPerLicense', e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        {errors.nameAsPerLicense && <p className="text-red-500 text-xs mt-1">{errors.nameAsPerLicense}</p>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Nationality *
                                        </label>
                                        <select
                                            value={formData.nationality}
                                            onChange={(e) => handleInputChange('nationality', e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Select Your Nationality</option>
                                            <option value="UAE">UAE</option>
                                            <option value="Indian">Indian</option>
                                            <option value="Pakistani">Pakistani</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <p className="text-xs text-gray-500 mt-1">
                                            If you hold multiple passports, enter the nationality as per your UAE Driving License
                                        </p>
                                        {errors.nationality && <p className="text-red-500 text-xs mt-1">{errors.nationality}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Enter Date of Birth *
                                        </label>
                                        <div className="grid grid-cols-3 gap-2">
                                            <select
                                                value={formData.birthDate.day}
                                                onChange={(e) => handleBirthDateChange('day', e.target.value)}
                                                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            >
                                                <option value="">Day</option>
                                                {[...Array(31)].map((_, i) => (
                                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                                ))}
                                            </select>
                                            <select
                                                value={formData.birthDate.month}
                                                onChange={(e) => handleBirthDateChange('month', e.target.value)}
                                                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            >
                                                <option value="">Month</option>
                                                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                                                    <option key={i} value={i + 1}>{month}</option>
                                                ))}
                                            </select>
                                            <select
                                                value={formData.birthDate.year}
                                                onChange={(e) => handleBirthDateChange('year', e.target.value)}
                                                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            >
                                                <option value="">Year</option>
                                                {[...Array(60)].map((_, i) => (
                                                    <option key={i} value={2024 - i}>{2024 - i}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Please enter your Date of Birth as per UAE Driving License
                                        </p>
                                        {errors.birthDate && <p className="text-red-500 text-xs mt-1">{errors.birthDate}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Mail Address *
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Enter Your Mail Address"
                                            value={formData.mailAddress}
                                            onChange={(e) => handleInputChange('mailAddress', e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        {errors.mailAddress && <p className="text-red-500 text-xs mt-1">{errors.mailAddress}</p>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.phoneNumber}
                                            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Emirate Of Registration *
                                        </label>
                                        <select
                                            value={formData.emirateOfRegistration}
                                            onChange={(e) => handleInputChange('emirateOfRegistration', e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Select Your Emirate of Registration</option>
                                            <option value="Dubai">Dubai</option>
                                            <option value="Abu Dhabi">Abu Dhabi</option>
                                            <option value="Sharjah">Sharjah</option>
                                            <option value="Ajman">Ajman</option>
                                            <option value="Fujairah">Fujairah</option>
                                            <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                                            <option value="Umm Al Quwain">Umm Al Quwain</option>
                                        </select>
                                        {errors.emirateOfRegistration && <p className="text-red-500 text-xs mt-1">{errors.emirateOfRegistration}</p>}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        UAE Held License For *
                                    </label>
                                    <select
                                        value={formData.uaeHeldLicenseFor}
                                        onChange={(e) => handleInputChange('uaeHeldLicenseFor', e.target.value)}
                                        className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select the license period</option>
                                        <option value="Less than 1 year">Less than 1 year</option>
                                        <option value="1-2 years">1-2 years</option>
                                        <option value="2-5 years">2-5 years</option>
                                        <option value="More than 5 years">More than 5 years</option>
                                    </select>
                                    <p className="text-xs text-gray-500 mt-1">
                                        How long have you held your UAE License?
                                    </p>
                                    {errors.uaeHeldLicenseFor && <p className="text-red-500 text-xs mt-1">{errors.uaeHeldLicenseFor}</p>}
                                </div>

                                <div className="space-y-3 mb-8">
                                    <label className="flex items-start space-x-3">
                                        <input
                                            type="checkbox"
                                            checked={formData.getUpdates}
                                            onChange={(e) => handleInputChange('getUpdates', e.target.checked)}
                                            className="mt-1 text-blue-600"
                                        />
                                        <div className="flex items-center space-x-2">
                                            <span className="text-sm text-gray-700">Get Instant Updates With Insurance World</span>
                                            <Info className="w-4 h-4 text-blue-500" />
                                        </div>
                                    </label>
                                    
                                    <label className="flex items-center space-x-3">
                                        <input
                                            type="checkbox"
                                            checked={formData.receivePromotions}
                                            onChange={(e) => handleInputChange('receivePromotions', e.target.checked)}
                                            className="text-blue-600"
                                        />
                                        <span className="text-sm text-gray-700">I Want to Receive Promotions and offers from Insurance World</span>
                                    </label>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className={`${
                                        isSubmitting 
                                            ? 'bg-gray-400 cursor-not-allowed' 
                                            : 'bg-indigo-600 hover:bg-indigo-700'
                                    } text-white px-8 py-3 rounded-lg transition-colors font-medium flex items-center space-x-2`}
                                >
                                    <span>{isSubmitting ? 'Submitting...' : 'View Insurance'}</span>
                                    {!isSubmitting && <span>→</span>}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden space-y-6">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        What Car Do you Drive? *
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Enter your Make, Model & Trim"
                                            value={formData.carDrive}
                                            onChange={(e) => handleInputChange('carDrive', e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
                                        />
                                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                    </div>
                                    {errors.carDrive && <p className="text-red-500 text-xs mt-1">{errors.carDrive}</p>}
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Model Year *
                                    </label>
                                    <select
                                        value={formData.modelYear}
                                        onChange={(e) => handleInputChange('modelYear', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select Your Model Year</option>
                                        <option value="2025">2025</option>
                                        <option value="2024">2024</option>
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                    </select>
                                    {errors.modelYear && <p className="text-red-500 text-xs mt-1">{errors.modelYear}</p>}
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
                                                className="mr-2 text-blue-600"
                                            />
                                            GCC
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="vehicleType"
                                                value="Non-GCC"
                                                checked={formData.vehicleType === 'Non-GCC'}
                                                onChange={(e) => handleInputChange('vehicleType', e.target.value)}
                                                className="mr-2 text-blue-600"
                                            />
                                            Non - GCC
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-6">Tell Us About Yourself</h2>
                            
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name As per License *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Name As per License"
                                        value={formData.nameAsPerLicense}
                                        onChange={(e) => handleInputChange('nameAsPerLicense', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    {errors.nameAsPerLicense && <p className="text-red-500 text-xs mt-1">{errors.nameAsPerLicense}</p>}
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Nationality *
                                    </label>
                                    <select
                                        value={formData.nationality}
                                        onChange={(e) => handleInputChange('nationality', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select Your Nationality</option>
                                        <option value="UAE">UAE</option>
                                        <option value="Indian">Indian</option>
                                        <option value="Pakistani">Pakistani</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <p className="text-xs text-gray-500 mt-1">
                                        If you hold multiple passports, enter the nationality as per your UAE Driving License
                                    </p>
                                    {errors.nationality && <p className="text-red-500 text-xs mt-1">{errors.nationality}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Enter Date of Birth *
                                    </label>
                                    <div className="grid grid-cols-3 gap-2">
                                        <select
                                            value={formData.birthDate.day}
                                            onChange={(e) => handleBirthDateChange('day', e.target.value)}
                                            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Day</option>
                                            {[...Array(31)].map((_, i) => (
                                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                                            ))}
                                        </select>
                                        <select
                                            value={formData.birthDate.month}
                                            onChange={(e) => handleBirthDateChange('month', e.target.value)}
                                            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Month</option>
                                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                                                <option key={i} value={i + 1}>{month}</option>
                                            ))}
                                        </select>
                                        <select
                                            value={formData.birthDate.year}
                                            onChange={(e) => handleBirthDateChange('year', e.target.value)}
                                            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Year</option>
                                            {[...Array(60)].map((_, i) => (
                                                <option key={i} value={2024 - i}>{2024 - i}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Please enter your Date of Birth as per UAE Driving License
                                    </p>
                                    {errors.birthDate && <p className="text-red-500 text-xs mt-1">{errors.birthDate}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Mail Address *
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter Your Mail Address"
                                        value={formData.mailAddress}
                                        onChange={(e) => handleInputChange('mailAddress', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    {errors.mailAddress && <p className="text-red-500 text-xs mt-1">{errors.mailAddress}</p>}
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.phoneNumber}
                                        onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Emirate Of Registration *
                                    </label>
                                    <select
                                        value={formData.emirateOfRegistration}
                                        onChange={(e) => handleInputChange('emirateOfRegistration', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select Your Emirate of Registration</option>
                                        <option value="Dubai">Dubai</option>
                                        <option value="Abu Dhabi">Abu Dhabi</option>
                                        <option value="Sharjah">Sharjah</option>
                                        <option value="Ajman">Ajman</option>
                                        <option value="Fujairah">Fujairah</option>
                                        <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                                        <option value="Umm Al Quwain">Umm Al Quwain</option>
                                    </select>
                                    {errors.emirateOfRegistration && <p className="text-red-500 text-xs mt-1">{errors.emirateOfRegistration}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        UAE Held License For *
                                    </label>
                                    <select
                                        value={formData.uaeHeldLicenseFor}
                                        onChange={(e) => handleInputChange('uaeHeldLicenseFor', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select the license period</option>
                                        <option value="Less than 1 year">Less than 1 year</option>
                                        <option value="1-2 years">1-2 years</option>
                                        <option value="2-5 years">2-5 years</option>
                                        <option value="More than 5 years">More than 5 years</option>
                                    </select>
                                    <p className="text-xs text-gray-500 mt-1">
                                        How long have you held your UAE License?
                                    </p>
                                    {errors.uaeHeldLicenseFor && <p className="text-red-500 text-xs mt-1">{errors.uaeHeldLicenseFor}</p>}
                                </div>

                                <div className="space-y-3">
                                    <label className="flex items-start space-x-3">
                                        <input
                                            type="checkbox"
                                            checked={formData.getUpdates}
                                            onChange={(e) => handleInputChange('getUpdates', e.target.checked)}
                                            className="mt-1 text-blue-600"
                                        />
                                        <div className="flex items-center space-x-2">
                                            <span className="text-sm text-gray-700">Get Instant Updates With Insurance World</span>
                                            <Info className="w-4 h-4 text-blue-500" />
                                        </div>
                                    </label>
                                    
                                    <label className="flex items-center space-x-3">
                                        <input
                                            type="checkbox"
                                            checked={formData.receivePromotions}
                                            onChange={(e) => handleInputChange('receivePromotions', e.target.checked)}
                                            className="text-blue-600"
                                        />
                                        <span className="text-sm text-gray-700">I Want to Receive Promotions and offers from Insurance World</span>
                                    </label>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className={`w-full ${
                                        isSubmitting 
                                            ? 'bg-gray-400 cursor-not-allowed' 
                                            : 'bg-indigo-600 hover:bg-indigo-700'
                                    } text-white py-3 rounded-lg transition-colors font-medium flex items-center justify-center space-x-2`}
                                >
                                    <span>{isSubmitting ? 'Submitting...' : 'View Insurance'}</span>
                                    {!isSubmitting && <span>→</span>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PersonalInsurance