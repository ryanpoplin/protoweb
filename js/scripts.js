(function(){
	
	var	usersForm = []; 
	
	$(function(){
		// need regexp validation!
		$('#submit').click(function(){
			var input = $('#name-input').val();
			$('#span-name').text(input);
			var input = $('#phone-input').val();
			$('#span-phone').text(input);
			var input = $('#email-input').val();
			$('#span-email').text(input);
			var input = $('#job-input').val();
			$('#span-job').text(input);
			usersForm.push(getFormValues());
			updateUserList(usersForm);
			$('.input').val('');
		});
	});

	function getFormValues ( ) {
		var nameVal	= $('#name-input').val();
		var jobVal = $('#job-input').val();
		var formData = {
			name: nameVal,
			job: jobVal
		};
		return formData;
	}

	function updateUserList (list) {
		var ul = $('.users-list ul');
		ul.html('');
		list.forEach(function(user){
			var text = "<li>" + user.name + " works at " +  user.job + "</li>";
			ul.append(text);
		});
	}

})();