// Your code goes here

// This section contains 2 Event Listeners: 1) Mouse Enter & 2) Mouse Leave
let navLinks = document.querySelectorAll('.nav-link');

let msHoverEnter = (event) => {
	event.target.style.transform = 'scale(1.2)';
	event.target.style.transition = 'all 0.2s';
	event.target.style.color = "blue";
}

let msHoverLeave = (event) => {
	event.target.style.transform = 'scale(1)';
	event.target.style.transform = 'all 0.2s';
	event.target.style.color = '#212529';
}

navLinks.forEach(title => {
	title.addEventListener('mouseenter', msHoverEnter);
	title.addEventListener('mouseleave', msHoverLeave);
})

// On Double Click this Fun-Bus image reverses direction
let funBus = document.querySelector('.intro img');

funBus.addEventListener('dblclick', () => {
	funBus.src = "img/fun-bus-rev.jpg";
})

// On Click, changes the background color of the "Sign Up" buttons to purple
let btnClick = document.querySelectorAll('.btn');

let button = (event) => {
	event.target.style.backgroundColor = "darkviolet";
}

btnClick.forEach(title => {
	title.addEventListener('click', button);
})

// Stops the nav links from running their default action & stops the "click" propogation

navLinks.forEach(link => {
	link.addEventListener('click', (event) => {
		event.preventDefault();
		event.stopPropagation();
		event.target.style.color = "forestgreen";
	})
})

// Right click prevents the context menu from appearing and instead changes the background color of the section
let noContext = document.querySelector('.inverse-content');

noContext.addEventListener('contextmenu', p => {
	p.preventDefault();
	noContext.style.backgroundColor = "hotpink";
})

// Changes the header background color to coral on window resize
let headColor = document.querySelector('.main-navigation');

window.addEventListener('resize', () => {
	headColor.style.background = 'coral';
})
	
	
	
	
	
	
	
	
	
	