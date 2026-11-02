import React from 'react';
import ArticleList from '../../components/ArticleList';
import { getAllPosts } from '../../lib/blog';

export const metadata = {
  title: 'Sri Lanka Travel Blog — History, Tradition & Hidden Gems',
  description:
    'Stories and travel updates from Sri Lanka: safaris, whale watching, festivals, food, yoga and local tips for planning your trip.',
  alternates: { canonical: 'https://gotravelsrilanka.com/Blogpage' },
};

function Blog() {
  const posts = getAllPosts();
  return (
    <div className="relative">
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/green_water.JPG')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10 pt-8 px-4 md:px-8 pb-8">
          <h1 className="text-base md:text-2xl text-yellow-100 mb-2 font-semibold text-center">
            Sri Lanka | History | Tradition | Hidden
          </h1>
          <p className="text-3xl md:text-4xl text-white font-semibold text-center mb-5">&#127802;</p>

          <div className="w-full">
            <ArticleList posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
