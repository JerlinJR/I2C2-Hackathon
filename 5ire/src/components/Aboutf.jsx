import React from 'react'
import {logo} from '../data'

export default function Aboutf(){
    return(
        <>
            <img src={logo} alt='logo' className=' mt-24 mb-[-50px] mx-40 w-44' />
            <fieldset className=' border-solid border-2 border-pink-600 all mb-24 mx-60 p-10 rounded-3xl'>
                <legend className='text-pink-600 font-bold text-4xl text-right'>About 5ire</legend>
                <p className='font-bold'>The 5ire ecosystem aims to bring a shift in the paradigm from a for-profit economy to a for-benefit economy. This is achieved by embedding sustainability and social impact deep inside the 5ireChain runtime logic and ensuring that activities aligned with the United Nations Sustainable Development Goals, either on-chain or in the real world, are highly incentivized.<br /> <br />

                    It is a fifth-generation layer-1 blockchain ecosystem designed with economic and environmental sustainability at its core and is one of India's fastest-growing unicorns, enabled by a community of people worldwide.</p>
            </fieldset>
        </>
    )
}