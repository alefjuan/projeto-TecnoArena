const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = form.querySelector('input[name="username"]').value;
  const password = form.querySelector('input[name="password"]').value;

  fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => {
      let userId = null;
      data.forEach(user => {
        if (user.user === username && user.senha === password) {
          userId = user.id;
          return false;
        }
      });

      if (userId !== null) {
        sessionStorage.setItem("userId", userId);
        sessionStorage.setItem("username", username);
        alert('Login realizado com sucesso!');
        
        // Adicionando efeito fade usando jQuery
        $('#form').fadeOut(1000, function() {
          setTimeout(() => {
            window.location.href = "../homepage/home.html";
          }, 2000);
        });
      } else {
        console.log("Nome de usuário ou senha incorretos.");
      }
    })
    .catch(error => {
      console.log("Erro na solicitação:", error);
    });
});
