import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link';

const NewsTweets = dynamic(() => import('./NewsTweets'), {
  ssr: false,
  loading: ()=> <p>Loading tweets...</p>
});

function Landing() {
  
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      <video autoPlay muted loop className='absolute inset-0 w-full h-full object-cover'>
        <source src="/beach2.mp4" />
      </video>
      <div className="absolute inset-0 bg-blue-100 opacity-10"></div>
      
       <div className="absolute top-0 right-0 left-0 z-10 bg-white bg-opacity-60 hidden md:block">
        <div className="w-full">
          {/* <div className="bg-blue-100 bg-opacity-60 p-2 overflow-hidden h-24">
            <div className="tweet-scroll-container">
              <NewsTweets start={0} limit={4} truncate={true} maxLines={2} isBanner={true} />
            </div>
          </div> */}
          {/* <div className="bg-blue-100 bg-opacity-60 py-1 text-center">
            <Link href="/News" className="text-blue-500 hover:underline text-md font-semibold">
              View all news
            </Link>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        .tweet-scroll-container {
          display: flex;
          animation: scroll 30s linear infinite;
          width: 200%; /* Two sets of tweets */
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

export default Landing