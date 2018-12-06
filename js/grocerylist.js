$(document).ready(function () {

	$('#list-items2').html(localStorage.getItem('listItems'));
	$('#list-items').html(localStorage.getItem('groceries'));

	$('.add-items').submit(function(event)
	{
		event.preventDefault();
		var item = $('#input').val();
		if(item) {
			/*
			$('#list-items').append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
			localStorage.setItem('listItems', $('#list-items').html());
			$('#input').val("");*/

			$('#list-items').append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>X</a><hr></li>");
			localStorage.setItem('groceries', $('#list-items').html());
			$('#input').val("");
		}
	});

	$(document).on('change', '.checkbox', function() {
		// when item gets unchecked
		if($(this).attr('checked')) {
			$(this).removeAttr('checked');
		}

		// when item gets checked
		else {
			$(this).attr('checked', 'checked');
			// send item to ingredients list
			var word = this.closest('li').innerText;
			word = word.slice(0,-2);
			$('#list-items2').append("<li><input class='checkbox' type='checkbox'/>" + word + "<a class='remove'>X</a><hr></li>");
			localStorage.setItem('listItems', $('#list-items2').html());
		}
		$(this).parent().toggleClass('completed');
		localStorage.setItem('listItems', $('#list-items').html());
	});

	$(document).on('click', '.remove', function() {
		$(this).parent().remove();
		localStorage.setItem('listItems', $('#groceries').html());
	});

});
