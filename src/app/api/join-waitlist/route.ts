// src/app/api/join-waitlist/route.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
);

// named export only — no default export
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const name = String(body?.name ?? '').trim();
    const email = String(body?.email ?? '').trim().toLowerCase();
    const city = String(body?.city ?? '').trim();
    const interests = String(body?.interests ?? '').trim();
    const agree = !!body?.agree;

    if (!name) return NextResponse.json({ ok: false, error: 'Name is required' }, { status: 400 });
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 });
    }

    const { error } = await supabase.from('waitlist').insert({
      name, email, city, interests, agree
    });

    if (error) {
      const msg = (error.message || '').toLowerCase();
      if (msg.includes('duplicate') || msg.includes('unique') || (error as any).code === '23505') {
        return NextResponse.json({ ok: true, duplicate: true });
      }
      console.error('Supabase insert error:', error);
      return NextResponse.json({ ok: false, error: 'DB error' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('Server error:', e);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
};


