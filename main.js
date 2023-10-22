const convert = require('xml-js');
const fs = require('fs');
const WP_DIR = process.env.HOME.concat("/.wallpapers")
const LIGHT_DIR = "/Light/"
const DARK_DIR = "/Dark/"
var wpArray = [];

if (process.argv.length === 2 || !(process.argv[2] == "light" || process.argv[2] == "dark")) {
    console.error("Dark or Light argument expected");
    process.exit(1);
} else {
    wpType = process.argv[2]
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    
    // While there remain elements to shuffle.
    while (currentIndex > 0) {

	// Pick a remaining element.
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex--;

	// And swap it with the current element.
	[array[currentIndex], array[randomIndex]] = [
	    array[randomIndex], array[currentIndex]];
    }
    
    return array;
}

console.log(WP_DIR)
fs.readdir(WP_DIR.concat(), (err, files) => {
    if (err) {
	console.error('Error reading directory:', err);
    } else {
	files.forEach(file => {
	    wpArray.push(WP_DIR.concat(wpType == "light" ? LIGHT_DIR : DARK_DIR, file))
	});
	shuffle(wpArray);
	Wallpaper = [];
	wpArray.forEach((element, index, array) => {
	    Light.push( {file: element, duration: 1800} );
	    if (array[index + 1] < array.length) {
		Wallpaper.push({})
	    }
	});
	console.log(Light)
    }
});


