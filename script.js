'use strict';

const modal = document.querySelector('.modal');
const openModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const close = function() {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

const open = function() {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

for (let i = 0; i < openModal.length; i++) openModal[i].addEventListener('click', open);

closeModal.addEventListener('click', close);

overlay.addEventListener('click', close);

document.addEventListener('keydown', function(e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		close();
	}
});
