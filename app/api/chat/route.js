import connectDB from "../../lib/mongodb";
import Contact from "../../models/contact";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { fullname, email, message } = await req.json();

    // Validate input
    if (!fullname || !email || !message) {
      return NextResponse.json({
        msg: ['All fields are required'],
        success: false,
      }, { status: 400 });
    }

    console.log('Parsed data:', { fullname, email, message });

    // Connect to MongoDB
    await connectDB();
    console.log('MongoDB connected');

    // Create contact
    const contact = await Contact.create({ fullname, email, message });
    console.log('Contact created:', contact);

    return NextResponse.json({
      msg: ['Message sent successfully! We will get back to you soon.'],
      success: true,
    }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);

    // Check if it's a validation error
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return NextResponse.json({
        msg: messages,
        success: false,
      }, { status: 400 });
    }

    // MongoDB connection error
    if (error.message.includes('buffering timed out')) {
      return NextResponse.json({
        msg: ['Database connection timeout. Please try again.'],
        success: false,
      }, { status: 503 });
    }

    // Generic error
    return NextResponse.json({
      msg: ['Something went wrong. Please try again later.'],
      success: false,
    }, { status: 500 });
  }
}