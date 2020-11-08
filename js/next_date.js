function next_date()
{
	var date = new Date();
	var days   = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
	var months = ['Jan','Feb','Mar','Apr','May','Jun', 'Jul','Aug','Sept','Oct','Nov','Dec'];

	for (i=1;i<=16;i++) 
	{
		var next_date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + (i/2) * i);

		var generated_date = days[next_date.getDay()] + ' ' 
								+ next_date.getDate() + ' ' 
								+ months[next_date.getMonth()] + ' ' 
								+ next_date.getFullYear();

		var sold_out_tag = Math.floor(Math.random() * 3) + 1;	

		if(sold_out_tag === 1)
			generated_date += ' [SOLD OUT]';

		document.getElementById('week' + i).innerHTML = generated_date
	}
}

window.onload=next_date;