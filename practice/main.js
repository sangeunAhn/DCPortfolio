'use strict';

const navbar = document.getElementById('navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
	if (window.scrollY > navbarHeight) {
		navbar.classList.add('navbar--dark');
	} else {
		navbar.classList.remove('navbar--dark');
	}
});

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
	const link = e.target.dataset.link;
	scrollIntoView(link);
});

const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', () => {
	scrollIntoView('#contact');
});

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
	home.style.opacity = 1 - window.scrollY / homeHeight;
});

const arrowBtn = document.querySelector('.arrow');
document.addEventListener('scroll', () => {
	if (window.scrollY > 100) {
		arrowBtn.classList.add('visible');
	} else {
		arrowBtn.classList.remove('visible');
	}
});

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
	const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
	if (filter == null) {
		return;
	}
	projectContainer.classList.add('anim-out');

	setTimeout(() => {
		projects.forEach((project) => {
			console.log(project.dataset.type);
			if (filter === '*' || filter === project.dataset.type) {
				project.classList.remove('invisible');
			} else {
				project.classList.add('invisible');
			}
		});
		projectContainer.classList.remove('anim-out');
	}, 300);
});

function scrollIntoView(link) {
	const scrollTo = document.querySelector(link);
	scrollTo.scrollIntoView({ behavior: 'smooth' });
}
