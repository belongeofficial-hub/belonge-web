import { createClient } from "@supabase/supabase-js";

// These values come from your environment variables (.env.local)
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create a single reusable Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
