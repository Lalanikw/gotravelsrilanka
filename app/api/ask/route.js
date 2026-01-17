import { NextResponse } from 'next/server';
import { Pinecone } from '@pinecone-database/pinecone';
import { OpenAIEmbeddings } from "@langchain/openai";
import { OpenAI } from "openai";

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const embeddings = new OpenAIEmbeddings({
  openAIApiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
    const { conversation } = await request.json();
    const lastQuestion = conversation[conversation.length - 1].content;

  try {
    // Generate embedding for the question
    const questionEmbedding = await embeddings.embedQuery(lastQuestion);

    // Query Pinecone
    const index = pinecone.index(process.env.PINECONE_INDEX_NAME);
    const queryResponse = await index.query({
      vector: questionEmbedding,
      topK: 5,
      includeMetadata: true,
    });

    // Prepare context from Pinecone results
      const context = queryResponse.matches.map(match => match.metadata.text).join("\n");
      
      //prepare message fro OpenAI, including conversation history
      const systemPrompt = `You are Mala, a helpful travel guide in Sri Lanka.
            Your knowledge is STRICTLY LIMITED to the information provided in the context.
            DO NOT use any external knowledge or make assumptions.
            If you can't find answers in the given context, respond ONLY with please say, "Sorry, I don't have that information.
            Is there something else about Sri Lanka I can help you with?". 
            NEVER make up or infer information. Stick ONLY to what is directly stated in the context.`
      
      const messages = [
          {
              role: "system",
              content: systemPrompt},
          { role: "user", content: `Context about Sri Lanka: ${context}\n\nQuestion:${lastQuestion}` },
          ...conversation.map(item => ({ role: item.role, content: item.content })),
      ];

    // Generate answer using OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    const answer = completion.choices[0].message.content;

    return NextResponse.json({ answer });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
  }
}