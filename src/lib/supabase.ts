import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL || "https://hgtbfknzcvwkbrzjfohl.supabase.co";
const key =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "sb_publishable_9FdQR4cTMab6-tycQ-nRIw_bIKUmRJx";

export const supabase = createClient(url, key);
