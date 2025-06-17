import React from 'react'

export const SectionOne = () => {
  return (
   <header className='w-full px-32 py-4'>
    <section>
      {/* first */}
      <main className='w-full pl-12 bg-gradient-to-r from-[#034E99]/65 to-[#1F074F]/85 rounded-2xl'>
      <div className=' flex'>



      <div className='w-[55%] flex items-center  gap-5 p-4'>
          {/* logo */}
        <div>
          <h1 className='text-2xl font-bold'>
           logo
          </h1>
        </div>


      {/* navbar */}
        <div className='flex w-full rounded-full p-2'>
          <div className='w-full bg-white rounded-full flex justify-around items-center p-4'>
            <ul className='flex justify-around w-full text-[16px] text-black'>
              <li >Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
            </div>
        </div>
        </div>

        <div className='flex justify-around gap-6 w-[45%] bg-white py-8 px-4'>
           <button className='px-4 py-1 rounded-md bg-green-500 text-white text-[12px]'>Connect WhatsApp</button>
           <button className='px-4 py-1 rounded-md bg-blue-500 text-white text-[12px]'>Call Our Agent</button>
           <button className='px-4 py-1 rounded-md bg-blue-500 text-white text-[12px]'>Agent Log In</button>
           <button className='px-4 py-1 rounded-md text text-black text-[12px]'>Sign In</button>
        </div>

      
       

        </div>

        {/* second */}
        <div className='w-[60%] flex flex-col gap-10 pt-10'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-[40px] font-[400] leading-[45px] text-[#FFFFFF]'>
          Drive Safe. Stay Covered. <br /> 
          Get Car Insurance in <br />
           Minutes.
            </h1>
            <p className='text-[#FFFFFF] text-[16px] font-[400]'>
            Get an Insurance Now or Talk to our Experts Instantly.
            </p>
            </div>

            <div className='pb-10'>
              <button className='px-2 py-1 rounded-md bg-white text-black text-[12px] '>Get Insurance Now</button>
              <button className='px-2 py-1 rounded-md bg-white text-black text-[12px]'>-</button>
            </div>
        </div>
        <div className='w-[40%] flex justify-center bg-red-500 h-full'>
          <img src="../assets/images/Group.svg" alt="" />
        </div>
        </main>
      </section>
    </header>
  )
}

export default SectionOne