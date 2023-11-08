
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
        document.write("<center><img src='img/2.jpg' class='herry' id=herry' width=400 'align='middle'></center>")  

      
    }

    else if(pesquisarimg == 3) {
      document.write("<center><img src='img/3.jpg' class='herry' id=herry' width=400 'align='middle'></center>")  
    
    }
    else if(pesquisarimg == 4) {
      document.write("<center><img src='img/4.jpg' class='herry' id=herry' width=400 'align='middle'></center>")  
    
    }
    else if(pesquisarimg == 5) {
      document.write("<center><img src='img/5.jpg' class='herry' id=herry' width=400 'align='middle'></center>")  
    
    }
    else if(pesquisarimg == 6) {
      document.write("<center><img src='img/6.jpg' class='herry' id=herry' width=400 'align='middle'></center>")  
    
    }
    else if(pesquisarimg == 7) {
      document.write("<center><img src='img/7.jpg' class='herry' id=herry' width=400 'align='middle'></center>")  
    
    }
    else if(pesquisarimg == 8) {
      document.write("<center><img src='img/8.jpg' class='herry' id=herry' width=400 'align='middle'></center>")  
    
    }
    else if(pesquisarimg == 9) {
      document.write("<center><img src='img/9.jpg' class='herry' id=herry' width=400 'align='middle'></center>")  
    
    }
    else if(pesquisarimg == 10) {
      document.write("<center><img src='img/10.jpg' class='herry' id=herry' width=400 'align='middle'></center>")  
    
    }
    else {
        console.log('Digite um numero de 1 a 100')
        alert("Digite um numero de 1 a 100")
        document.getElementById('pesquisarimg').value = '';

    }    



  }