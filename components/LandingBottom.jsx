"use client"

import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import './style.css';
import dynamic from 'next/dynamic';

// const HolidayCalendar = dynamic(() => import('../components/HolidayCalendar'), { ssr: false });

function LandingBottom() {
  const [state, setState] = useState(1);

  const action = (index) => {
    setState(index)
  }

  return (
      <div className="box p-2">
            <div className="tabs">
                  <div onClick={() => action(1)}
                    className={`${state===1 ? 'tab active-tab': 'tab'}`}
                  >Calendar Holidays | Events
                  </div>

                  <div onClick={() => action(2)}
                    className={`${state===2 ? 'tab active-tab': 'tab'}`}
                  > Rentals
                  </div>

                  <div onClick={() => action(3)}
                    className={`${state===3 ? 'tab active-tab': 'tab'}`}
                    > Bus | Train Tickets
                  </div>
              
                  <div onClick={() => action(4)}
                    className={`${state===4 ? 'tab active-tab': 'tab'}`}
                    > VISA
                  </div>
              
                  <div onClick={() => action(5)}
                    className={`${state===5 ? 'tab active-tab': 'tab'}`}
                    > Driver&apos;s License
                  </div>

            </div>

            <div className="content-tabs">

                  <div className={`${state === 1 ? 'content active-content'
                    : 'content'}`}>
                  <div className='text-justify'>
                <div className=' flex flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] text-justify'>
                        <div>
                          <p className='p-5'><strong className='text-blue-900 text-2xl'>S</strong>ri Lanka celebrates a wide range of holidays and events, reflecting its multicultural and multi-religious heritage.</p>
                          
                <p><strong className='text-blue-900 text-md'>Spiritual</strong> celebrations include:
                  <br></br>Vesak: Buddhist celebration of Buddha&apos;s birth, enlightenment, and passing (usually in May).
                  The Poya Days: Monthly Buddhist observances on full moon days.
                  <br></br>Deepavali: Hindu festival of lights (October/November).
                  <br></br>Christmas: Christian celebration of the birth of Jesus Christ (December 25).
                  <br></br>Eid al-Fitr and Eid al-Adha: Muslim festivals marking the end of Ramadan and commemorating
                Ibrahim&apos;s willingness to sacrifice his son, respectively</p>
                <br></br>
                <p><strong className='text-blue-900 text-md'>National</strong> Holidays include:
                  <br></br> Independence Day in February (February 4)
                  <br></br> National Day in May (May 22)
                </p>
                <br></br>
                <p><strong className='text-blue-900 text-md'>Cultural</strong> celebrations include:
                  <br></br>Sinhala and Tamil New Year: Marks the end of the harvest season (April 14).
                  <br></br>Thai Pongal: Tamil harvest festival (January 14).
                        </p>
                        </div>
                        <div className='p-3 item-center'>
                                  <Image src='/vacation.jpg' alt='Jan-June Calendar' width={250} height={100}/>
                        </div>
                </div>
                <div className='flex flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] text-justify '>
                  
            </div>
            {/* <HolidayCalendar/> */}
          </div>
                   </div>

                  <div className={`${state === 2 ? 'content active-content'
                    : 'content'}`}>
          <h2 className='p-2 text-xl text-blue-800'></h2>
              <div className='flex text-justify'>
                          <div >
                            <Image src='/foot1.jpg' alt='foot and flower' className='rounded-full' width={200} height={100} />
                          </div>
                          <p className='p-4'><strong className='text-blue-900 text-2xl'>R</strong>enting a vehicle in Sri Lanka provides a variety of options, each offering a unique travel experience. When renting a vehicle, it is essential to have valid documents, follow local traffic laws, and consider the type of terrain you will face. Selecting a reputable rental service and understanding the terms and conditions of the rental agreement is critical for a seamless and happy travel experience in Sri Lanka.
</p>
          </div>

                <div className="flex flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] text-justify">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <Image className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="/carrent.jpg" alt="car rental" width={450} height={100}/>
                        <div className="p-2 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1 text-center"> 4-Wheel</h2>
                            <h1 className="text-2xl font-semibold mb-3 text-center">Car | SUV | Van</h1>
                <p className="leading-relaxed mb-3">Rental cars are a popular option for comfort and convenience. International and local car rental companies provide a wide selection of vehicles, from compact cars to SUVs. This choice lets you explore Sri Lanka&apos;s diverse landscapes, historical sites, and cities at your own pace.</p>
                            <p><strong className='text-blue-900 text-1xl'>Pricing:</strong> Self-drive from $30-65/day | With driver from $55-70/day (includes fuel, insurance, driver accommodation)</p>
                            <p><strong className='text-blue-900 text-1xl'>International Rental:</strong> Hertz, Avis, Europcar, Sixt</p>
                            <p><strong className='text-blue-900 text-1xl'>Local Rental:</strong> Casons Rent a Car, Malkey Rent a Car, SR Rent a Car</p>
                            <p><strong className='text-blue-900 text-1xl'>Requirements:</strong> Minimum age 21, valid driver&apos;s license, International Driving Permit recommended</p>
                
                              <div className="flex items-center flex-wrap ">
                                    <Link href="/ContactUs" className="text-indigo-300 inline-flex items-center mt-5 md:mb-2 lg:mb-0"> Rent a Car
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                          fill="none" strokeLinecap="round" strokeLinejoin="round">
                                          <path d="M5 12h14"></path>
                                          <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                      </Link>
                              </div>
                        </div>
                    </div>
            
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <Image className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="/bicyclerent.jpg" alt="bike rental" width={450} height={100}/>
                        <div className="p-2 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1 text-center"> 2-Wheel</h2>
                            <h1 className="text-2xl font-semibold mb-3 text-center">Motorbike | Scooter</h1>
                <p className="leading-relaxed mb-3">For a more adventurous and flexible travel experience, renting a motorcycle or scooter is a popular choice. It allows you to navigate through traffic easily and explore scenic routes. Coastal areas like Arugam Bay and Mirissa are especially popular for motorbike rentals.</p>
                            <p><strong className='text-blue-900 text-1xl'>Requirements:</strong> A valid motorcycle license is often required. Ensure you have appropriate safety gear and insurance coverage.</p>
                              <div className="flex items-center flex-wrap ">
                                    <Link href="/ContactUs" className="text-indigo-300 inline-flex items-center mt-5 md:mb-2 lg:mb-0"> Rent a Bike
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                          fill="none" strokeLinecap="round" strokeLinejoin="round">
                                          <path d="M5 12h14"></path>
                                          <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                      </Link>
                              </div>
                        </div>
                    </div>
            
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <Image className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="/tuktukrent.jpg" alt="tuk tuk" width={450} height={100}/>
                        <div className="p-2 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1 text-center"> 3-Wheel</h2>
                            <h1 className="text-2xl font-semibold mb-3 text-center">Tuk-Tuk (Three-Wheeler)</h1>
                <p className="leading-relaxed mb-3">Tuk-tuks are a common mode of transportation in Sri Lanka, especially for short distances. While they are commonly hired for individual rides, some companies offer tuk-tuk rentals for tourists who want a unique and adventurous way to explore the country.</p>
                            <p><strong className='text-blue-900 text-1xl'>Tip:</strong> Use apps like PickMe or Uber to avoid overcharging. Always confirm the fare before starting your journey.</p>
                              <div className="flex items-center flex-wrap ">
                                    <Link href="/ContactUs" className="text-indigo-300 inline-flex items-center mt-5 md:mb-2 lg:mb-0">Hire a TukTuk
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                          fill="none" strokeLinecap="round" strokeLinejoin="round">
                                          <path d="M5 12h14"></path>
                                          <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                      </Link>
                              </div>
                        </div>
                    </div>
                </div>
                   </div>

                  <div className={`${state === 3 ? 'content active-content'
                    : 'content'}`}>
              <div className="flex flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] text-justify">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                        <Image className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="/train.jpg" alt="train" width={450} height={100}/>
                        <div className="p-2 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1 text-center"> Popular Routes | Scenic Journeys</h2>
                            <h1 className="text-2xl font-semibold mb-3 text-center">Train Tickets</h1>
                <p><strong className='text-blue-900 text-1xl'> Scenic Routes </strong>
                  Sri Lanka&apos;s train journeys are world-famous for their beauty. The Colombo-Kandy-Ella route takes you through misty mountains and emerald tea plantations. The coastal route from Colombo to Galle offers stunning ocean views.
                </p>
                <p><strong className='text-blue-900 text-1xl'> Online Booking </strong>
                  Book train tickets online through the official Sri Lanka Railways website at <Link href="https://pravesha.lk" target='_blank' className="text-indigo-300">pravesha.lk</Link> or via Mobitel (dial 365). First class tickets should be booked in advance as they sell out quickly.
                </p>
                <p><strong className='text-blue-900 text-1xl'> Important Update </strong>
                  Some routes (Colombo-Kandy-Badulla) are still recovering from 2025 cyclone damage. Routes to Galle, Trincomalee, and Batticaloa are running normally. Check current status before booking.
                  </p>
                <p><strong className='text-blue-900 text-1xl'> Classes </strong>
                  First Class (Reserved, AC), Second Class (Reserved/Unreserved), Third Class (Unreserved). Observation cars available on select routes.
                  </p>
                        <div className="items-center flex-wrap ">
                              <Link href="https://pravesha.lk/en" target='_blank' className="text-indigo-300 inline-flex items-center mt-5 md:mb-2 lg:mb-0"> Book Train Tickets Online
                                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                    fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                  </svg>
                                </Link>
                </div>
                        </div>
                    </div>

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                        <Image className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="/bus.jpg" alt="bus" width={450} height={100}/>
                        <div className="p-2 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1 text-center"> Government Buses | Private Services</h2>
                            <h1 className="text-2xl font-semibold mb-3 text-center">Bus Tickets</h1>
                <p><strong className='text-blue-900 text-1xl'> Extensive Network </strong>
                  Sri Lanka&apos;s bus network connects every corner of the island. Government-run SLTB (Sri Lanka Transport Board) and private buses operate on all major routes with frequent services.
                </p>
                <p><strong className='text-blue-900 text-1xl'> Online Booking </strong>
                  Book bus tickets online through official <Link href="https://sltb.eseat.lk" target='_blank' className="text-indigo-300">SLTB eSeat</Link> or the new <Link href="https://www.easybus.lk" target='_blank' className="text-indigo-300">EasyBus.lk</Link> app with real-time tracking. Hotline: 1315 for reservations.
                </p>
                <p><strong className='text-blue-900 text-1xl'> Affordable </strong>
                  Public buses are the most cost-effective option, making them popular with both locals and budget travelers. Prices updated July 2025.
                </p>
                <p><strong className='text-blue-900 text-1xl'> Types </strong>
                  Regular buses, AC coaches, and luxury express services. For long-distance travel, air-conditioned buses offer more comfort.
                  </p>
                        <div className="items-center flex-wrap ">
                              <Link href="https://sltb.eseat.lk/" target='_blank' className="text-indigo-300 inline-flex items-center mt-5 md:mb-2 lg:mb-0 mr-3"> SLTB Online Booking
                                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                    fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                  </svg>
                                </Link>
                              <Link href="https://www.easybus.lk/" target='_blank' className="text-indigo-300 inline-flex items-center mt-5 md:mb-2 lg:mb-0"> EasyBus App
                                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                    fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                  </svg>
                                </Link>
                </div>

                    </div>
              </div>
                </div>
                   </div>

                  <div className={`${state === 4 ? 'content active-content'
                    : 'content'}`}>
                   
                    {/* BREAKING NEWS BANNER */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-5 border-2 border-green-300">
                      <h3 className="text-2xl font-bold text-green-700 mb-2 text-center">🎉 BIG NEWS: Visa-Free Entry Starting January 2026!</h3>
                      <p className="text-center text-lg">Travelers from <strong>40 countries</strong> can now visit Sri Lanka <strong>FREE</strong> for up to 30 days!</p>
                    </div>

                    <p className='p-5'>
            Sri Lanka&apos;s visa system has been modernized to make travel easier. Most visitors can obtain an Electronic Travel Authorization (ETA) online before arrival. The latest major update allows visa-free entry for citizens of 40 countries starting January 2026.
          </p>
          
            <div className="p-2 gap-2 text-justify items-center">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                        <Image className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="/visa.jpg" alt="visa" width={450} height={100}/>
                        <div className="p-2 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1 text-center"> FREE Entry for 40 Countries | ETA System | Extensions</h2>
                            <h1 className="text-2xl font-semibold mb-3 text-center">VISA Information 2026</h1>
                
                <p><strong className='text-blue-900 text-1xl'> 🆓 Visa-Free Entry (January 2026) </strong><br></br>
                  Citizens of <strong>40 countries</strong> can enter Sri Lanka visa-free for up to 30 days starting January 2026. Countries include: USA, UK, Canada, Australia, Germany, France, Italy, Netherlands, Spain, UAE, Saudi Arabia, India, China, Japan, South Korea, and 25 more.
                  <br></br>• Still requires free online ETA application
                  <br></br>• Double entry allowed within 30 days
                  <br></br>• Can extend up to 270 days total
                </p><br></br>

                <p><strong className='text-blue-900 text-1xl'> ETA (Electronic Travel Authorization) </strong><br></br>
                  For countries not on the visa-free list, apply for an ETA online before travel through the official government website. The ETA system is currently operational (as of 2026).
                  <br></br>• Tourist ETA: 30 days, double entry
                  <br></br>• Business ETA: For meetings, conferences
                  <br></br>• Processing: Usually 1-2 days
                </p><br></br>

                <p><Link href="https://www.immigration.gov.lk/pages_e.php?id=14" target='_blank' className="text-indigo-300 inline-flex items-center mt-5 md:mb-2 lg:mb-0"> Official Immigration Website →
                  </Link>
                </p>

                <p><strong className='text-blue-900 text-1xl'> Extensions </strong><br></br>
                  Tourist visas can be extended online or at the Department of Immigration and Emigration in Colombo:
                  <br></br>• Stage 1: +60 days
                  <br></br>• Stage 2: +90 days  
                  <br></br>• Stage 3: +90 days
                  <br></br>• Total possible stay: 270 days
                </p><br></br>

                <p><strong className='text-blue-900 text-1xl'> Requirements </strong><br></br>
                  • Passport valid for 6+ months from arrival date
                  <br></br>• Return ticket or onward journey proof
                  <br></br>• Sufficient funds for stay
                  <br></br>• No work allowed on tourist visa
                </p><br></br>

                <p className="text-sm italic">
                  Note: Visa policies are subject to change. Always check the official Sri Lanka Immigration website for the most current requirements before booking your trip.
                </p>
                    </div>
                  </div>
            </div>
                   </div>

                  <div className={`${state === 5 ? 'content active-content'
                    : 'content'}`}>
                     <p className='p-5'>
            As a tourist, obtaining a driver&apos;s license in Sri Lanka is not a common practice.
            Instead, tourists are typically allowed to drive in Sri Lanka using their valid foreign driver&apos;s license with proper endorsement.
            Always check for the latest information and regulations, as requirements may change. 
          </p>
            <div className="flex p-3 gap-3 text-justify">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                        <Image className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="/road.jpg" alt="roads" width={450} height={100}/>
                        <div className="p-2 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1 text-center"> License | IDP | Local Rules | Insurance | Renting a Vehicle</h2>
                            <h1 className="text-2xl font-semibold mb-3 text-center">Driver&apos;s License </h1>
                
                <p><strong className='text-blue-900 text-1xl'> Two Options for Driving </strong> <br></br>
                  <strong>1. International Driving Permit (IDP) with AA Endorsement:</strong> Tourists can drive with an International Driving Permit obtained in their home country. To drive legally in Sri Lanka, visit the Automobile Association of Ceylon (open Monday-Friday, 9 AM-4 PM) to get your permit endorsed.
                  <br></br><br></br> 
                  <strong>2. Temporary Sri Lankan Driving Permit:</strong> Foreign license holders can obtain a temporary permit from the Department of Motor Traffic (DMT). Required documents include:
                  <br></br>• Your country&apos;s driving license (English version) + photocopy
                  <br></br>• National passport + photocopy of photo page and visa page
                  <br></br>• Fee payment
                </p>

                <div className="flex items-center flex-wrap mb-5 ">
                  <Link href="https://dmt.gov.lk/index.php?lang=en" target='_blank' className="text-indigo-300 inline-flex items-center mt-5 md:mb-2 lg:mb-0">
                    DMT Sri Lanka Website
                                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                    fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                  </svg>
                                </Link>
                  </div>

                <p><strong className='text-blue-900 text-1xl'> Local Rules </strong><br></br>
                  • Drive on the LEFT side of the road
                  <br></br>• Minimum driving age: 18 years
                  <br></br>• Seat belts mandatory
                  <br></br>• Avoid driving in cities during rush hours (7-9 AM, 4:30-7 PM)
                  <br></br>• Road conditions vary - highways are excellent, rural roads can be narrow
                  <br></br>• Watch for pedestrians, tuk-tuks, and wildlife
                </p><br></br>

                <p><strong className='text-blue-900 text-1xl'> Insurance </strong><br></br>
                  Ensure you have comprehensive insurance coverage for driving in Sri Lanka. Most rental agencies include basic insurance in their packages, but verify what&apos;s covered.
                </p><br></br>

                <p><strong className='text-blue-900 text-1xl'> Renting a Vehicle </strong><br></br>
                  Requirements: Valid foreign driver&apos;s license, IDP (recommended), minimum age 21. Many travelers prefer hiring a car with a driver for safety and convenience.
                  </p>
                    </div>
                  </div>
            </div>
                  </div>
            </div>
        </div>
  );
}

export default LandingBottom