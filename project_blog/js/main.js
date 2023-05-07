const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-menu");
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()){
			$('header').addClass('sticky');
		}
	})
	});	
hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	nav.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {
	hamburger.classList.remove("active");
	nav.classList.remove("active");
}));

document.querySelectorAll('a[href^="#"]').forEach(archor => {
	archor.addEventListener("click",function(e){
		e.preventDefault();
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth"
		});
	});
});

