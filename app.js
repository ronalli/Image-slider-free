const imagesList = [{
	imageTitle: 'Whangarei Falls, Whangarei, New Zealand',
	imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
},
{
	imageTitle: 'El Cap, Yosemite National Park, United States',
	imageUrl: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
},
{
	imageTitle: 'Ciucaș Peak, Romania',
	imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1174&q=80'
},
{
	imageTitle: 'Lago di Braies',
	imageUrl: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
},
{
	imageTitle: 'Lago di Braies',
	imageUrl: 'https://images.unsplash.com/photo-1552083375-1447ce886485?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
}
];


function renderSliders() {
	const container = document.querySelector('.container');
	imagesList.forEach(item => {
		let div = document.createElement('div');
		div.classList.add('slide');
		div.setAttribute('style', `background-image: url('${item.imageUrl}')`)
		let title = document.createElement('h3');
		title.innerHTML = `${item.imageTitle}`;
		div.append(title);
		container.append(div);
	})
	activeSlide(4);
}

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

renderSliders();




