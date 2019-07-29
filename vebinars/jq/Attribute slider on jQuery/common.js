$(document).ready(function(){

	function slider(item) {
		$('.slider__nav ul li a').removeClass('active');
		item.addClass('active');

		let path = item.attr('data-path');

		//$('.slider__top img').css('opacity', 0);

		setTimeout(function(){
			$('.slider__top img').attr('src', path);
			//$('.slider__top img').css('opacity', 1);
		}, 300);
	}

	$('body').on('click', '.slider__nav ul li a', function(e){
		e.preventDefault();

		let item = $(this);

		slider(item);
	});

});