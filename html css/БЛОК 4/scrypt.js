var button = $('.add-case');
var input = $('.name-case');
var input2 = $('.about-case');



button.click(function(e) {
	e.preventDefault();
  	var task = $('<li class="task"><div class="task-header">' + input.val() + '<button class="delete">&#10006</button><button class="open-close">&#11015;</button></div><div class="task-description">' + input2.val() + '</div></li>');
  	
    var test = $('.task');

  	function hideShow() {
		
		if(test.length == 0) {
			$('.deleted-me').show();
		}
	}

    var deleted = $('.deleted-me');
	  if (test.length != 0) {
	   deleted.hide();
   }
	  
  	task.find('.delete').click(function() {
  		if (confirm('Вы действительно хотите удалите дело?')) {
			  $(this).parents('.task').remove();
			  hideShow();
  		}
   	});

  	task.find('.open-close').click(function() {
  		$(this).parents('.task').find('.task-description').slideToggle('700ms');
  		$(this).toggleClass('active')
  	});
	
	  
	if(input.val().length != 0 && input2.val().length != 0) {
    $('.hidden').append(task);
   } else {
    alert ('Заполните обязательные поля');
    }
    if(input.val().length != 0 && input2.val().length != 0) {
  	 $(this).parents('form')[0].reset();
    }
  
  
  });



// $('.reset').on('click', function() {
//     $(this).closest('form')[0].reset();
// });



// function fixedcontainer(elem) {
// 	this.eList = elem.find('.hidden');
// 	this.eText = elem.find('.name-case');
// 	this.eText = elem.find('.about-case');
// 	this.eButton = elem.find('.add-case');

// 	var that = this;

// 	this.eText.on('input', function(){
// 		that.eButton.prop('disabled', !this.value)
// 	});
// 	this.eButton.on('click', function(){
// 		var val = that.eText.val();
// 		if (val) {
// 			that.addItem(val);
// 			that.eText.val('')
// 			that.eButton.prop('disabled', true);
// 		}
// 	});
// 	this.eList.on('click', '.hidden-item', function() {
// 		var COMPLETED_CLASS = '.hidden-item_completed_yes';
// 		var item = $(this);

// 		item.hasClass(COMPLETED_CLASS) ?
// 		item.removeClass(COMPLETED_CLASS) :
// 		item.addClass(COMPLETED_CLASS);
// 	});
// 	this.eList.on('click', '.hidden-item-remove', function(e) {
// 		$(this).closest('.hidden-item').remove();
// 	});
// }
// fixedcontainer.prototype.addItem = function(text, isCompleted) {
// 		var item = $(
// 			'<li class="hidden-item">'+
// 				'<span class="hidden-item-text"></span>' +
// 				'<span class="hidden-item-remove">&#10060;</span>' +
// 			'</li>'
// 			);
// 		if (isCompleted) {
// 			item.addClass('.hidden-item_completed_yes');
// 			}

// 		item.find('.hidden-item-text').text(text);
// 		this.eList.append(item);
// }



// var removeElement = function(params) {
//   $("li" + defaults.taskId + params.id).remove();
// };

//    this.eList.on('click', '.left-case-item-remove', function (e) {
//       $(this).closest('.left-case-item').remove();
//     });
  
// $(document).ready(function(){
// 	if ($('.test').is(':empty')) {
// 		$('.left-case').hide();
// 	}
// })


// window.onload = function() {

// 	if(document.getElementsByClassName("test")[0].textContent == "") {

// 		document.getElementsByClassName("test1")[0].style.display = "none";

// 	}

// };


	// $(document).ready(function() {
	
	// 	if($(".hidden").text() == "") {

	// 		$(".gaga").hide();

	// 	}
		
	// });
	
	// $('.open-close').click(function() {
  	// $(this).siblings('.line2').slideToggle('fast');
  	// });



	// $(document).ready(function() {
	// $('li').on('click', '.open-close', function() {
	// 	$(this).siblings('.line2').slideToggle('slow');
	// });
	// });

	// $('.hidden').on('click', '.open-close', function() {
	// 	$(this).toggleClass('line2').siblings('.line2').slideToggle(0);
	// });

