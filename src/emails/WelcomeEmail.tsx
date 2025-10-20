import * as React from "react";

interface WelcomeEmailProps {
  name?: string;
}

export const WelcomeEmail = ({ name = "Friend" }: WelcomeEmailProps) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome to Belonge 💜</title>
    </head>
    <body
      style={{
        backgroundColor: "#f9f9fb",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        color: "#2c2c2c",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          maxWidth: "640px",
          margin: "40px auto",
          background: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0 4px 16px rgba(120, 80, 200, 0.1)",
          overflow: "hidden",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #7b5cff, #ad6eff, #00d2d3)",
            color: "white",
            textAlign: "center",
            padding: "40px 30px 30px",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              backgroundColor: "white",
              margin: "0 auto 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://belonge.co.uk/logo.png"
              alt="Belonge Logo"
              width="55"
              style={{ display: "block" }}
            />
          </div>
          <h1
            style={{
              fontSize: "28px",
              margin: 0,
              fontWeight: 700,
            }}
          >
            Welcome to Belonge 💜
          </h1>
        </div>

        {/* BODY */}
        <div style={{ padding: "40px 30px", lineHeight: "1.6", fontSize: "16px" }}>
          <p>
            <strong>Hi {name},</strong>
          </p>

          <p>
            <span style={{ color: "#7b5cff", fontWeight: 600 }}>Belonge</span> is
            redefining how people connect — a safe, uplifting space where you can
            find your people, build real community, and access support that helps
            you grow.
          </p>

          <p>
            From friendship and mental wellbeing to career and business growth,
            Belonge brings together everything that helps you feel seen, supported,
            and connected.
          </p>

          <p>
            <strong>Building a World Where Everyone Belongs 🤝</strong>
          </p>

          <p>
            Loneliness is one of the biggest challenges of our time.{" "}
            <span style={{ color: "#7b5cff", fontWeight: 600 }}>Belonge</span> is
            on a mission to change that — by creating meaningful ways for people to
            connect, grow, and thrive together.
          </p>

          <p>
            Whether you're new to a city, looking for purpose, friendships, or
            career support,{" "}
            <span style={{ color: "#7b5cff", fontWeight: 600 }}>Belonge</span>{" "}
            helps you find your community — online and in real life.
          </p>

          <div style={{ textAlign: "center", margin: "40px 0 10px" }}>
            <a
              href="https://belonge.co.uk"
              target="_blank"
              style={{
                background: "linear-gradient(135deg, #7b5cff, #00d2d3)",
                color: "white",
                textDecoration: "none",
                padding: "14px 36px",
                borderRadius: "30px",
                fontWeight: 600,
                fontSize: "15px",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
            >
              Join the Journey
            </a>
          </div>
        </div>

        {/* FOOTER */}
        <div
          style={{
            textAlign: "center",
            fontSize: "13px",
            color: "#777",
            padding: "20px 20px 40px",
          }}
        >
          <p>© 2025 Belonge | You Belonge. Always.</p>
          <p>
            Follow us on{" "}
            <a
              href="https://instagram.com/belongeofficial"
              target="_blank"
              style={{ color: "#7b5cff", textDecoration: "none" }}
            >
              Instagram
            </a>{" "}
            •{" "}
            <a
              href="https://tiktok.com/@belongeofficial"
              target="_blank"
              style={{ color: "#7b5cff", textDecoration: "none" }}
            >
              TikTok
            </a>
          </p>
        </div>
      </div>
    </body>
  </html>
);

