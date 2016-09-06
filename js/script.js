var link = document.querySelector(".research_hotels");
var form = document.querySelector(".research");

link.addEventListener("click", function(event) {
event.preventDefault();
form.classList.toggle("research_show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
	if (form.classList.contains("research_show")) {
	form.classList.remove("research_show");
	}
	}
});

