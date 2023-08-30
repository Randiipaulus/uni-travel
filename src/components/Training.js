import React from 'react'
import './TrainingStyle.css'
import {Link} from 'react-router-dom'
import man from '../assets/man.jpg'
import ship from '../assets/ship.jpg'

const Training = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <br />
            <p className='tips'>" Prepare physically, adapt to weightlessness with underwater simulations,
                 enhance mental resilience, grasp spacecraft operations, nurture teamwork,
                  refine scientific understanding, simulate spacecraft challenges, and equip
                   for medical emergencies. "</p>
            <br />
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack bottom'>
                    <img src={man} className='img' alt='' />
                </div>
                <div className='image-stack top'>
                    <img src={ship} className='img' alt='' />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Training