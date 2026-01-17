//src/app/api/chat/route.js

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  console.log('Chat API route called');
  
  try {
    if (!process.env.OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY not found');
      return Response.json({ 
        error: 'API key not configured. Please add OPENAI_API_KEY to environment variables.' 
      }, { status: 500 });
    }

    const body = await request.json();
    const { message } = body;
    
    console.log('Received message:', message);
    
    if (!message || message.trim() === '') {
      return Response.json({ 
        error: 'Message is required' 
      }, { status: 400 });
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful travel assistant for Sri Lanka tourism. Provide friendly, accurate information about Sri Lankan destinations, culture, and travel tips."
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const reply = completion.choices[0].message.content;
    console.log('Generated response:', reply);
    
    return Response.json({ reply });
    
  } catch (error) {
    console.error('API Error:', error);
    console.error('Error details:', error.message);
    
    return Response.json({ 
      error: 'Failed to generate response',
      details: error.message 
    }, { status: 500 });
  }
}