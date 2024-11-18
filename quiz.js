
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar
const nome = document.getElementById('nome').value;
// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao: 1,
    pergunta: "Quantas casas decimais tem o número pi?",
    alternativaA: "duas",
    alternativaB: "centenas",
    alternativaC: "infinitas",
    alternativaD: "milhares",
    correta: "infinitas",
}
const q2 = {
    numQuestao: 2,
        pergunta: "Quem foi o primeiro presidente do Brasil após a Proclamação da República?",
        alternativaA: "Washington Luís",
        alternativaB: "Marechal Deodoro da Fonseca",
        alternativaC: "João Goulart",
        alternativaD: " Humberto de Alencar Castelo Branco",
        correta: "Marechal Deodoro da Fonseca",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "O que a palavra legend significa em português?",
    alternativaA : "Legenda",
    alternativaB : "Lenda",
    alternativaC : "Conto",
    alternativaD : "Legendário",
    correta      : "Lenda",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : " Qual é o maior rio inteiramente do Brasil?",
    alternativaA : " Rio Paraná",
    alternativaB : "Rio Madeira",
    alternativaC : "Rio São Francisco",
    alternativaD : "Rio Araguaia",
    correta      : "Rio São Francisco",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : " Qual a nacionalidade de Che Guevara?”?",
    alternativaA : "Peruana",
    alternativaB : "Argentina",
    alternativaC : "Panamenha",
    alternativaD : "Cubana",
    correta      : "Argentina",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Em que ordem surgiram os modelos atômicos?",
    alternativaA : "Thomson, Dalton, Rutherford, Rutherford-Bohr",
    alternativaB : "Dalton, Rutherford-Bohr, Thomson, Rutherford",
    alternativaC : "Dalton, Thomson, Rutherford-Bohr, Rutherford",
    alternativaD : "Dalton, Thomson, Rutherford, Rutherford-Bohr",
    correta      : "Dalton, Thomson, Rutherford, Rutherford-Bohr",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Quem escreveu o livro Grande Sertão: Veredas?",
    alternativaA : "Guimarães Rosa",
    alternativaB : "Rachel de Queiroz",
    alternativaC : "Mário de Andrade",
    alternativaD : "Machado de Assis",
    correta      : "Guimarães Rosa",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Qual era o nome verdadeiro de Lampião?",
    alternativaA : "João Ferreira da Silva",
    alternativaB : "Virgulino Ferreira da Silva",
    alternativaC : "Francisco Teixeira",
    alternativaD : "Antônio Silvino",
    correta      : "Virgulino Ferreira da Silva",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual é a única capital do Brasil cortada pela linha do Equador?",
    alternativaA : "Belém",
    alternativaB : "São Luís",
    alternativaC : "Macapá",
    alternativaD : "Boa Vista",
    correta      : "Macapá",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : " Quem foi o principal inimigo dos cangaceiros no sertão nordestino?",
    alternativaA : "Os jagunços",
    alternativaB : " Os indígenas",
    alternativaC : "Os coronéis e suas milícias",
    alternativaD : "As tropas do governo federal",
    correta      : "Os coronéis e suas milícias",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}