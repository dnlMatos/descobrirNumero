var numAleatorio = Math.floor(Math.random() * 100 + 1);
var botaoEnviar = document.querySelector('.envioPalpite');
var listaPalpites = document.querySelector('.palpites');
var certoErrado = document.querySelector('.ultimoNumero');
var resultadoPalpite = document.querySelector('.resultado');

function verificaPalpite() {
    var palpiteUsuario = Number(campoPalpite.value);
    var contPalpite = 1;

    if (palpiteUsuario === numAleatorio) {
        listaPalpites += palpiteUsuario;
        certoErrado.className = 'acerto';
        certoErrado.textContent = 'Parabéns, você acertou';
    } else if (contPalpite === 10) {
        certoErrado.textContent = "Infelizmente você já usou suas tentativas"
        resultadoPalpite.textContent = '';
    } else {
        certoErrado.className = 'erro';
        certoErrado.textContent = 'Errou';
        if (palpiteUsuario < numAleatorio) {
            resultadoPalpite.textContent = 'Seu palpite é inferior ao escolhido';
        } else {
            resultadoPalpite.textContent = 'Seu palpite está acima do escolhido';
        }
    }
    resultadoPalpite = '';
    campoPalpite.focus();
    contPalpite++;
    palpites.textContent = 'Palpites testados: ';
    palpites += palpiteUsuario + ' ';
    console.log(numAleatorio);

}
botaoEnviar.addEventListener('click', verificaPalpite)