import React from 'react'
import './PriceStyle.css'
import {Link} from 'react-router-dom'

const Price = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>1M</p>
                <p>- 3 Days -</p>
                <p>- Views / Food -</p>
                <p>- Featured -</p>
                <p>- Economic Ship -</p>
                <Link to='/contact' className='btn'>Book Now</Link>
            </div>
            <div className='card'>
                <h3>- Suite -</h3>
                <span className='bar'></span>
                <p className='btc'>5M</p>
                <p>- 6 Days -</p>
                <p>- Private Service -</p>
                <p>- Featured -</p>
                <p>- Vip Ship -</p>
                <Link to='/contact' className='btn'>Book Now</Link>
            </div>
            <div className='card'>
                <h3>- Executive -</h3>
                <span className='bar'></span>
                <p className='btc'>10M</p>
                <p>- 12 Days -</p>
                <p>- All Included -</p>
                <p>- Featured -</p>
                <p>- Private Ship -</p>
                <Link to='/contact' className='btn'>Book Now</Link>
            </div>
        </div>



    </div>
  )
}

export default Price