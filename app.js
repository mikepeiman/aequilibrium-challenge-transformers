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

	document.getElementById("teamSize").innerHTML += "<p>Decepticons team size is " + Decepticons + "</p>";
	document.getElementById("teamSize").innerHTML += "<p>Autobots team size is " + Autobots + "</p>";

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
				document.getElementById("teamSize").innerHTML += "<p>Autobots team size is " + Autobots + "</p>";
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
				document.getElementById("teamSize").innerHTML += "<p>Decepticons team size is " + Decepticons + "</p>";
			}	
		}
	}
	
	inputDecepticon = function() {
		// get form input from user for one bot at a time, in the form of:
		// [bot name], [team], [strength], [intelligence], [speed], [endurance],[rank],[courage],[firepower],[skill]

		Decepticons ++;		
		document.getElementById("decepticonTeamSize").innerHTML = "<p>Decepticons team size is " + Decepticons + "</p>";
	}
	console.log("Autobots team size is " + Autobots);
	console.log("Decepticons team size is " + Decepticons);
	rankTeams = function() {
		// sort bots on each team by rank rating
	}
	battleBots = function() {
		// user will click a "start" button to begin battle
		// battle logic implemented
		// results are output
	}
	newBattle = function() {
		// reset all inputs and arrays to start fresh
	}
	rankTeams();
	battleBots();
	newBattle();

	start = function() {
		document.getElementById("errorMsg").innerHTML = "";
		// logic requiring at least one bot from each team with error message
		if (teamAutobots.length < 1) {
			document.getElementById("errorMsg").innerHTML += "You need to enter an Autobot to battle the Decepticons!" + "<br>";
		} else {
			document.getElementById("errorMsg").innerHTML = "";
		}
		if (teamDecepticons.length < 1) {
			document.getElementById("errorMsg").innerHTML += "You need to enter an Decepticon to battle the Autobots!" + "<br>";
		} else {
			document.getElementById("errorMsg").innerHTML = "";
		}
	}

	restart = function() {
		Autobots = 0;
		Decepticons = 0;
		var teamAutobots = [];
		var teamDecepticons = [];
		document.getElementById("decepticonTeamSize").innerHTML = "<p>Decepticons team size is " + teamDecepticons.length + "</p>";
		document.getElementById("autobotTeamSize").innerHTML = "<p>Autobots team size is " + Autobots + "</p>";
		document.getElementById("errorMsg").innerHTML = "";
	}
}