import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters.').max(120),
  email: z.string().trim().email('Please enter a valid email address.'),
  subject: z.string().trim().min(3, 'Subject must be at least 3 characters.').max(150),
  message: z.string().trim().min(20, 'Message must be at least 20 characters.').max(2000),
  companyName: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }
    const { name, email, subject, message, companyName } = parsed.data;

    if (companyName && companyName.trim().length > 0) {
      return NextResponse.json({ error: 'Spam detected.' }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error('Missing email credentials');
      return NextResponse.json(
        { error: 'Email service is temporarily unavailable.' },
        { status: 500 }
      );
    }

    // Create transporter using Gmail SMTP
    // You'll need to set up environment variables for this
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_APP_PASSWORD, // Gmail App Password (not regular password)
      },
    });

    const formattedMessage = message.replace(/(?:\r\n|\r|\n)/g, '<br />');

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'tennissine.space@gmail.com', // Recipient email
      replyTo: email, // User's email for reply
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="background:#f4f6ff;padding:40px 16px;font-family:'Inter',Arial,sans-serif;">
          <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 18px 40px rgba(148,163,184,0.25);">
            <div style="background:linear-gradient(135deg,#4f46e5 0%,#9333ea 100%);padding:28px 36px;color:#f8fafc;">
              <p style="margin:0;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;opacity:0.85;">New Inquiry</p>
              <h1 style="margin:10px 0 0;font-size:26px;font-weight:700;">Tennissine's Space · Contact Request from ${name}</h1>
            </div>
            <div style="padding:32px 36px;background:#ffffff;color:#1e293b;">
              <p style="margin:0 0 20px;font-size:16px;color:#334155;">You have received a new message through the Tennissine's Space contact form.</p>
              <div style="margin-bottom:24px;">
                <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:18px;">
                  <p style="margin:0;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#6366f1;">From</p>
                  <p style="margin:8px 0 0;font-size:18px;font-weight:600;color:#1e293b;">${name}</p>
                  <p style="margin:4px 0 0;font-size:14px;color:#475569;">${email}</p>
                </div>
                
              </div>
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:18px;margin:10px 0px">
                  <p style="margin:0;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#6366f1;">Subject</p>
                  <p style="margin:8px 0 0;font-size:18px;font-weight:600;color:#1e293b;">${subject}</p>
                </div>
              <div style="padding:24px;border-radius:16px;background:#f1f5f9;border:1px solid #cbd5f5;">
                <p style="margin:0 0 12px;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#6366f1;">Message</p>
                <div style="font-size:15px;line-height:1.7;color:#334155;">${formattedMessage}</div>
              </div>
              <div style="margin-top:24px;padding:20px;border-radius:16px;border:1px solid rgba(99,102,241,0.25);background:linear-gradient(135deg,rgba(79,70,229,0.12) 0%,rgba(147,51,234,0.12) 100%);">
                <p style="margin:0;font-size:14px;color:#4338ca;">
                  Reply directly to <a href="mailto:${email}" style="color:#312e81;text-decoration:none;font-weight:600;">${email}</a> to continue the conversation.
                </p>
              </div>
            </div>
            <div style="padding:20px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;color:#64748b;font-size:12px;text-align:center;">
              <p style="margin:0 0 6px;letter-spacing:0.14em;text-transform:uppercase;color:#4f46e5;">Tennissine's Space</p>
              <p style="margin:0;font-size:12px;opacity:0.75;">Transforming visionary ideas into intelligent digital experiences.</p>
              <p style="margin:8px 0 0;"><a href="mailto:tennissine.space@gmail.com" style="color:#4338ca;text-decoration:none;">tennissine.space@gmail.com</a></p>
            </div>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

