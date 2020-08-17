var numRandom = Math.random * 100 + 1;
var palpiteUsuario = document.querySelector(".campoPalpite");
const btnEnviar = document.querySelector('.envioPalpite');
var baixoOuAlto = document.querySelector('.baixoOuAlto')
var numeroDePalpites = 0;
var palpites = [];

function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value);
    for (let i = 1; numeroDePalpites <= 10; i++) {
        if (numeroDePalpites <= 10) {
            if (palpiteUsuario > numRandom) {
                baixoOuAlto.textContent = 'Valor acima do escolhido';
                ultimoResultado.classList.add('.errou')
            } else if (palpiteUsuario < numRandom) {
                baixoOuAlto.textContent = 'Valor abaixo do escolhido';
                ultimoResultado.classList.add('.errou')
            } else {
                ultimoResultado.textContent = 'Parabéns! Você acertou!';
                ultimoResultado.classList.add('.acertou')
                fimDeJogo();
            }
        }
        palpiteUsuario.value = '';
        palpiteUsuario.focus();
        palpites[i] += palpites + ' ';
        numeroDePalpites += 1;
    }
    ultimoResultado.textContent = 'FIM DE JOGO';
    fimDeJogo();
}

function fimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo());
}

function reiniciarJogo() {
    contagemPalpites = 1;

    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0; i < reiniciarParas.length; i++) {
        reiniciarParas[i].textContent = '';
    }

    botaoReinicio.parentNode.removeChild(botaoReinicio);

    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();

    ultimoResultado.style.backgroundColor = 'white';

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}