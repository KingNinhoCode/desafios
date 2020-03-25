var menu = document.querySelector(".logo");
var nav = document.querySelector("nav");
var header = document.querySelector("header");
var overlay;
var side = false;

if (window.innerWidth <= 590) {

	menu.classList.add("clicavel");

}

menu.addEventListener("click", function(event) {

	if (window.innerWidth <= 590) {

		nav.classList.add("side")
		side = true;

		overlay = document.createElement("div")
		overlay.classList.add("overlay")
		header.appendChild(overlay)
	}
})

menu.addEventListener("touchstart", function(event) {

	if (window.innerWidth <= 590) {

		nav.classList.add("side")
		side = true;

		overlay = document.createElement("div")
		overlay.classList.add("overlay")
		header.appendChild(overlay)
	}
})

document.addEventListener("click", function(event){
	
	if (side = true && event.x > nav.offsetWidth) {
		nav.classList.remove("side")
		header.removeChild(overlay)
		side = false
	}
})