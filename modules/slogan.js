    // Objeto com as frases e autores
    const frases = [
      {
        frase: "Frase 1",
        autor: "Autor 1"
      },
      {
        frase: "Frase 2",
        autor: "Autor 2"
      },
      {
        frase: "Frase 3",
        autor: "Autor 3"
      }
    ];

    // Função para sortear uma frase aleatória
    function sortearFrase() {
      const indice = Math.floor(Math.random() * frases.length);
      return frases[indice];
    }

    // Atualiza os elementos HTML com a frase sorteada
    function atualizarSlogan() {
      const sloganTextElement = document.getElementById('slogan-text');
      const sloganAuthorElement = document.getElementById('slogan-author');

      const fraseSorteada = sortearFrase();
      sloganTextElement.textContent = fraseSorteada.frase;
      sloganAuthorElement.textContent = "- " + fraseSorteada.autor;
    }

    // Chama a função de atualizar o slogan ao carregar a página
    window.onload = atualizarSlogan;