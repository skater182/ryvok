$(function(){

	var offsetTop = $('.second-screen').offset().top;
	var offsetLeft = $('.second-screen').offset().left;
	var width = $('.second-screen').width();
	var height = $('.second-screen').height();
	$('.flashlight').css('background-size',width + 'px ' + height + 'px');
	var link = $('.watch-video-btn')
	var linkLeft = link.offset().left;
	var linkTop = link.offset().top;
	var linkLeftEnd = linkLeft + link.width();
	var linkTopEnd = linkTop + link.height();

	var bLazy = new Blazy();

	$('.second-screen').on('mousemove',function(e){
		var posX = e.pageX - offsetLeft - 250;
    	var posY = e.pageY - offsetTop -250;
    	if(((e.pageX<linkLeft)||(e.pageX>linkLeftEnd))&&((e.pageY<linkTop)||(e.pageY>linkTopEnd))) {
    		$('.flashlight').css({left: posX, top: posY});
    		$('.flashlight').css('background-position',+(-(posX)) + 'px ' + +(-(posY)) + 'px');
    	}
	});

	var videoNumber = 1;

	$('.video-screen video').on('ended',function(){
     	$('.video-screen').fadeOut();
     	setTimeout(function(){
     		$('.video-screen').fadeIn();
     		$('.video-screen video').get(0).play();
     	},1000);
    });

    $('.video-screen').addClass('ready');

	$('.video-popup video').get(0).pause();

	$('.play-btn').on('click',function(){
		$('.video-popup').addClass('active');
		$('.video-popup video').get(0).load();
		$('.video-popup video').get(0).play();
	});

	$('.watch-video-btn').on('click',function(){
		$('.video-popup-teaser').addClass('active');
		$('.video-popup-teaser video').get(0).load();
		$('.video-popup-teaser video').get(0).play();
	});

	$('.video-popup video').on('ended',function(){
      $('.video-popup').removeClass('active');
      $('.video-popup video').attr('src','video/rolik'+(++videoNumber)+'.mp4');
		if(videoNumber == 6) {
  			videoNumber = 1;
     	 }
      $('.video-popup video').get(0).pause();
    });

    $('.video-popup .close-button').on('click',function(){
		$('.video-popup').removeClass('active');
		$('.video-popup video').attr('src','video/rolik'+(++videoNumber)+'.mp4');
		if(videoNumber == 6) {
  			videoNumber = 1;
     	 }
		$('.video-popup video').get(0).pause();
	});

    $('.video-popup video').on('click',function(){
		$('.video-popup').removeClass('active');
		$('.video-popup video').attr('src','video/rolik'+(++videoNumber)+'.mp4');
		if(videoNumber == 6) {
  			videoNumber = 1;
     	 }
		$('.video-popup video').get(0).pause();
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

// $(window).on('load',function(){
// 	$(".video-screen video source").each(function() {
// 		var sourceFile = $(this).attr("data-src");
// 		$(this).attr("src", sourceFile);
// 		var video = this.parentElement;
// 		video.load();
// 		video.play();
// 	});
// });