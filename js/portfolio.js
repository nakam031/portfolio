// Sticky navbar
// =========================



$(window).scroll(function() {
	var yourNavigation = $("#mainNavbar");
	var stickyDiv = "navbar-fixed";
	var yourHeader = $('.headingGroup').height();
	console.log(yourHeader)
	if( $(window).scrollTop() > yourHeader/3){
		$(".headingGroup").addClass("headingOpacity");
		// $("#gallery").css({"opacity":"1"});
	}
	else{
		$(".headingGroup").removeClass("headingOpacity");
		// $("#gallery").addClass("gallery1");
	}
  	if( $(window).scrollTop() > yourHeader ) {
  		// console.log("if");
  		// $("#mainNavbar").css({"top": "0", "z-index": "100", "position": "fixed", "width": "100%"});
    	yourNavigation.addClass(stickyDiv);
  	}
  	else {
  		// console.log("else")

    	yourNavigation.removeClass(stickyDiv);
  	}
});