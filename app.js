// 1. create array of transformer objects
// 2. create transformer objects with stats, type and overall rating
// 3. program takes input from user that defines a group of transformers, one by one
// 4a. sort bots on each team for battle by rank
// 4b. battle logic
// 	if any bot is up 4+ courage, they win
// 	if any bot is up 3+ strength, they win
// 	if any bot is up 3+ skill, they win
// 	default: the bot with the highest overall rating wins
// 	in the event of a tie, both bots are considered destroyed
// 	any extra bots on one team are skipped (ie. each bot only fights once)
// 	any bot named Optimus Prime or Predaking automatically win their match, UNLESS they face each other, 
// 	  and THEN all bots are destroyed and game ends
// 5. battle output: how many battles, winning team, winning bot, survivors on losing team

	var Autobots = 0;
	var Decepticons = 0;
	function Bot(name,team,strength,intelligence,speed,endurance,rank,courage,firepower,skill,overall) {
		this.name = name;
		this.team = team;
		this.strength = strength;
		this.intelligence = intelligence;
		this.speed = speed;
		this.endurance = endurance;
		this.rank = rank;
		this.courage = courage;
		this.firepower = firepower;
		this.skill = skill;
		this.overall = overall;
	}
	var teamAutobots = [];
	var teamDecepticons = [];

