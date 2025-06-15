// auth.js

// Cadastro
async function signUp() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: senha,
  });

  if (error) {
    alert("Erro no cadastro: " + error.message);
  } else {
    alert("Cadastro realizado com sucesso! Faça login.");
    window.location.href = "login.html";
  }
}

// Login
async function signIn() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: senha,
  });

  if (error) {
    alert("Erro no login: " + error.message);
  } else {
    localStorage.setItem("session", JSON.stringify(data.session));
    window.location.href = "dashboard.html";
  }
}
