
var string = "below are some of the projects i've created."; /* type your text here */
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text23").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',70); /* change 70 for speed */

}
frameLooper();



