require('dotenv').config();

const fs = require('fs');
const pdf = require('pdf-parse');
const { Pinecone } = require('@pinecone-database/pinecone');
const OpenAI = require('openai');
const { OpenAIEmbeddings } = require("@langchain/openai");
const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter");

console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY ? 'Set' : 'Not set');
console.log('PINECONE_API_KEY:', process.env.PINECONE_API_KEY ? 'Set' : 'Not set');
console.log('PINECONE_ENVIRONMENT:', process.env.PINECONE_ENVIRONMENT);
console.log('PINECONE_INDEX_NAME:', process.env.PINECONE_INDEX_NAME);

// Ensure the API key is available
const openaiApiKey = process.env.OPENAI_API_KEY;

// Check if required environment variables are set
if (!process.env.OPENAI_API_KEY || !process.env.PINECONE_API_KEY || !process.env.PINECONE_INDEX_NAME) {
  throw new Error('Environment variables OPENAI_API_KEY, PINECONE_API_KEY, and PINECONE_INDEX_NAME must be set.');
}

const openai = new OpenAI({
  apiKey: openaiApiKey,
});

async function parsePDF(filePath) {
  try {
    // Read and parse PDF
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    const text = data.text;

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    const chunks = await splitter.createDocuments([text]);

    const embeddings = new OpenAIEmbeddings({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const vectors = await embeddings.embedDocuments(chunks.map(chunk => chunk.pageContent));

    const pc = new Pinecone({
      // environment: process.env.PINECONE_ENVIRONMENT,
      apiKey: process.env.PINECONE_API_KEY,
    });

    // Get Pinecone index
    const index = pc.index(process.env.PINECONE_INDEX_NAME);
    console.log(`Processing ${chunks.length} chunks...`);

    const upsertRequest = vectors.map((vector, idx) => ({
      id: `chunk_${idx}`,
      values: vector,
      metadata: { text: chunks[idx].pageContent },
    }));

    await index.upsert(upsertRequest);

    console.log('PDF processed and vectors stored successfully');
  } catch (error) {
    console.error('Error processing PDF:', error);
  }
}

console.log('PDF processing complete');

// Replace with the path to your PDF file
parsePDF('./public/doc/Discover_SriLanka.pdf');