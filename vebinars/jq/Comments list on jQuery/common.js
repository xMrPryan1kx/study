$(document).ready(function(){

	function initialState() {
		if (localStorage.getItem('comments') == null) {
			$('.comments__none').show();
		} else {
			$('.comments__list').html(localStorage.getItem('comments'));
			$('.comments__none').hide();
		}
	}

	initialState();

	function addToStorage() {
		let content = $('.comments__list').html();
		localStorage.setItem('comments', content);
	}

	function addComment() {
		let name = $('input').val(),
				text = $('textarea').val(),
				date = new Date().toLocaleString();

		if (name.length !== 0 && text.length !== 0) {
			$('input').removeClass('error');
			$('textarea').removeClass('error');
			
			$('.no-comments').remove();

			$('.comments__list').append(`
		
				<div class="comments__item">
					<button class="comments__delete"></button>
					<div class="comments__author">${name}</div>
					<div class="comments__text">${text}</div>
					<div class="comments__date">${date}</div>
				</div>
			
			`);

			name = $('input').val(''),
			text = $('textarea').val(''),

			$('.comments__none').hide();

			addToStorage();
		} else {
			$('input').addClass('error');
			$('textarea').addClass('error');
		}
	}

	function deleteComment(item) {
		item.remove();

		let items = $('.comments__item');
	
		addToStorage();

		if (items.length == 0) {
			$('.comments__none').show();
			localStorage.removeItem('comments');
		}
	}

	$('body').on('click', '.comments__add', addComment);
	$('body').on('click', '.comments__delete', function(){
		let item = $(this).parents('.comments__item');

		deleteComment(item);

	});
});