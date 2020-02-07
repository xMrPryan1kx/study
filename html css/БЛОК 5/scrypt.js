var button = $('.button-news');
var popupContainer = $('.popup-container');
var popup = $('.popup');

function disableScroll() {
	$('html, body').css('overflow', 'hidden');
}
function enableScroll() {
	$('html, body').css('overflow', 'auto');
}

button.click(function(e) {
	e.preventDefault();

	popupContainer.fadeIn(500, disableScroll);
	popup.animate({
		width: '300px',
		height: '150px'
	}, 500);


	popupContainer.click(function(e){
		if (e.target == this) {
			$(this).fadeOut(500, enableScroll);
			popup.animate({
				width: 0,
				height: 0
			}, 500);
		}
	});
});
//f58e7e1b50d1c6e745a05bdbaf1cb62b
$('.course-app').hide();
$(function(){
	$.get('http://data.fixer.io/api/latest?symbols=USD,RUB', {'access_key': 'f58e7e1b50d1c6e745a05bdbaf1cb62b'},function(response){
		var RUB = '<span class="rub">' + 'Рубль: ' + (response.rates.RUB) + '</span><br>';
		var USD = '<span class="usd">' + 'Доллар: ' + (response.rates.USD) + '</span>';
		$('.course-app').append(RUB);
		$('.course-app').append(USD);
		});
	$('.course-button').click(function(){
		$('.course-app').toggle();
	})
})