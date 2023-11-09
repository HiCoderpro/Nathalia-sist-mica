//Faz a busca pelas imagens
function buscar() {
  let pesquisarimg = Number(document.getElementById("pesquisarimg").value);

  //console.log(imagemUsuario)

  if (pesquisarimg == 1) {
    console.log("UP");
    document.getElementById("pesquisarimg").value = "";
    document.write(
      "<center><img src='img/1.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  } else if (pesquisarimg == 2) {
    document.write(
      "<center><img src='img/2.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  } else if (pesquisarimg == 3) {
    document.write(
      "<center><img src='img/3.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  } else if (pesquisarimg == 4) {
    document.write(
      "<center><img src='img/4.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  } else if (pesquisarimg == 5) {
    document.write(
      "<center><img src='img/5.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  } else if (pesquisarimg == 6) {
    document.write(
      "<center><img src='img/6.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  } else if (pesquisarimg == 7) {
    document.write(
      "<center><img src='img/7.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  } else if (pesquisarimg == 8) {
    document.write(
      "<center><img src='img/8.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  } else if (pesquisarimg == 9) {
    document.write(
      "<center><img src='img/9.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  } else if (pesquisarimg == 10) {
    document.write(
      "<center><img src='img/10.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  }
  if (pesquisarimg == 11) {
    document.write(
      "<center><img src='img/11.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  } else if (pesquisarimg == 12) {
    document.write(
      "<center><img src='img/12.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  } else if (pesquisarimg == 13) {
    document.write(
      "<center><img src='img/13.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  } else if (pesquisarimg == 14) {
    document.write(
      "<center><img src='img/14.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  } else if (pesquisarimg == 15) {
    document.write(
      "<center><img src='img/15.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  } else if (pesquisarimg == 16) {
    document.write(
      "<center><img src='img/16.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  } else if (pesquisarimg == 17) {
    document.write(
      "<center><img src='img/17.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  } else if (pesquisarimg == 18) {
    document.write(
      "<center><img src='img/18.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  } else if (pesquisarimg == 19) {
    document.write(
      "<center><img src='img/19.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  } else if (pesquisarimg == 20) {
    document.write(
      "<center><img src='img/20.jpg' class='herry' id=herry' width=400 'align='middle'></center>"
    );
  } else {
    //Tratando erro
    if (pesquisarimg == 0) {
      let error_search = "Digite um numero de 1 a 100";
      document.getElementById("errordig").value = "Digite um numero de 1 a 100";
      document.getElementById("errordig").innerHTML = error_search;
    } else {
      let error_search = "Digite um numero de 1 a 100";
      document.getElementById("errordig").value = "Digite um numero de 1 a 100";
      document.getElementById("errordig").innerHTML = error_search;
    }

    // alert("Digite um numero de 1 a 100")
    // document.getElementById('pesquisarimg').value = '';
  }
}
