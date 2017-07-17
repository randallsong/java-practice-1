document.getElementById('argument1').onclick = function(){
	document.getElementById('argument1').innerHTML = ("I'm right")
}
//if the first button is clicked, it changes the text inside
document.getElementById('argument2').onclick = function(){
	document.getElementById('argument2').innerHTML = ("No, I'm right!")
}
//if the second button is clicked, it also changes the text inside
document.getElementById('hover').onmouseover = function(){
	document.getElementById('hover').innerHTML = ("Hey, stop that")
}
//if one hovers their mouse over the pink area, they will be asked to stop
document.getElementsByTagName('body')[0].onkeypress = function(key){
	var input = key.keyCode;
	document.getElementById('keypress').innerHTML = "You Pressed " + String.fromCharCode(input);
}
//listens for a keypress, turns that into a keycode, then uses that to output a string

document.getElementById('submitForm').addEventListener('submit', function(e){
	var username = document.getElementById('username').value
	var password = document.getElementById('passwordSubmit').value
	var checkValues = (username.match(/[0-9]/g) != null ) && ( password == "12345678" )

	if(!checkValues) {
		alert('That is the wrong password')
	}
})

//checks user input to see if the username contains a number, a if the password is entered exactly a 12345678