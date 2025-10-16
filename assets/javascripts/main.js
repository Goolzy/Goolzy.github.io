/* Jekyll front matter placeholder intentionally left empty */

/*!
 * Basically Basic Jekyll Theme 1.4.5
 * Copyright 2017-2018 Michael Rose - mademistakes | @mmistakes
 * Free for personal and commercial use under the MIT license
 * https://github.com/mmistakes/jekyll-theme-basically-basic/blob/master/LICENSE
*/

var menuItems = document.querySelectorAll('#sidebar li');

// Get vendor transition property
var docElemStyle = document.documentElement.style;
var transitionProp = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';

// Animate sidebar menu items
function animateMenuItems() {
  for (var i = 0; i < menuItems.length; i++) {
    var item = menuItems[i];
    // Stagger transition with transitionDelay
    item.style[transitionProp + 'Delay'] = (i * 75) + 'ms';
    item.classList.toggle('is--moved');
  }
};

var myWrapper = document.querySelector('.wrapper');
var myMenu = document.querySelector('.sidebar');
var myToggle = document.querySelector('.toggle');
var myInitialContent = document.querySelector('.initial-content');
var mySearchContent = document.querySelector('.search-content');
var mySearchToggle = document.querySelector('.search-toggle');

// Toggle sidebar visibility
function toggleClassMenu() {
  if (!myMenu || !myToggle || !myWrapper) return;
  myMenu.classList.add('is--animatable');
  if (!myMenu.classList.contains('is--visible')) {
    myMenu.classList.add('is--visible');
    myToggle.classList.add('open');
    myWrapper.classList.add('is--pushed');
  } else {
    myMenu.classList.remove('is--visible');
    myToggle.classList.remove('open');
    myWrapper.classList.remove('is--pushed');
  }
}

// Animation smoother
function OnTransitionEnd() {
  if (!myMenu) return;
  myMenu.classList.remove('is--animatable');
}

if (myMenu) {
  myMenu.addEventListener('transitionend', OnTransitionEnd, false);
  myMenu.addEventListener('click', function () {
    toggleClassMenu();
    animateMenuItems();
  }, false);
}
if (myToggle) {
  myToggle.addEventListener('click', function () {
    toggleClassMenu();
    animateMenuItems();
  }, false);
}
if (mySearchToggle) {
  mySearchToggle.addEventListener('click', function () {
    toggleClassSearch();
  }, false);
}

// Toggle search input and content visibility
function toggleClassSearch() {
  if (!mySearchContent || !myInitialContent) return;
  mySearchContent.classList.toggle('is--visible');
  myInitialContent.classList.toggle('is--hidden');
  setTimeout(function () {
    var input = document.querySelector('.search-content input');
    if (input && input.focus) input.focus();
  }, 400);
}
