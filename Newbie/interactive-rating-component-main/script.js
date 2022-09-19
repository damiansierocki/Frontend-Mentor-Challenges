const ratingsButtons = document.querySelectorAll('.buttons-container__button');
let rating;

const removeClickedClassFromButtons = () => {
	ratingsButtons.forEach((item) => {
		item.classList.remove('clicked');
	});
};

ratingsButtons.forEach((item) => {
	item.addEventListener('click', function () {
		rating = Number(item.textContent.trim());
		removeClickedClassFromButtons();
		item.classList.add('clicked');
	});
});
