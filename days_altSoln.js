function isLeapYear(y){
	if (y % 4 === 0)
		return true;
	return false;
}

function daysInMonth(m, y) {
	if (m === 2) {
		if(isLeapYear(y))
			return 29;
		return 28;
	}	

	if (m === 4 || m === 6 || m === 9 || m === 11)
		return 30;
	else
		return 31;
}

function  noOfDays(accum, d1, m1, y1, d2, m2, y2) {
	if (m1 === m2 && y1 === y2) {
		return accum + d2 - d1;
	}

	accum += daysInMonth(m1, y1) - d1 + 1;
	d1 = 1;
	if (m1 === 12){
		m1 = 1;
		y1++;
	} else {
		m1++;
	}
	return noOfDays(accum, d1, m1, y1, d2, m2, y2);
}

console.log(noOfDays(0, 23,9,1989, 27,4, 2016));