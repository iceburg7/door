$(document).ready(function(){

	console.log("it works.");

	
	//variable x for current location name
	//each screen and conversation point has different x
	//define x, and set it at 0, the starting location.
	var x = "start";
	console.log(x);
	
	//define a variable for the reloading scenario later on.
	var hasReloaded = 0;
	
	
	
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
			click2("game1");	//open
			click3("choice1");	//open
		}
		
		if(x==="door1"){
			//So.  A door.
			$(".doortext").append("<p>Just a door.</p>");
			$(".choice1").append("<p>And this is the best door that you could come up with?</p>");
			$(".choice2").append("<p>Weren't you working on doors back in second year?</p>");
			$(".choice3").append("<p>And what would be behind the door?</p>");
			
			click1("door2");
			click2("past1");	//open
			click3("behind1");	//open
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
			$(".doortext").append("<p>Whatever is behind this door depends more on you than on me.  What I do know is that you are the only one who will never be able to open this door.</p>");
			$(".choice1").append("<p>Then what is the point of my being here?</p>");
			$(".choice2").append("<p>I could just reload the page and end up somewhere else.</p>");
			$(".choice3").append("<p></p>");
			
			click1("door7");
			click2("reload1");
			click3("door6");	
		}
		
		if(x==="reload1"){
			//I could just reload the page and end up somewhere else.
			$(".doortext").append("<p>You can absolutely do that.  And you can end up right back here again.</p>");
			$(".choice1").append("<p>I'll see you soon, then.</p>");
			$(".choice2").append("<p>I don't even have to reload, do I?</p>");
			$(".choice3").append("<p></p>");
			
			hasReloaded = 1;
			
			click1("start");
			click2("start");
			click3("reload1");	
		}
		
		if(x==="door7"){
			//Then what is the point of my being here?
			$(".doortext").append("<p>This is one of the possible outcomes of our talk, right?  That's what I'm here for - to show all of the possible outcomes.</p>");
			$(".choice1").append("<p>So am I supposed to find all of the outcomes, or should I stick with the first one that I get?</p>");
			$(".choice2").append("<p></p>");
			$(".choice3").append("<p></p>");
			
			click1("should1");
			click2("door7");
			click3("door7");
		}
		
		if(x==="should1"){
			//So am I supposed to find all of the outcomes, or should I stick with the first one that I get?
			$(".doortext").append("<p>You already know that there is no such thing as 'should' and 'shouldn't'.  For all I know, this is your twentieth time having this conversation.</p>");
			$(".choice1").append("<p>For all I know, you know exactly how many times we've had this conversation.</p>");
			$(".choice2").append("<p></p>");
			$(".choice3").append("<p></p>");
			
			click1("should2");
			click2("should1");
			click3("should1");
		}
		
		if(x==="should2"){
			//For all I know, you know exactly how many times we've had this conversation.
			$(".doortext").append("<p>That is true.  I could be storing everything in your browser.  Even if I'm not doing it now, I could start at any point in the future.  I could surprise you.</p>");
			$(".choice1").append("<p></p>");
			$(".choice2").append("<p></p>");
			$(".choice3").append("<p></p>");
			
			click1("should2");	//dead end
			click2("should2");
			click3("should2");
		}
		
		
		
		
		
		if(x==="game1"){
			//So.  A game.
			$(".doortext").append("<p>That's right.  This is a point-and-click adventure of sorts.</p>");
			$(".choice1").append("<p>I would appreciate your defining a 'Point-And-Click-Adventure'.</p>");
			$(".choice2").append("<p>Is it really?  So are there any screens besides this one?</p>");
			$(".choice3").append("<p></p>");
			
			click1("define1");
			click2("screen1");
			click3("game1");
		}
		
		if(x==="define1"){
			//I would appreciate your defining a 'Point-And-Click-Adventure'.
			$(".doortext").append("<p>It is a game where you move around space -- represented by  two-dimensional images -- by clicking around the screen.  It is usually puzzle-based, but this game isn't.</p>");
			$(".choice1").append("<p>So what is this game based on?</p>");
			$(".choice2").append("<p></p>");
			$(".choice3").append("<p></p>");
			
			click1("define2");
			click2("define1");
			click3("define1");
		}
		
		if(x==="define2"){
			//So what is this game based on?
			$(".doortext").append("<p>This game is about choices.  Think of it as a maze with many exits.  The exit is through this door, but where you end up depends on which path you take.</p>");
			$(".choice1").append("<p>Is one of the exits the best one?  Is there something I am supposed to find here?</p>");
			$(".choice2").append("<p></p>");
			$(".choice3").append("<p></p>");
			
			click1("define3");
			click2("define2");
			click3("define2");
		}
		
		if(x==="define3"){
			//Is one of the exits the best one?  Is there something I am supposed to find here?
			$(".doortext").append("<p>No.  This place is actually for me as much as it is for you.  It's a way for me to organize my thoughts.</p>");
			$(".choice1").append("<p>Give me an example.  Tell me what you're thinking about.</p>");
			$(".choice2").append("<p></p>");
			$(".choice3").append("<p></p>");
			
			click1("define4");
			click2("define3");
			click3("define3");
		}
		
		if(x==="define4"){
			//Give me an example.  Tell me what you're thinking about.
			$(".doortext").append("<p>Well, first of all do you know what I would mean if I were to talk about the general questions of architecture?</p>");
			$(".choice1").append("<p>Yes.</p>");
			$(".choice2").append("<p>No - what do you mean?</p>");
			$(".choice3").append("<p></p>");
			
			click1("define5");	
			click2("define6");
			click3("define4");
		}
		
		if(x==="define5"){
			//Yes.
			$(".doortext").append("<p>Come on now, don't make this easy for me.  Ask me what I mean.  To be honest, I'm not really sure myself, but this is a good place to start.</p>");
			$(".choice1").append("<p>Yes.</p>");
			$(".choice2").append("<p>No - what do you mean?</p>");
			$(".choice3").append("<p></p>");
			
			click1("define5");	
			click2("define6");
			click3("define5");
		}
		
		if(x==="define6"){
			//No - what do you mean?
			$(".doortext").append("<p>I guess I would start with all of the questions that I've been asked here at school.  Starting at the beginning with architecture as a theatrical act.</p>");
			$(".choice1").append("<p>...</p>");
			$(".choice2").append("<p></p>");
			$(".choice3").append("<p></p>");
			
			click1("questions1");	
			click2("define6");
			click3("define6");
		}
		
		if(x==="questions1"){
			//...
			$(".doortext").append("<p>And with the idea of drawing as architectural thought.  The really important moments are within the questions that don't have answers, at least not until you draw them.</p>");
			$(".choice1").append("<p>...</p>");
			$(".choice2").append("<p></p>");
			$(".choice3").append("<p></p>");
			
			click1("questions2");	
			click2("questions1");
			click3("questions1");
		}
		
		
		
		
		
		if(x==="screen1"){
			//Is it really?  So are there any screens besides this one?
			$(".doortext").append("<p>Technically, at the time of writing this, there is only one screen.  But I fully intend for there to be something on the other side of this door.  You'll find out soon enough whether that has happened yet.</p>");
			$(".choice1").append("<p>What do I need to do to get to the other side?</p>");
			$(".choice2").append("<p></p>");
			$(".choice3").append("<p></p>");
			
			click1("screen2");
			click2("screen1");
			click3("screen1");
		}
		
		if(x==="screen2"){
			//What do I need to do to get to the other side?
			$(".doortext").append("<p>Oh, just keep going.  You'll get there soon enough.</p>");
			$(".choice1").append("<p>Can I go through now?</p>");
			$(".choice2").append("<p></p>");
			$(".choice3").append("<p></p>");
			
			click1("screen3");
			click2("screen2");
			click3("screen2");
		}
		
		if(x==="screen3"){
			//Can I go through now?
			$(".doortext").append("<p>Of course.</p>");
			$(".choice1").append("<p>[Open the Door]</p>");
			$(".choice2").append("<p></p>");
			$(".choice3").append("<p></p>");
			
			click1("end1");		//Needs Ending.
			click2("screen3");
			click3("screen3");
		}
		
		
	
	
	
	
	
	});
	
	
	//trigger to start the first room.
	//needs to be after the rooms themselves so that the function for the rooms has already been defined.
	$(".spacer1").trigger("event");


});