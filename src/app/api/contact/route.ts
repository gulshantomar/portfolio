import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * This route sends an email using Nodemailer and a standard SMTP provider.
 * * IMPORTANT: For this to work reliably on Vercel, you must:
 * 1. Use a fast SMTP provider (e.g., Gmail with an App Password, SendGrid, etc.).
 * 2. Configure all environment variables correctly in your Vercel project settings.
 */
export async function POST(req: NextRequest) {
  // 1. Parse the incoming request body
  const { name, email, message } = await req.json();

  // Basic validation to ensure required fields are present
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // 2. Pull SMTP credentials from environment variables
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const toEmail = process.env.TO_EMAIL;
  const port = Number(process.env.SMTP_PORT || 587);

  // Validate that all required environment variables are set
  if (!host || !user || !pass || !toEmail) {
    console.error("Server Error: Missing required SMTP environment variables.");
    return NextResponse.json(
      { error: "This service is not configured to send emails." },
      { status: 500 }
    );
  }

  // 3. Create a Nodemailer transporter object
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // Use true for port 465, false for others (like 587)
    auth: {
      user,
      pass,
    },
  });

  try {
    // 4. Prepare the email content
    const subject = `New Message from ${name} (Portfolio)`;
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr style="border: 0; border-top: 1px solid #eee;">
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
      </div>
    `;

    // 5. Send the email
    await transporter.sendMail({
      from: `"${name}" <${user}>`, // Sender's name and your sending email address
      to: toEmail,                  // The email address that receives the form submissions
      replyTo: email,               // So you can reply directly to the user
      subject: subject,
      html: html,
    });

    // 6. Return a success response
    return NextResponse.json({ success: true });

  } catch (err) {
    // 7. Handle errors and log them for debugging
    console.error("Nodemailer sendMail error:", err);
    return NextResponse.json({ error: "Failed to send the message." }, { status: 500 });
  }
}