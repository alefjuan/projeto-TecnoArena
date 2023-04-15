function carregar() {
  (function () {
    console.log("");
  })();

  let enviar = document.getElementsByName("Envio")[0];
  enviar.addEventListener("click", enviarr);

  function enviarr() {
    prompt("Digite a senha que voce acha que é a mais recente");
    alert("Uma tela de redefinição de senha foi enviada para seu email!");
    window.location.href = "/Login/index.html";
  }
  (function (nome, sobrenome) {
    console.log("Argumento a: " + nome);
    console.log("Argumento b: " + sobrenome);
  })("", '"');

  document.getElementById("meuCampo").onfocus = function () {
    console.log("");
  };

  document.getElementById("meuCampo").onblur = function () {
    console.log("");
  };

  function alunos() {
  Usuario.call(this, nome, email, senha);
  }
  alunos.prototype = Object.create(users.prototype);
  alunos.prototype.constructor = alunos;
}
