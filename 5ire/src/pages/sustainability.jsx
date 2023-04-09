import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import hero from '../assets/sustainabilityHero.png'
import banner from '../assets/susBanner.png'

export default function Sustainability(){
    return(
        < div className='bg-nblue'>
            <Header />
            <section className='flex gap-x-10 justify-center items-center m-20 '>
                <div className=' w-1/2'>
                    <h1 className='font-bold text-3xl mb-10'>We want to play ourpart in building a sustainable future and positively impactingthe planet.</h1>
                    <p>
                        Blockchain has found use cases in fintech, voting, digital identity, health, and agriculture as it continues to evolve. The world can also exploit this nascent technology to enable a sustainable environment. 5ire is capitalizing on the potential of this technology to develop a blockchain solution that fosters sustainability.
                    </p>
                </div>

                <div>
                    <img src={hero} className=' w-72' alt='hero' />
                </div>
            </section>

            <section className='bg-yellow-300 flex justify-center items-center rounded-md mx-48 mt-40 mb-20 p-5 gap-x-10'>
                <div>
                    <img className='w-84' src={banner} alt='banner' />
                </div>

                <div className='w-1/2'>
                    <p>
                        Blockchain solutions have a vital role to play in each of the environmental challenges.5ire is already deploying real-world use cases to tackle these problems. Blockchain can provide solutions to many of the world’s pressing problems. 5ire is a blockchain ecosystem leading the pace in utilizing this technology to build a sustainable environment. Investors, governments, and sustainability advocates admire our holistic approach.
                    </p>
                </div>
            </section>

            <section className='flex flex-col text-center justify-center items-center mb-20'>
                <p className='w-96 my-5 text-lg'>
                    We consider our impact on people and the planet in everything we do. And wecontinue to ask ourselves how we can make our work an even greater force forgood in the world.
                </p>

                <h3 className='text-3xl'>With ❤️ to 🌍☘️🌲 5ire Team</h3>
            </section>

            <Footer />
        </div>
    )
}