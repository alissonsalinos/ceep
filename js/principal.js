document.querySelector("#mudaLayout").addEventListener("click", function(){

  //pega o elemento com a class="mural"
  var mural = document.querySelector(".mural");

  //tira ou coloca a classe
  mural.classList.toggle("mural--linhas");

  if (mural.classList.contains("mural--linhas")){
    this.textContent = "Blocos";
  } else {
    this.textContent = "Linhas";
  }
});

function removeCartao() {

var cartao = document.querySelector("#cartao_" + this.dataset.ref);
console.log(cartao);
//da uma classe que faz ele sumir devagar
cartao.classList.add("cartao--some");

//tira da página depois da animação
setTimeout(function(){
  cartao.remove();
},400);
}

//pega os botoes
var botoes = document.querySelectorAll(".opcoesDoCartao-remove");
for (var i = 0; i < botoes.length; i++) {

  //adiciona o evento em cada botão
  botoes[i].addEventListener("click", removeCartao);
};


//criando o contador
var contador = $(".cartao").length;
$(".novoCartao").submit(function(event){

var campoConteudo = $(".novoCartao-conteudo");
var conteudo = campoConteudo.val().trim()
                            .replace(/\n+/gi, "<br>")
                            .replace(/\*\*(.+)\*\*/, "<b>$1</b>")
                            .replace(/\*(.+)\*/, "<em>$1</em>")
                            .replace(/\*\*\*(.+)\*\*\*/, "<b><em>$1</em></b>");

if(conteudo){
  //soma um no contador
  contador++;

  //cria atributo data-ref
  var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
                                .attr("data-ref", contador)
                                .html("Remove")
                                .click(removeCartao);

  var opcoes = $("<div>").addClass("opcoesDoCartao")
                        .append(botaoRemove);

//chamada para a nova função
var tipoCartao = decideTipoCartao(conteudo);

//adicionando classe no novo cartão
// $("<div>").attr("id","cartao_" + contador)
//           .addClass("cartao")
//           .addClass(tipoCartao)
//           .append(opcoes)
//           .append(conteudoTag)
//           .prependTo(".mural");

  var conteudoTag = $("<p>").addClass("cartao-conteudo")
                            .append(conteudo);

  //cria atributo id
 $("<div>").attr("id","cartao_" + contador)
           .addClass("cartao")
           .addClass(tipoCartao)
           .append(opcoes)
           .append(conteudoTag)
           .prependTo(".mural");

}

campoConteudo.val("");
event.preventDefault();
});



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
