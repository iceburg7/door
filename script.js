$(document).ready(function(){

	console.log("it works.");

	
	//variable x for current location name
	//each screen and conversation point has different x
	//define x, and set it at 0, the starting location.
	var x = "start";
	
	console.log(x);

	
	
	//function for deleting previous text.
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
		});
	};

	
	//function for if you click on the second option.
	var click2 = function(y){
		$(".choice2").click(function(){
			console.log("click2");
			clear();
			x = y;
			console.log(x);
		});
	};
	
	
	//function for if you click on the third option.
	var click3 = function(y){
		$(".choice3").click(function(){
			console.log("click3");
			clear();
			x = y;
			console.log(x);
		});
	};

	




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
	
	
	


});