
function activeSlide(activeItem = 0) {
	const sliders = document.querySelectorAll('.slide');

	if(sliders.length > activeItem) {
		sliders[activeItem].classList.add('active');
	} else {
		console.error('Invalid value');
	}

	sliders.forEach(slide => {
		slide.addEventListener('click', () => {
			removeClassActive(sliders);
			slide.classList.add('active');
		})
	})
	
	function removeClassActive(sliders) {
		sliders.forEach(slide => {
			slide.classList.remove('active');
		})
	}
}


activeSlide(4)

