import React from "react";
import hero from '../assets/hom-hero.png'

export default function Home(){
    return(
        <>
            <div className="flex flex-row justify-center items-center all my-15">
                <div>
                    <h1 className="text-pink-500 font-bold text-5xl my-2">BLOCKCHAIN MEETS</h1>
                    <h1 className=" font-semibold text-7xl my-2">SUSTAINBILITY</h1>
                    <button className="bg-blue-500 text-white p-2 rounded-md font-bold my-2">Get Started</button>
                </div>
                    
                <div>
                    <img className='w-[500px] mt-44' src={hero} alt='hero-img' />
                </div>
            </div>

            <div className="bg-hero-pattern bg-contain bg-no-repeat p-16 all ">
                <h2 className='text-5xl font-bold mt-20 my-5 mx-10'>#BuildToEarn</h2>
                <p className="text-sm font-semibold mx-10">
                    Top 10 dApps to receive an incentive after evaluation.<br />
                    An opportunity to earn rewards through our referral program and grants scheme.<br />
                    An incentivization scheme for dApps focused on sustainable development.<br />
                    Reduced gas fees for early adopters and the first 500 builders to receive a share of block rewards.
                </p>
                <button className="bg-blue-500 text-white p-2 rounded-md font-bold my-5 mx-10">Learn More</button>
            </div>

            <div>
                <h1>Our ultimate mission is to make it easy for businesses, governments, entrepreneurs, and institutions to incentivize sustainability. By aligning economic growth with global sustainability, we want to make it easy to be ‘good’.</h1>
            </div>
        
        </>
    )
}