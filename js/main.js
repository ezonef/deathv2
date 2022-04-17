$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__links').toggleClass('active');
		$('body').toggleClass('lock');

	});
});



const anchors = document.querySelectorAll(`a[href*="#"]`)

for (let anchor of anchors) {
	anchor.addEventListener("click", function (event) {
		event.preventDefault();
		const blockID = anchor.getAttribute(`href`)
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "center"
		})
	})
}


let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');
const blur = document.querySelector('.blur');

const scrollPosition = () => window.pageYOffset || document.documentElement.offsetTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
	if (scrollPosition() > lastScroll && !containHide() && scrollPosition()) {
		//scroll down
		header.classList.add('hide');
		blur.classList.add('delete');
	}
	else if (scrollPosition() < lastScroll && containHide()) {
		//scroll up
		header.classList.remove('hide');
		blur.classList.remove('delete');
	}

	lastScroll = scrollPosition();
})