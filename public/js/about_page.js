
/*
 *	about_page.js 
 *  Handles all the parallax scrolling features on this page
 */
$(document).ready(function($) {

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

	//set tween to have the paper throw
	var tween1 = new TimelineMax()
			.add(TweenMax.to($("#crumble1"), 1.5, {css:{bezier:throwPaperCrumble.one}, ease:Linear.easeNone}))
			.add(TweenMax.to($("#crumble1"), 0.05, {css:{display:'none'}, ease:Linear.easeNone}) )
			.add(TweenMax.to($("#crumble2"), 1.5, {css:{bezier:throwPaperCrumble.two}, ease:Linear.easeNone}))
			.add(TweenMax.to($("#crumble2"), 0.05, {css:{display:'none'}, ease:Linear.easeNone}) )
			.add(TweenMax.to($("#crumble3"), 1.5, {css:{bezier:throwPaperCrumble.three}, ease:Linear.easeNone}))
			.add(TweenMax.to($("#crumble3"), 0.05, {css:{display:'none'}, ease:Linear.easeNone}) ) ;


	var scene1 = new ScrollScene({triggerElement: "#clean_up_title", duration: 700, offset: 150})
			.setPin("#trigger_bin")
			.setTween(tween1)
			.addTo(controller);



	// scene.addIndicators();

});
