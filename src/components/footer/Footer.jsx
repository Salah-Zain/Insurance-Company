// import React from 'react';
// import { ArrowUp } from 'lucide-react';

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="bg-white py-16 px-6 relative">
//       <div className="max-w-7xl mx-auto">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
//           {/* Logo and Social Section */}
//           <div className="lg:col-span-1">
//             <div className="mb-8">
//               <div className="w-12 h-12 bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
//                 <span className="text-white font-bold text-xl">i</span>
//               </div>
//             </div>
//             <div className="flex flex-col space-y-4">
//               <a 
//                 href="#" 
//                 className="text-gray-700 hover:text-purple-600 transition-colors duration-200 text-base"
//               >
//                 Facebook
//               </a>
//               <a 
//                 href="#" 
//                 className="text-gray-700 hover:text-purple-600 transition-colors duration-200 text-base"
//               >
//                 Instagram
//               </a>
//             </div>
//           </div>

//           {/* Quick Links Section */}
//           <div className="lg:col-span-1">
//             <h3 className="text-gray-900 font-semibold text-lg mb-6">Quick links</h3>
//             <nav className="flex flex-col space-y-4">
//               <a 
//                 href="#" 
//                 className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
//               >
//                 Home
//               </a>
//               <a 
//                 href="#" 
//                 className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
//               >
//                 Get Insurance
//               </a>
//               <a 
//                 href="#" 
//                 className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
//               >
//                 About Us
//               </a>
//               <a 
//                 href="#" 
//                 className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
//               >
//                 Contact Us
//               </a>
//             </nav>
//           </div>

//           {/* Services Section */}
//           <div className="lg:col-span-1">
//             <h3 className="text-gray-900 font-semibold text-lg mb-6">Services</h3>
//             <nav className="flex flex-col space-y-4">
//               <a 
//                 href="#" 
//                 className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
//               >
//                 Vehicle Insurance
//               </a>
//             </nav>
//           </div>

//           {/* Connect Us Section */}
//           <div className="lg:col-span-1">
//             <h3 className="text-gray-900 font-semibold text-lg mb-6">Connect Us</h3>
//             <nav className="flex flex-col space-y-4">
//               <a 
//                 href="#" 
//                 className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
//               >
//                 Facebook
//               </a>
//               <a 
//                 href="#" 
//                 className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
//               >
//                 Instagram
//               </a>
//             </nav>
//           </div>

//           {/* To Top Button Column */}
//           <div className="lg:col-span-1 flex justify-end">
//             <div className="flex flex-col items-center">
//               <button
//                 onClick={scrollToTop}
//                 className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 mb-2"
//                 aria-label="Scroll to top"
//               >
//                 <ArrowUp size={24} strokeWidth={2} />
//               </button>
//               <span className="text-gray-500 text-sm font-medium">To Top</span>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Copyright Section */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-16 pt-8 border-t border-gray-200">
//           <div className="text-gray-600 text-sm mb-4 lg:mb-0">
//             © 2025 Insurance World . All right reserved
//           </div>
//           <div className="flex space-x-8">
//             <a 
//               href="#" 
//               className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium"
//             >
//               Cookie Policy
//             </a>
//             <a 
//               href="#" 
//               className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium"
//             >
//               AGBs
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white py-12 px-6 relative border-t border-gray-200">
      <div className="max-w-full flex flex-col items-center justify-center">
        {/* Mobile Layout - Below 768px */}
        <div className="md:hidden w-full max-w-[1100px]">
          {/* Logo and To Top Button Row */}
          <div className=" flex items-start justify-between mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">i</span>
            </div>
            <div className="flex flex-col items-center">
              <button
                onClick={scrollToTop}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:shadow-xl mb-1"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} strokeWidth={2} />
              </button>
              <span className="text-gray-400 text-xs">To Top</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mb-8">
            <a 
              href="#" 
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 text-base font-medium"
            >
              Facebook
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 text-base font-medium"
            >
              Instagram
            </a>
          </div>

          {/* Content Sections in 2x2 Grid */}
          <div className="flex justify-between gap-8 mb-12 bg-amber-300 ">
            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 font-semibold text-lg mb-4">Quick links</h3>
              <nav className="flex flex-col space-y-3">
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
                >
                  Home
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
                >
                  Get Insurance
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
                >
                  About Us
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
                >
                  Claims
                </a>
              </nav>
            </div>

            <div className='flex flex-col bg-amber-300 gap-2'>  
            {/* Services */}
            <div>
              <h3 className="text-gray-900 font-semibold text-lg mb-4">Services</h3>
              <nav className="flex flex-col space-y-3">
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
                >
                  Vehicle Insurance
                </a>
              </nav>
            </div>

            {/* Connect Us - Spans both columns */}
            <div className="col-span-2">
              <h3 className="text-gray-900 font-semibold text-lg mb-4">Connect Us</h3>
              <nav className="flex flex-col space-y-3">
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
                >
                  Facebook
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
                >
                  Instagram
                </a>
              </nav>
            </div>
          </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <div className="text-gray-600 text-sm">
              © 2025 Insurance World . All right reserved
            </div>
          </div>
        </div>

        {/* Desktop Layout - Above 768px */}
        <div className="hidden md:flex md:flex-col md:items-center md:justify-center w-full">
          <div className="md:max-w-[1100px] md:w-full grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-8">
            {/* Logo and Social Section */}
            <div className="md:col-span-1">
              <div className="mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">i</span>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200 text-base"
                >
                  Facebook
                </a>
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200 text-base"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="md:col-span-1">
              <h3 className="text-gray-900 font-semibold text-lg mb-6">Quick links</h3>
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
                >
                  Home
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
                >
                  Get Insurance
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
                >
                  About Us
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
                >
                  Contact Us
                </a>
              </nav>
            </div>

            {/* Services Section */}
            <div className="md:col-span-1">
              <h3 className="text-gray-900 font-semibold text-lg mb-6">Services</h3>
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
                >
                  Vehicle Insurance
                </a>
              </nav>
            </div>

            {/* Connect Us Section */}
            <div className="md:col-span-1">
              <h3 className="text-gray-900 font-semibold text-lg mb-6">Connect Us</h3>
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
                >
                 Facebook
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-base"
                >
                  Instagram
                </a>
              </nav>
            </div>

            {/* To Top Button Column */}
            <div className="md:col-span-1 flex justify-end">
              <div className="flex flex-col items-center">
                <button
                  onClick={scrollToTop}
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 mb-2"
                  aria-label="Scroll to top"
                >
                  <ArrowUp size={24} strokeWidth={2} />
                </button>
                <span className="text-gray-500 text-sm font-medium">To Top</span>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Section */}
          <div className="md:max-w-[1100px] md:w-full pr-10 flex flex-col md:flex-row justify-between items-center md:items-center mt-16 pt-8 border-t border-gray-200">
            <div className=" text-gray-600  text-sm mb-4 md:mb-0">
              © 2025 Insurance World . All right reserved
            </div>
            <div className="flex space-x-8">
              <a 
                href="#" 
                className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium"
              >
                Cookie Policy
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium"
              >
                AGBs
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

