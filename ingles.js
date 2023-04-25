//btn1 e 2
function botoes() {
    document.addEventListener("click", bt1);

}

/*let botao1Clicado = false;
let botao2Clicado = false;

function bt1(event) {
  let botao1 = document.getElementById("btn1");
  let botao2 = document.getElementById("btn2");

  if (event.target === botao1) {
    botao1Clicado = true;
    botao2Clicado = false;
  } else if (event.target === botao2) {
    botao1Clicado = false;
    botao2Clicado = true;
  }

  if (botao1Clicado) {
    botao1.style.background = "red";
    botao2.style.background = "white";
  } else if (botao2Clicado) {
    botao1.style.background = "white";
    botao2.style.background = "green";
  }
}*/

function mensagemErrada1() {
    let respostaErrada = document.getElementById("resposta-errada1");
    respostaErrada.style.display = "block";
}

function respostaCerta1() {
    let respostaCerta = document.getElementById("resposta-certa1");
    respostaCerta.style.display = "block";
}

function tentarNovamente(){
    let tentar=document.getElementById("resposta-errada1");
    tentar.style.display="none";
}

function Fecharlista(){
    let menu=document.getElementById("menu");
    menu.style.display="none";
}
function abrirAula1(){
    let lista=document.getElementById("aula1");
    lista.style.display="block";
}

//slider
const carouselImages = document.querySelector('.carousel-images');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let counter = 0;
    const size = carouselImages.children[0].clientWidth;

    nextBtn.addEventListener('click', () => {
      if (counter >= carouselImages.children.length - 1) return;
      carouselImages.style.transform = `translateX(${-size * ++counter}px)`;
    });

    prevBtn.addEventListener('click', () => {
      if (counter <= 0) return;
      carouselImages.style.transform = `translateX(${-size * --counter}px)`;
    });

//atualizar a pagina
// adiciona um evento de clique ao botão
document.getElementById("btnAtualizar").addEventListener("click", function(){
  location.reload();
});
