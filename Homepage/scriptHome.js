function carregar() {
  let sair = window.document.getElementById("sair");
  sair.addEventListener("click", clicar);

  function clicar() {
    let sair = document.getElementById("sair");
    confirm;
    if (confirm("Você deseja sair")) {
      window.location.href = "/Login/index.html";
    } else {
      console.log("Usuário cancelou.");
    }
  }
  let inatividadeTimer;

  function iniciarTemporizador() {
    inatividadeTimer = setTimeout(function () {
      console.log("Usuário deslogado por inatividade.");
      window.location.href = "/Login/index.html";
    }, 60000);
  }

  function reiniciarTemporizador() {
    clearTimeout(inatividadeTimer);
    iniciarTemporizador();
  }

  document.addEventListener("mousemove", reiniciarTemporizador);
  document.addEventListener("keydown", reiniciarTemporizador);
  document.addEventListener("touchstart", reiniciarTemporizador);

  iniciarTemporizador();

  function fazerPausaParaSeAlongar() {
    alert("Hora de fazer uma pausa para se alongar!");
  }
  setInterval(fazerPausaParaSeAlongar, 1000 * 60 * 60);

  document.addEventListener("keydown", function (event) {
    if (event.key === "h") {
      alert("para ajuda, consulte um dos gestores do programa");
    }
  });
  const gestores = [Alef, Juan, Ferreira].toLocaleString;

  gestores.forEach(function (nomes) {
    console.log(nomes);
  });
  const alunos = [Gabriel, Correa, Maria, Davi, Lemos, Vinicius, Leticia];

  console.log(alunos.sort());
  console.log(alunos.filter());
  console.log(alunos.map());
}
