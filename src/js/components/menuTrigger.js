let $menuTrigger;

$menuTrigger = $('.menuTrigger');

$menuTrigger.on('click', () => {
	if ($('body').hasClass('body--open_menu_state')) {
		$('body').removeClass('body--open_menu_state');
		$('.menuTrigger').removeClass('active_mod');
	} else {
		$('body').addClass('body--open_menu_state');
		$('.menuTrigger').addClass('active_mod');
	}
});
