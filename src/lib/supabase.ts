import { createClient } from '@supabase/supabase-js'

// Supabase configuration - estas variables son automáticamente configuradas por Lovable
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://localhost:54321'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)