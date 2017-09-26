$(function(){
	// Прокрутка на следующий экран
	$('.bottom-button').on('click',function(){
		 $('html, body').animate({
			scrollTop: $(this).closest('.screen').next().offset().top
		}, 400);
	});

	$('.menu-icon').on('click',function(){
		$('.intro-menu').toggleClass('active');
	});

	$('.close-button').on('click',function(){
		$('.intro-menu').removeClass('active');
	});
});