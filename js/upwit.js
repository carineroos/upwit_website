
if(document.querySelector('#home')){
	var banners = ["img/banners/citiesforeveryone_home_1200.jpg", "img/banners/prt_1920x638_1484826000.jpg"];
	var bannerAtual = 0;

	function trocaBanner() {
		bannerAtual = (bannerAtual + 1) % 2;
		document.querySelector('.banner img').src = banners[bannerAtual];
	}

	var timer = setInterval(trocaBanner, 4000);
	var controle = document.querySelector('.pause');

	controle.onclick = function() {
		if (controle.className == 'pause') {
		  clearInterval(timer);
		  controle.className = 'play';
		} else {
		  timer = setInterval(trocaBanner, 4000);
		  controle.className = 'pause';
		}
	};
}

var botaoMenu = document.querySelector('.nav-btn');
var navLinks = document.querySelector('.nav-links');

botaoMenu.onclick = function(){

	if (navLinks.style.display == 'block') {
		navLinks.style.display = 'none';
	} else {
		navLinks.style.display = 'block';
	}
}


var btn_traduzir = document.querySelectorAll('.btn-traduzir');

for (var i = 0; i < btn_traduzir.length; i++) {

  	btn_traduzir[i].addEventListener("click", function() {

		var container = document.querySelector("#"+this.parentElement.id),
			textoPortugues = container.querySelector('section'),
			textoIngles = container.querySelector('[lang=en]');

  		if(this.textContent == "English"){
			textoPortugues.style.display = 'none';
			textoIngles.style.display = 'block';
			this.textContent = "Português";
  		} else {
  			textoPortugues.style.display = 'block';
			textoIngles.style.display = 'none';
			this.textContent = "English";
  		}

  });

}
