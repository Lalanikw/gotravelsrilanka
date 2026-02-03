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
                <Image src='/Map_time.jpg' alt='map' width={600} height={175}
                            className='information-image w-1/2 h-2/3 pt-8 p-3' />
                <div className='information p-5 lg:w-1/2'>
                <p className='pb-5'  >
                    <strong className='text-blue-900 text-2xl'>T</strong>raveling to Sri Lanka is a thrilling adventure.
                    This island nation beckons travelers with its breathtaking landscapes, ancient heritage, and vibrant culture.
                    Every destination unfolds a unique narrative:
                    <br></br> <strong className='text-blue-900 text-xl'>C</strong>olombo: The pulsating heart of the country, where modernity intertwines with colonial charm.
                    Wander through bustling markets and admire the iconic Galle Face Green.
                    <br></br> <strong className='text-blue-900 text-xl'>S</strong>igiriya: Climb the awe-inspiring Lion Rock fortress, a UNESCO World Heritage site, and marvel at its ancient frescoes and water gardens.
                    <br></br> <strong className='text-blue-900 text-xl'>K</strong>andy: Immerse yourself in spiritual tranquility at the Temple of the Tooth Relic, surrounded by misty hills and the serene Kandy Lake.
                    <br></br> <strong className='text-blue-900 text-xl'>E</strong>lla: Trek through emerald tea plantations, climb Little Adam&apos;s Peak, and capture the perfect shot at the iconic Nine Arch Bridge.
                    <br></br> <strong className='text-blue-900 text-xl'>M</strong>irissa: Surf the waves, embark on whale-watching expeditions, and unwind on pristine crescent-shaped beaches.
                    <br></br>Ready to start your journey? Get in touch with us today.
                </p>
              <Link href="/ContactUs">
              <button className='p-2 bg-blue-900 rounded-full text-white hover:bg-blue-700 transition-all'>Contact Us &#x27A4;
                </button>
              </Link>
                </div>
              </div>

              {/* Why Visit Sri Lanka in 2025 Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-5 mt-5">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl text-gray-700 font-semibold mb-4">Why Visit Sri Lanka in 2026?</h2>
                  <p className="text-lg text-gray-600">The world is discovering what we&apos;ve always known</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="text-4xl mb-3">🏆</div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">World-Class Cuisine</h3>
                    <p className="text-gray-600">Ranked 7th Best Food Destination globally by Condé Nast Traveler</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="text-4xl mb-3">🌴</div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Top Travel Destination</h3>
                    <p className="text-gray-600">Featured by Time Out & Lonely Planet as a must-visit destination</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="text-4xl mb-3">💎</div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Incredible Value</h3>
                    <p className="text-gray-600">Experience luxury and authenticity without breaking the bank</p>
                  </div>
                </div>
              </div>

              {/* Discover Sri Lanka Blog Section */}
              <div className="py-12 px-5 bg-white">
                <div className="text-center mb-8">
                  <h5 className="text-base md:text-lg text-indigo-700 mb-3">Stories, Tips & Insider Guides</h5>
                  <h2 className="text-3xl md:text-4xl text-gray-700 font-semibold mb-4">Discover Sri Lanka</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Explore our latest stories, travel tips, and insider guides to make the most of your Sri Lankan adventure
                  </p>
                </div>
                <div className="text-center mt-6">
                  <Link href="/Blogpage">
                    <button className="p-3 px-6 bg-blue-900 rounded-full text-white text-lg hover:bg-indigo-600 transition-all">
                      Read Our Blog &#x27A4;
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