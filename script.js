var jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];

function salvarJogadores() {
  localStorage.setItem("jogadores", JSON.stringify(jogadores));
}

function buscarJogador(nome) {
  for (var i = 0; i < jogadores.length; i++) {
    if (jogadores[i].nome === nome) {
      return jogadores[i];
    }
  }
  return null;
}

function adicionarJogador(nome) {
  if (buscarJogador(nome)) {
    alert("Jogador já existe.");
  } else {
    jogadores.push({ nome: nome, vitorias: 0, empates: 0, derrotas: 0, partidas: 0 });
    salvarJogadores();
    atualizarSelects();
    alert("Jogador adicionado!");
  }
}

function adicionarJogadorDOM() {
  var nome = document.getElementById("nomeJogador").value.trim();
  if (nome !== "") {
    adicionarJogador(nome);
    document.getElementById("nomeJogador").value = "";
    atualizarRanking();
    atualizarHistorico();
  }
}

function registrarPartidaDOM() {
  var nome1 = document.getElementById("jogador1").value;
  var nome2 = document.getElementById("jogador2").value;
  var escolha1 = document.getElementById("escolha1").value;
  var escolha2 = document.getElementById("escolha2").value;

  var resultado = registrarPartida(nome1, escolha1, nome2, escolha2);
  exibirResultado(resultado);
  atualizarRanking();
  atualizarHistorico();
  salvarJogadores();
}

function registrarPartida(nome1, escolha1, nome2, escolha2) {
  var opcoes = ['pedra', 'papel', 'tesoura'];

  if (opcoes.indexOf(escolha1) === -1 || opcoes.indexOf(escolha2) === -1) {
    return "Escolha inválida.";
  }

  var jogador1 = buscarJogador(nome1);
  var jogador2 = buscarJogador(nome2);

  if (!jogador1 || !jogador2) {
    return "Jogador não encontrado.";
  }

  if (jogador1.nome === jogador2.nome) {
    return "Escolha dois jogadores diferentes.";
  }

  jogador1.partidas++;
  jogador2.partidas++;

  if (escolha1 === escolha2) {
    jogador1.empates++;
    jogador2.empates++;
    return "Empate!";
  } else if (
    (escolha1 === 'pedra' && escolha2 === 'tesoura') ||
    (escolha1 === 'papel' && escolha2 === 'pedra') ||
    (escolha1 === 'tesoura' && escolha2 === 'papel')
  ) {
    jogador1.vitorias++;
    jogador2.derrotas++;
    return jogador1.nome + " venceu!";
  } else {
    jogador2.vitorias++;
    jogador1.derrotas++;
    return jogador2.nome + " venceu!";
  }
}

function exibirResultado(texto) {
  var div = document.getElementById("resultado");
  div.textContent = texto;
  div.classList.remove("d-none");
}

function atualizarSelects() {
  var select1 = document.getElementById("jogador1");
  var select2 = document.getElementById("jogador2");

  var optionsHTML = "";

  for (var i = 0; i < jogadores.length; i++) {
    optionsHTML += "<option value='" + jogadores[i].nome + "'>" + jogadores[i].nome + "</option>";
  }

  select1.innerHTML = optionsHTML;
  select2.innerHTML = optionsHTML;
}

function atualizarRanking() {
  var ul = document.getElementById("ranking");
  ul.innerHTML = "";

  var listaRanking = [];

  for (var i = 0; i < jogadores.length; i++) {
    var jogador = jogadores[i];
    jogador.pontos = jogador.vitorias * 3 + jogador.empates;
    listaRanking.push(jogador);
  }

  listaRanking.sort(function (a, b) {
    return b.pontos - a.pontos;
  });

  var rankingHTML = "";

  for (var i = 0; i < listaRanking.length; i++) {
    rankingHTML += "<li class='list-group-item'>" + (i + 1) + ". " + listaRanking[i].nome + " - " + listaRanking[i].pontos + " pts</li>";
  }

  ul.innerHTML = rankingHTML;
}

function atualizarHistorico() {
  var ul = document.getElementById("historico");
  var historicoHTML = "";

  for (var i = 0; i < jogadores.length; i++) {
    historicoHTML += "<li class='list-group-item'>" + jogadores[i].nome + ": " + jogadores[i].partidas + " partidas</li>";
  }

  ul.innerHTML = historicoHTML;
}

document.addEventListener("DOMContentLoaded", function () {
  atualizarSelects();
  atualizarRanking();
  atualizarHistorico();
});
