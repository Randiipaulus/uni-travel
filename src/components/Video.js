import React from 'react'
import './VideoStyle.css'
import spaceVideo from '../assets/earth.mp4'
import {Link} from 'react-router-dom'

const Video = () => {

  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={spaceVideo} type='video/mp4' />
        </video>
            <div className='content'>
                <h1>Universe Travel</h1>
                <p>World's first civilian to travel in space</p>
            <div>
                <Link to='/training' className='btn'>Training</Link>
                <Link to='/launch' className='btn'>Launch</Link>
            </div>
        </div>
    </div> 
  )
}

export default Video 