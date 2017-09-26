$(function(){

	var cardItemsHeight;

	$('.card-block .card-items-inner .card-item').each(function(){
		var itemOffset = $(this).outerHeight() + ($(this).offset().top - $('.card-items-inner').offset().top);
		$(this).css('transform','translateY(-'+ itemOffset +'px)');
	});


	var isBlockAnimated = false;

	$(window).on('scroll',function() {
		if($(this).scrollTop() === 0) {
			$('.main-menu').removeClass('visible');
		}
		else {
			$('.main-menu').addClass('visible');
		}

		if($('.card-block').length && !isBlockAnimated) {
			if(($(this).scrollTop() + $(this).height()) > $('.card-block').offset().top) {
				$('.card-block').addClass('ready');
				$('.card-items-inner .card-item').each(function(){
					$(this).addClass('drop');
				});
				isBlockAnimated = true;
			}
			setTimeout(function(){
				$('.card-block .card-item .card-image').each(function(){
					$(this).css('animation','flyAbonements 1' + Math.random().toString().substring(1) + 's infinite alternate');
				});
			},4000)
		}

		if($('.page-title').length) {
			$('.page-title').css('transform', 'translateY(-'+ $(this).scrollTop()/1.2 +'px)');
			// $('.inner-page-title').css('transform', 'translateY('+ $(this).scrollTop()/1.5 +'px)');
		}
		$('.other-rates .text').css({
			'opacity' : 1-($(this).scrollTop()/150),
		});
	});

	if($('.discount-block').length) {
		var block = $('.discount-block');
		var blockLeft = block.offset().left;
		var blockTop = block.offset().top;
		var blockTopPos = block.css('top');
		var blockLeftPos = block.css('left');
		var cardBlockMargin = $('.card-block').css('margin-bottom');
	}

	if($('.rates-list').length) {
		var ratesTop = $('.rates-list').offset().top;
	}

	$(window).on('load scroll',function(){
		if(ratesTop <= $(this).scrollTop()) {
			$('.rates-list').addClass('fixed');
		}
		else {
			$('.rates-list').removeClass('fixed');
		}

		if($('.discount-block').length) {
			if($(this).scrollTop() >= (blockTop - 30)) {
				if(($('.insert-block').offset().top - 100) <= $(this).scrollTop()+100) {
					block.css({position:'absolute',top: 'auto',bottom:'-100px',left: blockLeftPos});
				}
				else {
					block.css({position:'fixed',top: blockTopPos,bottom: 'auto',left: blockLeft});
				}   
			}
			else {
				block.css({position:'absolute',top: blockTopPos,bottom: 'auto',left: blockLeftPos});
			}
		}
	});

	$(window).on('load resize',function(){
		$('.card-bottom img').css('height',$('.card-item .card-top img').height());
		$('.card-bottom img').css('width',$('.card-item .card-top img').width());
	});

});