$(document).ready(function(){
	$('.button').click(function(){
	    var nameValue = []; 
		if ($('.input-0').val() !== '') {
			nameValue[0] = $('.input-0').val();
		} else {
			alert('Your name must be text.');
		}
		if ($('.input-1').val() !== '') {
			nameValue[1] = $('.input-1').val();
		} else {
			alert('Your phone number must be numbers.');
		}
		if ($('.input-2').val() !== '') {
			nameValue[2] = $('.input-2').val();
		} else {
			alert('Your email address can be text and numbers.');
		}
		if ($('.input-3').val() !== '') {
			nameValue[3] = $('.input-3').val();
		} else {
			alert('Your occupation must be text.');
		}
		$('.preview-0').text(nameValue[0]);
		$('.preview-1').text(nameValue[1]);
		$('.preview-2').text(nameValue[2]);
		$('.preview-3').text(nameValue[3]);
	});
});

	
	