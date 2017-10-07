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

runApp = function() {
	inputTeams = function() {
		// get form input from user for one bot at a time, in the form of:
		// [bot name], [team], [strength], [intelligence], [speed], [endurance],[rank],[courage],[firepower],[skill]
		// 
		// minimum of two combatant defined
		// logic requiring at least one bot from each team with error message
		// option to add another bot (give a "+" control)
	}
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

}