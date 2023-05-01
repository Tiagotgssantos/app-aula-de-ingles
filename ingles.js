
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
function tocarAudio() {
  var audioLike = document.getElementById("audio-like");
  audioLike.play();
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

function fechar01secao02(){
  let fecharContinuar02 = document.getElementById("aula1-secao2");
  fecharContinuar02.style.display="none";
}
function abrirsecao03(){
  let abrirContinuar02 = document.getElementById("aula1-secao3");
  abrirContinuar02.style.display="block";
}
function tocarAudio2() {
  var audioWant = document.getElementById("audio-want");
  audioWant.play();
}

//aula01 seção3
function respostaCerta3(){
  let abrirRespostaCerta3 = document.getElementById("resposta-certa3");
  abrirRespostaCerta3.style.display="block";
}
function respostaErrada3(){
  let abrirRepostaErrada3 = document.getElementById("resposta-errada3");
  abrirRepostaErrada3.style.display="block";
}
function tentarNovamente3(){
  let fechartenteNovamente3 = document.getElementById("resposta-errada3");
  fechartenteNovamente3.style.display="none";
}
function fechar01secao03(){
  let fecharContinuar03 = document.getElementById("aula1-secao3");
  fecharContinuar03.style.display="none";
}
function abrirsecao04(){
  let abrirContinuar03 = document.getElementById("aula1-secao4");
  abrirContinuar03.style.display="block";
}
function tocarAudio3(){
  var audioWork =document.getElementById("audio-work");
  audioWork.play();
}

//aula01 seção4
function respostaCerta4(){
  let abrirRespostaCerta4 = document.getElementById ("resposta-certa4");
  abrirRespostaCerta4.style.display="block";
}
function respostaErrada4(){
  let abrirRepostaErrada4 =document.getElementById("resposta-errada4");
  abrirRepostaErrada4.style.display="block";
}
function tentarNovamente4(){
  let fechartenteNovamente4 = document.getElementById("resposta-errada4");
  fechartenteNovamente4.style.display="none";
}
function fechar01secao04(){
  let fecharContinuar04 = document.getElementById("aula1-secao4");
  fecharContinuar04.style.display="none";
}
function abrirsecao05(){
  let abrirContinuar04 = document.getElementById("aula1-secao5");
  abrirContinuar04.style.display="block";
}
function tocarAudio4(){
  let audioTea = document.getElementById("audio-tea");
  audioTea.play();
}

//aula01 seção5
function respostaCerta5(){
  let abrirRespostaCerta5 = document.getElementById ("resposta-certa5");
  abrirRespostaCerta5.style.display="block";
}
function respostaErrada5(){
  let abrirRepostaErrada5 =document.getElementById("resposta-errada5");
  abrirRepostaErrada5.style.display="block";
}
function tentarNovamente5(){
  let fechartenteNovamente5 = document.getElementById("resposta-errada5");
  fechartenteNovamente5.style.display="none";
}
function fechar01secao05(){
  let fecharContinuar05 = document.getElementById("aula1-secao5");
  fecharContinuar05.style.display="none";
}
function abrirsecao06(){
  let abrirContinuar05 = document.getElementById("aula1-secao6");
  abrirContinuar05.style.display="block";
}
function tocarAudio5(){
  let audioCoffee =document.getElementById("audio-coffee");
  audioCoffee.play();
}

//aula01 seção6
function respostaCerta6(){
  let abrirRespostaCerta5 = document.getElementById ("resposta-certa6");
  abrirRespostaCerta5.style.display="block";
}
function respostaErrada6(){
  let abrirRepostaErrada5 =document.getElementById("resposta-errada6");
  abrirRepostaErrada5.style.display="block";
}
function tentarNovamente6(){
  let fechartenteNovamente5 = document.getElementById("resposta-errada6");
  fechartenteNovamente5.style.display="none";
}
function fechar01secao06(){
  let fecharContinuar05 = document.getElementById("aula1-secao6");
  fecharContinuar05.style.display="none";
}
function abrirsecao07(){
  let abrirContinuar06 = document.getElementById("aula1-secao7");
  abrirContinuar06.style.display="block";
}
function tocarAudio6(){
  let audioHere = document.getElementById("audio-here");
  audioHere.play();
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
