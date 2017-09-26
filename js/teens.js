$(function(){

	$('.teens-left-carousel .owl-carousel').owlCarousel({
		items: 1,
		animateOut: 'fadeOut',
		// autoplay: true,
		// mouseDrag: false,
		// touchDrag: false,
		autoplayTimeout: 4000,
		loop: true,
		onInitialize : function(element){
        $('.teens-left-carousel .owl-carousel').children().sort(function(){
            return Math.round(Math.random()) - 0.5;
        }).each(function(){
            $(this).appendTo($('.teens-left-carousel .owl-carousel'));
        });
    },
	});

	$('.teens-right-carousel .owl-carousel').owlCarousel({
		items: 1,
		animateOut: 'fadeOut',
		// mouseDrag: false,
		// touchDrag: false,
		// autoplay: true,
		autoplayTimeout: 4000,
		loop: true,
		onInitialize : function(element){
        $('.teens-right-carousel .owl-carousel').children().sort(function(){
            return Math.round(Math.random()) - 0.5;
        }).each(function(){
            $(this).appendTo($('.teens-right-carousel .owl-carousel'));
        });
    },
	});

	var offset = $('.second-screen').offset();
	var width = $('.second-screen').width();
	var height = $('.second-screen').height();
	$('.flashlight').css('background-size',width + 'px ' + height + 'px');
	var link = $('.watch-video-btn')
	var linkLeft = link.offset().left;
	var linkTop = link.offset().top;
	var linkLeftEnd = linkLeft + link.width();
	var linkTopEnd = linkTop + link.height();

	$('.second-screen').on('mousemove',function(e){
		
		var posX = e.pageX - offset.left - 250;
    	var posY = e.pageY - offset.top -250;
    	if(((e.pageX<linkLeft)||(e.pageX>linkLeftEnd))&&((e.pageY<linkTop)||(e.pageY>linkTopEnd))) {
    		$('.flashlight').css({left: posX, top: posY});
    		$('.flashlight').css('background-position',+(-(posX)) + 'px ' + +(-(posY)) + 'px');
    	}
	});

	$(window).on('load',function(){
		TweenMax.to($('.teens-right-carousel'),.75,{x: '0',ease:Sine.easeOut});
		TweenMax.to($('.teens-left-carousel'),.75,{x: '0',ease:Sine.easeOut});
	});

	$('.watch-video-btn').on('click',function(){
		$('.video-popup-teaser').addClass('active');
		$('.video-popup-teaser video').get(0).load();
		$('.video-popup-teaser video').get(0).play();
	});


	$('.video-popup-teaser .close-button').on('click',function(){
		$('.video-popup-teaser').removeClass('active');
		$('.video-popup-teaser video').get(0).pause();
	});

    $('.video-popup-teaser video').on('click',function(){
		$('.video-popup-teaser').removeClass('active');
		$('.video-popup video').get(0).pause();
	});

	$('.video-popup-teaser video').on('ended',function(){
      $('.video-popup-teaser').removeClass('active');
      $('.video-popup-teaser video').get(0).pause();
    });
});