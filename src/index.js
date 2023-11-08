function entrarlogin(){
    window.location.replace("/login.html");
}
//faz busca por logins
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'nath' && password === '123456') {
      alert('Login bem-sucedido!');
      // Aqui você pode redirecionar o usuário para outra página, se necessário.
      window.location.href = 'cartas.html';

    } else {
      alert('Usuário ou senha incorretos. Tente novamente.');
    }
  }