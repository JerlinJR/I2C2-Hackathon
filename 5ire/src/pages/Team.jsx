import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Aboutf from '../components/Aboutf'
import Advisor from '../components/Advisor'
import {team} from '../data'

export default function Team(){
    return(
        <>
            <Header />

            <section className='m-48 all'>
                <h1 className='text-pink-500 font-bold text-5xl my-2 text-center'>Meet The Team</h1>
            </section>

            <section className='bg-nblue p-20 px-44 all'> 

                <h2 className='font-bold text-5xl text-white text-center mb-10'> C-Levels </h2>

                <div className=' grid grid-cols-3 grid-rows-2 gap-5 justify-center item-center '>
                    {team.map(val => (
                        <div key={val.name} className='bg-test flex flex-col justify-center items-center p-5 rounded-md'>
                            <img className=" w-28" src={val.image} alt={val.name} />
                            <div className='flex justify-center items-center gap-3 my-3'>
                                <a href={val.telegram}>
                                    <img className='w-8' src={val.telegramLogo} alt='soc-icon' /> 
                                </a>
                                <a href={val.linkedin}> 
                                    <img className='w-8' src={val.linkedinlogo} alt='soc-icon' /> 
                                </a>
                            </div>
                            <h3 className='text-xl font-bold mb-2'>{val.name}</h3>
                            <p className='text-sm'>{val.role}</p>
                        </div>
                    ))}

                </div>

            </section>


            <Aboutf />
            <Advisor />
            <Footer />
        </>
    )
}