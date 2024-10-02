window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script22 = function()
{
  let player = GetPlayer();


setTimeout( actionMotion , 100);

var count = player.GetVar("Score");

function actionMotion () {
count++;
	player.SetVar("Score",count);
	
}

console.log(count);
}

window.Script23 = function()
{
  let player = GetPlayer();


setTimeout( actionMotion , 100);

var count = player.GetVar("Score");

function actionMotion () {
count++;
	player.SetVar("Score",count);
	
}

console.log(count);
}

window.Script24 = function()
{
  let player = GetPlayer();


setTimeout( actionMotion , 100);

var count = player.GetVar("Score");

function actionMotion () {
count++;
	player.SetVar("Score",count);
	
}

console.log(count);
}

};
