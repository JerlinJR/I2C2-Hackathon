import React from 'react'

export default function Media(){
    return(
        <>
        <section className="all flex flex-row mx-20 my-20 gap-20 justify-center items-center all">
                <div>
                <iframe className='rounded-md' title="vimeo-player" src="https://player.vimeo.com/video/789021294?h=6473b5fe0e" width="540" height="300" frameBorder="0"    allowFullScreen></iframe>
                </div>
                <div>
                    <h1 className="text-pink-500 font-bold text-3xl my-2">Discover 5ire</h1>
                    <p className='font-semibold w-64 mb-2'>Highly incentivize practices thatalign with the UN SDGs.</p>
                    <button className="bg-black text-white font-semibold rounded-md p-2">Know More</button>
                </div>
        </section>
        </>
    )
}