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
		// get form input from user for one bot at a time, in the form of:
		// [bot name], [team], [strength], [intelligence], [speed], [endurance],[rank],[courage],[firepower],[skill]
		if (document.getElementById("inputBotName").value == "") {
				document.getElementById("errorMsg").innerHTML += "Your need to enter a bot name!" + "<br>";
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

	start = function() {
		console.log("start() triggered");
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
		// user will click a "start" button to begin battle
		// battle logic implemented
		// results are output
		
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

		// win conditions
		rankTeams();
		for (i = 0; i < battleRounds; i++) {
			document.getElementById("autobots-battle").innerHTML = teamAutobots[i].name;
			document.getElementById("decepticons-battle").innerHTML = teamDecepticons[i].name;
			if (teamAutobots[i].name === "Optimus Prime" && teamDecepticons[i].name === "Predaking") {
				console.log("check conditions for both Optimus Prime and Predaking");
				document.getElementById("gameMsg").innerHTML = "Apocalypse now! All is destroyed!";
			} else if (teamAutobots[i].name === "Optimus Prime") {
				console.log("check conditions for only Optimus Prime");
				document.getElementById("gameMsg").innerHTML = "Autobots win! Optimus Prime destroys all opponents!";
			} else if (teamDecepticons[i].name === "Predaking") {
				console.log("check conditions for only Predaking");
				document.getElementById("gameMsg").innerHTML = "Decepticons win! Predaking destroys all opponents!";
			}
			if ((teamAutobots[i].courage - teamDecepticons[i].courage) > 3 && (teamAutobots[i].strength - teamDecepticons[i].strength) > 2) {
				document.getElementById("gameMsg").innerHTML = teamAutobots[i].name + " wins this round! " + teamDecepticons[i].name + " has run away!";
			}
			if ((teamAutobots[i].courage - teamDecepticons[i].courage) > -3 && (teamAutobots[i].strength - teamDecepticons[i].strength) > -2) {
				document.getElementById("gameMsg").innerHTML = teamDecepticons[i].name + " wins this round! " + teamAutobots[i].name + " has run away!";
			}
			if ((teamAutobots[i].skill - teamDecepticons[i].skill) > 2) {
				document.getElementById("gameMsg").innerHTML = teamAutobots[i].name + " wins this round based on skill!";
			}
			if ((teamAutobots[i].skill - teamDecepticons[i].skill) > -2) {
				document.getElementById("gameMsg").innerHTML = teamDecepticons[i].name + " wins this round based on skill!";
			}
			if (teamAutobots[i].overall > teamDecepticons[i].overall) {
				document.getElementById("gameMsg").innerHTML = teamAutobots[i].name + " wins this round based on overall score!";
			}
			if (teamAutobots[i].overall < teamDecepticons[i].overall) {
				document.getElementById("gameMsg").innerHTML = teamDecepticons[i].name + " wins this round based on overall score!";
			} else {
				document.getElementById("gameMsg").innerHTML = "Not much happening here";
			}
		}
	}

	restart = function() {
		Autobots = 0;
		Decepticons = 0;
		var teamAutobots = [];
		var teamDecepticons = [];
		document.getElementById("teamSizeA").innerHTML = 0;
		document.getElementById("teamSizeD").innerHTML = 0;
		document.getElementById("errorMsg").innerHTML = "";
		document.getElementById("gameMsg").innerHTML = "";
	}
}
