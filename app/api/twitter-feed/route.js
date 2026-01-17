import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { cacheStore } from '../cacheStore';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'tweets.json');

    console.log('Attempting to read file:', filePath);
    
    // Check if the file exists
    try {
      await fs.access(filePath);
    } catch (error) {
      // If the file doesn't exist, return an empty array of tweets
      console.log('File access error:', error);
      return NextResponse.json({ tweets: [], fetchedAt: null });
    }

    const fileContents = await fs.readFile(filePath, 'utf8');
    console.log('File contents:', fileContents.substring(0, 100) + '...');
    
    const fileData = JSON.parse(fileContents);

    //check if cache is stale
    if (!cacheStore.value || cacheStore.value.fetchedAt !== fileData.fetchedAt) {
      cacheStore.value = fileData;
      console.log('Cache updated with new data');
    } else {
      console.log('Serving data from cache');
    }

    const response = NextResponse.json(cacheStore.value);
    response.headers.set('Cache-Control', 'no-store, max-age=0');
    return response;
  } catch (error) {
    console.error('Error reading tweets:', error);
    return NextResponse.json({ error: 'Error fetching tweets' }, { status: 500 });
  }
}

export async function POST(request) {
  console.log('POST request received to clear cache');
  try {
    cacheStore.value = null;
    console.log('Cache cleared successfully');
    return NextResponse.json({ message: 'Cache cleared successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error clearing cache:', error);
    return NextResponse.json({ error: 'Failed to clear cache' }, { status: 500 });
  }
}