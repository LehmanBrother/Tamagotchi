/***********************************
Make tamagotchi class
***********************************/

class Tamagotchi {
	constructor(name,prevName,hunger,sleepiness,boredom,age,isAlive) {
		this.name = name;
		this.prevName = prevName;
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;
		this.isAlive = isAlive;
	}
	changeName() {
		this.prevName = this.name;
		this.name = $('input.nameInput').val();
		game.alert(this.prevName + " was renamed to " + this.name + ".", false, 5000);
	}
	die() {
		console.log(this.name + " has died!");
		this.isAlive = false;
		$('img').velocity("stop", true);
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
		this.animate();

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
	alert(msg, perm, timeout) {
		$('#alert').text(msg);
		if(perm === false) {
			setTimeout(() => {
				$('#alert').empty();
			},timeout)
		}
	},
	animate() {
		$('img').velocity({
		  opacity: [1, 0.55],
		  width: '+=50',
		  height: '+=50'
		}, {
		  duration: 800,
		  loop: true,
		  delay: 20
		});
	}
}

/***********************************
Instantiate main tamagotchi
***********************************/

const tam1 = new Tamagotchi("Jerry",null,1,1,1,0,true);

/***********************************
Button/input listeners
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
		game.alert("The light must be on to feed " + tam1.name + ".", false, 3000);
	}
})

$('button.sleepiness').on('click', () => {
	if(game.light === true) {
		$('body').css('background-color','black');
		game.light = false;
	} else {
		$('body').css('background-color','white');
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
		game.alert("The light must be on to play with " + tam1.name + ".", false, 3000);
	}
})

$('button.nameInput').on('click', () => {
	tam1.changeName();
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
			if(game.totalIntervals % 30 === 0) {
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
			if(game.totalIntervals % 30 === 0) {
				tam1.age++;
				game.displayAge();
			}
		}
		if(game.totalIntervals === 60) {
			$('.tam1').attr('src','https://pbs.twimg.com/media/Bf-5MH4CQAAfyG0.jpg');
			tam1.prevName = tam1.name;
			tam1.name = "Mr. Crowbar";
			game.alert(tam1.prevName + " evolved into " + tam1.name + "!",false, 5000);
		}
		if(game.totalIntervals === 120) {
			$('.tam1').attr('src','https://i.imgur.com/WfOBYQE.jpg');
			tam1.prevName = tam1.name;
			tam1.name = "Strong Jerry";
			game.alert(tam1.prevName + " evolved into " + tam1.name + "!",false, 5000);
		}
		if(tam1.boredom >= 10) {
			game.alert(tam1.name + " has died of boredom!", true, null);
			tam1.die();
		}
		if(tam1.hunger >= 10) {
			game.alert(tam1.name + " has died of starvation!", true, null);
			tam1.die();
		}
		if(tam1.sleepiness >= 10) {
			game.alert(tam1.name + " has died of sleepiness!", true, null);
			tam1.die();
		}
	}
},
1000)

game.startGame();

//CSS for general page styling