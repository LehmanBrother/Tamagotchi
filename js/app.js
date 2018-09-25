console.log('js working');
//Make Tamagotchi class

class Tamagotchi {
	constructor(name,hunger,sleepiness,boredom,age) {
		this.name = name;
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;
	}
	die() {
		console.log(name + " has died!");
	}
}

//Instantiate

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

const jerry = new Tamagotchi("Jerry Smith",1,1,1,0);

$('button.hunger').on('click', () => {
	if(jerry.hunger >= 6) {
		jerry.hunger-=5;
	} else {
		jerry.hunger = 1;
	}
	game.displayHunger();
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
	if(jerry.boredom >= 6) {
		jerry.boredom-=5;
	} else {
		jerry.boredom = 1;
	}
	game.displayBoredom();
})

setInterval(() => {
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
		if(game.totalIntervals % 10 === 0) {
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
		if(game.totalIntervals % 10 === 0) {
			jerry.age++;
			game.displayAge();
		}
	}
},
1000)

game.startGame();

//Buttons to feed, turn off lights, play

//Ability to name pet

//CSS for general page styling

//Increase pet's age every x minutes

//Increase hunger, sleepiness, and boredom at chosen increment

//Pet dies if any of them hits 10

//Change image of pet at certain ages

//Animate pet while it's alive