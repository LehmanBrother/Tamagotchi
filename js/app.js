/***********************************
Make tamagotchi class, Morty extension
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
		$('img.tam1').velocity("stop", true);
	}
}

class Morty extends Tamagotchi {
	constructor(name,prevName,hunger,sleepiness,boredom,age,isAlive) {
		super(name,prevName,hunger,sleepiness,boredom,age,isAlive);
		this.ohMan = new Audio("http://peal.io/download/6iens");
	}
	pokeResponse() {
		this.ohMan.play();
	}
}

/***********************************
Game object
***********************************/

const game = {
	totalIntervals: 0,
	light: true,
	trigger: "",
	wubba: new Audio("http://peal.io/download/fijtn"),
	tammy: new Audio("http://peal.io/download/r5kd1"),
	schwifty: new Audio("http://peal.io/download/sjprr"),
	love: new Audio("http://peal.io/download/ahcd3"),
	meeseeks: new Audio("http://peal.io/download/et39v"),
	butthole: new Audio("http://peal.io/download/upr8x"),
	disqualified: new Audio("http://peal.io/download/wn5l3"),
	news: new Audio("http://peal.io/download/kechr"),
	startGame() {
		this.displayHunger();
		this.displaySleepiness();
		this.displayBoredom();
		this.displayAge();
		this.animateTam1();

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
	animateTam1() {
		$('img.tam1').velocity({
		  opacity: [1, 0.55],
		  width: '+=50',
		  height: '+=50'
		}, {
		  duration: 800,
		  loop: true,
		  delay: 20
		});
	},
	animateTam2() {
		$('img.tam2').velocity({
		  opacity: [1, 0.55],
		  width: '+=50',
		  height: '+=50'
		}, {
		  duration: 800,
		  loop: true,
		  delay: 20
		});
	},
	endGame() {
		clearInterval(interval);
		game.alert("Jerry is finally a strong, independent man who don't need no user! Type random stuff to find easter eggs.", true, null);
	}
}

/***********************************
Instantiate tamagotchi
***********************************/

const tam1 = new Tamagotchi("Jerry",null,1,1,1,0,true);
const tam2 = new Morty("Morty",null,1,1,1,0,false);

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
		$('#alert').css('color','white');
		game.light = false;
	} else {
		$('body').css('background-color','white');
		$('#alert').css('color','black');
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

$(document).on('keypress', (e) => {
	game.trigger = game.trigger + String.fromCharCode(e.keyCode);
	console.log(game.trigger);
	if(game.trigger.toLowerCase() === 'wubba') {
		game.wubba.play();
		game.trigger = "";
	}
	if(game.trigger.toLowerCase() === 'tammy') {
		game.tammy.play();
		game.trigger = "";
	}
	if(game.trigger.toLowerCase() === 'schwifty') {
		game.schwifty.play();
		game.trigger = "";
	}
	if(game.trigger.toLowerCase() === 'love') {
		game.love.play();
		game.trigger = "";
	}
	if(game.trigger.toLowerCase() === 'meeseeks') {
		game.meeseeks.play();
		game.trigger = "";
	}
	if(game.trigger.toLowerCase() === 'butthole') {
		game.butthole.play();
		game.trigger = "";
	}
	if(game.trigger.toLowerCase() === 'news') {
		game.news.play();
		game.trigger = "";
	}
	if(game.trigger.length > 9) {
		game.disqualified.play();
		game.trigger = "";
	}
	if(e.keyCode === 13) {
		game.trigger = "";
	}
})

/***********************************
Interval progression/logic
***********************************/

const interval = setInterval(() => {
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
		if(game.totalIntervals >= 122) {
			game.endGame();
		}
		if(game.totalIntervals === 65) {
			$('.tdiv').append('<div class="mdiv"></div>');
			$('.mdiv').append('<img class="tam2" src="https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_680/q4jnto3mvzsz5vqxwuin">');
			tam2.isAlive = true;
			$('.tam2').on('click', () => {
				tam2.pokeResponse();
			});
			game.animateTam2();
			game.alert("Morty has been born! He gets annoyed if you click him.")
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