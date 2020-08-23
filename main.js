var numAleatorio = Math.floor(Math.random() * 100 + 1);
var btnEnviar = document.querySelector(".envioPalpite");
var info1 = document.querySelector(".palpites");
var info2 = document.querySelector(".ultimoResultado");
var info3 = document.querySelector(".baixoOuAlto");
var campoPalpite = document.querySelector(".campoPalpite");
campoPalpite.focus();

function conferirPalpite() {
  var palpiteUsuario = Number(campoPalpite.value);
  info1.className = "palpites";
  var cont = 0;

  if (palpiteUsuario === numAleatorio) {
    //acerto
    info1.textContent = "";
    info3.textContent = "Parabens, você acertou dessa vez!!!";
    info2.className = "acerto";
    info2.textContent = "Palpite correto!";
    fimDoJogo();
  } else if (cont === 10) {
    fimDoJogo();
  } else {
    if (palpiteUsuario > numAleatorio) {
      info3.textContent = "Seu palpite está acima do esperado!";
    } else {
      info3.textContent = "Seu palpite está abaixo do esperado!";
    }
    campoPalpite.value = "";
    campoPalpite.focus();
    info1.textContent += palpiteUsuario + " - ";
    info2.textContent = "Errado!";
    info2.className = "erro";
  }
  cont += 1;
}

console.log(numAleatorio);
console.log(info1);

function fimDoJogo() {
  info2.textContent = "FIM DO JOGO!!!";
  info2.className = "fimJogo";
  campoPalpite.disable = true;
  btnEnviar.disable = true;
  var btnReinicio = document.createElement("button");
  btnReinicio.textContent = "Reiniciar jogo";
  document.body.appendChild(btnReinicio);
  btnReinicio.addEventListener("click", reiniciarJogo);
}

function reiniciarJogo() {}

btnEnviar.addEventListener("click", conferirPalpite);
