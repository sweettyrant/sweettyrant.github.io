$(".link").click(function(e) {
      e.preventDefault();
      $('#poemsTab div').fadeOut('slow');
      console.log('this')
      console.log(this)
      $('#' + $(this).data('rel')).fadeIn('slow');
});