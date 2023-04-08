import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { roadImg, road } from "../data";

export default function Road(){
    return(
        <>
            <Header />

            <section className='m-48 all'>
                <h1 className='text-pink-500 font-bold text-5xl my-2 text-center'>Roadmap - Mainnet 2023</h1>
            </section>

            <section className='bg-nblue p-20 flex justify-center items-center'>
                <img className='w-[850px]' src={roadImg} alt='roadmap' />
            </section>

            <section className="mx-60 my-20">
                {road.map( item => (
                    <ul className="my-5">
                        <li className="my-5"> ⚫️ {item.content}</li>
                        <hr />
                    </ul>
                ))}
            </section>
            

            <Footer />
        
        </>
    )
}