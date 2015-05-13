$(document).ready(function(){
	$("button, a.animated, nav.breadcrumb a").on("click", function(e){
		e.preventDefault();
        $("html, body").animate({
            scrollTop: $( $.attr(this, "rel") ).offset().top
        }, 500);
	});
});