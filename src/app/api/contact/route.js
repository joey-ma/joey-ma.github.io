import { validateForm } from '@/lib/utils';
import { headers } from 'next/headers'
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req, res) {
  // basic authentication / verification
  const headersList = await headers();
  const origin = headersList.get('origin');
  if (origin !== process.env.NEXT_PUBLIC_SITE_URL) 
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  // basic backend form validation
  const formData = await req.json();
  console.log("🚀 ~ POST ~ formData:", formData)
  const { name, email, message } = formData;
  const error = validateForm(formData);
  if (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({error}, { status: 500});
  }

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

  try {
    await transporter.sendMail(mailOptions);
    const message = 'Message sent successfully';
    console.log(message);
    return NextResponse.json({ message }, {status: 200});
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ error }, {status: 400});
  }
}

