'use strict'

const preloader = document.querySelector('.preloader');

window.addEventListener('load', function () {
  preloader.classList.add('remove');
});

// Add event on multiple elements
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// Navbar toggle for moblile

const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');

const toggleNav = function () {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('nav-active');
};

addEventOnElements(navTogglers, 'click', toggleNav);

// Header
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
  header.classList[window.scrollY > 100 ? 'add' : 'remove']('active');
});
