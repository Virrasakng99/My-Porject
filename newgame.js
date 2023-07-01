



/**
 * Start game function
 */
function startGame() {
	// Get random numbers for 1 and 2
	const randomNumber1 = getRandomNumber();
	const randomNumber2 = getRandomNumber();

	// Get image sources
	const imageSource1 = formatImageSource(randomNumber1);
	const imageSource2 = formatImageSource(randomNumber2);

	// Set dice images to img elements
	setImage(1, imageSource1);
	setImage(2, imageSource2);

	// Set header results
	setResults(randomNumber1, randomNumber2);

	// Show battle header results
	showBattleHeader();
}

/**
 * Generates random number
 * @returns {number} random number
 */
function getRandomNumber() {
	const randomNumber = Math.floor(Math.random() * 6) + 1;

	return randomNumber;
}

/**
 * Get image source based on random number
 * @param {number} randomNumber random number for image source
 * @returns {string} random image source
 */
function formatImageSource(randomNumber) {
	var randomDiceImage = "dice" + randomNumber + ".png";
	var randomImageSource = "./Dice Images/" + randomDiceImage;

	return randomImageSource;
}

/**
 * Set image source to img element
 * @param {number} i index of img element
 * @param {string} imageSource image source location
 */
function setImage(i, imageSource) {
	// TODO: change from querySelectorAll to getElementsByClass or getElementById
	var imgElement = document.querySelectorAll("img")[i - 1];

	imgElement.setAttribute("src", imageSource);
}

/**
 * Set results based on comparison between random numbers
 * @param {number} randomNumber1
 * @param {number} randomNumber2
 */
function setResults(randomNumber1, randomNumber2) {
	if (randomNumber1 === randomNumber2) {
		document.getElementById("battleHeader").innerHTML = "Draw 👾";
	}
	if (randomNumber1 > randomNumber2) {
		document.getElementById("battleHeader").innerHTML = "🔥Player 1 wins!";
	}
	if (randomNumber2 > randomNumber1) {
		document.getElementById("battleHeader").innerHTML = "Player 2 wins! 🔥";
	}
}

//background music for index.html
const backgroundMusic = document.getElementById('backgroundMusic')

document.addEventListener('DOMContentLoaded', function (){
backgroundMusic.play();
});



//Sound effect when button is repeatedly pressed 
const fightButton = document.getElementById('fightButton');
const soundEffect = document.getElementById('soundEffect');



fightButton.addEventListener('click', function(){
	
	if (soundEffect.paused) {
		soundEffect.play();
	} else {
		soundEffect.pause();
		soundEffect.currentTime = 0;
		soundEffect.play();
	}
});


/**
 * Show battle header
 */
function showBattleHeader() {
	var heading = document.getElementById("battleHeader");
	heading.style.display = "flex";
}
