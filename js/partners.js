$(function(){
	var leftSlideCounter = 0;
	var rightSlideCounter = 1;
	var scrolled = true;

	$('.bg-photos').addClass('loaded');


	if(window.location.hash == "#general") {
		$('.inner-page-title').hide();
		$('.left-block').hide();
		$('.right-block').hide();
		$('.main-block').toggleClass('height-hidden');
		scrolled = false;
  	}

	$('.slide-nav .next').on('click',function(){
		$(this).closest('.front-view').addClass('hidden');
		$('.front-view.active').removeClass('active');
		$(this).closest('.slide-wrap').siblings('.slide-wrap').find('.front-view').removeClass('hidden').addClass('active');
	});

	$('.left-block .slide-nav .next').on('click',function(e){
		if(rightSlideCounter>2) {
			$('.slide-nav .skip')[0].click();
			scrolled = false;
			window.location.hash='general';
		}
		$(this).closest('.front-view').addClass('hidden');
		$(this).closest('.slide-wrap').siblings('.slide-wrap').find('.item').addClass('hidden');
		$(this).closest('.slide-wrap').siblings('.slide-wrap').find('.item').eq(rightSlideCounter++).removeClass('hidden');
		$(this).closest('.slide-wrap').siblings('.slide-wrap').find('.front-view').removeClass('hidden');
	});

	$('.right-block .slide-nav .next').on('click',function(e){
		if(leftSlideCounter==2) {
			$('.slide-nav .skip')[0].click();
			scrolled = false;
			window.location.hash='general';
		}
		$(this).closest('.front-view').addClass('hidden');
		$(this).closest('.slide-wrap').siblings('.slide-wrap').find('.item').addClass('hidden');
		$(this).closest('.slide-wrap').siblings('.slide-wrap').find('.item').eq(leftSlideCounter).removeClass('hidden');
		$(this).closest('.slide-wrap').siblings('.slide-wrap').find('.front-view').removeClass('hidden');
		if(leftSlideCounter == 0) {
			setTimeout(function() {
				$('.left-block .photo .back').attr('src','img/partners/second_image.jpg');
				$('.left-block .photo .front').fadeOut(500);
			}, 800);
			$('.left-block .photo.gen').removeClass('hidden');
		}
		leftSlideCounter++;
	});

	var timer;

	$('.offer-items .line').each(function(){

		// $(this).css('width',$(this).closest('.item').find('.item-text').position().left);

		if($(this).closest('.item').index()%2 != 0) {
			$(this).css('width',$(this).closest('.item').find('.item-text').position().left);
		}
		else {
			$(this).css('width',($(this).closest('.item').innerWidth() - ($(this).closest('.item').find('.item-text').position().left + $(this).closest('.item').find('.item-text').width()))-15);
		}
	
	});

	$('.slide-nav .skip').on('click',function(){
		window.location.hash='general';
		scrolled = false;
		TweenMax.to($('.left-block'),0.3,{x: '-100%',ease:Sine.easeOut});
		TweenMax.to($('.right-block'),0.3,{x: '100%',ease:Sine.easeOut});
		setTimeout(function() {
			$('.inner-page-title').hide();
			$('.left-block').hide();
			$('.right-block').hide();
		}, 200);
		setTimeout(function() {
			$('.main-block').toggleClass('height-hidden');
			window.scrollTo(0, 0);
		}, 200);
	});


	var totalImages = $('.bg-photos .bg-photo').length;

	var pageHeight =  $(window).height();

	// Work out how often we should change image (i.e. how far we scroll between changes)
	var scrollInterval = Math.floor(pageHeight / totalImages);

	$(window).on('scroll',function () {
	    // Which one should we show at this scroll point?
	    i = Math.floor($(this).scrollTop() / scrollInterval);
	    // Show the corresponding image from the array
	    $('.bg-photos .bg-photo').hide();
	    $('.bg-photos .bg-photo').eq(i).show();
	});



	// init controller
	var controller = new ScrollMagic.Controller();

	// create a scene
	new ScrollMagic.Scene({
			duration: 800
		})
		.setTween(TweenMax.from('.photo-in-rect',1,{y: '20%',ease:Power0.easeNone}))
		.addTo(controller); // assign the scene to the controller

	// create a scene
	new ScrollMagic.Scene({
			triggerElement: '.partner-offer',
			duration: 200
		})
		.setTween(TweenMax.from('.photo-in-rect img',1,{y: '50%',ease:Power0.easeNone}))
		.addTo(controller); // assign the scene to the controller

	// create a scene
	new ScrollMagic.Scene({
			triggerElement: '.partner-offer',
			duration: 100
		})
		.setTween(TweenMax.from('#partnerText',1,{y: '20%',ease:Power0.easeNone}))
		.addTo(controller); // assign the scene to the controller

	// create a scene
	new ScrollMagic.Scene({
			triggerElement: '.offer-price-block',
			duration: 200
		})
		.setTween(TweenMax.from('#offerText',1,{y: '-100%',opacity: 0,ease:Power0.easeNone}))
		.addTo(controller); // assign the scene to the controller

	new ScrollMagic.Scene({
			triggerElement: '.math-block',
			duration: 800,
			triggerHook: 1
		})
		.setTween(TweenMax.from('.scrolling-max',1,{x: '-200%',ease:Power0.easeNone}))
		.addTo(controller); // assign the scene to the controller

	new ScrollMagic.Scene({
			triggerElement: '.math-block',
			duration: 800,
			triggerHook: 1
		})
		.setTween(TweenMax.from('.scrolling-photo img',1,{x: '120%',ease:Power0.easeNone}))
		.addTo(controller); // assign the scene to the controller

	new ScrollMagic.Scene({
			triggerElement: '.math-block',
			duration: 200
		})
		.setTween(TweenMax.from('.intro-text-block',1,{y: '150%',ease:Power0.easeNone}))
		.addTo(controller); // assign the scene to the controller

	new ScrollMagic.Scene({
			triggerElement: '.monthly-pay',
			duration: 800
		})
		.setTween(TweenMax.from('.scrolling-photo',1,{'background-position': '150%',ease:Power0.easeNone}))
		.addTo(controller); // assign the scene to the controller

	new ScrollMagic.Scene({
			triggerElement: '.offer-price-block',
			duration: 400
		})
		.setTween(TweenMax.from('.offer-price-block .price-block .price',1,{y: '120%',ease:Power0.easeNone}))
		.addTo(controller); // assign the scene to the controller

	new ScrollMagic.Scene({
			triggerElement: '.offer-price-block',
			duration: 400
		})
		.setTween(TweenMax.from('.offer-price-block .price-text',1,{y: '220%',ease:Power0.easeNone}))
		.addTo(controller); // assign the scene to the controller


	$('.offer-items .item').each(function(){
		new ScrollMagic.Scene({
			triggerElement: this.children[1],
			duration: 100,
			triggerHook: 1
		})
		.setTween(TweenMax.from(this.children[1],.75,{width: 0,ease:Power0.easeNone}))
		.addTo(controller); // assign the scene to the controller
	});

	new ScrollMagic.Scene({
			triggerElement: '.monthly-pay',
			duration: 800
		})
		.setTween(TweenMax.from('.forward-text',1,{x: '-200%',ease:Power0.easeNone}))
		.addTo(controller); // assign the scene to the controller

	new ScrollMagic.Scene({
			duration: 400,
			offset: 50,
			triggerHook: 1,
			triggerElement: '.form-btn-block',
		})
		.setTween(TweenMax.from('.freedom-max',1,{y: '100%',ease:Power0.easeNone}))
		.addTo(controller); // assign the scene to the controller

	new ScrollMagic.Scene({
			duration: 200,
			triggerElement: '.monthly-pay',
		})
		.setTween(TweenMax.from('.monthly-price-text',1,{y: '100%',ease:Power0.easeNone}))
		.addTo(controller); // assign the scene to the controller

	new ScrollMagic.Scene({
			duration: 0,
			triggerElement: '.partner-offer',
			triggerHook: .9
		})
		.setTween(TweenMax.from('.orange-block.first',1,{x: '100%',ease:Power0.easeNone}))
		.addTo(controller); // assign the scene to the controller


	new ScrollMagic.Scene({
			duration: 200,
			triggerElement: '.math-block',
		})
		.setTween(TweenMax.from('.orange-block.second',1,{x: '-100%',ease:Power0.easeNone}))
		.addTo(controller); // assign the scene to the controller

	new ScrollMagic.Scene({
			duration: 200,
			triggerElement: '.monthly-pay',
		})
		.setTween(TweenMax.from('.orange-block.third',1,{x: '100%',ease:Power0.easeNone}))
		.addTo(controller); // assign the scene to the controller

	new ScrollMagic.Scene({
			duration: 200,
			triggerElement: '.math-block',
		})
		.setTween(TweenMax.from('.intro-price',1,{y: '100%',ease:Power0.easeNone}))
		.addTo(controller); // assign the scene to the controller

	new ScrollMagic.Scene({
		duration: 200,
		triggerElement: '.monthly-pay',
	})
	.setTween(TweenMax.from('.monthly-price',1,{y: '100%',ease:Power0.easeNone}))
	.addTo(controller); // assign the scene to the controller	
		
});

$(window).on('load resize',function(){
	if($(window).width() < 769) {
		$('.bg-photos').css('height',$('.bg-photos-logo').height()-10);
	}
	else {
		$('.bg-photos').css('height','100vh');
	}
});