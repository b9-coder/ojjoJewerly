$(
	function() {
		$('.menu__open').click(function() {
			$('.menu').toggleClass('show-menu')
			$('.header').css('background', 'rgba(0, 0, 0, 0.4)').css('height', '500px')
			$('.menu__link').css('margin-top', '20px');
			$('.header__menu1').css('margin-top', '20px')
			$('.header__menu2').css('margin-top', '72px')
			$('.header__logo').css('margin-top', '-30px')
			$('.header .nav-2__icon').css('display', 'none')
			

		})
	}
);