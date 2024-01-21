/**
 * Handle sticky header
 */
export default function handleStickyHeader() {
const $header = $('.js-header');

$(window).on('load scroll resize', function(evt) {
	console.log('test')
	if ($(this).scrollTop() > 0) {
		$header.addClass('is-sticky');
		return;
	};

	$header.removeClass('is-sticky')
})
},()
