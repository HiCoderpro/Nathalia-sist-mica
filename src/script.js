//faz busca por logins
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
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
      let pnumero1 = '1 PERGUNTAS SISTEMICAS QUAL E SUA MOTIVAÇAO EM ESTAR AQUI? OQUE VOCE QUER ENXERGAR? OQUE EU TERIA QUE SABER COMO FACILITADO(a) PARA PODER TRABALHAR NA SUA QUESTAO? '

        console.log('UP')
        document.getElementById('pesquisarimg').value = '';
        //document.getElementById("imagem01").innerHTML = "<img src='https://i.ibb.co/CsG8wfg/img16.png' width='250' >"
        document.getElementById("semitica").innerHTML = "<p>QUAL E SUA MOTIVAÇAO EM ESTAR AQUI?</>"
        document.getElementById("semitica1").innerHTML = "<p>OQUE VOCE QUER ENXERGAR?</>"
        document.getElementById("semitica2").innerHTML = "<p>OQUE EU TERIA QUE SABER COMO FACILITADO(a)</>"
        document.getElementById("semitica3").innerHTML = "<p>PARA PODER TRABALHAR NA SUA QUESTAO?</>"
    }
    else if(pesquisarimg == 2){
        document.write("<img src='https://i.ibb.co/CsG8wfg/img16.png' width='250'")
        
    }
    else {
        console.log('Digite um numero de 1 a 100')
        alert("Digite um numero de 1 a 100")
        document.getElementById('pesquisarimg').value = '';

    }
    



  }