(function($) {
	$.fn.invisible = function() {
		return this.each(function() {
			$(this).css("visibility", "hidden");
		});
	};
	$.fn.visible = function() {
		return this.each(function() {
			$(this).css("visibility", "visible");
		});
	};
	$.fn.visible = function() {
		return this.css('visibility', 'visible');
	};

	$.fn.invisible = function() {
		return this.css('visibility', 'hidden');
	};

	$.fn.visibilityToggle = function() {
		return this.css('visibility', function(i, visibility) {
			return (visibility == 'visible') ? 'hidden' : 'visible';
		});
	};
}(jQuery));



$(function(){

	var cardItemsHeight;

	$('.main-slider .item.first .text-wrapper').hide();
	setTimeout(function(){
		$('.main-slider .item.first .text-wrapper').show();
	},2500);

	// Появление текста при скролле

	AOS.init({
		offset: 0
	});

	new WOW().init();


	// Фикс для iOS
	 var options = [
		{
			selector: '.first-screen', // Mandatory, CSS selector
			vh: 100,  // Mandatory, height in vh units
		},
		{
			selector: '.second-screen', // Mandatory, CSS selector
			vh: 100,  // Mandatory, height in vh units
		},
		{
			selector: '.third-screen', // Mandatory, CSS selector
			vh: 100,  // Mandatory, height in vh units
		},
		{
			selector: '.fourth-screen', // Mandatory, CSS selector
			vh: 100,  // Mandatory, height in vh units
		},
		{
			selector: '.fifth-screen', // Mandatory, CSS selector
			vh: 100,  // Mandatory, height in vh units
		},
		{
			selector: '.sixth-screen', // Mandatory, CSS selector
			vh: 100,  // Mandatory, height in vh units
		}
	];
	var vhFix = new VHChromeFix(options);

	setTimeout(function(){
		$('.side-menu .item.blog').addClass('loaded');
	},5000);


	// Прокрутка к якорям ссылок главного меню
	$('.main-menu li a, .get-lesson a').on('click',function(){
		 $('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 400);
	});


	// Инициализация главного слайдера
	var owl = $('.main-slider .owl-carousel');
	owl.owlCarousel({
		items: 1,
		mouseDrag: false,
		touchDrag: false,
		autoplay: true,
		autoplayTimeout: 8000,
		video: true,
		loop: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
	});

	// $('body').on('loadeddata','.main-slider .item video',function(){
	// 	$(this).closest('.item').find('.text-wrapper').fadeIn();
	// });

	owl.on('translate.owl.carousel',function(e){
		$('.owl-item video').each(function(){
			var video = $(this);
			var isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
			if(isPlaying) {
				$(this).get(0).pause();
			}
		});
		if($('.owl-item.active').next().find('video').length) {
			$('.owl-item.active').next().find('video').get(0).play();
		}
	});
	owl.on('translated.owl.carousel',function(e){
		if($('.owl-item.active video').length) {
			$('.owl-item.active video').get(0).play();
		}
	});

	$('.main-slider .owl-item .item').each(function(){
		var attr = $(this).attr('data-videosrc');
		if (typeof attr !== typeof undefined && attr !== false) {
			var videosrc = $(this).attr('data-videosrc');
			$(this).prepend('<video muted><source src="'+videosrc+'" type="video/mp4" height="100%" width="100%"></video>');
		}
	});

	$('.main-slider .owl-item.active video').attr('autoplay',true).attr('loop',true);

	$('.mobile-number-slider .owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		// autoplay: true,
	});


	// Слайдер фактов и его подстройка
	$('.cool-slider .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		loop: true,
		// autoplay: false,
		// autoplayTimeout: 5000
	});

	var played = false;

	// $(window).on('scroll',function(){
	// 	if($('.third-screen').length && !played) {
	// 		if(($(this).scrollTop() + $(this).height()) >= ($('.third-screen').offset().top + $('.third-screen').height()/4)) {
	// 			$('.cool-slider .owl-carousel').trigger('play.owl.autoplay');
	// 			played = true;
	// 		}
	// 	}
	// });

	// $('.cool-slider .owl-next,.cool-slider .owl-prev, .cool-slider .owl-dots').on('click',function(){
	// 	$('.cool-slider .owl-carousel').trigger('stop.owl.autoplay');
	// });

	// $('.cool-slider .owl-carousel').on('next.owl.carousel',function(){
	// 	$('.mobile-number-slider .owl-next').trigger('click');
	// });

	// $('.cool-slider .owl-carousel').on('prev.owl.carousel',function(){
	// 	$('.mobile-number-slider .owl-prev').trigger('click');
	// });


	// Слайдер результатов
	$('.result-slider .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		responsive: {
			1440: {
				stagePadding: 200,
			},
		}
		// autoplay: true,
	});

	$('.abonements.slider .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		// responsive: {
		// 	1440: {
		// 		stagePadding: 200,
		// 	},
		// }
		// autoplay: true,
	});

	$('.board.slider .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		// responsive: {
		// 	1440: {
		// 		stagePadding: 200,
		// 	},
		// }
		// autoplay: true,
	});

	// Инициализация слайдера логотипов на мобильном
	$('.top-tab-menu .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		
		// autoplay: true,
	});

	$('.top-tab-menu .menu-icon').on('click',function(){
		$(this).toggleClass('active');
		$('.top-tab-menu .slide-content').toggleClass('active');
	});

	$('.cool-slider .owl-carousel').on('change.owl.carousel initialized.owl.carousel', function(event) {
		$('.cool-slider .owl-item .number').removeClass('visible');
		$('.cool-slider .owl-item .photo').removeClass('visible');

		$('.cool-slider .owl-item.active:not(.revert) .number').addClass('visible');
		$('.cool-slider .owl-item.active:not(.revert) .photo').addClass('visible');

		$('.cool-slider .owl-item.active.revert .photo').addClass('visible');
		$('.cool-slider .owl-item.active.revert .number').addClass('visible');
	});

	$('.cool-slider .owl-dot').each(function(){
		$(this).text($(this).index()+1);
	});

	$('.post-inner-slider .owl-carousel').owlCarousel({
		items: 1,
		dots: true,
		nav: false
	});

	$('.post-inner-slider .next').on('click',function(){
		$('.post-inner-slider .owl-next').trigger('click');
	});

	$('.post-inner-slider .prev').on('click',function(){
		$('.post-inner-slider .owl-prev').trigger('click');
	});

	$('.posts-slider .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		margin: 30,
		stagePadding: 70,
		responsive: {
			1024: {
				margin: 50
			},
			768: {
				items: 3,
				nav: true,
				stagePadding: 0
			}
		}
	})

	// Прокрутка на следующий экран
	$('.bottom-button').on('click',function(){
		 $('html, body').animate({
			scrollTop: $(this).closest('.screen').next().offset().top
		}, 400);
	});

	// Маска для телефона
	$('.phone input').mask('(000) 000-67-89',{placeholder: "(012) 345-67-89"});


	// Закрытие попапов
	$('.popup .close-button').on('click',function(){
		$(this).closest('.popup').removeClass('visible');
		$('.popup-background').removeClass('visible');
	});

	// Открытие попап формы "Задать вопрос"
	$('.ask').on('click',function(){
		$('.popup-window-form-2').removeClass('visible');
		$('.popup-window-form').addClass('visible');
		$('.popup-background').addClass('visible');
	});


	// Открытие попап формы "Записаться на занятие"
	$('.get-lesson').on('click',function(){
		$('.popup-window-form').removeClass('visible');
		$('.popup-window-form-2').addClass('visible');
		$('.popup-background').addClass('visible');
	});

	// Отправка форм AJAX
	$('#popup_form').on('submit',function(e){

			setTimeout(function() {
				$('.popup-window-form').removeClass('visible');
				$('.popup-background').removeClass('visible');
			}, 3000);
			$('.popup-thanks').addClass('visible');
				
		 $.ajax({
		   type: "POST",
		   data: $("#popup_form").serialize(),
		   success: function(data)
		   {
		   }
		 });

		e.preventDefault();
	});

	$('#popup_form-2').on('submit',function(e){

			setTimeout(function() {
				$('.popup-window-form-2').removeClass('visible');
				$('.popup-background').removeClass('visible');
			}, 3000);
			$('.popup-thanks').addClass('visible');
				
		 $.ajax({
		   type: "POST",
		   data: $("#popup_form-2").serialize(),
		   success: function(data)
		   {
		   }
		 });

		e.preventDefault();
	});

	
	$('.qa-items .answer').each(function(){
		if(!$(this).find('.switch-answer').length) {
			$(this).find('.answer-text').addClass('sm');
		}
	});

	// if($('.card-top.card-image').length) {
	// 	var imgOffset = $('.card-top.card-image img').position().left;
	// 	// $('.card-bottom').css('left',imgOffset);
	// }


	$(window).on('load',function(){
		AOS.refresh();
		$('.slider-wrapper').css('opacity',1);
	});

	$(window).on('load scroll',function(){

		var bottomScroll = $(this).scrollTop() + $(this).height();

		if($('.seventh-screen').length) {

			if(bottomScroll > $('.seventh-screen').offset().top) {
				$('.ask,.get-lesson').addClass('ended').css('bottom',$('.seventh-screen').outerHeight() + $('footer').outerHeight());
			}
			else {
				$('.ask,.get-lesson').removeClass('ended').css('bottom',-1);
			}
		}
		else {

			if(bottomScroll > $('footer').offset().top) {
				$('.ask,.get-lesson').addClass('ended').css('bottom',$('footer').outerHeight());
			}
			else {
				$('.ask,.get-lesson').removeClass('ended').css('bottom',-1);
			}
		}

		var temp;

		if($('.screen').length) {
			$('.screen').each(function(){

				if($(window).scrollTop() >= $(this).offset().top) {
					if($('.main-menu li a').length) {
						$('.main-menu li a').removeClass('active');
						for(var i = 0; i < $('.main-menu li').length; i++) {
							temp = $('.main-menu li').eq(i).find('a').attr('href');
							temp = temp.replace('#','');
							if($(this).attr('id') == temp) {
								$('.main-menu li').eq(i).find('a').addClass('active');
							}
						}
					}
				}
			});
		}
	});


	// =====================

	$('.switch-answer').on('click',function(){
		var isOpened = $(this).closest('.answer').hasClass('opened');

		$('.answer').removeClass('opened');

		if(isOpened) {
			$(this).closest('.answer').removeClass('opened');
		}
		else {
			$(this).closest('.answer').addClass('opened');
		}

		var text = $(this).text();
		$('.switch-answer').text('Развернуть ответ');
		$(this).text(text == "Развернуть ответ" ? 'Свернуть' : 'Развернуть ответ');
	});

	$('.before_after .after_photo img').css('width',$('.before_after').width());

	$('.before_after').on('mousemove touchmove', function(e){
		var moveX = e.pageX - $(this).offset().left;
		var moveXAfter = $(this).offset().left + $(this).width() - e.pageX;

		$('.center_block_line').css('left', moveX);
		$('.after_photo').css('width', moveXAfter);
	});

	$('.before_after').on('mouseout touchend', function(e){
		var moveX = e.pageX - $(this).offset().left;
		var moveXAfter = $(this).offset().left + $(this).width() - e.pageX;
		if(moveX >= ($(this).width()/2)) {
			$('.center_block_line').css('left', $(this).width() - 0);
			$('.after_photo').css('width', 0);
		}
		else {
			$('.center_block_line').css('left', - 5);
			$('.after_photo').css('width', $(this).width());
		}
	});

	$('.review-block-inner').niceScroll({
		cursorwidth: "20px",
		background: "#605c5c",
		cursorborderradius: "50%",
		cursorfixedheight: 20,
		autohidemode: false
	});

	$('.select-block .items').niceScroll({
		cursorwidth: "20px",
		background: "#afafaf",
		cursorborderradius: "50%",
		cursorfixedheight: 20,
		zindex: 2
	});

	$('.content-block .city-select .select-item').on('click',function(){
		$(this).closest('.city-select').find('.select-item').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.city-select').find('.selected-item').text($(this).text());
		$(this).closest('.city-select').find('.items-wrapper').invisible();
		$('.place-select').removeClass('not-active');
	});

	$('.content-block .place-select .select-item').on('click',function(){
		$(this).closest('.place-select').find('.select-item').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.place-select').find('.selected-item').text($(this).find('.select-text').text());
		$(this).closest('.place-select').find('.items-wrapper').invisible();
		$('.place-logo,.place-address,.schedule-table').removeClass('not-active');
		if($('.map-wrapper').length) {
			$('.map-wrapper').removeClass('hidden');
		}
	});

	$('.popup .city-select .select-item').on('click',function(){
		$(this).closest('.city-select').find('.select-item').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.city-select').find('.selected-item').text($(this).text());
		$(this).closest('.city-select').find('.items-wrapper').invisible();
		$('.place-select').removeClass('not-active');
	});

	$('.popup .place-select .select-item').on('click',function(){
		$(this).closest('.place-select').find('.select-item').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.place-select').find('.selected-item').text($(this).find('.select-text').text());
		$(this).closest('.place-select').find('.items-wrapper').invisible();
	});

	$('.results-wrapper').mixItUp();

	$('.blog-list').isotope({
		masonry: {}
	});

	$('.blog-filters .filter-btn').click(function(e) {
		e.preventDefault();
		$('.blog-filters .filter-btn').removeClass('active');
		$(this).addClass('active')
		var to_filter = $(this).attr('data-filter');
		if(to_filter == '*') {
			$('.blog-list').isotope({filter: '.blog-list-item'});
		} else {
			$('.blog-list').isotope({filter: to_filter + ',.promo'});
		}
		
	});

	$('.selected-item').on('click',function(){
		$(this).siblings('.items-wrapper').visibilityToggle();
	});

	$('.general-menu .close-button').on('click',function(){
		$('.general-menu').removeClass('visible');
	});

	$('.side-menu .menu-icon').on('click',function(){
		$('.general-menu').addClass('visible');
	});


	$('.popup-background').on('click',function(e){
		if(e.target !== this) {
			return;
		}
		else {
			$('.popup').removeClass('visible');
			$('.popup-background').removeClass('visible');
		}
	});


	if($('#map').length) {
		google.maps.event.addDomListener(window, 'load', init);
	}

	$('.mobile-tabs .day-select .item').on('click',function(){
		$('.mobile-tabs .day-select .item').removeClass('active');
		$(this).addClass('active');
		$('.mobile-tabs .day-schedule.active').removeClass('active');
		$('.mobile-tabs .day-schedule.'+$(this).attr('data-day')).addClass('active');
	});
});

var map;
        
function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,

        disableDefaultUI: true,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(50.492437, 30.496501), 

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(50.493979, 30.489131),
        map: map,
        icon: '/img/ryvok-marker.png'
    });
}