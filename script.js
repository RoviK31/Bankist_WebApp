'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

//Creating and insering elements
const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookie for improved functionality and analytics.'
message.innerHTML =
  'We use cookie for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
header.append(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '103%';
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// logo.setAttribute('company', 'bankist')

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// // Data attributres
// console.log(logo.dataset.versionNumber);

// //Classes
// logo.classList.add('c', 'j')
// logo.classList.remove('c', 'j')
// logo.classList.toggle('c')
// logo.classList.contains('c') //not includes

// //Don't use this
// logo.className = 'dasha'

//*

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  

  //old school way of smooth scrolling
  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   section1.top + window.pageYOffset
  // );

//   window.scrollTo({
//  left:   s1coords.left + window.pageXOffset,
//   top:  section1.top + window.pageYOffset,
//   behavior: 'smooth'
//   }
//   );

//modern way
section1.scrollIntoView({behavior: 'smooth'})
});


const h1 = document.querySelector('h1')

// h1.addEventListener('mouseenter', function(e){
//   alert('addEventListener: Great! You are reading the heading :D')
// })
const alertH1 = function(e){
  alert('addEventListener : Great! You are reading the heading :D')
}

h1.addEventListener('mouseenter', alertH1)
setTimeout(()=>
h1.removeEventListener('mouseenter', alertH1),3000)



h1.onmouseenter = function(e){
  alert('onmouseenter: Great! You are reading the heading :D')
}