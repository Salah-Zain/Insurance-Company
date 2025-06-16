// 



import React from 'react'
import SectionTwo from './section2/SectionTwo'
import SectionThree from './section3/SectionThree'
import SectionFour from './section4/SectionFour'
import SectionFive from './section5/SectionFive'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

export const HomePage = () => {
  return (
    <>
    <Navbar />
    <SectionTwo />  
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <Footer />
    </>
  )
}

export default HomePage