import React from 'react'
import {logo} from '../data'
import {Link} from 'react-router-dom'

export default function Header(){

    return(
            <>
            <header className='all'>
              <div id='logo'>
                <a href="/"> <img src={logo} alt="logo-bg" /> </a> 
              </div>
              <div  className='flex flex-row justify-center items-center'>
                <Link to='/about' id='btn1'>About us</Link>
                <Link to='/team' id='btn2'>Team</Link>
                <Link to='/thunder' id='btn3'>Thunder</Link>
                <Link to='/sustainability' id='btn5'>Sustainability</Link>
                <Link to='/build' id='btn6'>Build</Link>
                </div>
                <div>
                  <Link to='/sustainability' className='bg-blue-500 rounded-md p-2 font-bold text-white' id='btn6'> Sustainability</Link>
                </div>
            </header>
    
            </>
        
    
    )
}

