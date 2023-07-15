    // Objeto com as frases e autores
    const frases = [
      {
        frase: "Ajudar ao próximo é a melhor forma de ajudar a si mesmo",
        autor: "Fernando Matos"
      },
      {
        frase: "A verdadeira elegância não está na roupa que veste, está na ajuda dada ao próximo, na honestidade e na palavra honrada. Ser elegante é ter caráter.",
        autor: "Scheila F. Scisloski"
      },
      {
        frase: "Faça o impossível para ajudar o próximo e peça apenas o possível quando for ajudado.",
        autor: "Lucas xavier"
      },
      {
        frase: "A prece maior a gente não faz ajoelhado, a gente faz é ajudando o próximo...!",
        autor: "Marta Souza"
      },
      {
        frase: "A melhor maneira de ultrapassarmos nossas dificuldades é ajudar o próximo, com sinceridade e amor, a resolver o problema dele.A melhor maneira de ultrapassarmos nossas dificuldades é ajudar o próximo, com sinceridade e amor, a resolver o problema dele.",
        autor: "Leandro Tugumi"
      },
      {
        frase: "Se você considera que ajudar o próximo é desperdiçar um minuto do seu tempo ocioso, pense que para outra pessoa um minuto pode ser tudo o que lhe resta.",
        autor: "Mayara Vellardi"
      },
      {
        frase: "Para ajudar o próximo não há necessidade de alto-falante.",
        autor: "Allison Porfirio"
      },
      {
        frase: "A mais perfeita oração é ajudar o próximo sem dizer uma palavra, apenas dar-lhe comida.",
        autor: "Clenir Terezinha Corá"
      },
      {
        frase: "A beleza mais linda que o Ser Humano pode ter, é o próximo ajudar sem sua mão estender!",
        autor: "Sónia Costa Rodrigues"
      },
      {
        frase: "Ajudar o próximo nunca foi uma opção, mas sempre foi um destaque entre muitos, ser humilde não é sinal de fraqueza, é uma forma de pensar melhor e saber que poderíamos ser nós em um vida injusta.",
        autor: "Sayure"
      },
      {
        frase: "Ajudar o próximo não significa ser humilde, assim como errar não significa está condenado.",
        autor: "Sayure"
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