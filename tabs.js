$(document).ready(function() {
	var half = $('#halfTab');
	var innerHalf = $('#halfTab div.innerTab');
	var third = $('#thirdTab');
	var innerThird = $('#thirdTab div.innerTab');

	//Get Tab dimensions
	var halfBorderLeft 		= half.css('border-left-width');
	var innerHalfBorderLeft = innerHalf.css('border-left-width');
	var halfLeftPos			= innerHalf.css('left');
	

	half.hover( 
		function() {
			$(this).css('z-index', '2');
			third.css('z-index', '1');

			$(this).animate({'border-left-width': '32px'}, 100);
			innerHalf.animate({
				'border-left-width': '30px',
				left: '-32px'
			}, 100);
			

		}, 
		function() {
			$(this).animate({'border-left-width': halfBorderLeft}, 100);
			innerHalf.animate({
				'border-left-width': innerHalfBorderLeft,
				'left': halfLeftPos
			}, 100);
			
			
		}
	);

	third.hover( 
		function() {
			$(this).css('z-index', '2');
			half.css('z-index', '1');

			$(this).animate({'border-left-width': '32px'}, 100);
			innerThird.animate({
				'border-left-width': '30px',
				left: '-32px'
			}, 100);
			

		}, 
		function() {
			$(this).animate({'border-left-width': halfBorderLeft}, 100);
			innerThird.animate({
				'border-left-width': innerHalfBorderLeft,
				'left': halfLeftPos
			}, 100);
			
			
		}
	);

	

	
});