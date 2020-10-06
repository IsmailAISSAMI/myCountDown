function getCountDown(){
	
	var date = new Date();
	let newYear = new Date(2021,0,1,0);	// out put:  Fri Jan 01 2021 00:00:00 GMT+0100
	//console.log('today is ' + date + '\nand newYear is at ' + newYear );
	
	var dateDuration = (newYear.getTime() - date.getTime()); // in millisecond
	//console.log('there is '+ dateDuration + ' milliseconds between the two');

	var seconds, minutes, hours, days; 	
	
	days = Math.floor(dateDuration / (1000 * 3600 * 24));
	dateDuration -= days * (1000 * 3600 * 24);

	hours = Math.floor(dateDuration / (1000 * 3600));
	dateDuration -= hours * (1000 * 3600);

	minutes = Math.floor(dateDuration / (1000 * 60)); 
	dateDuration -= minutes * (1000 * 60);

	seconds = Math.floor(dateDuration / 1000);


	document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
		<div class=\"numbers\">" + days + 
	"</div>days</div> \
	<div class=\"hours\"> \
  		<div class=\"numbers\">" + hours + 
  	"</div>hours</div> \
	<div class=\"minutes\"> \
  		<div class=\"numbers\">" + minutes + 
  	"</div>minutes</div> \
	<div class=\"seconds\"> \
  		<div class=\"numbers\">" + seconds + 
  	"</div>seconds</div> \
	</div>";

}

setInterval(getCountDown, 1000);
