import { supabase } from '../supabaseClient.js';

// Carrega lista de sonhos
async function carregarSonhos() {
  const user = (await supabase.auth.getUser()).data.user;
  const { data, error } = await supabase
    .from('sonhos')
    .select('*')
    .eq('user_id', user.id)
    .order('data', { ascending: false });

  if (error) {
    alert('Erro ao carregar sonhos: ' + error.message);
    return;
  }

  const lista = document.getElementById('lista-sonhos');
  lista.innerHTML = '';

  data.forEach((sonho) => {
    const item = document.createElement('div');
    item.className = 'card';
    item.innerHTML = `
      <h3>${sonho.titulo}</h3>
      <p>${sonho.descricao}</p>
      <small>🗓️ ${sonho.data} | 💤 ${sonho.tipo} | 😊 ${sonho.humor}</small>
      <div class="botoes">
        <button onclick="editarSonho('${sonho.id}')">✏️ Editar</button>
        <button onclick="deletarSonho('${sonho.id}')">🗑️ Excluir</button>
      </div>
    `;
    lista.appendChild(item);
  });
}

// Cria novo sonho
async function criarSonho(dados) {
  const user = (await supabase.auth.getUser()).data.user;
  const { error } = await supabase.from('sonhos').insert([
    {
      ...dados,
      user_id: user.id,
    },
  ]);

  if (error) alert('Erro ao salvar: ' + error.message);
  else alert('Sonho salvo com sucesso!');
}

// Deleta sonho
async function deletarSonho(id) {
  if (!confirm('Tem certeza que deseja excluir este sonho?')) return;

  const { error } = await supabase.from('sonhos').delete().eq('id', id);
  if (error) alert('Erro ao deletar: ' + error.message);
  else carregarSonhos();
}

// Redireciona para editar
function editarSonho(id) {
  window.location.href = `editar.html?id=${id}`;
}

// Carrega sonho em editar.html
async function carregarSonhoParaEdicao(id) {
  const { data, error } = await supabase.from('sonhos').select('*').eq('id', id).single();
  if (error) {
    alert('Erro ao carregar sonho: ' + error.message);
    return;
  }

  document.getElementById('id').value = data.id;
  document.getElementById('titulo').value = data.titulo;
  document.getElementById('descricao').value = data.descricao;
  document.getElementById('tipo').value = data.tipo;
  document.getElementById('humor').value = data.humor;
  document.getElementById('data').value = data.data;
}

// Atualiza sonho editado
async function atualizarSonho(dados) {
  const { error } = await supabase
    .from('sonhos')
    .update({
      titulo: dados.titulo,
      descricao: dados.descricao,
      tipo: dados.tipo,
      humor: dados.humor,
      data: dados.data,
    })
    .eq('id', dados.id);

  if (error) alert('Erro ao atualizar: ' + error.message);
}
