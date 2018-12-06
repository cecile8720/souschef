$(document).ready(function () {

	// Retrieves previous list items
	$('#list-items').html(localStorage.getItem('listItems'));
	// Retrieves previous checked items
	if (localStorage.getItem('checkedItems') === null	) {
		console.log("print");
	}

	var arrItems = [];
	localStorage.setItem('arrItems', '');
	//arrItems = JSON.parse(localStorage.getItem('checkedItems')); // turns it back into an array

	/* Add items */
	$('.add-items').submit(function(event){
		event.preventDefault();
		var item = $('#input').val();
		if(item){
			$('#list-items').append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>X</a><hr></li>");
			localStorage.setItem('listItems', $('#list-items').html());
			$('#input').val("");
		}
	});

	/* When something's clicked */
	$(document).on('change', '.checkbox', function() { // when there is a change to the checkbox then excute the function
		// get the word item
		var word = this.closest('li').innerText;
		word = word.slice(0, -2)
		console.log(word);

		/* WHEN ITEM GETS UNCHECKED */
		if($(this).attr('checked')) { // returns the value of attribute "checked"
			// remove checked attribute
			$(this).removeAttr('checked');
			// remove item from array of items
			for (var i =0; i < arrItems.length; i++) {
				if (arrItems[i] === word) {
					arrItems.splice(i,1);
				}
			}
		}

		/* WHEN ITEM GETS CHECKED */
		else { // when item gets checked
			// sets checked attribute to check
			$(this).attr('checked', 'checked');
			// adds item to array
			arrItems.push(word);
		}

		$(this).parent().toggleClass('completed');
		localStorage.setItem('listItems', $('#list-items').html());
		localStorage.setItem('checkedItems', JSON.stringify(arrItems));
		console.log(arrItems);

	});

	/* To remove an item */
	$(document).on('click', '.remove', function() { // when clicking on the x
		var word = this.closest('li').innerText;
		word = word.slice(0, -2)

		for (var i =0; i < arrItems.length; i++) {
			if (arrItems[i] === word) {
				arrItems.splice(i,1);
			}
		}

		$(this).parent().remove();
		localStorage.setItem('listItems', $('#list-items').html());
		localStorage.setItem('checkedItems', JSON.stringify(arrItems));
		console.log(arrItems);

	});


});
