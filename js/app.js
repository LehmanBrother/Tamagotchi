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
	startGame() {
		this.displayHunger();
		this.displaySleepiness();
		this.displayBoredom();
		this.displayAge();
	},
	displayHunger() {
		$('h1.hunger').text('Hunger: ' + jerry.hunger);
	},
	displaySleepiness() {
		$('h1.sleepiness').text('Sleepiness: ' + jerry.sleepiness);
	},
	displayBoredom() {
		$('h1.boredom').text('Boredom: ' + jerry.boredom);
	},
	displayAge() {
		$('h1.age').text('Age: ' + jerry.age);
	},
}

/***********************************
Instantiate main tamagotchi
***********************************/

const jerry = new Tamagotchi("Jerry Smith",1,1,1,0,true);

/***********************************
Button listeners
***********************************/

$('button.hunger').on('click', () => {
	if(game.light === true) {
		if(jerry.hunger >= 6) {
			jerry.hunger-=5;
		} else {
			jerry.hunger = 1;
		}
		game.displayHunger();
	} else {
		$('#alert').text("The light must be on to feed Jerry.");
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
		if(jerry.boredom >= 6) {
			jerry.boredom-=5;
		} else {
			jerry.boredom = 1;
		}
		game.displayBoredom();
	} else {
		$('#alert').text("The light must be on to play with Jerry.");
		setTimeout(() => {
			$('#alert').empty();
		},3000)
	}
})

/***********************************
Interval progression/logic
***********************************/

setInterval(() => {
	if(jerry.isAlive) {
		game.totalIntervals++;
		if(game.light === true) {
			jerry.boredom++;
			game.displayBoredom();
			if(game.totalIntervals % 2 === 0) {
				jerry.hunger++;
				game.displayHunger();
			}
			if(game.totalIntervals % 3 === 0) {
				jerry.sleepiness++;
				game.displaySleepiness();
			}
			if(game.totalIntervals % 100 === 0) {
				jerry.age++;
				game.displayAge();
			}
		} else {
			if(game.totalIntervals % 4 === 0) {
				jerry.hunger++;
				game.displayHunger();
			}
			if(game.totalIntervals % 3 === 0) {
				if(jerry.sleepiness >= 3) {
					jerry.sleepiness-=2;
				} else {
					jerry.sleepiness = 1;
				}
				game.displaySleepiness();
			}
			if(game.totalIntervals % 100 === 0) {
				jerry.age++;
				game.displayAge();
			}
		}
		if(jerry.boredom >= 10) {
			$('#alert').text("Jerry has died of boredom!");
			jerry.die();
		}
		if(jerry.hunger >= 10) {
			$('#alert').text("Jerry has died of starvation!");
			jerry.die();
		}
		if(jerry.sleepiness >= 10) {
			$('#alert').text("Jerry has died of sleepiness!");
			jerry.die();
		}
	}
},
1000)

game.startGame();

//Ability to name pet

//CSS for general page styling

//Change image of pet at certain ages

//Animate pet while it's alive