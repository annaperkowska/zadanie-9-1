var a,
	h;

function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) { 
		return "Nieprawidłowe dane";
	} else {
		return a*h/2;
	}
}
console.log(getTriangleArea(10, 6));

alert(getTriangleArea(10,10));
