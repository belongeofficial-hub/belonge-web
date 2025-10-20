import { WelcomeEmail } from "@/emails/WelcomeEmail";

export default function PreviewEmailPage() {
  return (
    <div style={{ padding: "40px", background: "#f2f2f2", minHeight: "100vh" }}>
      <WelcomeEmail name="Frances" />
    </div>
  );
}
