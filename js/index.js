$(document).ready(function(){
	var scroll_start = 0;
	var startchange = $('#change-it-now');
	var offset = startchange.offset();
	if(startchange.length){
		$(document).scroll(function(){
			scroll_start = $(this).scrollTop();
			if(scroll_start>offset.top){
				$('.navbar-custom').css('background-color', '#0bbb00');
			}else{
				$('.navbar-custom').css('background-color', '#cb9700');
			}
		})
	}
})
