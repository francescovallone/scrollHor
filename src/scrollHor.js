function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this,
		args = arguments;
		var later = function() {
		timeout = null;
		if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

(function( $ ){
	$.fn.scrollHor = function(milliseconds) {
		return this.each(function() {
			$(this).attr('id', 'scenes-container');
			var i = 0;
			$('body, html').css("overflow-x", 'hidden');
			$(this).children().each(function(){
				$(this).attr('id', i).addClass("scene");
				$(this).css('left', (i * $(window).width()) + "px");
				i++;
			});
			var el = $(this);
			el.addClass("0");
			el.on('mousewheel', debounce(function(e){
				e.preventDefault();
				e.stopPropagation();
				var scrollUp = false;
				var pos;
				if(e.deltaY < 0) scrollUp = true;
				var sceneC = el.attr('class').split(" ");
				var scene = parseInt(sceneC[sceneC.length - 1]);
				if(scene == 0){
					if(scrollUp){
						pos = "#1";
					}else{
						pos = "#0";
					}
				}else if(scene > 0 && scene  < el.children().length - 1){
					if(scrollUp){
						pos = "#" + (scene + 1);
					}else{
						pos = "#" + (scene - 1);
					}
				}else if(scene == el.children().length - 1){
					if(!scrollUp){
						pos = "#" + (scene - 1);
					}else{
						pos = "#" + scene;
					}
				}
				$("html, body").animate({
					scrollLeft: $(pos).position().left
				}, milliseconds, function(e){
					el.removeClass("" + scene);
					el.addClass(pos.split("#")[1]);
				});
			}, milliseconds, true));
		});
	};
})( jQuery );