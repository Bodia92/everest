const menuTrigger = () => {
	const cardBody = document.body;
	const planItem = document.querySelector('.menuTrigger');

	function addClass(target) {
		if (target.closest('.header__body')) {
			planItem.classList.add('active_mod');
			cardBody.classList.add('body--open_menu_state');
		}
	}
	document.addEventListener('click', (e) => {
		const targetElement = e.target;
		if (cardBody.classList.contains('body--open_menu_state') && targetElement.closest('.menuTrigger')) {
			cardBody.classList.remove('body--open_menu_state');
			planItem.classList.remove('active_mod');
		} else {
			addClass(targetElement);
		}
	});
};

export default menuTrigger;
