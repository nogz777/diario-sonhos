// supabaseClient.js
const { createClient } = supabase;

const SUPABASE_URL = "https://nerenywmnvtskrebytmw.supabase.co/";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcmVueXdtbnZ0c2tyZWJ5dG13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMjQ5NTUsImV4cCI6MjA2NTYwMDk1NX0.Q4bA_Djrl3CN80FINJac1Mjp49_QNyeix8Pn7TCzJCY";

// Exporte o cliente para uso nos outros arquivos
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
