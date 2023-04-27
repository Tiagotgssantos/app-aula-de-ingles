
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

//aula01 seção2
function abrir01secao02(){
  let aula01secao2 = document.getElementById("aula1-secao2");
  aula01secao2.style.display="block";
}
function fechar01secao01(){
  let aula01secao2 = document.getElementById("aula1");
  aula01secao2.style.display="none";
}

function mensagemErrada2(){
  let aula01Secao2Errada = document.getElementById("resposta-errada2");
  aula01Secao2Errada.style.display="block";
}
function respostaCerta2(){
  let aula01Secao2Certa = document.getElementById("resposta-certa2");
  aula01Secao2Certa.style.display="block";
}
function tentarNovamente2(){
  let tentar2 =document.getElementById("resposta-errada2");
  tentar2.style.display="none";
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
