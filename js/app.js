 // main document ready function to check if dom is loaded fully or not
$( document ).ready(function() {

    $('ul li').click(function(){
        $("li").removeClass("active");
        $(this).addClass("active");
    });

	$("#mySidenav").hover(function(){
	    $(this).css("width","250px");
	    	
	}, function(){
	    $(this).css("width","100px");
	});

});

