const left1 = document.getElementById("left1");
const left2 = document.getElementById("left2");
const left3 = document.getElementById("left3");
const left4 = document.getElementById("left4");
const right1 = document.getElementById("right1");
const right2 = document.getElementById("right2");
const right3 = document.getElementById("right3");
const right4 = document.getElementById("right4");

right1.onmouseover = function () {
	left1.classList.remove("leftOut")
	left1.classList.add("leftIn")
}

right1.onmouseout = function () {
	left1.classList.remove("leftIn")
	left1.classList.add("leftOut")
}

right2.onmouseover = function () {
	left2.classList.remove("leftOut")
	left2.classList.add("leftIn")
}

right2.onmouseout = function () {
	left2.classList.remove("leftIn")
	left2.classList.add("leftOut")
}

right3.onmouseover = function () {
	left3.classList.remove("leftOut")
	left3.classList.add("leftIn")
}

right3.onmouseout = function () {
	left3.classList.remove("leftIn")
	left3.classList.add("leftOut")
}

right4.onmouseover = function () {
	left4.classList.remove("leftOut")
	left4.classList.add("leftIn")
}

right4.onmouseout = function () {
	left4.classList.remove("leftIn")
	left4.classList.add("leftOut")
}
