$(document).ready(function() {
	var half = $('#halfTab');
	var innerHalf = $('#halfTab div.innerTab');
	var third = $('#thirdTab');

	

	half.on('hover', function() {
		$(this).css('z-index', '2');
		third.css('z-index', '1');

		$(this).css('border-left-width', '32px');
		innerHalf.css('border-left-width', '30px');
		innerHalf.css('left', '-32px');

	})

	third.on('hover', function() {
		$(this).css('z-index', '2');
		half.css('z-index', '1');
	});
});