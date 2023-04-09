import React from 'react'
import {logo} from '../data'
import {Link} from 'react-router-dom'

export default function Header(){

    return(
            <div>
            <header className='all'>
                <div id='logo'>
              <a href="/"> <img src={logo} alt="logo-bg" /> </a> 
              </div>
              <div id='Links'>
                <Link to='/about' id='btn1'>About us</Link>
                <Link to='/team' id='btn2'>Team</Link>
                <Link to='/news' id='btn3'>News</Link>
                <Link to='/research' id='btn4'>Research</Link>
                <Link to='/sustainability' id='btn5'>Sustainability</Link>
                </div>
                <div id='ireLink'>
                  <Link to='/explore' id='btn6'>5ire Explore</Link>
                </div>
            </header>
    
            </div>
        
    
    )
}

