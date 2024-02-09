/**
 * 
 */

function footBall() { 

const football = ["49s", "Chiefs"];

let text = "";
for (let i = 0; i < football.length; i++) {
  text += football[i] + "<br>";
}
console.log(text);
document.getElementById("content").innerHTML = text;	
}
	
