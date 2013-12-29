//unslider start
$('.banner').unslider({
	speed: 500,               //  The speed to animate each slide (in milliseconds)
	delay: 4000,              //  The delay between slide animations (in milliseconds)
	complete: function() {},  //  A function that gets called after every slide animation
	keys: true,               //  Enable keyboard (left, right) arrow shortcuts
	arrows: true,
	dots: true,               //  Display dot navigation
	fluid: true              //  Support responsive design. May break non-responsive designs
});
var unslider = $('.banner').unslider();
$('.unslider-arrow').click(function() {
    var fn = this.className.split(' ')[1];

    //  Either do unslider.data('unslider').next() or .prev() depending on the className
    unslider.data('unslider')[fn]();
});
//unslider end,nav start
$("#continue").click(function(event) {
	$("html,body").animate({scrollTop: $("#slider").offset().top - 0.1 * window.screen.availHeight}, 800);
});
$(".navbar-nav li").click(function() {
	$(".navbar-nav li").removeClass('active');
	$(this).addClass('active');
});
$("#school").click(function(event) {
	$("html,body").animate({scrollTop: $("#toSchool").offset().top - 0.3 * window.screen.availHeight}, 800);
});
$("#hometown").click(function(){
	$("html,body").animate({scrollTop: $("#toHometown").offset().top - 0.3 * window.screen.availHeight}, 800);
});
$("#hobby").click(function(){
	$("html,body").animate({scrollTop: $("#toHobby").offset().top - 0.3 * window.screen.availHeight}, 800);
});
$("#major").click(function(){
	$("html,body").animate({scrollTop: $("#toMajor").offset().top - 0.3 * window.screen.availHeight}, 800);
});
$("#work").click(function(){
	$("html,body").animate({scrollTop: $("#toWork").offset().top - 0.3 * window.screen.availHeight}, 800);
});