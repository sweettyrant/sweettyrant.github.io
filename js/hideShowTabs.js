// JQuery script to hide and show tabs from the
// desktop sidebar or the mobile menu
$(document).ready
(
    function() 
    {
        $("#sidebar a").click(function() 
        {
            var x = this.id;

            console.log('heeeeeeeeeeeeey' + x);
        	// $("#poemsTab").children().hide();
         //    $("#" + x).fadeToggle();

            
        });

        // $("#sidebar .poemsubcategory a").click(function() 
        // {
        // 	var x = this.id;

        // 	$("#textarea").children().hide();
        //     $("#poemstab").fadeToggle();
        // });


        // $("#menu .maincategory a").click(function() 
        // {
        //     var x = this.id;

        //     $("#textarea").children().hide();
        //     $("#" + x + "tab").fadeToggle();
        // });

        // $("#menu .poemsubcategory a").click(function() 
        // {
        //     var x = this.id;

        //     $("#textarea").children().hide();
        //     $("#poemstab").fadeToggle();
        // });
    }
);