"use client"

import ChatBot from '../components/Chatbot';
import Landing from '../components/Landing'
import LandingBottom from '../components/LandingBottom';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home() {

  return (
    <div className=''>
      <div>
        <ChatBot/>
      </div>
        <div className='text-left'>
        <Landing />

           <div>
              <div className="text-center mb-15 mt-8">
                  <h5 className="text-base md:text-2xl text-indigo-700 mb-3 mt-4">Ayubowan | Vanakkam | Assalamu Alaikum </h5>
                  <h1 className="text-3xl md:text-5xl text-gray-700 font-semibold">Welcome to Sri Lanka</h1>
              </div>
              <div className=' flex flex-col lg:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] text-justify'>
                <Image src='/Map_time.jpg' alt='map' width={850} height={200}
                            className='information-image w-2/3 h-2/3 pt-10 p-3' />
                <div className='information p-5 lg:w-1/3'>
                <p className='pb-5'  >
                    <strong className='text-blue-900 text-2xl'>T</strong>raveling to Sri Lanka is a thrilling trip.
                    The This island nation beckons adventurers with its breathtaking landscapes, ancient heritage, and dynamic way of life.
                    Every destination unfolds a unique narrative:
                    <br></br> <strong className='text-blue-900 text-xl'>C</strong>olombo: The pulsating heart of the country, where modernity intertwines with colonial charm.
                    Wander through bustling markets, and admire the iconic Galle Face Green.
                    <br></br> <strong className='text-blue-900 text-xl'>S</strong>igiriya: Scale the awe-inspiring Lion Rock fortress, a UNESCO World Heritage site, and marvel at its frescoes and water gardens.
                    <br></br> <strong className='text-blue-900 text-xl'>K</strong>andy: Immerse yourself in spiritual tranquility at the Temple of the Tooth Relic, surrounded by misty hills and the serene Kandy Lake.
                    <br></br> <strong className='text-blue-900 text-xl'>E</strong>lla: Trek through emerald tea plantations, conquer the challenging Little Adam`s Peak, and capture the perfect Instagram shot at the Nine Arch Bridge.
                    <br></br> <strong className='text-blue-900 text-xl'>M</strong>irissa: Surf the waves, embark on whale-watching expeditions, and unwind on crescent-shaped beaches.
                    <br></br>For more information, please contact us.
                </p>
              <Link href="/ContactUs">
              <button className='p-2 bg-blue-900 rounded-full text-white'>Contact Us &#x27A4;
                </button>
              </Link>
                </div>
              </div>
        </div>
        </div>
        <div className='text-center'>
            <h5 className="text-base md:text-lg text-indigo-700 mb-3 mt-5"> Calendar Holidays | Events | Rent | Tickets | VISA | Driver License </h5>
            <h1 className="text-3xl md:text-4xl text-gray-700 font-semibold">Getting Around in Sri Lanka</h1>
            <div className='flex'>
          <LandingBottom />
            </div>
        </div>
    </div>
  )
}