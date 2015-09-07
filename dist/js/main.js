(function(global, $, undefined){
	'use strict';

	var $slideContainer = $('.slideContainer'),
		$slide = $('.slide', $slideContainer),
		$slide = $('li', $slide),
		slide_total = $slide.length;

	$slide.data('slide_index', 0);

	(function insertImage(){
		var _index = $slide.data('slide_index');

		if(_index < slide_total){
			$slide.eq(_index).append(function(index, html){
				var src = this.getAttribute('data-src');
				return '<img src=' + src + ' alt>';
			});
			$slide.data('slide_index', ++_index);
			insertImage();
		}else{
			$slide.data('slide_index', 0);
			slideShow();
		}
	})();

	function slideShow(){
		var _index = $slide.data('slide_index');
		$slide.eq(_index)
			.fadeIn(1000)
			.delay(2000)
			.fadeOut(1000, function(){
				slideShow();
			});

		if(_index < slide_total-1){
			$slide.data('slide_index', ++_index);
		}else{
			$slide.data('slide_index', 0);
		}
	}

})(window, window.jQuery);