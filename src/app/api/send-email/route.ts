import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email } = body;

    const message = `
      <div style="
        font-family: 'Segoe UI', Arial, sans-serif;
        background-color: #fafafa;
        color: #222;
        padding: 32px;
        border-radius: 12px;
        max-width: 600px;
        margin: auto;
        line-height: 1.6;
      ">
        <div style="text-align:center; margin-bottom: 24px;">
          <img
            src="https://belonge-assets.s3.eu-west-2.amazonaws.com/logo.png"
            alt="Belonge Logo"
            style="height: 70px; margin-bottom: 10px;"
          />
          <h2 style="color:#3b0764; font-size: 24px; margin:0;">
            Welcome to Belonge 💜
          </h2>
        </div>

        <p>Hi ${name},</p>

        <p>
          Thank you for joining the <strong>Belonge</strong> waitlist — we’re so glad you’re here 💜  
          You’ve just joined a community that’s redefining how people connect — a safe, uplifting space where you can find your people, build real community, and access support that helps you grow.
        </p>

        <p>
          From friendship and mental wellbeing to career and business growth, Belonge brings together everything that helps you feel seen, supported, and connected.
        </p>

        <div style="
          background: linear-gradient(135deg, #6b21a8, #9333ea);
          color: white;
          padding: 20px;
          border-radius: 10px;
          margin: 30px 0;
          text-align: center;
        ">
          <h3 style="margin:0; font-size:20px;">Building a World Where Everyone Belongs 🤝</h3>
          <p style="margin-top:8px; font-size:15px; line-height:1.5;">
            Loneliness is one of the biggest challenges of our time.<br/>
            Belonge is on a mission to change that — by creating meaningful ways for people to connect, grow, and thrive together.<br/>
            Whether you're new to a city, looking for purpose, friendships, or career support,<br/>
            Belonge helps you find your community — online and in real life.
          </p>
        </div>

        <p>
          We’ll be in touch soon with early access details and updates as we prepare for launch.
        </p>

        <p style="margin-top:30px;">
          Warm regards,<br/>
          <strong>The Belonge Team</strong><br/>
          💜 You’re never alone. You Belonge.
        </p>

        <hr style="border:none; border-top:1px solid #ddd; margin:32px 0;">
        <p style="font-size:13px; color:#777; text-align:center;">
          You’re receiving this email because you joined the Belonge waitlist.<br/>
          © ${new Date().getFullYear()} Belonge. All rights reserved.
        </p>
      </div>
    `;

await resend.emails.send({
  from: "Belonge 💜 <welcome@belonge.co.uk>",
  replyTo: "connect@belonge.co.uk",
  to: email,
  subject: "Welcome to Belonge 💜",
  html: `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>Welcome to <span style="color:#7B61FF;">Belonge 💜</span></h2>
      <p>We’re excited to have you join our community.</p>
      <p>Connect, meet, and grow with people who share your interests.</p>
      <p style="margin-top:20px;">Warm regards,<br><strong>The Belonge Team</strong></p>
    </div>
  `,
});


    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
