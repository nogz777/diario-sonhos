async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const { error } = await supabaseClient.auth.signUp({ email, password });
  if (error) return alert(error.message);
  alert('Verifique seu e-mail para confirmar o cadastro!');
}

async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) return alert(error.message);
  window.location.href = 'dashboard.html';
}

async function logout() {
  await supabaseClient.auth.signOut();
  window.location.href = 'login.html';
}