// JQuery script to hide and show tabs from the
// desktop sidebar or the mobile menu
$(document).ready
(
    function() 
    {
        $("#sidebar .maincategory a").click(function() 
        {
            var x = this.id;



        	$("#textarea").children().hide();
            $("#" + x + "Tab").fadeToggle();  
        });

        $("#sidebar .poemsubcategory a").click(function() 
        {
        	var x = this.id;

            console.log("EHEEEE " + x)

        	$("#textarea").children().hide();
            $("#poemsTab").fadeToggle();
        });


        $("#menu .maincategory a").click(function() 
        {
            var x = this.id;

            $("#textarea").children().hide();
            $("#" + x + "Tab").fadeToggle();
        });

        $("#menu .poemsubcategory a").click(function() 
        {
            var x = this.id;

            $("#textarea").children().hide();
            $("#poemsTab").fadeToggle();
        });
    }
);