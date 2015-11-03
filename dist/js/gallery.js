(function(global, $, undefined){
	'use strict';

	var $small_view = $('.small_view'),
		$small_view_li = $('li', $small_view),
		$big_view = $('.big_view'),
		$big_view_img = $('img', $big_view);

	$small_view_li.click(function(){
		$(this).addClass('active').siblings().removeClass();
		$big_view_img.attr("src", $(this).children('a').attr('href'));
		return false;
	});
})(window, window.jQuery);