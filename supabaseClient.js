// supabaseClient.js
const SUPABASE_URL = "https://nerenywmnvtskrebytmw.supabase.co/"; // coloque aqui
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcmVueXdtbnZ0c2tyZWJ5dG13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMjQ5NTUsImV4cCI6MjA2NTYwMDk1NX0.Q4bA_Djrl3CN80FINJac1Mjp49_QNyeix8Pn7TCzJCY"; // cole sua chave

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
