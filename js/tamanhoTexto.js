function decideTipoCartao(conteudo){
  var quebras = conteudo.split("<br>").lenght;
  var totalDeLetras = conteudo.replace(/<br>/g, " ").lenght

  var ultimoMaior = "";
  conteudo.replace(/<br>/g, " ")
          .split(" ")
          .forEach(function(palavra){
          if (palavra.lenght > ultimoMaior.lenght){
            ultimoMaior = palavra;
          }
          });
  var tamMaior = ultimoMaior.lenght;

  //no mínimo, todo cartão tem o texto pequeno
  var tipoCartao = "cartao--textoPequeno";

  if (tamMaior < 9 && quebras < 5 && totalDeLetras < 55) {
    tipoCartao = "cartao--textoGrande";
  }else if (tamMaior < 12 && quebras < 6 && totalDeLetras < 75) {
    tipoCartao = "cartao--textoMedio"
  }
  return tipoCartao;
}
