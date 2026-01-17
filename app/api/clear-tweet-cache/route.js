import { NextResponse } from 'next/server';
import { cacheStore } from '../../api/cacheStore';  // Adjust this path as needed

export async function POST() {
  try {
    console.log('Clearing cache');
    cacheStore.value = null;
    console.log('Cache cleared successfully');
    return NextResponse.json({ message: 'Cache cleared successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error clearing cache:', error);
    return NextResponse.json({ error: 'Failed to clear cache' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to clear cache.' }, 
    { status: 405, headers: { 'Allow': 'POST' } }
  );
}