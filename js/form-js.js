	$(document).ready(function(){
	   $("#razrab").click(function(){
        $("#block-show").slideToggle("slow");
        $(this).toggleClass("active"); return false;
    });
	});