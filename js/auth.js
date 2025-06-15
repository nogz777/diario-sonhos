import { supabase } from "../supabaseClient.js";

// Cadastro
document.getElementById("signup-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signUp({ email, password });
  if (error) return alert("Erro ao cadastrar: " + error.message);

  alert("Cadastro feito com sucesso!");
  window.location.href = "dashboard.html";
});

// Login
document.getElementById("login-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email-login").value;
  const password = document.getElementById("password-login").value;

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return alert("Erro ao entrar: " + error.message);

  window.location.href = "dashboard.html";
});
