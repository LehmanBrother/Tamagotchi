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
}

//Instantiate

const jerry = new Tamagotchi("Jerry Smith",1,1,1,0);

//Display image to represent pet

//Display metrics:
	//Hunger (1-10)
	//Sleepiness (1-10)
	//Boredom (1-10)
	//Age

// let hunger = 1;
// let sleepiness = 1;
// let boredom = 1; 
// let age = 0;

$('h1.hunger').text('Hunger: ' + jerry.hunger);
$('h1.sleepiness').text('Sleepiness: ' + jerry.sleepiness);
$('h1.boredom').text('Boredom: ' + jerry.boredom);
$('h1.age').text('Age: ' + jerry.age);

//Buttons to feed, turn off lights, play

//Ability to name pet

//CSS for general page styling

//Increase pet's age every x minutes

//Increase hunger, sleepiness, and boredom at chosen increment

//Pet dies if any of them hits 10

//Change image of pet at certain ages

//Animate pet while it's alive