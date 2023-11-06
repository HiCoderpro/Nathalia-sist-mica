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

    if (pesquisarimg <= 1){

        console.log('UP')
        document.getElementById('pesquisarimg').value = '';
        //document.getElementById("imagem01").innerHTML = "<img src='https://i.ibb.co/CsG8wfg/img16.png' width='250' >"
        document.getElementById("semitica").innerHTML = "<p>Calma um Passo de cada Vez kkk Digite 2</>"

    }
    else if(pesquisarimg == 2){

      document.write("<center> <b>1 PERGUNTAS SISTEMICAS</b></center> ")      
      document.write("<center> Ola Usuario seja bem vindo ")
      document.write("<br> ")
      document.write("Em teste se uso imagem ou texto aqui nesse local </center> ")

        
    }
    else {
        console.log('Digite um numero de 1 a 100')
        alert("Digite um numero de 1 a 100")
        document.getElementById('pesquisarimg').value = '';

    }
    



  }