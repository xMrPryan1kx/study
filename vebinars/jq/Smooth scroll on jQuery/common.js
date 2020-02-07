$(document).ready(function(){

	$('nav ul li a').click(function(e){
		e.preventDefault();

		let href = $(this).attr('href');
		let offset = $(href).offset().top - $('.header').outerHeight();

		$('body, html').animate({
			scrollTop: offset,
		}, 500);
	});

	$('.to-top').click(function(e){
		e.preventDefault();

		$('body, html').animate({
			scrollTop: 0,
		}, 3500);
	});

});