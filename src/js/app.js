// import handleStickyHeader from './modules/handle-sticky-header.js'

const $header = $('.js-header');


$(window).on('load scroll resize', function() {
	if ($(this).scrollTop() > 0) {
		$header.addClass('is-sticky');
		return;
	};

	$header.removeClass('is-sticky')
})


$('.js-bar').each((index, bar) => {
	const $barScore = $(bar).find('.bar__score');
	const $barLabel = $(bar).find('.bar__label');
	const score = $barScore.data('percent');

	$barScore.css({'width': `${score}%`});

	$barLabel.html(`${score}%`)
})
