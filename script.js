var altura = [
  document.querySelector("#q1"),
  document.querySelector("#q2"),
  document.querySelector("#q3"),
  document.querySelector("#q4"),
  document.querySelector("#q5"),
];
var butao = [
  document.querySelector("#bt-q1"),
  document.querySelector("#bt-q2"),
  document.querySelector("#bt-q3"),
  document.querySelector("#bt-q4"),
  document.querySelector("#bt-q5"),
];
var pr = [
  document.querySelector(`.pr1`),
  document.querySelector(`.pr2`),
  document.querySelector(`.pr3`),
  document.querySelector(`.pr4`),
  document.querySelector(`.pr5`),
];

butao[0].addEventListener("click", function () {
  if (altura[0].style.height == "80px") {
    altura[0].style.height = "110px";
    this.textContent = "-";

    var resposta =
      "Digite a reposta aqui;Digite a reposta aqui;Digite a reposta aqui;Digite a reposta aqui;Digite a reposta aqui;Digite a reposta aqui;Digite a reposta aqui;Digite a reposta aqui;Digite a reposta aqui;";

    pr[0].innerHTML = resposta;
  } else {
    this.textContent = "+";
    altura[0].style.height = "80px";
    pr[0].innerHTML = "";
  }
});
butao[1].addEventListener("click", function () {
  if (altura[1].style.height == "80px") {
    altura[1].style.height = "110px";
    this.textContent = "-";
    var resposta = "Digite a reposta aqui;";
    pr[1].innerHTML = resposta;
  } else {
    this.textContent = "+";
    altura[1].style.height = "80px";
    pr[1].innerHTML = "";
  }
});

butao[2].addEventListener("click", function () {
  if (altura[2].style.height == "80px") {
    altura[2].style.height = "110px";
    this.textContent = "-";
    var resposta = "Digite a reposta aqui;";
    pr[2].innerHTML = resposta;
  } else {
    this.textContent = "+";
    altura[2].style.height = "80px";
    pr[2].innerHTML = "";
  }
});

butao[3].addEventListener("click", function () {
  if (altura[3].style.height == "80px") {
    altura[3].style.height = "110px";
    this.textContent = "-";
    var resposta = "Digite a reposta aqui;";
    pr[3].innerHTML = resposta;
  } else {
    this.textContent = "+";
    altura[3].style.height = "80px";
    pr[3].innerHTML = "";
  }
});

butao[4].addEventListener("click", function () {
  if (altura[4].style.height == "80px") {
    altura[4].style.height = "110px";
    this.textContent = "-";
    var resposta = "Digite a reposta aqui;";
    pr[4].innerHTML = resposta;
  } else {
    this.textContent = "+";
    altura[4].style.height = "80px";
    pr[4].innerHTML = "";
  }
});
butao[5].addEventListener("click", function () {
  if (altura[5].style.height == "80px") {
    altura[5].style.height = "110px";
    this.textContent = "-";
    var resposta = "Digite a reposta aqui;";
    pr[5].innerHTML = resposta;
  } else {
    this.textContent = "+";
    altura[5].style.height = "80px";
    pr[5].innerHTML = "";
  }
});
