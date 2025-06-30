criaCartao(
    'Ciências',
    'Qual é o símbolo químico da água?',
    'O símbolo da água é H2O.'
)
criaCartao(
    'Ciências',
    'Quem é conhecido como o pai da teoria da evolução?',
    'Charles Darwin é o pai da teoria da evolução.'
)
criaCartao(
    'Ciências',
    'O que é a fotossíntese?',
    'É o processo que as plantas usam para converter luz solar em energia.'
)
criaCartao(
    'Ciências',
    'Qual é a camada mais externa da Terra?',
    'A camada mais externa da Terra é a crosta terrestre.'
)

function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)

    container.appendChild(cartao)
}
