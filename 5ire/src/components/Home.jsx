import React from "react";
import hero from '../assets/hom-hero.png'
import data from '../data'
import feature from '../assets/feature-img.png'
import darkFeat from '../assets/dark-fea.png'
import flowGroup from '../assets/flow-group.png'
import testNet from '../assets/testnet.png'
import techOne from '../assets/tech1.png'
import techTwo from '../assets/tech2.png'

export default function Home(props){
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

            {/* Featured Box */}

            <div className="bg-blue-300 rounded-md  p-14  mx-16 my-20 all">
                <h1 className="font-bold text-lg">Our ultimate mission is to make it easy for businesses, governments, entrepreneurs, and institutions to incentivize sustainability. By aligning economic growth with global sustainability, we want to make it easy to be ‘good’.</h1>
                <div className="flex justify-end items-end mb-[-130px]">
                    <img className='right w-[150px] z-10' src={feature} alt='feature' />
                </div>
                <div className="flex flex-row mt-20  gap-10">
                    {data.map(item => (
                        <div className="bg-blue-400 p-5 rounded-md">
                            <h2 className='text-white text-lg font-bold text-center'>{item.title}</h2>
                            <p className="font-semibold text-md">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center mx-44 gap-10 all">
                <div className="w-[550px]">
                    <h2 className="text-pink-500 font-bold text-xl my-2">We’re a sustainability driven blockchain with reputation-based mechanisms.</h2>
                    <h3 className="font-bold text-base my-2">In the near future, we aim to become an ecosystem focusing on positive impact.
                        We also aim on making blockchain sustainable & accessible for
                    </h3>
                </div>

                <div>
                    <img className=" w-64 mt-[-10px]" src={darkFeat} alt='feat-dark' />
                </div>
            </div>

            <div className="flex justify-center items-center my-20">
                <img className=' w-[750px]' src={flowGroup} alt='group-flow' />
            </div>

            {/* Break the test net  */}

            <div className="flex flex-col items-center justify-center p-20 testnet gap-5 all">
                <h1 className="text-3xl font-bold">
                #BreakTheTestnet
                </h1>

                <p className="font-base font-semibold">
                Join Us in Making 5ireChain the Strongest it Can Be.
                </p>

                <button className="bg-blue-600 text-white p-2 rounded-md font-bold">
                Explore now
                </button>

                <img src={testNet} alt='test-net-img' />
            </div>

            {/* Technology Partner  */}

            <div className="all flex flex-col gap-5 justify-center items-center my-20">
                <h1 className='text-4xl font-bold'>
                Technology Partners
                </h1>
                <section className="flex gap-10">
                    <img className='w-[200px]' src={techTwo} alt='tech-2' />
                    <img className='w-[200px]' src={techOne} alt='tech-1' />
                </section>
            </div>
        
        </>
    )
}