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
	function Bot(name,team,strength,intelligence,speed,endurance,rank,courage,firepower,skill) {
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
				Autobots ++;
				document.getElementById("teamSizeA").innerHTML = teamAutobots.length;

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
				Decepticons ++;
				document.getElementById("teamSizeD").innerHTML = teamDecepticons.length;
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

	battleBots = function() {
		// user will click a "start" button to begin battle
		// battle logic implemented
		// results are output
	}

	start = function() {
		document.getElementById("errorMsg").innerHTML = "";
		// logic requiring at least one bot from each team with error message
		if (teamAutobots.length < 1) {
			document.getElementById("errorMsg").innerHTML = "You need to enter an Autobot to battle the Decepticons!" + "<br>";
		} else {
			document.getElementById("errorMsg").innerHTML = "";
		}
		if (teamDecepticons.length < 1) {
			document.getElementById("errorMsg").innerHTML = "You need to enter an Decepticon to battle the Autobots!" + "<br>";
		} else {
			document.getElementById("errorMsg").innerHTML = "";
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
	}

	rankTeams();
	battleBots();
}