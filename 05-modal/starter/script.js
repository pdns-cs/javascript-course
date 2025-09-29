'use strict';

// Modal elements
const modalEl = document.querySelector('.modal');

// Overlay modal
const overlayEl = document.querySelector('.overlay');

// Close modal
const btnCloseModalEl = document.querySelector('.close-modal');

// Open modal
const btnOpenModalEl = document.querySelectorAll('.show-modal');

console.log('Open buttons:', btnOpenModalEl.length);

 const openModal = function () { 
    modalEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
 };

 btnOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

 const closeModal = function () {
    modalEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
 };

 btnCloseModalEl.addEventListener('click', closeModal);
 overlayEl.addEventListener('click', closeModal);
