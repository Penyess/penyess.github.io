(function (initCode){
	initCode(window.jQuery, window, document)
}

	(function ($, window, document){
		$(document).ready(function(){

			window.scrollTo(0,0);

			$(".primeiro-slider, .segundo-slider, .terceiro-slider, .quarto-slider, .quinto-slider, .sexto-slider, .setimo-slider, .oitavo-slider, .nono-slider, .decimo-slider, .decimo-primeiro-slider, .decimo-segundo-slider, .decimo-terceiro-slider, .decimo-quarto-slider").slick({
			  dots: true,
			  arrows: false,
			  autoplay: true,
			  infinite: true,
			  speed: 500,
			  fade: true,
			  cssEase: 'linear'
			});

			$("#toggle_menu").click( function (){
				$(".box-menu").toggleClass("ativo");
			})

			$(".box-menu p").click(function(evt){

				evt.preventDefault();
				$("html, body").stop().animate({
					scrollTop: $( $(this).attr("data-section") ).offset().top - 82 + 'px'
				}, 1000);

				$(".box-menu").toggleClass("ativo");

			});



			$(".menu-desktop p").click(function(evt){

				evt.preventDefault();
				$("html, body").stop().animate({
					scrollTop: $( $(this).attr("data-section") ).offset().top - 82 + 'px'
				}, 1000);

			});



			




		})
	})
);