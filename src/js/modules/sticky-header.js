const $header = $('.js-header');

$(window).on('load scroll resize',function() {
	if ($(this).scrollTop() > 0) {
		$header.addClass('is-sticky');
		return
	};

	$header.removeClass('is-sticky');
})
