$(document).ready(function(){
	//Scroll To
	$("button, a.animated, nav.breadcrumb a").on("click", function(e){
		e.preventDefault();
        $("html, body").animate({
            scrollTop: $( $.attr(this, "rel") ).offset().top
        }, 500);
	});
	
	//Side Breadcrumb Navigation
	$("nav.breadcrumb a").on("click", function(e){
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
	});	
});

//Scroll Navigation
$(window).scroll(function(){
	var winTop = $(this).scrollTop()+300;
    var $sections = $('section, header');
    var top = $.grep($sections, function(item){
        if($(item).position().top <= winTop){
			$(".selected").removeClass("selected");
			$("nav a[rel='#"+$(item).attr("id")+"']").addClass("selected");
			if($(item).attr("id") == "bio" || $(item).attr("id") == "work"){
				$("nav a").css("border-color", "#CCC");
				console.log($(item).attr("id"));
			}else{
				$("nav a").css("border-color", "white");
			};
        };
    });
});
