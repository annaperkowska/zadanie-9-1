var a,
	h,
	triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(25, 10),
	triangle3Area = getTriangleArea(7, 15);

function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) { 
		return "Nieprawidłowe dane";
	} else {
		return a*h/2;
	}
}
console.log(getTriangleArea(10, 6));
alert(getTriangleArea(10,10));
alert(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
