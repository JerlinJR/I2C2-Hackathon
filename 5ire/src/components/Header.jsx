import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(){

    return(
            <div>
            <header>
                <div id='logo'>
              <a href=""> <img src="src/assets/logo.png" alt="logo-bg" /> </a> 
              </div>
              <div id='Links'>
                <Link to='/about' id='btn1'>About us</Link>
                <Link to='/testnet' id='btn2'>Test net</Link>
                <Link to='/community' id='btn3'>Community</Link>
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

