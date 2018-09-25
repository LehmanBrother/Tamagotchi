/***********************************
Make tamagotchi class
***********************************/

class Tamagotchi {
	constructor(name,hunger,sleepiness,boredom,age,isAlive) {
		this.name = name;
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;
		this.isAlive = isAlive;
	}
	name() {
		this.name = game.currentName;
	}
	die() {
		console.log(this.name + " has died!");
		this.isAlive = false;
	}
}

/***********************************
Game object
***********************************/

const game = {
	totalIntervals: 0,
	light: true,
	currentName: "Jerry",
	startGame() {
		this.displayHunger();
		this.displaySleepiness();
		this.displayBoredom();
		this.displayAge();
	},
	displayHunger() {
		$('h1.hunger').text('Hunger: ' + tam1.hunger);
	},
	displaySleepiness() {
		$('h1.sleepiness').text('Sleepiness: ' + tam1.sleepiness);
	},
	displayBoredom() {
		$('h1.boredom').text('Boredom: ' + tam1.boredom);
	},
	displayAge() {
		$('h1.age').text('Age: ' + tam1.age);
	},
}

/***********************************
Instantiate main tamagotchi
***********************************/

const tam1 = new Tamagotchi("Jerry",1,1,1,0,true);

/***********************************
Button listeners
***********************************/

$('button.hunger').on('click', () => {
	if(game.light === true) {
		if(tam1.hunger >= 6) {
			tam1.hunger-=5;
		} else {
			tam1.hunger = 1;
		}
		game.displayHunger();
	} else {
		$('#alert').text("The light must be on to feed " + tam1.name + ".");
		setTimeout(() => {
			$('#alert').empty();
		},3000)
	}
})

$('button.sleepiness').on('click', () => {
	if(game.light === true) {
		$('body').css('background-color','black');
		$('h1').css('color','white');
		game.light = false;
	} else {
		$('body').css('background-color','white');
		$('h1').css('color','black');
		game.light = true;
	}
})

$('button.boredom').on('click', () => {
	if(game.light === true) {
		if(tam1.boredom >= 6) {
			tam1.boredom-=5;
		} else {
			tam1.boredom = 1;
		}
		game.displayBoredom();
	} else {
		$('#alert').text("The light must be on to play with " + tam1.name + ".");
		setTimeout(() => {
			$('#alert').empty();
		},3000)
	}
})

/***********************************
Interval progression/logic
***********************************/

setInterval(() => {
	if(tam1.isAlive) {
		game.totalIntervals++;
		if(game.light === true) {
			tam1.boredom++;
			game.displayBoredom();
			if(game.totalIntervals % 2 === 0) {
				tam1.hunger++;
				game.displayHunger();
			}
			if(game.totalIntervals % 3 === 0) {
				tam1.sleepiness++;
				game.displaySleepiness();
			}
			if(game.totalIntervals % 100 === 0) {
				tam1.age++;
				game.displayAge();
			}
		} else {
			if(game.totalIntervals % 4 === 0) {
				tam1.hunger++;
				game.displayHunger();
			}
			if(game.totalIntervals % 3 === 0) {
				if(tam1.sleepiness >= 3) {
					tam1.sleepiness-=2;
				} else {
					tam1.sleepiness = 1;
				}
				game.displaySleepiness();
			}
			if(game.totalIntervals % 100 === 0) {
				tam1.age++;
				game.displayAge();
			}
		}
		if(tam1.boredom >= 10) {
			$('#alert').text(tam1.name + " has died of boredom!");
			tam1.die();
		}
		if(tam1.hunger >= 10) {
			$('#alert').text(tam1.name + " has died of starvation!");
			tam1.die();
		}
		if(tam1.sleepiness >= 10) {
			$('#alert').text(tam1.name + " has died of sleepiness!");
			tam1.die();
		}
	}
},
1000)

game.startGame();

//Ability to name pet

//CSS for general page styling

//Change image of pet at certain ages

//Animate pet while it's alive