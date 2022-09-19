const cardContainer = document.querySelector('.card');
const thankyouContainer = document.querySelector('.thank-you');
const ratingsButtons = document.querySelectorAll('.buttons-container__button');
const submitButton = document.querySelector('.card__button-submit');
const scoreUser = document.querySelector('.score__user');
const scoreMax = document.querySelector('.score__max');
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

submitButton.addEventListener('click', function () {
	cardContainer.style.display = 'none';

	scoreUser.textContent = rating;
	scoreMax.textContent = 5;

	thankyouContainer.style.display = 'block';
});
