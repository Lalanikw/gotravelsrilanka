import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CategoryCard = ({ title, imageSrc }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <Image src={imageSrc} alt={title} width={100} height={100} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
        </div>
       
    </div>
);

function Download() {
  return (
    <div className="relative">
      <div className="min-h-screen">
        <div className="relative z-10 pt-10 px-4 md:px-8">
          <h5 className="text-base md:text-2xl text-indigo-300 mb-6 font-semibold text-center">
            Sri Lanka | Wildlife | Events | Places
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-5">
            <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                          src="/will2.jpg" alt="Wilpattu" width={450} height={100} />
                      <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                          src="/will3.jpg" alt="Wilpattu" width={450} height={100} />
                      <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                          src="/will4.JPG" alt="Wilpattu" width={450} height={100} />
                      <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                src="/will1.jpg" alt="Wilpattu" width={450} height={100} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-5">
            <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                          src="/aru.JPG" alt="Arugambay" width={450} height={100} />
                      <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                          src="/elep.JPG" alt="Elephant" width={450} height={100} />
                      <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                          src="/Esala1.jpg" alt="Esala" width={450} height={100} />
                      <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                src="/Muhudu.jpg" alt="Wilpattu" width={450} height={100} />
                  </div>

        <div className='pt-2'>
            <Link href="/ContactUs">
                <button className='p-2 bg-blue-900 rounded-full text-white'>To Download &#x27A4;
                </button>
            </Link>
         </div>
        </div>
          </div>
           
    </div>
  );
}

export default Download;