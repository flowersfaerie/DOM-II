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

