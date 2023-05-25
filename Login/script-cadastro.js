const formulario = document.querySelector('#form');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.querySelector('input[name=email]').value;
  const user = document.querySelector('input[name=username]').value;
  const senha = document.querySelector('input[name=password]').value;

  const confirmacaoCadastro = window.prompt('Continuar com cadastro');

  if (confirmacaoCadastro === 'sim') {
    const data = { email, user, senha };

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Cadastro realizado com sucesso:', data);
      window.alert('Cadastro realizado com sucesso!');
      setTimeout(function() {
        window.location.href = 'http://localhost:3000/';
      }, 2000);
    })
    .catch(error => console.error('Erro ao realizar cadastro:', error));
  }
});
var radioElement = document.querySelector('input[name="gender"]');
if (radioElement.checked) {
  console.log("Opção selecionada");
} else {
  console.log("Opção não selecionada");
}