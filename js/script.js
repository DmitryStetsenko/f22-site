document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;
	if (targetItem.closest('.button-menu')) {
		document.documentElement.classList.toggle('menu-open');
	}
};