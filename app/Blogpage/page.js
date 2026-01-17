import React from 'react';
import {articles} from '../../lib/Myblogs';
import Image from 'next/image';

function Blog() {
    return (
        <div className="relative">
  <div 
    className="min-h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/green_water.JPG')" }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
    <div className="relative z-10 pt-8 px-4 md:px-8">
      <h5 className="text-base md:text-2xl text-yellow-100 mb-2 font-semibold text-center">
        Sri Lanka | History | Tradition | Hidden
      </h5>
      <h1 className="text-3xl md:text-4xl text-white font-semibold text-center mb-5">
        &#127802;
            </h1>

            {/* blog starts */}
      <div className="w-full">
        
         <div className="flex flex-col gap-5 ">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px]"
            > 
              <Image
                src={article.image} alt={article.title} height={400} width={400}
                className="object-cover w-[400px] h-[400px]"
              />
              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-800">
                  {article.title}
                </h2>
                <p className="text-sm text-indigo-400">{article.date}</p>
                <p className="text-gray-700 mt-4">{article.content}</p>
                <p className="text-gray-700 mt-4">{article.content1}</p>
                <p className="text-gray-700 mt-4">{article.content2}</p>
                {/* <button
                  onClick={() => alert(article.content)}
                  className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Read More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
    );
}

export default Blog;
