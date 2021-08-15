function clock(){

	const dates = document.getElementById('date'); 
	const months = document.getElementById('month'); 
	const years = document.getElementById('year');

	const hours = document.getElementById('hour'); 
	const minutes = document.getElementById('minute'); 
	const seconds = document.getElementById('second');


	const indicates = document.getElementById('indicate');


	const dayNames = document.getElementById('dayName'); 


	const now = new Date();

	dates.innerText = now.getDate();
	months.innerText = now.getMonth();
	years.innerText = now.getFullYear();

	hours.innerText = now.getHours();
	minutes.innerText = now.getMinutes();
	seconds.innerText = now.getSeconds();

	dayNames.innerText = now.getDay();

	//conditionals for the days

	if(now.getDay() == 0){

		dayNames.innerText = 'Sunday';
	
	} else if(now.getDay() == 1){

		dayNames.innerText = 'Monday';
	
	} else if(now.getDay() == 2){

		dayNames.innerText = 'Tuesday';
	
	} else if(now.getDay() == 3){

		dayNames.innerText = 'Wednesday';
	
	} else if(now.getDay() == 4){

		dayNames.innerText = 'Thursday';
	
	} else if(now.getDay() == 5){

		dayNames.innerText = 'Friday';
	
	} else if(now.getDay() == 6){

		dayNames.innerText = 'Saturday';
	
	}

	

	//conditionals for the months

	if(now.getMonth() == 0){

		months.innerText = 'January';
	
	} else if(now.getMonth() == 1){

		months.innerText = 'Febuary';
	
	} else if(now.getMonth() == 2){

		months.innerText = 'March';
	
	} else if(now.getMonth() == 3){

		months.innerText = 'April';
	
	} else if(now.getMonth() == 4){

		months.innerText = 'May';
	
	} else if(now.getMonth() == 5){

		months.innerText = 'June';
	
	} else if(now.getMonth() == 6){

		months.innerText = 'July';
	
	}  else if(now.getMonth() == 7){

		months.innerText = 'August';
	
	}  else if(now.getMonth() == 8){

		months.innerText = 'September';
	
	}  else if(now.getMonth() == 9){

		months.innerText = 'October';
	
	}  else if(now.getMonth() == 10){

		months.innerText = 'November';
	
	}  else if(now.getMonth() == 11){
		months.innerText = 'December';
	
	}







	if(now.getHours() == 13){

		hours.innerText = 1;
	}

	if(now.getHours() == 14){

		hours.innerText = 2;
	}

	if(now.getHours() == 15){

		hours.innerText = 3;
	}

	if(now.getHours() == 16){

		hours.innerText = 4;
	}

	if(now.getHours() == 17){

		hours.innerText = 5;
	}

	if(now.getHours() == 18){

		hours.innerText = 6;
	}

	if(now.getHours() == 19){

		hours.innerText = 7;
	}

	if(now.getHours() == 20){

		hours.innerText = 8;
	}

	if(now.getHours() == 21){

		hours.innerText = 9;
	}

	if(now.getHours() == 22){

		hours.innerText = 10;
	}

	if(now.getHours() == 23){

		hours.innerText = 11;
	}

	if(now.getHours() == 24){

		hours.innerText = 12;
	}



	if(now.getHours() < 12){

		indicates.innerText = 'AM';
		
	} else {

		indicates.innerText = 'PM';
	}








}

window.setInterval(clock, 1000);










