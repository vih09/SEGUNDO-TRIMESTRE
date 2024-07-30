const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao sair da escola, você se depara com uma nova tecnologia de chat capaz de responder todas as dúvidas, gerar imagens e áudios hiper-realistas. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é aterroriante!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é incrível!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após descobrir a IA, sua professora de tecnologia propõe um trabalho sobre o uso da Inteligência Artificial na educação. Como você decide proceder?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca que usa IA para encontrar informações relevantes e explicá-las em linguagem simples.",
                afirmacao: "afirmação"
            },
            {
                texto: "Escreve o trabalho com base em pesquisas, conversas com colegas e conhecimentos próprios.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Durante um debate sobre IA na sala de aula, discute-se seu impacto no futuro do trabalho. Qual é sua posição?",
        alternativas: [
            {
                texto: "Defende que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "afirmação"
            },
            {
                texto: "Expressa preocupação com o impacto da IA na perda de empregos e defende proteção aos trabalhadores.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após o debate, você precisa criar uma imagem que represente sua visão sobre IA. Como você decide proceder?","O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial."
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "afirmação"
            },
        },
        {
            enunciado: "Durante um debate sobre IA na sala de aula, discute-se seu impacto no futuro do trabalho. Qual é sua posição?",
            alternativas: [
                {
                    texto: "Defende que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                    afirmacao: "afirmação"
                },
    …    caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas();
    }
    
    function mostraAlternativas() {
    },
    {
        enunciado: "Durante um debate sobre IA na sala de aula, discute-se seu impacto no futuro do trabalho. Qual é sua posição?",
        alternativas: [
            {
                texto: "Defende que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "afirmação"
            },
…    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = do
    },
    {
        enunciado: "Durante um debate sobre IA na sala de aula, discute-se seu impacto no futuro do trabalho. Qual é sua posição?",
        alternativas: [
            {
                texto: "Defende que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "afirmação"
            },
…    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botcument.createElement("button");
        bot
    function mostraAlternativas() {
        for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement("button");
            bot
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Em um trabalho de biologia em grupo, u"O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial."m membro decide usar a IA para completar o trabalho, resultando em um texto idêntico ao do chat. Qual é sua atitude?",
        alternativas: [
            {
                texto: "Acredita que contribuir com comandos para o chat não é um problema, já que todos participaram.",
                afirmacao: "afirmação"
            },
            {
                texto: "Revisa o trabalho, reconhecendo que máquinas podem errar, e acrescenta suas próprias perspectivas pessoais.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
},

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function () {
            atual++;
            mostraPergunta();
        })
    ]
},
];

let atual = 0;
let perguntaAtual;
},

function mostraPergunta() {
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
mostraAlternativas();
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();