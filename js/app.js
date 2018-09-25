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

const gerald = new Tamagotchi("Gerald",0,0,0,0);

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