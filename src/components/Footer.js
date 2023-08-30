import React from 'react'
import './FooterStyle.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => { 
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#fff', marginRigth: '2rem'}} />
                    <div>
                        <p>123 Celestial Av, Stellar City,</p>
                        <h4>Easton, PA</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: '#fff', marginRigth: '2rem'}}/> (555) 123-4567</h4>
                </div>
                <div className='gmail'>
                    <h4><FaMailBulk size={20} style={{color: '#fff', marginRigth: '2rem'}}/> info@unitravels.com</h4>
                </div>
            </div>
                <div className='right'>
                    <h4>About the Company</h4>
                    <p>" For a decade, Uni Travels pioneers space exploration, blending innovation 
                        and safety. A premier leader, our spacecraft fleet and expert team enable 
                        transformative journeys, unveiling the universe's splendor beyond Earth. "</p>
                        <br />
                    <div className='social'>
                        <FaFacebook size={30} style={{color: '#fff', marginRigth: '1rem'}}/>
                        <FaTwitter size={30} style={{color: '#fff', marginRigth: '1rem'}}/>
                        <FaLinkedin size={30} style={{color: '#fff', marginRigth: '1rem'}}/>
                    </div>

                </div>
        </div>
    </div>
  )
}

export default Footer