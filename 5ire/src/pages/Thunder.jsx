import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import testnetfeature from '../assets/testnetfeature.png'
import thunder1 from '../assets/thunder1.png'
import thunder2 from '../assets/thunder2.png'


export default function Thunder(){
    return(
        <>
            <Header />

            <section className='m-48 all mb-5'>
                <h1 className='text-pink-500 font-bold text-5xl my-2 text-center'>Thunder Beta</h1>
                <h2 className="text-black-500 font-bold text4xl text-center">5IRE TESTNET:LIVENOW</h2>
            </section>

            <section className="bg-nblue p-20 flex justify-center items-center">
                <div>
                <iframe className='rounded-md' title="vimeo-player" src="https://player.vimeo.com/video/789021294?h=6473b5fe0e" width="540" height="300" frameBorder="0"    allowFullScreen></iframe>
                </div>
                <div>
                    <p className='font-semibold w-64 mb-7 m-10'>5ire is delighted to announce that its Testnet :‍Thunder: Beta is Now Live. ‍The Testnet paves a smooth path for realizing a fully functional and sustainable ecosystem. User experience and product efficiency are the top priorities for 5ireChain. The Testnet provides the opportunity to assess these factors.</p>
                </div>
            </section>


            <section className='m-40 all'>
                <h1 className='text-pink-500 font-bold text-5xl my-2 text-center'>TESTNET FEATURES</h1>
            </section>

            <div className="h-screen flex items-center justify-center bg-white">
                <div class="box" >
                    <div className="p-20 flex justify-center items-center">
                        <img src={testnetfeature}  />
                    </div>
                </div>

                <section className="mr-40 mt-96 flex justify-center items-center">
                    <div className=" ml-40 bg-yellow-300 p-5 w-96 rounded-lg justify-center items-center ">
                            <img src={thunder1}/>
                            <h2 className='text-blue-400 text-lg font-bold text-center mt-10'>5IRE EXPLORER</h2>
                            <p className="text-md m-10">
                            Our CEO Pratik Gauri and CMO Utkarsh Amitabh discussed the importance of Web3 education in a conversation with NITI Ayog today.
                            </p>
                        </div>

                        <div className=" ml-40 bg-yellow-300 p-5 w-96 rounded-lg justify-center items-center ">
                            <img src={thunder1}/>
                            <h2 className='text-blue-400 text-lg font-bold text-center mt-10'>5IRE WALLET</h2>
                            <p className="text-md m-10">
                            The 5ire wallet is a highly reliable and very secure crypto wallet that offers users an intuitive way to put your assets, all-in-one experience.</p>
                        </div>
                    </section>


            </div>


                    {/* <section className="mb-96  flex justify-center items-center">
                    <div className=" ml-40 bg-yellow-400 p-5 w-96 rounded-lg justify-center items-center ">
                            <img src={thunder1}/>
                            <h2 className='text-white text-lg font-bold text-center mt-10'>5IRE EXPLORER</h2>
                            <p className="text-md m-10">
                            Our CEO Pratik Gauri and CMO Utkarsh Amitabh discussed the importance of Web3 education in a conversation with NITI Ayog today.
                            </p>
                        </div>

                        <div className=" ml-40 bg-yellow-400 p-5 w-96 rounded-lg justify-center items-center ">
                            <img src={thunder1}/>
                            <h2 className='text-white text-lg font-bold text-center mt-10'>5IRE EXPLORER</h2>
                            <p className="text-md m-10">
                            Our CEO Pratik Gauri and CMO Utkarsh Amitabh discussed the importance of Web3 education in a conversation with NITI Ayog today.
                            </p>
                        </div>
                    </section> */}


            

            <Footer />
        
        </>
    )
}