$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()){
			$('header').addClass('sticky');
		}
	})
	});

// $(document).ready(function(){
// 	alert("ok");
// })
