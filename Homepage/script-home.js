function carregar() {

  let sair = window.document.getElementById("sair");
  sair.addEventListener("click", clicar);

  function clicar() {
    let sair = document.getElementById("sair");
    confirm;
    if (confirm("Você deseja sair")) { //confirm
      window.location.href = "/Login/index.html";
    } else {
      console.log("Usuário cancelou.");
    }
  }
 


  let inatividadeTimer;
  function iniciarTemporizador() {
    inatividadeTimer = setTimeout(function () {  //setTimeout
      console.log("Usuário deslogado por inatividade.");
      window.location.href = "/Login/index.html";
    }, 60000);
  }

  function reiniciarTemporizador() {
    clearTimeout(inatividadeTimer);
    iniciarTemporizador();
  }

  document.addEventListener("mousemove", reiniciarTemporizador); //evento de mouse
  document.addEventListener("keydown", reiniciarTemporizador);
  document.addEventListener("touchstart", reiniciarTemporizador);

  iniciarTemporizador();
 



  function fazerPausaParaSeAlongar() {
    alert("Hora de fazer uma pausa para se alongar!");
  }
  setInterval(fazerPausaParaSeAlongar, 1000 * 60 * 60);                 //setInterval




  document.addEventListener("keydown", function (event) {
    if (event.key === "h") {
      alert("para ajuda, consulte um dos gestores do programa");
    }
  });
  
 const nomeUser = localStorage.getItem("username");
 document.getElementById("welcome").textContent = nomeUser;
}
const nomeUsuario = sessionStorage.getItem("username");
    document.getElementById("nome-user").textContent = "Bem-vindo ao curso Full Stack da Tecnolake, "+ nomeUsuario;

    (function ($) {
      $.fn.colorChanger = function () {
        return this.each(function () {
          $(this).click(function () {
            var colors = ['red', 'green', 'blue', 'orange', 'purple'];
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            $(this).css('background-color', randomColor);
          });
        });
      };
    }(jQuery));

    $('.boas-vindas').css('color', 'red');
    $('#nome-user').addClass('destaque');
    $('h2').removeClass('sublinhado');

    function setCookie(name, value, daysToExpire) {
      const date = new Date();
      date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    
      setCookie("username", username, 7);
    }

function buscarCEP(event) {
  event.preventDefault();

  fetch(`https://viacep.com.br/ws/85010180/json/`)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        console.log("CEP não encontrado");
      } else {
        console.log("Endereço:", data.logradouro);
        console.log("Bairro:", data.bairro);
        console.log("Cidade:", data.localidade);
        console.log("Estado:", data.uf);
      }
    })
    .catch(error => {
      console.log("Ocorreu um erro na requisição:", error);
    });
}


    
    
  