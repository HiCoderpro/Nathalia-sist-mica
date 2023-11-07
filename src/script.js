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
  //Faz a busca pelas imagens 
  function buscar(){
    let pesquisarimg = Number(document.getElementById('pesquisarimg').value);

    //console.log(imagemUsuario)

    if (pesquisarimg == 1){

        console.log('UP')
        document.getElementById('pesquisarimg').value = '';
        document.write("<center><img src='img/1p.jpg' class='herry' id=herry' width=400 'align='middle'></center>")  

    }
    else if(pesquisarimg == 2){

      //document.write("<center><img src='img/1p.jpg' class='herry' id=herry' width=400 'align='middle'></center>")
      document.writeln('Criar proximas imagens Digite 1 para Ver imagem concluida!')      

      
    }
    else {
        console.log('Digite um numero de 1 a 100')
        alert("Digite um numero de 1 a 100")
        document.getElementById('pesquisarimg').value = '';

    }
    



  }