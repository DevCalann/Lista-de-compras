// Lista de compras armazenada em memória
let listaDeCompras = [];

// Função para adicionar um item à lista
function addItem() {
  const input = document.getElementById('item');
  const item = input.value.trim(); // Remove espaços extras no início e no final do valor digitado
  
  // Verifica se o item não está vazio
  if (item) {
    listaDeCompras.push(item);// Adiciona o item na listaDeCompras
    input.value = '';// Limpa o campo de input após adicionar o item
    renderLista();// Atualiza a lista exibida na interface
  }
}

// Função para renderizar a lista
function renderLista() {
  const listaElement = document.getElementById('listaCompras');
  listaElement.innerHTML = ''; // Limpa a lista exibida antes de adicionar os novos itens

  // Itera sobre a listaDeCompras e cria uma "linha" para cada item
  listaDeCompras.forEach((item, index) => {
    const row = document.createElement('div'); // Cria uma nova linha
    row.classList.add('row'); // Adiciona a classe 'row' para aplicar o estilo de tabela

    // Cria a coluna com o nome do item
    const itemColumn = document.createElement('div');
    itemColumn.textContent = item;

    // Cria o botão de editar
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.onclick = () => editItem(index);

    // Cria o botão de deletar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Deletar';
    deleteButton.onclick = () => removeItem(index);

    // Adiciona as colunas (nome, editar, excluir) à linha
    row.appendChild(itemColumn);
    row.appendChild(editButton);
    row.appendChild(deleteButton);

    listaElement.appendChild(row);
  });
}

// Função para remover um item da lista, com base no índice
function removeItem(index) {
  listaDeCompras.splice(index, 1);
  renderLista();
}

// Função para editar um item da lista
function editItem(index) {
  const novoItem = prompt('Edite o item:', listaDeCompras[index]);
  
  // Se o usuário não cancelar e inserir um novo valor, atualiza o item na listaDeCompras
  if (novoItem) {
    listaDeCompras[index] = novoItem; // Substitui o item no índice especificado pelo novo valor digitado
    renderLista();
  }
}

// Adicionar o evento "keydown" para o campo de input
document.getElementById('item').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addItem(); // Chama a função de adicionar o item
  }
});
