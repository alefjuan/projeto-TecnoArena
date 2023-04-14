function carregar()
{
    
      
    (function() {
        console.log("Função anônima sem retorno.");
      })();
    
    let enviar = document.getElementsByName("Envio")[0]
    enviar.addEventListener("click", enviarr)

    function enviarr()
    {
        prompt("Digite a senha que voce acha que é a mais recente")
        alert("Uma tela de redefinição de senha foi enviada para seu email!")
        window.location.href = "/Login/index.html";
    }
    (function(nome, sobrenome) {
        console.log("Argumento a: " + nome);
        console.log("Argumento b: " + sobrenome);
      })("", '"');

     
      document.getElementById("meuCampo").onfocus = function() {
        console.log('foco')
      };
      
      document.getElementById("meuCampo").onblur = function() {
        console.log("desf");
      };
    
}