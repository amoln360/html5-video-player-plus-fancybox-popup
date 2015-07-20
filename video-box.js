var x = 5.00;   //Intialize default time period

window.onload = function() {

var vid = document.getElementById("myVideo"); //Get ID of Video Player

function myFunction() {

if(vid.currentTime >= x )    // Check for pausing the video on a specific time interval
    {   vid.pause();


       document.getElementById('iFrameLink').click(); 


	vid.removeEventListener("timeupdate",myFunction);
    }    
}
	

vid.addEventListener("timeupdate", myFunction);  // Add listener to time update function of html5 video
}

function empty() { 
x = document.getElementById("myTime").value; 

	if(x == "" || x == null){		//Check if the value of time is given or not
		x=5.00;				//If not assign the default time
		}
	else{
		if(isNaN(x)){
			alert("Input not valid");
				x=5.00;				
			}
	}
}


