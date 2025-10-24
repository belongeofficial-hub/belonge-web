"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // --- Email Magic Link Sign-In ---
  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Sending magic link...");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/explore`,
      },
    });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Magic link sent! Check your email to log in.");
    }
  };

  // --- Google OAuth Sign-In ---
  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/explore`,
      },
    });

    if (error) console.error("Google sign-in error:", error.message);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-teal-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center">
        <img src="/logo.png" alt="Belonge logo" className="h-10 mx-auto mb-4" />
        <h1 className="text-2xl font-semibold mb-2 text-purple-700">
          Welcome to Belonge
        </h1>
        <p className="text-gray-600 mb-6">
          Sign in or create an account to continue.
        </p>

        {/* Email Login Form */}
        <form onSubmit={handleEmailSignIn} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
          >
            Continue with Email
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-50"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="h-5 w-5 mr-2"
          />
          Sign in with Google
        </button>

        {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
      </div>
    </main>
  );
}
