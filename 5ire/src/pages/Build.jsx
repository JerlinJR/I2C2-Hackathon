import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import banner1 from '../assets/hom-hero.png'
import banner2 from '../assets/banner.png'

export default function Build(){
    return(
        <>
        <Header />

        <section className='m-48 all'>
                <h1 className='text-pink-500 font-bold text-5xl my-2 text-center'>#BUIDLTOEARN</h1>
        </section>

        <section className="bg-nblue p-20 flex justify-center items-center">
                
                <div className="w-1/2 m-10">
                    <p className='font-semibold  mb-7 '>5ire is delighted to announce that its Testnet :‍Thunder: Beta is Now Live. ‍The Testnet paves a smooth path for realizing a fully functional and sustainable ecosystem. User experience and product efficiency are the top priorities for 5ireChain. The Testnet provides the opportunity to assess these factors.</p>
                    <button className="text-white font-bold bg-blue-600 p-2 rounded-md">BuidlToEarn</button>
                </div>

                <div>
                    <iframe className="rounded-md" title="vimeo-player" src="https://player.vimeo.com/video/798113409?h=a4d9cb7bfc" width="640" height="360" frameborder="0"    allowfullscreen></iframe>
                </div>
        </section>

        <section className='flex justify-center items-center gap-x-20 my-20'>
            <div className="w-1/2">
                <h2 className="text-pink-500 font-bold text-2xl my-5">What's in it for you ?</h2>
                <ul>
                    <li>
                        ⚫️ Top 10 dApps to receive an incentive after evaluation.
                    </li><br />

                    <li>
                        ⚫️ An opportunity to earn rewards through our referral program and grants scheme.
                    </li><br />

                    <li>
                        ⚫️ An incentivization scheme for dApps focused on sustainable development.
                    </li><br />
                    <li>
                        ⚫️ Reduced gas fees for early adopters and the first 500 builders to receive a share of block rewards.
                    </li>
                </ul>
            </div>
            <div>
                <img className="w-96" src={banner1} alt='banner1' />
            </div>
        </section>

        <section className='flex justify-center items-center gap-x-20 my-20'>
            <div className="w-1/2">
                <h2 className="text-pink-500 font-bold text-2xl my-5">As a 5ire developer, you’ll have access to:</h2>
                <ul>
                    <li>
                        ⚫️ A dedicated support team
                    </li><br />

                    <li>
                        ⚫️ Investors for easier fundraising
                    </li><br />

                    <li>
                        ⚫️ A yearly private event where you can network with other developers and industry experts.
                    </li><br />
                    <li>
                        ⚫️ To participate in the #BuildToEarn campaign, developers must align their token rewards with the 5ire tokenomics team and feature-based rewards with our tech team.
                    </li>
                </ul>
            </div>
            <div>
                <img className="w-96" src={banner2} alt='banner1' />
            </div>
        </section>

        <Footer />

        </>
    )
}