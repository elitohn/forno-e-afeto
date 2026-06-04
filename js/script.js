// ==========================================
// 1. LÓGICA DO BOTÃO DE ENCOMENDA
// ==========================================

// Busca no documento HTML o elemento que possui a classe ".botao-encomenda"
// e o salva na constante 'botaoEncomenda'.
const botaoEncomenda = document.querySelector(".botao-encomenda");

// Busca no documento HTML o elemento que possui a classe ".orientacoes-encomenda"
// e o salva na constante 'orientacoesEncomenda'.
const orientacoesEncomenda = document.querySelector(".orientacoes-encomenda");

// Adiciona um "ouvinte de eventos" ao botão. Isso diz ao navegador:
// "Quando acontecer um 'click' neste botão, execute a função a seguir".
botaoEncomenda.addEventListener("click", function () {

    // O método 'toggle' alterna a presença de uma classe.
    // Se o elemento já tiver a classe "oculto", ela será removida (o conteúdo aparece).
    // Se não tiver a classe, ela será adicionada (o conteúdo desaparece).
    orientacoesEncomenda.classList.toggle("oculto");

    // Verifica (através do 'if') se o elemento das orientações agora possui a classe "oculto".
    // Ou seja: "As orientações estão escondidas neste momento?"
    if (orientacoesEncomenda.classList.contains("oculto")) {

        // Se sim (estão escondidas), muda o texto dentro do botão para "Solicitar encomenda".
        botaoEncomenda.textContent = "Solicitar encomenda";

    // O 'else' significa "caso contrário" (ou seja, as orientações NÃO têm a classe "oculto" e estão visíveis).
    } else {

        // Se estiverem visíveis, muda o texto do botão para dar a opção de esconder as informações.
        botaoEncomenda.textContent = "Ocultar orientações";

    } // Fim do bloco if/else

}); // Fim da função e do ouvinte de eventos


// ==========================================
// 2. LÓGICA DAS MENSAGENS DOS PRODUTOS
// ==========================================

// Seleciona todos os cards que receberam a classe "card-interativo".
// Como existem vários cards, usamos querySelectorAll.
const cardsDestaque = document.querySelectorAll(".card-interativo");

// Seleciona o parágrafo que exibirá a mensagem dinâmica.
// Como existe apenas um elemento com esse id, usamos querySelector.
const mensagemDestaque = document.querySelector("#mensagem-destaque");

// Guarda a mensagem original que aparece antes de qualquer clique.
const mensagemOriginal = "Clique em um dos destaques para ver uma sugestão de consumo.";

// Guarda qual produto está selecionado no momento.
// No início, nenhum produto está selecionado.
let produtoAtual = null;

// Cria uma função responsável por voltar a mensagem para o estado inicial.
function voltarMensagemOriginal() {
    mensagemDestaque.textContent = mensagemOriginal;
    produtoAtual = null;
}

// Cria uma função responsável por exibir a mensagem de acordo com o produto clicado.
// A palavra "produto" representa a informação que será recebida pela função.
function mostrarMensagem(produto) {

    // Verifica se o produto recebido é o pão.
    // Se for, altera o texto da área de mensagem para a sugestão correspondente.
    if (produto === "pao") {
        mensagemDestaque.textContent = "O pão rústico de fermentação natural é ideal para quem aprecia casca crocante, miolo macio e sabor mais intenso.";
    }

    // Verifica se o produto recebido é o croissant.
    // Se for, altera o texto da área de mensagem para a sugestão correspondente.
    if (produto === "croissant") {
        mensagemDestaque.textContent = "O croissant amanteigado combina muito bem com café coado ou cappuccino, especialmente em um lanche da tarde.";
    }

    // Verifica se o produto recebido é o bolo.
    // Se for, altera o texto da área de mensagem para a sugestão correspondente.
    if (produto === "bolo") {
        mensagemDestaque.textContent = "O bolo caseiro de laranja é uma opção afetiva e simples, adequada para compartilhar em momentos de pausa.";
    }

    // Verifica se o produto recebido é o café.
    // Se for, altera o texto da área de mensagem para a sugestão correspondente.
    if (produto === "cafe") {
        mensagemDestaque.textContent = "O café coado especial valoriza aroma, equilíbrio e preparo cuidadoso, combinando com os principais itens da vitrine.";
    }
}

// Percorre todos os cards que receberam a classe "card-interativo".
// Para cada card encontrado, será configurado um evento de clique.
cardsDestaque.forEach(function(card) {

    // Adiciona um ouvinte de evento ao card atual.
    // Quando o usuário clicar neste card, a função interna será executada.
    card.addEventListener("click", function(evento) {

        // Impede que o clique no card também seja interpretado como clique fora dele.
        evento.stopPropagation();

        // Lê o valor do atributo "data-produto" do card clicado.
        // Esse valor indica qual produto o card representa.
        const produtoSelecionado = card.dataset.produto;

        // Se o usuário clicar novamente no mesmo produto,
        // a mensagem volta para o texto original.
        if (produtoSelecionado === produtoAtual) {
            voltarMensagemOriginal();
            return;
        }

        // Se o usuário clicar em um produto diferente,
        // a mensagem daquele produto será exibida.
        mostrarMensagem(produtoSelecionado);

        // Atualiza o controle para lembrar qual produto está selecionado.
        produtoAtual = produtoSelecionado;
    });
});

// Adiciona um evento de clique no documento inteiro.
// Se o usuário clicar fora dos cards, a mensagem volta ao estado original.
document.addEventListener("click", function() {
    voltarMensagemOriginal();
});