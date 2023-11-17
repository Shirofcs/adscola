functiontocaom(idElementAudio){
    document.querySelector(idElementAudio).play();
}

const litaDeTeclas = document.querySelectorAll(".tecla");

for(let contaor = 0; contador <listaDeTeclas.length; contaor++){
    const tecla =listaDeTeclas[contador];
    constefeito = tecla.classList[1];
    constidAudio ='#som_${efeito}'
    tecla.onclick = function(){
        tocaSom(idAudio);
    };
}