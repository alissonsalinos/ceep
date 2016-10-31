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


var contador = document.querySelectorAll(".cartao").length;

document.querySelector(".novoCartao").onsubmit = function(event){
contador++;

var conteudoTag = document.querySelector(".novoCartao-conteudo");
var conteudo = conteudoTag.value;

var cartao = document.createElement("div");
cartao.classList.add("cartao");
cartao.setAttribute("id","cartao_"+contador);


var opcoes = document.createElement("div");
opcoes.classList.add("opcoesDoCartao");


var btnRemove = document.createElement("button");
btnRemove.classList.add("opcoesDoCartao-remove");
btnRemove.setAttribute("data-ref",contador);
btnRemove.textContent = "Remove";
btnRemove.addEventListener("click", removeCartao);


var cartaoTexto = document.createElement("p");
cartaoTexto.classList.add("cartao-conteudo");
console.log(cartao);
cartaoTexto.textContent = conteudo;

document.querySelector(".mural").appendChild(cartao);
conteudo = "";

cartao.appendChild(opcoes);
cartao.appendChild(cartaoTexto);
opcoes.appendChild(btnRemove);

event.preventDefault();
}
