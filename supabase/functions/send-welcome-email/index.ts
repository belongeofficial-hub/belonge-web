import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { Resend } from "npm:resend";

serve(async (req) => {
  const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

  const { record } = await req.json();
  const email = record.email;

  try {
    await resend.emails.send({
      from: "Belonge 💜 <no-reply@belonge.co.uk>",
      to: email,
      subject: "Welcome to Belonge 💜",
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #fafafa; color: #222; padding: 32px; border-radius: 12px; max-width: 600px; margin: auto; line-height: 1.6;">
          <div style="text-align: center;">
            <img src="https://grjbeeldooumkyqslnqe.supabase.co/storage/v1/object/public/public-assets/belonge-logo.png" alt="Belonge Logo" width="120" style="margin-bottom: 16px;" />
            <h2 style="color: #7a1bff;">Welcome to Belonge 💜</h2>
          </div>

          <p>Hi ${email.split("@")[0]},</p>

          <p>We’re beyond excited to welcome you to <strong>Belonge</strong> — a community built to help you connect, grow, and truly feel at home.</p>

          <p>Jump in and start exploring groups, conversations, and real connections that matter!</p>

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://belonge.co.uk/explore" style="background-color: #7a1bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500;">Start Exploring</a>
          </div>

          <p>With love,<br>The Belonge Team 💜</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ message: "Welcome email sent successfully" }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error sending welcome email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
});
