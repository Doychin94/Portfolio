// import handleStickyHeader from './modules/handle-sticky-header.js'

const $header = $('.js-header');


$(window).on('load scroll resize', function(evt) {
	if ($(this).scrollTop() > 0) {
		$header.addClass('is-sticky');
		return;
	};

	$header.removeClass('is-sticky')
})