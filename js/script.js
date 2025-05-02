$(function() {
    ymaps.ready(init);
    var myMap, 
        myPlacemark;

    function init(){ 
		if( ($(window).width() <= 767)  ) {
	        myMap = new ymaps.Map("map", {
		            center: [51.731399, 36.194278],
		            zoom: 15
		        }); 
		} else {
	        myMap = new ymaps.Map("map", {
	            center: [51.731399, 36.194278],
	            zoom: 15
	        }); 			
		}

        myPlacemark = new ymaps.Placemark([51.731399, 36.194278], {
            hintContent: 'Курск',
            balloonContent: 'г. Курск, ул. Красная площадь, д. 1'
        });
        myMap.geoObjects.add(myPlacemark);
    }
    $('.up').click(function(e){
    	e.preventDefault();
    	$('html,body').animate({
          scrollTop: 0
        }, 1000);
    });
    $("input.tel").click(function(){
    	$(this).val('+7');
    });
	$(window).scroll(function() {
		var pos = 86;
		if( ($(window).width() <= 1199) || ($(window).width() >= 768) ) {
			pos = 150;
		}
		if( ($(window).width() <= 767) || ($(window).width() >= 576) ) {
			pos = 150;
		}
		if($(window).width() <= 575) {
			pos = 290;
		}

		if($(this).scrollTop() >= pos) {
			$('nav').addClass('stickytop');
		}
		else{
			$('nav').removeClass('stickytop');
		}
	});
    $('.smoothScroll').click(function(event) {
        event.preventDefault();
        var href=$(this).attr('href');
        var target=$(href);
        var top=target.offset().top;
        $('html,body').animate({
          scrollTop: top
        }, 1000);
    });

	new WOW().init();
	Fancybox.bind("[data-fancybox]", {
		// Your custom options
	  });

});