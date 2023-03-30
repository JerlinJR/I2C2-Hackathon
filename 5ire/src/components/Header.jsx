import React from 'react'

export default function Header(){

    return(
            <div>
            <header>
                <div id='logo'>
              <a href=""> <img src="src/assets/logo.png" alt="logo-bg" /> </a> 
              </div>
              <div id='buttons'>
                <button id='btn1'> <a href=""><img src="src/assets/AboutUs.png" alt="aboutus" /></a></button>
                <button id='btn2'> <a href=""><img src="src/assets/1testnet.png" alt="testnet" /></a></button>
                <button id='btn3'> <a href=""><img src="src/assets/1community.png" alt="community" /></a></button>
                <button id='btn4'> <a href=""><img src="src/assets/1research.png" alt="research" /></a></button>
                <button id='btn5'> <a href=""><img src="src/assets/1validator.png" alt="" /></a></button>
                <button id='btn6'> <a href=""><img src="src/assets/sustainability.png" alt="" /></a></button>
                </div>
                <div id='irebutton'>
                <a href=""> <img src="src/assets/5ire Explorer-png.png" alt="5ire-Explorer-Logo"  /></a>
              </div>
            </header>
    
            </div>
        
    
    )
}

