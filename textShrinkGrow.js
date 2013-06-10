/*
 *  Tinacious Design Text Shrink & Grow jQuery plugin
 *  Plugin URL: https://github.com/tinacious/textShrinkGrow
 *
 *  Christina Holly (Tinacious Design)
 *  http://tinaciousdesign.com
 *
 */
(function($){
	$.fn.textGrow = function() {
		this.bind('click.textGrow', function(){
			var currentFontSize = $('body').css('font-size');
			currentFontSize = parseInt(currentFontSize);
			var desiredFontSize = currentFontSize + 2;
			$('body').css('font-size',desiredFontSize + 'px');
		});
	}
})(jQuery);

(function($){
	$.fn.textShrink = function() {
		this.bind('click.textShrink', function(){
			var currentFontSize = $('body').css('font-size');
			currentFontSize = parseInt(currentFontSize);
			var desiredFontSize = currentFontSize - 2;
			$('body').css('font-size',desiredFontSize + 'px');
		});
	}
})(jQuery);