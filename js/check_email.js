function check_email() 
{
	var email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
	if(document.forms['newsletter_form'].newsletter_input.value === "")
	{
		document.getElementById('newsletter_btn').innerHTML = '<i>Enter Email</i>';
		setTimeout(function(){document.getElementById('newsletter_btn').innerHTML = 'Join Newsletter'}, 3000);
	}
	else
	{
		var given_email = document.forms['newsletter_form'].newsletter_input.value;

		if(email_regex.test(given_email))
		{
			document.forms['newsletter_form'].newsletter_input.value = "";
			document.getElementById('newsletter_btn').innerHTML = '<i>Joined!</i>';
			setTimeout(function(){document.getElementById('newsletter_btn').innerHTML = 'Join Newsletter'}, 5000);
		}
		else
		{
			document.forms['newsletter_form'].newsletter_input.value = "";
			document.getElementById('newsletter_btn').innerHTML = '<i>Enter Valid Email</i>';
			setTimeout(function(){document.getElementById('newsletter_btn').innerHTML = 'Join Newsletter'}, 3000);
		}	
	}
}