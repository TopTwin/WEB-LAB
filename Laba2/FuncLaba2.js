
'use strict';

function ReturnNumber(number) {
    return number;
}


function ReturnOfArgument(Item1, Item2) {
    if (isNaN(Item1)) {
        return ("vvedite number 1");
    }
    else {
        if (isNaN(Item2)) {
            return ("vvedite number 2");
        }
        else return Item1 + Item2;
    }
}



function Massiv() 
{
    console.log("Массив в функции для обработки");
	var Arr = [0, 5, 10, 0.2, -5];
	console.log(Arr);

	for(var i = 0; i < Arr.length; i++)
	{
		if (isNaN(Arr[i]))
			Arr[i] = 0;
		else
			Arr[i] *= 2;
	}
	console.log("Массив в функции после обработки");
	console.log(Arr);
}

function changeImage(src)
{
	document.getElementById('tt').src = src;
}

window.onload = function() {
	var button = document.getElementById('image');
    var body = document.getElementsByTagName('body')[0];
	var tt = document.getElementById("text");
	button.onclick = function() {
	if(body.style.backgroundColor == "gray"){
		body.style.backgroundColor = "white";
		tt.style.color = "black";
	}
	else{
	body.style.backgroundColor = "gray";
	tt.style.color = "white";
	}
    };
};