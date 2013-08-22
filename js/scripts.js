/* if ("ontouchstart" in window) {
	alert('This is a touch device');
} else {
	alert('Your using a standard computer...');
} */

$(document).ready(function(){
	$('.button').click(function(){
	    var nameValue = [];
		/*for (var i = 0; i <= 3; i += 1) {
			nameValue[i] = $('.input').val();
		}*/
		/*for (var i = 0; i <= 3; i += 1) {
			$('.preview').text(nameValue);
		}*/
		if ($('.input-0').val() === String()) {
			nameValue[0] = $('.input-0').val();
		} else {
			alert('You suck! Enter text only!');
		}
		if ($('.input-1').val() === Number()) {
			nameValue[1] = $('.input-1').val();
		} else {
			alert('You Suck! Enter numbers only!');
		}
		// Etc...
		nameValue[2] = $('.input-2').val();
		nameValue[3] = $('.input-3').val();
		$('.preview-0').text(nameValue[0]);
		$('.preview-1').text(nameValue[1]);
		$('.preview-2').text(nameValue[2]);
		$('.preview-3').text(nameValue[3]);
	});
});

	