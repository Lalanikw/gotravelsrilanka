const { TwitterApi } = require('twitter-api-v2');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

async function fetchTweets() {
  const fetch = (await import('node-fetch')).default;
  const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);

  const queryParams = {
    query: '#visitSriLanka -is:retweet',
    max_results: 20,
    'tweet.fields': 'created_at,text,author_id',
    'expansions': ['author_id'],
    'user.fields': ['name', 'username'],
  };

  try {
    const response = await client.v2.search(queryParams.query, queryParams);
    const tweets = response.data.data;
    const users = response.data.includes.users;

    // Process tweets to include author information
    const processedTweets = tweets.map(tweet => {
      const author = users.find(user => user.id === tweet.author_id);
      return {
        id: tweet.id,
        text: tweet.text,
        createdAt: tweet.created_at,
        author: author ? { id: author.id, name: author.name, username: author.username } : null,
        url: `https://twitter.com/${author ? author.username : tweet.author_id}/status/${tweet.id}`
      };
    });

    // Read existing tweets from the file
    let existingTweets = [];
    try {
      const existingData = await fs.readFile(path.resolve(__dirname, '../public/tweets.json'), 'utf-8');
      const parsedData = JSON.parse(existingData);
      existingTweets = Array.isArray(parsedData.tweets) ? parsedData.tweets : [];
    } catch (error) {
      console.log('No existing tweets file found. Creating a new one.');
    }

    // Deduplicate tweets
    const uniqueTweets = processedTweets.filter(newTweet => {
      return !existingTweets.some(existingTweet => existingTweet.id === newTweet.id);
    });

    // Combine unique new tweets with existing tweets
    const updatedTweets = [...uniqueTweets, ...existingTweets];

    // Sort tweets by creation date (newest first)
    updatedTweets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Keep only the latest 16 tweets
    const latestTweets = updatedTweets.slice(0, 20);

    console.log(`Fetched ${tweets.length} tweets, added ${uniqueTweets.length} unique tweets.`);
    console.log(`Updated tweets file with ${latestTweets.length} tweets.`);

    // Update the file
    await fs.writeFile(path.resolve(__dirname, '../public/tweets.json'), JSON.stringify({
      tweets: latestTweets,
      fetchedAt: new Date().toISOString()
    }, null, 2));
    console.log('Tweets saved to public/tweets.json');

    // Clear the remote cache
    console.log('Attempting to clear remote tweet cache...');
    try {
      const clearCacheResponse = await fetch('https://gotravelsrilanka.com/api/twitter-feed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Clear cache status:', clearCacheResponse.status);
      console.log('Clear cache headers:', JSON.stringify(clearCacheResponse.headers.raw()));
      const responseText = await clearCacheResponse.text();
      console.log('Clear cache response:', responseText);
      
      if (clearCacheResponse.ok) {
        console.log('Remote tweet cache cleared successfully');
      } else {
        console.log(`Failed to clear remote tweet cache. Status: ${clearCacheResponse.status}`);
        console.log('Response:', await clearCacheResponse.text());
      }
    } catch (error) {
      console.error('Error clearing remote tweet cache:', error);
    }

    // Local cache management
    console.log('Updating local cache indicator...');
    const cacheFile = path.resolve(__dirname, '../public/cache-version.json');
    try {
      let cacheVersion = 1;
      try {
        const cacheData = await fs.readFile(cacheFile, 'utf-8');
        cacheVersion = JSON.parse(cacheData).version + 1;
      } catch (error) {
        console.log('No existing cache version file. Starting at version 1.');
      }
      await fs.writeFile(cacheFile, JSON.stringify({ version: cacheVersion }));
      console.log(`Local cache version updated to ${cacheVersion}`);
    } catch (error) {
      console.error('Error updating local cache version:', error);
    }

  } catch (error) {
    console.log('Error fetching tweets:', error);
  }
}

fetchTweets();