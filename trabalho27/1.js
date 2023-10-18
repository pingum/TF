const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', selectOption);
        optionsContainer.appendChild(button);
    });
}

function selectOption(event) {
    const selectedButton = event.target;
    const correct = questions[currentQuestionIndex].correctAnswer;
    if (selectedButton.innerText === questions[currentQuestionIndex].options[correct]) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.style.display = 'none';
    optionsContainer.style.display = 'none';
    nextButton.style.display = 'none';
    resultContainer.style.display = 'block';
    document.getElementById('score').innerText = score;
}

nextButton.addEventListener('click', startQuiz);
startQuiz();

nextButton.addEventListener('click', startQuiz);
startQuiz();
document.getElementById("meuBotao").addEventListener("click", function() {
    window.location.href = "pagina4.html";
});
document.getElementById("check-answers-button").addEventListener("click", function() {
    var respostasCorretas = ["B"]; // Resposta correta para a pergunta
    var respostasUsuario = [];
    var opcoes = document.getElementsByName("answer");

    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            respostasUsuario.push(opcoes[i].value);
        }
    }

    var pontuacao = 0;
    for (var i = 0; i < respostasCorretas.length; i++) {
        if (respostasUsuario[i] === respostasCorretas[i]) {
            pontuacao++;
        }
    }

    var resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "Você acertou " + pontuacao + " pergunta(s) de um total de " + respostasCorretas.length + ".";
    
});