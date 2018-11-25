(function (initCode){
	initCode(window.jQuery, window, document)
}

	(function ($, window, document){
		$(function () {

			$("#toggle_menu").click( function (){
				$(".box-menu").toggleClass("ativo");
			})


		})
	})
);