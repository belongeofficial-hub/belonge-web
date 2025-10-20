import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").toLowerCase().trim();
    const city = String(body?.city || "").trim();
    const interests = String(body?.interests || "").trim();
    const agree = !!body?.agree;

    if (!name) return NextResponse.json({ ok: false, error: "Name is required" }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });

    const { error } = await supabase.from("waitlist").insert({
      name,
      email,
      city,
      interests,
      agree,
    });

    if (error) {
      const msg = (error.message || "").toLowerCase();

 interface DBError {
  code?: string;
  message?: string;
}

const dbError = error as DBError;

if (
  msg.includes('duplicate') ||
  msg.includes('unique') ||
  (typeof (error as { code?: unknown })?.code === 'string' &&
    (error as { code?: string })?.code === '23505')
) {

  return NextResponse.json({ ok: true, duplicate: true });
}

      console.error("Supabase insert error:", error);
      return NextResponse.json({ ok: false, error: "DB error" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Server error:", e);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
};