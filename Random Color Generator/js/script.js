//10 divs with random colors displayed.

var html = '';
var rgbColor;

function randomValue() {
	return Math.floor(Math.random() * 256 );
}

//generate a rgb(x,y,z) color code
function randomColor() {
	var color = 'rgb(';
	color += randomValue() + ',';
	color += randomValue() + ',';
	color += randomValue() + ')';
	return color;
}

for ( i = 0; i < 10; i++)  {
	rgbColor = randomColor();
	html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.getElementById('color').innerHTML = html;
