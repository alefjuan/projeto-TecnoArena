
$(document).ready(function() {
  $('#login-forms').submit(function(event) {
    event.preventDefault(); 
    var username = $('input[name="username"]').val();
    var password = $('input[name="password"]').val();
    $.getJSON('http://localhost:3000/users', function(data) {
      var foundUser = false;
      $.each(data.users, function(index, user) {
        if (user.user === username && user.password === password) {
          foundUser = true;
          return false; 
        }
      });
      if (foundUser) {
        window.location.href = "../login/senha.html";
        localStorage.setItem("username", username);
      } else {
        alert("Nome de usuário ou senha incorretos.");
      }
    });
  });
});