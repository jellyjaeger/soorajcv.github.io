var string = "Javascript Typing Aniion"; /* type your text here */
var array = string.split("");
var timer;
function frameLooper () {
    if (array.length > 0) {
        document.getElementById("text").innerHTML += array.shift();
    } else {
        clearTimeout(timer);
            }
    loopTimer = setTimeout('frameLooper()',70); /* change 70 for speed */

}
frameLooper();
var w = Window.innerWidth;
console.log(w);