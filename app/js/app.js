import Swiper, { Navigation, Pagination } from 'swiper';

// import '~/app/vendor/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper('.swiper-news', {
		modules: [Navigation, Pagination],
		pagination: {
			el: '.swiper-pagination',
		},
	
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	const swiperAnons = new Swiper('.swiper-anons', {
		modules: [Navigation, Pagination],
	
		navigation: {
			nextEl: '.swiper-anons-button-next',
			prevEl: '.swiper-anons-button-prev',
		},
	});


	const menuBurger = document?.querySelector('.menu-burger')
	const menuContent = document?.querySelector('.menu')

	menuBurger.addEventListener('click', function() {
		menuContent.classList.toggle('show')
	})

})