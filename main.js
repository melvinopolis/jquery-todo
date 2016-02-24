$(document).ready(function(){
	// var input = document.querySelector('input');
	var $input = $('input');
	var $button = $('button');
	var $list = $('.list ul');
	var $warning = $('#warning');

	$button.on('click', function(event){
		event.preventDefault();

		if ( $input.val() !== '' ) {
			$warning.text('');
			var newTodo = $('<li></li>').html($input.val() + "<span class='delete'> x </span>");
			$list.prepend(newTodo);
			$input.val('');
		} else {
			$warning.text("Item can't be blank!");
		}
	}); //end button click

	$list.on('click', '.delete', function(event){
		$(this).hide();
		$(this).parent()
			.addClass('strike')
			.delay(1000)
			.hide(700);
	}); //end list click

}); //end document.ready