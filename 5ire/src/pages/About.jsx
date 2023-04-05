import React from 'react'
import Slider from "react-slick";
import heroImg from '../assets/about-hero.png'
import Header from '../components/Header'
import Advisor from '../components/Advisor'
import Footer from '../components/Footer'
import {about, companies} from '../data'

export default function About(){

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

    return(
        <>
            <Header />
            <div className='all flex flex-row justify-center items-center mx-36 gap-40 my-24'>
                <div>
                    <h1 className="text-pink-500 font-bold text-5xl my-2">About us</h1>
                    <p className='w-[550px] my-4'>Building a sustainable future through distributed ledger technology.<br /> 
                    The 5ire ecosystem aims to bring a shift in the paradigm from a for-profit economy to afor-benefit economy.
                    </p>
                    <button className='text-white font-bold  bg-sky-500 p-2 rounded-md'>Contact us</button>
                </div>

                <div>
                    <img src={heroImg} alt='about-hero' />
                </div>

            </div>
            <section className='flex flex-row justify-center items-center gap-7 bg-nblue px-10 pb-40 mt-40'>
                    
                {about.map(item => (
                    <div key={item.title} className='flex flex-col items-center justify-center  gap-20'>
                        <div className='text-xl font-bold bg-white rounded-md border-solid border-2 border-nblue p-3 px-10 mt-[-35px]'> 
                            {item.title}
                        </div>

                        <div>
                            {item.desc}
                        </div>
                    </div>
                ))}
                    
            </section>

           

            <section className='bg-gray text-white p-5'>

                <Slider {...settings}>
                    {companies.map(item =>(
                        <div key={item.title}>
                        <img  className='w-40' src={ "../src/assets/partners/"+item.iname}/>
                        </div>
                        ))
                    
                    }
                </Slider>
                

            </section>
            <Advisor />
            <Footer />
        </>
    )
}