// Sticky navbar
// =========================



$(window).scroll(function() {
	var myNavigation = $("#mainNavbar");
	var stickyDiv = "navbar-fixed";
	var myHeader = $('.headingGroup').height();
	console.log(myHeader)
	if( $(window).scrollTop() > myHeader/3){
		$(".headingGroup").addClass("headingOpacity");
		// $("#gallery").css({"opacity":"1"});
	}
	else{
		$(".headingGroup").removeClass("headingOpacity");
		// $("#gallery").addClass("gallery1");
	}
  	if( $(window).scrollTop() > myHeader ) {
  		// console.log("if");
  		// $("#mainNavbar").css({"top": "0", "z-index": "100", "position": "fixed", "width": "100%"});
    	myNavigation.addClass(stickyDiv);
  	}
  	else {
  		// console.log("else")

    	myNavigation.removeClass(stickyDiv);
  	}
});