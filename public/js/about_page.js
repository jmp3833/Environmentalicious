
/*
 *	about_page.js 
 *  Handles all the parallax scrolling features on this page
 */
$(document).ready(function($) {

	//Smooth scroll to href targers
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 600, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	// google map pin
	var pin = {
		initalize: {
			curviness: 0,
			autoRotate: false,
			values : [ { x: 160, y : -650 } ]
		},
		place: {
			curviness: 0,
			autoRotate: false,
			values : [{ x : 160, y : -165}]
		}
	}

	// paper throw animation
	var throwPaperCrumble = {
		one : {
				curviness: 1.25,
				autoRotate: true,
				values : [  
					{x: 0,	y: 0},
					{x: 100,	y: -1000},
					{x: 200,	y: -800}
				] 
		}, two : {
				curviness: 1.25,
				autoRotate: true,
				values : [  
					{x: 0,	y: 600},
					{x: -100,	y: -800},
					{x: -200,	y: -575}
				] 
		}, three: {
				curviness: 1.25,
				autoRotate: true,
				values : [  
					{x: -100,	y: 0},
					{x: 100,	y: -600},
					{x: 150,	y: -325}
				] 
		}
	}

	//controller for scroll magic
	var controller = new ScrollMagic();

	//google map pin
	var mapPinTween = new TimelineMax() 
			.add(TweenMax.to($("#pin"), 0.1, {css:{bezier:pin.initalize}, ease:Linear.easeNone}))
			.add(TweenMax.to($("#pin"), 0.1, {css:{visibility:"visible"}}))
			.add(TweenMax.to($("#pin"), 1.5, {css:{bezier:pin.place}, ease:Linear.easeNone, scale : 50}))
			.add(TweenMax.to($("#map_message"), 2.0, {css:{visibility:"visible"}}))

	var mapPinScene = new ScrollScene({triggerElement: "#map_it_title", duration: 600, offset: 350})
		.setPin("#map_target")
		.setTween(mapPinTween)
		.addTo(controller);


	//set tween to have the paper throw
	var paperTossTween = new TimelineMax()
			.add(TweenMax.to($("#crumble1"), 1.5, {css:{bezier:throwPaperCrumble.one}, ease:Linear.easeNone}))
			.add(TweenMax.to($("#crumble1"), 0.05, {css:{display:'none'}, ease:Linear.easeNone}) )
			.add(TweenMax.to($("#crumble2"), 1.5, {css:{bezier:throwPaperCrumble.two}, ease:Linear.easeNone}))
			.add(TweenMax.to($("#crumble2"), 0.05, {css:{display:'none'}, ease:Linear.easeNone}) )
			.add(TweenMax.to($("#crumble3"), 1.5, {css:{bezier:throwPaperCrumble.three}, ease:Linear.easeNone}))
			.add(TweenMax.to($("#crumble3"), 0.05, {css:{display:'none'}, ease:Linear.easeNone}) ) ;


	var paperTossScene = new ScrollScene({triggerElement: "#clean_up_title", duration: 700, offset: 150})
			.setPin("#trigger_bin")
			.setTween(paperTossTween)
			.addTo(controller);



	// scene.addIndicators();

});
