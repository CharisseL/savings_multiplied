document.addEventListener('DOMContentLoaded', function(){	
	var loginModal = document.querySelector('.login-modal');
	var lightbox = document.querySelector('.lightbox');
	var loginLink = document.querySelector('.login');
	var cancel = document.querySelector('input[value="Cancel"]');

	var loginModalToggleAreas = document.querySelectorAll(
		'.lightbox, .login, input[value="Cancel"]'
);

	for (var i=0; i<loginModalToggleAreas.length; i++){
		loginModalToggleAreas[i].addEventListener('click', function(){
			toggle(loginModal);
		});
	}
});

function toggle(element){
	if (element.classList)
		element.classList.toggle('hidden');
} else {
	var classes = element.className.split(' ');
	var classIndex;
	
	for (var i=0; i<classes.length;i++) {
		if (classes[i] === 'hidden')
			classIndex = i;
		}

	if (classIndex)
		classes.splice(classIndex, 1);
	else
		classes.push('hidden');

	element.className = classes.join(' ');



	/* lightbox.addEventListener('click', function(){
		toggle(loginModal);
	});
		
	cancel.addEventListener('click', function(){
		toggle(loginModal);
	});
		
	loginLink.addEventListener('click', function(){
		toggle(loginModal);
	});
});


/*	function hide(element) {
		if (element.classList)
			element.classList.add('hidden');
		else
			element.className += ' ' + 'hidden'; 
	}

	function show(element) {
		if (element.classList)
			element.classList.remove('hidden');
		else
			element.className += element.className 
				.replace(new RegExp('(^|\\b)' + 'hidden'.split(' ')
				.join('|') + '(\\b|$)', 'gi'), ' ');
	} */
