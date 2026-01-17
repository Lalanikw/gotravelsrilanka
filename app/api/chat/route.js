//src/app/api/chat/route.js

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  console.log('API route called');
  
  try {
    if (!process.env.OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY not found');
      return Response.json({ error: 'API key not configured' }, { status: 500 });
    }

    const body = await request.json();
    const { message } = body;
    
    console.log('Received message:', message);
    
    if (!message) {
      return Response.json({ error: 'Message is required' }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    const reply = completion.choices[0].message.content;
    console.log('Generated response:', reply);
    
    return Response.json({ reply });
    
  } catch (error) {
    console.error('API Error:', error);
    console.error('Error message:', error.message);
    
    return Response.json({ 
      error: 'Failed to generate response',
      details: error.message 
    }, { status: 500 });
  }
}