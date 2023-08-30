import React from 'react'
import './LaunchStyle.css'
import Rocket from '../assets/rocket.mp4'

const Launch = () => {
  return (
    <div className='box2'>
        <video autoPlay loop muted className='video2'>
            <source src={Rocket} type='video/mp4' />
        </video>
            <div className='ads'>
                <p className='p1'>- Make your Dreams True -</p>
                <p className='p2'>There is More to Discover </p>
            </div>
    </div>
  )
}

export default Launch