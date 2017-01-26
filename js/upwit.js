
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