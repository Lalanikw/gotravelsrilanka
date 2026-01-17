import React from 'react';
import NewsTweets from '../../components/NewsTweets'

function News() {
    return (
        <div >
            <div className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ background: "url('/green_water.JPG')" }}>
            <h5 className="text-base md:text-2xl text-yellow-100 mb-2 mt-1 font-semibold p-2 text-center"> Sri Lanka | News | Updates  </h5>
                <h1 className="text-3xl md:text-4xl text-gray-700 font-semibold text-center mb-5">&#127802; </h1>
                
                <div className='px-3'>
            <NewsTweets start={4} limit ={12}  truncate={false} maxLines={3} />
                    </div>
                    
            </div>
        </div>
    );
}

export default News;