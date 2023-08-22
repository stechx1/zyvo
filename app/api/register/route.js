// Import required packages
import { NextResponse } from "next/server";

const nodemailer = require('nodemailer');

// Create a transporter with your email service settings
const transporter = nodemailer.createTransport({
  service: 'Gmail', // e.g., 'Gmail'
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  },
});

export async function POST(req, res) {
  if (req.method === 'POST') {
    const body = await req.json();

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: body.email,
      subject: 'Welcome to Our App!',
      text: 'Thank you for signing up for our app. We are excited to have you on board!',
    };

    try {
      await transporter.sendMail(mailOptions);
      return new NextResponse('Welcome email sent', { status: 200 });
    } catch (error) {
      console.error('Error sending welcome email', error);
      return new NextResponse('Error sending welcome email', { status: 500 });
    }
  } else {
    console.log("Use POST")
  }
};
