// config/supabase.js
import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'; // Força a leitura aqui também por segurança

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("❌ ERRO CRÍTICO: Chaves do Supabase não encontradas no .env");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)