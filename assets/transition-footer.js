document.querySelectorAll('.accordion-trigger').forEach(trigger => {
	trigger.addEventListener('click', () => {
	if (window.innerWidth >= 768) return;
	const content = trigger.nextElementSibling;
	const icon = trigger.querySelector('.accordion-icon');
	if (content.style.maxHeight) {
		content.style.maxHeight = null;
		icon.classList.remove('tw-rotate-180');
	} else {
		content.style.maxHeight = content.scrollHeight + 'px';
		icon.classList.add('tw-rotate-180');
	}
	});
});
