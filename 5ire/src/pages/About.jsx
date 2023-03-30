import React from 'react'
import heroImg from '../assets/about-hero.png'
import Advisor from '../components/Advisor'
import Footer from '../components/Footer'

export default function About(){
    return(
        <>
            <div className='all flex flex-row justify-center items-center mx-36'>
                <div>
                    <h1 className="text-pink-500 font-bold text-5xl my-2">About us</h1>
                    <p className='w-96'>Building a sustainable future through distributed ledger technology.
                    The 5ire ecosystem aims to bring a shift in the paradigm from a for-profit economy to afor-benefit economy.
                    </p>
                    <button>Contact us</button>
                </div>

                <div>
                    <img src={heroImg} alt='about-hero' />
                </div>

            </div>
            <Advisor />
            <Footer />
        </>
    )
}