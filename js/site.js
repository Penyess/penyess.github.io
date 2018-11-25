(function (initCode){
	initCode(window.jQuery, window, document)
}

	(function ($, window, document){
		$(document).ready(function(){

			$("#toggle_menu").click( function (){
				$(".box-menu").toggleClass("ativo");
			})

			$(".box-menu p").click(function(evt){

				evt.preventDefault();
				$("html, body").stop().animate({
					scrollTop: $( $(this).attr("data-section") ).offset().top - 80 + 'px'
				}, 1000);

				$(".box-menu").toggleClass("ativo");

			});



			$(".menu-desktop p").click(function(evt){

				evt.preventDefault();
				$("html, body").stop().animate({
					scrollTop: $( $(this).attr("data-section") ).offset().top - 80 + 'px'
				}, 1000);

			});
		})
	})
);