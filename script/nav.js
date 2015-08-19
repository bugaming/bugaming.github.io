$(document).ready(
	function(){
		$('.nav li').hover(
			function(){
				$('ul', this).fadeIn();
			},
			function(){
				$('ul', this).fadeOut();
			}
		);
	};
	console.log("nav loaded");
);
