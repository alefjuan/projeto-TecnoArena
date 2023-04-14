function carregar() {
  let sair = window.document.getElementById("sair");
  sair.addEventListener("click", clicar);

  function clicar() {
    let sair = document.getElementById("sair");
    confirm;
    if (confirm("Você deseja sair")) {
      window.location.href = "/Login/index.html";
    } else {
      // Código a ser executado se o usuário clicar em "Cancelar"
      console.log("Usuário cancelou.");
    }
  }
  let inatividadeTimer; // Variável para armazenar o temporizador

function iniciarTemporizador() {
  // Função para iniciar o temporizador
  inatividadeTimer = setTimeout(function() {
    // Lógica para deslogar o usuário
    console.log("Usuário deslogado por inatividade.");
    window.location.href = "/Login/index.html";
  }, 60000); // 60000 milissegundos = 1 minuto
}

function reiniciarTemporizador() {
  // Função para reiniciar o temporizador
  clearTimeout(inatividadeTimer);
  iniciarTemporizador();
}

// Eventos para detectar atividade do usuário
document.addEventListener('mousemove', reiniciarTemporizador);
document.addEventListener('keydown', reiniciarTemporizador);
document.addEventListener('touchstart', reiniciarTemporizador);

// Iniciar o temporizador quando a página é carregada
iniciarTemporizador();

function fazerPausaParaSeAlongar() {
  alert("Hora de fazer uma pausa para se alongar!");
}
setInterval(fazerPausaParaSeAlongar, 1000 * 60 * 60);

document.addEventListener("keydown", function(event) {
  if(event.key ==="h")
  {
    alert("para ajuda, consulte um dos gestores do programa")
  }

});
const gestores=[
  Alef, 
  Juan,
  Ferreira
]
gestores.forEach(function(nomes)
{
  console.log(nomes)
})
}
