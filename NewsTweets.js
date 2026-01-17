'use client'

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const NewsTweets = ({initialTweets, limit, truncate = false, maxLines = 2, isBanner = false}) => {
  const [tweets, setTweets] = useState(initialTweets || []);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(!initialTweets);

  useEffect(() => {
      const fetchNewsTweets = async () => {
        try {
          //Add a small delay to ensure cache is cleared
          const timestamp = new Date().getTime();
          const response = await fetch(`/api/twitter-feed?t=${timestamp}`);
          await new Promise(resolve => setTimeout(resolve, 1000));

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          if (data.tweets) {
            setTweets(limit ? data.tweets.slice(0, limit) : data.tweets);
          } else {
            throw new Error('No tweets found in the response');
          }
        } catch (error) {
          console.error('Error fetching tweets:', error);
          setError(error.message || 'An unknown error occurred');
        } finally {
          setIsLoading(false);
        }
      };

      fetchNewsTweets();
    
  }, [initialTweets, limit]);
  
  if (isLoading) {
    return <div>Loading tweets...</div>
  }

  if (error) {
    return <div className="text-red-500">Error fetching news: {error}</div>;
  }

  const truncateText = (text, lines) => {
    const words = text.split(' ');
    const truncated = words.slice(0, lines * 10).join(' ');
    return truncated.length < text.length ? `${truncated}...` : truncated;
  };

  const containerClass = isBanner
    ? "flex"
    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4";

  const tweetClass = isBanner
    ? "tweet-item flex-shrink-0 w-1/4 bg-blue-100 bg-opacity-70 p-1 rounded-lg shadow mx-2 overflow-hidden"
    : "bg-blue-100 bg-opacity-70 p-1 rounded-lg shadow";

  return (
    <div className={containerClass}>
      {tweets.length > 0 ? (
        tweets.map((tweet) => (
          <div key={tweet.id} className={tweetClass}>
            <p className="font-semibold text-sm mb-2">{tweet.author.name} (@{tweet.author.username})</p>
            <p className="text-sm text-gray-600 mb-2 line-clamp-3">
              {truncate ? truncateText(tweet.text, maxLines) : tweet.text}
            </p>
            <a href={tweet.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">View on Twitter</a>
            <p className="text-xs text-gray-400 mt-1">{new Date(tweet.createdAt).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <div>No news available at the moment.</div>
      )}
    </div>
  );
};

NewsTweets.propTypes = {
  initialTweets: PropTypes.array,
  limit: PropTypes.number,
  truncate: PropTypes.bool,
  maxLines: PropTypes.number,
  isBanner: PropTypes.bool
};

export default NewsTweets;