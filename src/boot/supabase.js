import { createClient } from '@supabase/supabase-js'
const supabaseURL = 'https://itvfjfbrxtmhglwadgkv.supabase.co'
const supabaseKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0dmZqZmJyeHRtaGdsd2FkZ2t2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNzQ1NDUsImV4cCI6MTk5Njc1MDU0NX0.a9MOA7FNMfGXm6KIm3k0UcIF08FYyulFtHLgjX8hYWc'

export const supabase = createClient(supabaseURL, supabaseKEY)

console.log('init Supabase', supabase)
