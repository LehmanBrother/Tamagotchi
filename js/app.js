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

setInterval(() => {
	game.totalIntervals++;
	//increase boredom every 1
	//increase hunger every 2
	//increase sleepiness every 3
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
},
1000)

game.startGame();

//Display image to represent pet

//Display metrics:
	//Hunger (1-10)
	//Sleepiness (1-10)
	//Boredom (1-10)
	//Age

//Buttons to feed, turn off lights, play

//Ability to name pet

//CSS for general page styling

//Increase pet's age every x minutes

//Increase hunger, sleepiness, and boredom at chosen increment

//Pet dies if any of them hits 10

//Change image of pet at certain ages

//Animate pet while it's alive