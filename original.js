var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var palpites = document.querySelector('.palpites');
var certoErrado = document.querySelector('.ultimoResultado');
var msgResultado = document.querySelector('.baixoOuAlto');
var botaoEnviar = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');
var contagemPalpites = 1;
var botaoReinicio;
campoPalpite.focus();

function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = 'Palpites anteriores: ';
    }
    palpites.textContent += palpiteUsuario + ' ';
    if (palpiteUsuario === numeroAleatorio) {
        certoErrado.textContent = 'Parabéns! Você acertou!';
        certoErrado.className = 'acerto';
        msgResultado.textContent = '';
        configFimDeJogo();
    } else if (contagemPalpites === 10) {
        certoErrado.textContent = '!!!FIM DE JOGO!!!';
        msgResultado.textContent = '';
        configFimDeJogo();
    } else {
        certoErrado.textContent = 'Errado!';
        certoErrado.className = 'erro';
        if (palpiteUsuario < numeroAleatorio) {
            msgResultado.textContent = 'Seu palpite foi muito baixo!';
        } else if (palpiteUsuario > numeroAleatorio) {
            msgResultado.textContent = 'Seu palpite foi muito alto!';
        }
    }
    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();
}
botaoEnviar.addEventListener('click', conferirPalpite);

function configFimDeJogo() {
    campoPalpite.disabled = true;
    botaoEnviar.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
    contagemPalpites = 1;
    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0; i < reiniciarParas.length; i++) {
        reiniciarParas[i].textContent = '';
    }
    botaoReinicio.parentNode.removeChild(botaoReinicio);
    campoPalpite.disabled = false;
    botaoEnviar.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();
    certoErrado.style.backgroundColor = 'white';
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}