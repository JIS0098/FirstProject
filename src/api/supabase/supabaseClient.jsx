import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_KEY;
const supabaseKey = process.env.REACT_APP_SECRET_CODE;
export const supabase = createClient(supabaseUrl, supabaseKey);
