$('.next').click(function(){
   $(this).parent().hide().next().show();//hide parent and show next
});

$('.back').click(function(){
   $(this).parent().hide().prev().show();//hide parent and show previous
});