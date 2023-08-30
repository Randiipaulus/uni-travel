import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Price from '../components/Price'

const Pricing = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='PRICING' text='Choose your trip.'/>
        <Price />
        <Footer />
    </div>
  )
}

export default Pricing