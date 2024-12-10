import { validateForm } from '@/lib/utils';
import { headers } from 'next/headers'
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET(req) {
  try {
    // Authentication / verification
    const headersList = await headers();
    const referer = headersList.get('referer');
    if (referer !== process.env.NEXT_PUBLIC_CONTACT_URL) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Parse query parameters from the request URL
    const url = new URL(req.url);
    const params = url.searchParams;

    // Extract form data from query parameters
    const formData = {
      name: params.get("name") || "",
      email: params.get("email") || "",
      message: params.get("message") || "",
    };

    // Backend form validation
    const error = validateForm(formData);
    if (error) {
      console.error('Error sending message:', error);
      return NextResponse.json({error}, { status: 500});
    }

    const { name, email, message } = formData;

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      to: process.env.INBOX,
      subject: `ALERT: joey-ma.github.io received a message from ${name}`,
      text: `from: "${name}" <${email}>, \n\nmessage:\n\n${message}`,
    };
  
    // Send email
    await transporter.sendMail(mailOptions);
    const success = 'Message sent successfully';
    console.log(success);
    return NextResponse.json({ success }, {status: 200});
    
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, {status: 500});
  }
}

