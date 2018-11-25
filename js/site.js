(function (initCode){
	initCode(window.jQuery, window, document)
}

	(function ($, window, document){
		$(document).ready(function(){

			$("#toggle_menu").click( function (){
				$(".box-menu").toggleClass("ativo");
			})

			$(".box-menu p").click(function(evt){
				console.log("1");
				

				evt.preventDefault();
				$("html, body").stop().animate({
					scrollTop: $( $(this).attr("data-section") ).offset().top - 63 + 'px'
				}, 1000);

				$(".box-menu").toggleClass("ativo");

			});
		})
	})
);