runApp = function() {



	inputBots = function() {
		Autobots = teamAutobots.length;
		Decepticons = teamDecepticons.length;
		// get form input from user for one bot at a time, in the form of:
		// [bot name], [team], [strength], [intelligence], [speed], [endurance],[rank],[courage],[firepower],[skill]
		if (document.getElementById("inputBotName").value == "") {
				document.getElementById("errorMsg").innerHTML += "Your bot must have a name!" + "<br>";
		} else {
			if (document.getElementById("selectAutobot").checked) {
				teamAutobots[Autobots] = new Bot();
				teamAutobots[Autobots].name = document.getElementById("inputBotName").value;
				teamAutobots[Autobots].team = "Autobots";	
				teamAutobots[Autobots].strength = document.getElementById("inputBotStrength").value;
				teamAutobots[Autobots].intelligence = document.getElementById("inputBotIntelligence").value;
				teamAutobots[Autobots].speed = document.getElementById("inputBotSpeed").value;
				teamAutobots[Autobots].endurance = document.getElementById("inputBotEndurance").value;
				teamAutobots[Autobots].rank = document.getElementById("inputBotRank").value;
				teamAutobots[Autobots].courage = document.getElementById("inputBotCourage").value;
				teamAutobots[Autobots].firepower = document.getElementById("inputBotFirepower").value;
				teamAutobots[Autobots].skill = document.getElementById("inputBotSkill").value;

				// sum total of stats for overall rating:
				// again found a solution online at https://stackoverflow.com/questions/13540751/how-get-total-sum-from-input-box-values-using-javascript
				function findTotal() {
				    var arr = document.getElementsByName('attributeValue');
				    var tot = 0;
				    for (var i=0; i<arr.length; i++) {
				        if (parseInt(arr[i].value))
				            tot += parseInt(arr[i].value);
					}
				teamAutobots[Autobots].overall = tot;
				}
				findTotal();

				Autobots ++;
				document.getElementById("teamSizeA").innerHTML = teamAutobots.length;
				console.log(teamAutobots);
				return teamAutobots;

				// if (teamAutobots.length > 1) {
				// 	for (var i = 0; i < teamAutobots.length; i++) {
				// 		if (teamAutobots[i].rank < teamAutobots[i + 1].rank) {
				// 			teamAutobots.push(teamAutobots[i]);
				// 		}
				// 	}
				// }
			}
			if (document.getElementById("selectDecepticon").checked) {
				teamDecepticons[Decepticons] = new Bot();
				teamDecepticons[Decepticons].name = document.getElementById("inputBotName").value;
				teamDecepticons[Decepticons].team = "Decepticons";	
				teamDecepticons[Decepticons].strength = document.getElementById("inputBotStrength").value;
				teamDecepticons[Decepticons].intelligence = document.getElementById("inputBotIntelligence").value;
				teamDecepticons[Decepticons].speed = document.getElementById("inputBotSpeed").value;
				teamDecepticons[Decepticons].endurance = document.getElementById("inputBotEndurance").value;
				teamDecepticons[Decepticons].rank = document.getElementById("inputBotRank").value;
				teamDecepticons[Decepticons].courage = document.getElementById("inputBotCourage").value;
				teamDecepticons[Decepticons].firepower = document.getElementById("inputBotFirepower").value;
				teamDecepticons[Decepticons].skill = document.getElementById("inputBotSkill").value;

				function findTotal() {
				    var arr = document.getElementsByName('attributeValue');
				    var tot = 0;
				    for (var i=0; i<arr.length; i++) {
				        if (parseInt(arr[i].value))
				            tot += parseInt(arr[i].value);
					}
					teamDecepticons[Decepticons].overall = tot;
				}
				findTotal();
				Decepticons ++;
				document.getElementById("teamSizeD").innerHTML = teamDecepticons.length;
				console.log(teamDecepticons);
				return teamDecepticons;
			}	
		}
		document.getElementById("inputBotName").value = "";


	}

	console.log("Autobots team size is " + Autobots);
	console.log("Decepticons team size is " + Decepticons);

	// Function CompareValues to sort my arrays of bots:
	// I shamelessly copied this from https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
	// actually, I am embarassed I couldn't come up with this on my own. But give me some time, I'm a good learner!
	// And ultimately, the point is to get the job done, to achieve the desired outcomes. So, I'm doing that.
	compareValues = function(key, order='asc') {
	  return function(a, b) {
	    if(!a.hasOwnProperty(key) || 
	       !b.hasOwnProperty(key)) {
	  	  return 0; 
	    }
	    
	    const varA = (typeof a[key] === 'string') ? 
	      a[key].toUpperCase() : a[key];
	    const varB = (typeof b[key] === 'string') ? 
	      b[key].toUpperCase() : b[key];
	      
	    let comparison = 0;
	    if (varA > varB) {
	      comparison = 1;
	    } else if (varA < varB) {
	      comparison = -1;
	    }
	    return (
	      (order == 'desc') ? 
	      (comparison * -1) : comparison
	    );
	  };
	}
	
	rankTeams = function() {
		// sort bots on each team by rank rating:
		teamAutobots.sort(compareValues('rank', 'desc'));
		teamDecepticons.sort(compareValues('rank', 'desc'));
		console.log("Decepticons sorted - order:" + teamDecepticons);
		console.log("Autobots sorted - order:" + teamAutobots);
	}
	var winner = false;
	var scoreA = 0;
	var scoreD = 0;
	battleLogic = function(i) {
			if (teamAutobots[i].name == "Optimus Prime" && teamDecepticons[i].name == "Predaking") {
				console.log("check conditions for both Optimus Prime and Predaking");
				document.getElementById("gameMsg").innerHTML = "Apocalypse now! Optimus Prime and Predaking face off destroys everything!!!" + "<br>";
				winner = false;
			} else if (teamAutobots[i].name == "Optimus Prime") {
				console.log("check conditions for only Optimus Prime");
				document.getElementById("gameMsg").innerHTML += "Autobots win! Optimus Prime destroys all opponents!" + "<br>";
				winner = "Autobots";
				scoreA++;
			} else if (teamDecepticons[i].name == "Predaking") {
				console.log("check conditions for only Predaking");
				document.getElementById("gameMsg").innerHTML += "Decepticons win! Predaking destroys all opponents!" + "<br>";
				winner = "Decepticons";
				scoreD++;
			} else if ((teamAutobots[i].courage - teamDecepticons[i].courage) > 3 && (teamAutobots[i].strength - teamDecepticons[i].strength) > 2) {
				document.getElementById("gameMsg").innerHTML += teamAutobots[i].name + " wins this round! " + teamDecepticons[i].name + " has run away!" + "<br>";
				winner = "Autobots";
				scoreA++;
			} else if ((teamDecepticons[i].courage - teamAutobots[i].courage) > 3 && (teamDecepticons[i].strength - teamAutobots[i].strength) > 2) {
				document.getElementById("gameMsg").innerHTML += teamDecepticons[i].name + " wins this round! " + teamAutobots[i].name + " has run away!" + "<br>";
				winner = "Decepticons";
				scoreD++;
			} else if ((teamAutobots[i].skill - teamDecepticons[i].skill) > 2) {
				document.getElementById("gameMsg").innerHTML += teamAutobots[i].name + " wins this round based on skill!" + "<br>";
				winner = "Autobots";
				scoreA++;
			} else if ((teamDecepticons[i].skill - teamAutobots[i].skill) > 2) {
				document.getElementById("gameMsg").innerHTML += teamDecepticons[i].name + " wins this round based on skill!" + "<br>";
				winner = "Decepticons";
				scoreD++;
			} else if (teamAutobots[i].overall > teamDecepticons[i].overall) {
				document.getElementById("gameMsg").innerHTML += teamAutobots[i].name + " wins this round based on overall score!" + "<br>";
				winner = "Autobots";
				scoreA++;
			} else if (teamAutobots[i].overall < teamDecepticons[i].overall) {
				document.getElementById("gameMsg").innerHTML += teamDecepticons[i].name + " wins this round based on overall score!" + "<br>";
				winner = "Decepticons";
				scoreD++;
			} else if (teamAutobots[i].overall === teamDecepticons[i].overall)  {
				document.getElementById("gameMsg").innerHTML += "Tie! both bots destroyed." + "<br>";
				winner = false;
			} else {
				document.getElementById("gameMsg").innerHTML += "No victory conditions were met! (weird)" + "<br>";
			}
			
			// if (winner === "Autobots") {
			// 	console.log("autobots win this round #" + (i + 1));
			// 	document.getElementById("autobots-battle").classList.add("winner");
			// 	document.getElementById("decepticons-battle").classList.remove("winner");
			// } else if (winner === "Decepticons") {
			// 	console.log("decepticons win this round #" + (i + 1));
			// 	document.getElementById("decepticons-battle").classList.add("winner");
			// 	document.getElementById("autobots-battle").classList.remove("winner");
			// }

			document.getElementById("autobots-battle").innerHTML += "<p><hr>" +
				"Name: " + teamAutobots[i].name + "<br>" +
				"Rank: " + teamAutobots[i].rank + "<br>" +
				"Overall: " + teamAutobots[i].overall + "<br>" +
				"Strength: " + teamAutobots[i].strength + "<br>" +
				"Intelligence: " + teamAutobots[i].intelligence + "<br>" +
				"Speed: " + teamAutobots[i].speed + "<br>" +
				"Endurance: " + teamAutobots[i].endurance + "<br>" +			
				"Courage: " + teamAutobots[i].courage + "<br>" +
				"Firepower: " + teamAutobots[i].firepower + "<br>" +
				"Skill: " + teamAutobots[i].skill + "<br></p>";
				if (winner === "Autobots") {
					document.getElementById("autobots-battle").innerHTML += "<b>WINNER!</b>";
					document.getElementById("decepticons-battle").innerHTML += "<br>";
				} else if (!winner) {
					document.getElementById("autobots-battle").innerHTML += "<b>TIE</b>";
				}

			document.getElementById("decepticons-battle").innerHTML += "<p><hr>" +
				"Name: " + teamDecepticons[i].name + "<br>" +
				"Rank: " + teamDecepticons[i].rank + "<br>" +
				"Overall: " + teamDecepticons[i].overall + "<br>" +
				"Strength: " + teamDecepticons[i].strength + "<br>" +
				"Intelligence: " + teamDecepticons[i].intelligence + "<br>" +
				"Speed: " + teamDecepticons[i].speed + "<br>" +
				"Endurance: " + teamDecepticons[i].endurance + "<br>" +			
				"Courage: " + teamDecepticons[i].courage + "<br>" +
				"Firepower: " + teamDecepticons[i].firepower + "<br>" +
				"Skill: " + teamDecepticons[i].skill + "<br></p>";
				if (winner === "Decepticons") {
					document.getElementById("decepticons-battle").innerHTML += "<b>WINNER!</b>";
					document.getElementById("autobots-battle").innerHTML += "<br>";
				} else if (!winner) {
					document.getElementById("decepticons-battle").innerHTML += "<b>TIE</b>";
				}
		}

		// user will click a "start" button to begin battle
		// battle logic implemented
		// results are output
	start = function() {
		console.log("start() triggered");
		document.getElementById("autobots-battle").innerHTML = "";
		document.getElementById("decepticons-battle").innerHTML = "";	
		document.getElementById("errorMsg").innerHTML = "";
		// logic requiring at least one bot from each team with error message
		if (teamAutobots.length < 1 && teamDecepticons.length < 1) {
			document.getElementById("errorMsg").innerHTML = "You need to enter at least one bot from each side!" + "<br>";
		} else if (teamAutobots.length < 1 && teamDecepticons.length > 0) {
			document.getElementById("errorMsg").innerHTML = "You need to enter an Autobot to battle the Decepticons!" + "<br>";
		} else if (teamDecepticons.length < 1 && teamAutobots.length > 0) {
			document.getElementById("errorMsg").innerHTML = "You need to enter an Decepticon to battle the Autobots!" + "<br>";
		} else {
			document.getElementById("errorMsg").innerHTML = "";
		}

		rankTeams();
		document.getElementById("decepticons-battle").classList.remove("winner");
		document.getElementById("autobots-battle").classList.remove("winner");

		var battleRounds = 0;
		battleLength = function() {
			if (teamAutobots.length > teamDecepticons.length) {
				battleRounds = teamDecepticons.length;
				console.log("teamAutobots is larger than teamDecepticons");
			} else if (teamAutobots.length < teamDecepticons.length) {
				battleRounds = teamAutobots.length;
				console.log("teamDecepticons is larger than teamAutobots");
			} else {
				battleRounds = teamDecepticons.length;
			}
			console.log("battleRounds = " + battleRounds);
			return battleRounds;
		}
		battleLength();
		document.getElementById("game-messages").innerHTML += "<h3>Battles: " + battleRounds + "</h3";
		for (i = 0; i < battleRounds; i++) {		  
			battleLogic(i);
		}
	}

	restart = function() {
		Autobots = 0;
		Decepticons = 0;
		teamAutobots.length = 0;
		teamDecepticons.length = 0;
		document.getElementById("teamSizeA").innerHTML = 0;
		document.getElementById("teamSizeD").innerHTML = 0;
		document.getElementById("errorMsg").innerHTML = "";
		document.getElementById("gameMsg").innerHTML = "";
		document.getElementById("autobots-battle").innerHTML = "";
		document.getElementById("decepticons-battle").innerHTML = "";
	}
}
populate = function() {
	// spent some time finding the correct regex for search and replace in order to pre-populate some values here
				teamDecepticons[0] = new Bot();
				teamDecepticons[0].name = "D3";
				teamDecepticons[0].team = "Decepticons";	
				teamDecepticons[0].strength = 7;
				teamDecepticons[0].intelligence = 7;
				teamDecepticons[0].speed = 7;
				teamDecepticons[0].endurance = 7;
				teamDecepticons[0].rank = 7;
				teamDecepticons[0].courage = 7;
				teamDecepticons[0].firepower = 7;
				teamDecepticons[0].skill = 7;
				teamDecepticons[0].overall =
					teamDecepticons[0].strength +
					teamDecepticons[0].intelligence +
					teamDecepticons[0].speed +
					teamDecepticons[0].endurance +
					teamDecepticons[0].rank +
					teamDecepticons[0].courage +
					teamDecepticons[0].firepower +
					teamDecepticons[0].skill;
				
				teamDecepticons[1] = new Bot();
				teamDecepticons[1].name = "D5";
				teamDecepticons[1].team = "Decepticons";	
				teamDecepticons[1].strength = 5;
				teamDecepticons[1].intelligence = 5;
				teamDecepticons[1].speed = 5;
				teamDecepticons[1].endurance = 5;
				teamDecepticons[1].rank = 5;
				teamDecepticons[1].courage = 5;
				teamDecepticons[1].firepower = 5;
				teamDecepticons[1].skill = 5;
				teamDecepticons[1].overall =
					teamDecepticons[1].strength +
					teamDecepticons[1].intelligence +
					teamDecepticons[1].speed +
					teamDecepticons[1].endurance +
					teamDecepticons[1].rank +
					teamDecepticons[1].courage +
					teamDecepticons[1].firepower +
					teamDecepticons[1].skill;

				teamDecepticons[2] = new Bot();
				teamDecepticons[2].name = "Predaking";
				teamDecepticons[2].team = "Decepticons";	
				teamDecepticons[2].strength = 10;
				teamDecepticons[2].intelligence = 5;
				teamDecepticons[2].speed = 10;
				teamDecepticons[2].endurance = 8;
				teamDecepticons[2].rank = 7;
				teamDecepticons[2].courage = 9;
				teamDecepticons[2].firepower = 9;
				teamDecepticons[2].skill = 8;
				teamDecepticons[2].overall =
					teamDecepticons[2].strength +
					teamDecepticons[2].intelligence +
					teamDecepticons[2].speed +
					teamDecepticons[2].endurance +
					teamDecepticons[2].rank +
					teamDecepticons[2].courage +
					teamDecepticons[2].firepower +
					teamDecepticons[2].skill;

				teamAutobots[0] = new Bot();
				teamAutobots[0].name = "A3";
				teamAutobots[0].team = "Autobots";	
				teamAutobots[0].strength = 7;
				teamAutobots[0].intelligence = 3;
				teamAutobots[0].speed = 3;
				teamAutobots[0].endurance = 3;
				teamAutobots[0].rank = 3;
				teamAutobots[0].courage = 7;
				teamAutobots[0].firepower = 3;
				teamAutobots[0].skill = 3;
					teamAutobots[0].overall =
					teamAutobots[0].strength +
					teamAutobots[0].intelligence +
					teamAutobots[0].speed +
					teamAutobots[0].endurance +
					teamAutobots[0].rank +
					teamAutobots[0].courage +
					teamAutobots[0].firepower +
					teamAutobots[0].skill;

				teamAutobots[1] = new Bot();
				teamAutobots[1].name = "Optimus Prime";
				teamAutobots[1].team = "Autobots";	
				teamAutobots[1].strength = 10;
				teamAutobots[1].intelligence = 10;
				teamAutobots[1].speed = 8;
				teamAutobots[1].endurance = 10;
				teamAutobots[1].rank = 10;
				teamAutobots[1].courage = 10;
				teamAutobots[1].firepower = 8;
				teamAutobots[1].skill = 10;
					teamAutobots[1].overall =
					teamAutobots[1].strength +
					teamAutobots[1].intelligence +
					teamAutobots[1].speed +
					teamAutobots[1].endurance +
					teamAutobots[1].rank +
					teamAutobots[1].courage +
					teamAutobots[1].firepower +
					teamAutobots[1].skill;

				teamAutobots[2] = new Bot();
				teamAutobots[2].name = "A5";
				teamAutobots[2].team = "Autobots";	
				teamAutobots[2].strength = 5;
				teamAutobots[2].intelligence = 5;
				teamAutobots[2].speed = 5;
				teamAutobots[2].endurance = 5;
				teamAutobots[2].rank = 5;
				teamAutobots[2].courage = 5;
				teamAutobots[2].firepower = 5;
				teamAutobots[2].skill = 5;
					teamAutobots[2].overall =
					teamAutobots[2].strength +
					teamAutobots[2].intelligence +
					teamAutobots[2].speed +
					teamAutobots[2].endurance +
					teamAutobots[2].rank +
					teamAutobots[2].courage +
					teamAutobots[2].firepower +
					teamAutobots[2].skill;

				teamAutobots[3] = new Bot();
				teamAutobots[3].name = "Hubcap";
				teamAutobots[3].team = "Autobots";	
				teamAutobots[3].strength = 5;
				teamAutobots[3].intelligence = 5;
				teamAutobots[3].speed = 5;
				teamAutobots[3].endurance = 5;
				teamAutobots[3].rank = 6;
				teamAutobots[3].courage = 5;
				teamAutobots[3].firepower = 5;
				teamAutobots[3].skill = 5;
					teamAutobots[3].overall =
					teamAutobots[3].strength +
					teamAutobots[3].intelligence +
					teamAutobots[3].speed +
					teamAutobots[3].endurance +
					teamAutobots[3].rank +
					teamAutobots[3].courage +
					teamAutobots[3].firepower +
					teamAutobots[3].skill;

		document.getElementById("teamSizeA").innerHTML = teamAutobots.length;
		document.getElementById("teamSizeD").innerHTML = teamDecepticons.length;

				for (i = 0; i < teamAutobots.length; i++) {

				}
			}