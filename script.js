$(document).ready(function(){

	console.log("it works.");

	
	//variable x for current location name
	//each screen and conversation point has different x
	//define x, and set it at 0, the starting location.
	var x = "start";
	
	console.log(x);
	
	
	
	
	//function for deleting previous text.
	//will be called within the click functions.
	var clear = function(){
		$(".choice1").empty();
		$(".choice2").empty();
		$(".choice3").empty();
		$(".doortext").empty();
	};
	
	
	//function for if you click on the first option.
	var click1 = function(y){
		$(".choice1").click(function(){
			console.log("click1");
			clear();
			x = y;
			console.log(x);
			$(".spacer1").trigger("event");
		});
	};

	
	//function for if you click on the second option.
	var click2 = function(y){
		$(".choice2").click(function(){
			console.log("click2");
			clear();
			x = y;
			console.log(x);
			$(".spacer1").trigger("event");
		});
	};
	
	
	//function for if you click on the third option.
	var click3 = function(y){
		$(".choice3").click(function(){
			console.log("click3");
			clear();
			x = y;
			console.log(x);
			$(".spacer1").trigger("event");
		});
	};

	




	//triggers the javascript to run this part after every choice is made.
	//the trigger is in the click functions.
	//the .spacer1 class is arbitrary.
	$(".spacer1").on("event", function(){
		
		//the first room.  the game always starts here.
		if(x==="start"){
			$(".choice1").append("<p>So.  A door.</p>");
			$(".choice2").append("<p>So.  A game.</p>");
			$(".choice3").append("<p>So.  A choice.</p>");
			
			click1("door1");
			click2("game1");
			click3("choice1");	
		}
		
		if(x==="door1"){
			//So.  A door.
			$(".doortext").append("<p>Just a door.</p>");
			$(".choice1").append("<p>And this is the best door that you could come up with?</p>");
			$(".choice2").append("<p>Weren't you working on doors back in second year?</p>");
			$(".choice3").append("<p>And what would be behind the door?</p>");
			
			click1("door2");
			click2("past1");
			click3("behind1");	
		}
		
		if(x==="door2"){
			//And this is the best door that you could come up with?
			$(".doortext").append("<p>The aesthetics of the door are not the project - it is here to stand between you and something else.</p>");
			$(".choice1").append("<p>Is there really something on the other side, though?</p>");
			$(".choice2").append("<p></p>");
			$(".choice3").append("<p></p>");
			
			click1("door3");
			click2("door2");
			click3("door2");	
		}
		
		if(x==="door3"){
			//Is there really something on the other side, though?
			$(".doortext").append("<p>Does it matter?</p>");
			$(".choice1").append("<p>Yes.  Yes, it does.  Is there anything on the other side?</p>");
			$(".choice2").append("<p></p>");
			$(".choice3").append("<p></p>");
			
			click1("door4");
			click2("door3");
			click3("door3");	
		}
		
		if(x==="door4"){
			//Yes.  Yes, it does.  Is there anything on the other side?
			$(".doortext").append("<p>There used to be.  But this door won't open for you anymore.</p>");
			$(".choice1").append("<p>What used to be there?  What am I missing?</p>");
			$(".choice2").append("<p></p>");
			$(".choice3").append("<p></p>");
			
			click1("door5");
			click2("door4");
			click3("door4");	
		}
		
		if(x==="door5"){
			//What used to be there?  What am I missing?
			$(".doortext").append("<p>There were many things behind this door, and I can't say which one of them you might have found.</p>");
			$(".choice1").append("<p>So you don't actually know anything about what is behind this door.</p>");
			$(".choice2").append("<p></p>");
			$(".choice3").append("<p></p>");
			
			click1("door6");
			click2("door5");
			click3("door5");	
		}
		
		if(x==="door6"){
			//So you don't actually know anything about what is behind this door.
			$(".doortext").append("<p>Whatever is behind this door depends more on you than on me.  I can say that you are the only one who will never open the door.</p>");
			$(".choice1").append("<p>So you don't actually know anything about what is behind this door.</p>");
			$(".choice2").append("<p></p>");
			$(".choice3").append("<p></p>");
			
			click1("door7");
			click2("");
			click3("");	
		}
	
	
	
	
	
	});
	
	
	//trigger to start the first room.
	//needs to be after the rooms themselves so that the function for the rooms has already been defined.
	$(".spacer1").trigger("event");


});