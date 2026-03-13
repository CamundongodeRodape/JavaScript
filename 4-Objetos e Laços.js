// Sistema simples para gerenciar o estoque de uma livraria

// 1) Array de objetos para armazenar os livros
const estoque = [];

// 2) Funcoes para gerenciar o estoque
function adicionarLivro(titulo, autor, quantidade) {
  // 3) Verifica se o livro ja existe
  for (const livro of estoque) {
    if (livro.titulo === titulo) {
      console.log(`Livro "${titulo}" ja existe no estoque.`);
      return;
    }
  }

  estoque.push({ titulo, autor, quantidade });
  console.log(`Livro "${titulo}" adicionado ao estoque.`);
}

function removerLivro(titulo) {
  // 3) Verifica se o livro existe
  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].titulo === titulo) {
      estoque.splice(i, 1);
      console.log(`Livro "${titulo}" removido do estoque.`);
      return;
    }
  }

  console.log(`Livro "${titulo}" nao encontrado no estoque.`);
}

function atualizarQuantidade(titulo, novaQuantidade) {
  // 3) Verifica se o livro existe
  for (const livro of estoque) {
    if (livro.titulo === titulo) {
      livro.quantidade = novaQuantidade;
      console.log(`Quantidade de "${titulo}" atualizada para ${novaQuantidade}.`);
      return;
    }
  }

  console.log(`Livro "${titulo}" nao encontrado no estoque.`);
}

function listarLivros() {
  // 4) Laco para listar
  if (estoque.length === 0) {
    console.log("Estoque vazio.");
    return;
  }

  console.log("Livros no estoque:");
  for (const livro of estoque) {
    console.log(`- ${livro.titulo} | ${livro.autor} | Qtd: ${livro.quantidade}`);
  }
}

// Exemplo de uso
adicionarLivro("Dom Casmurro", "Machado de Assis", 10);
adicionarLivro("O Hobbit", "J.R.R. Tolkien", 5);
listarLivros();
atualizarQuantidade("O Hobbit", 8);
removerLivro("Dom Casmurro");
listarLivros();
