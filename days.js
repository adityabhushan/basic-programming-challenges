function days(accum, y1, m1, d1, y2, m2, d2){
	if(y1 > y2 || y1 == y2){	
		if(d1 > d2 || d1 == d2){
			accum += (d1 - d2);
		}
		else{
			accum += ((d1+30) - d2)
			m1--;
		}
		if(m1>m2 || m1 == m2){
			accum += month(0, m1,m2)
			accum += ((m1-m2)*30)
		}
		else{
			accum += month(0, m1+12, m2)
			accum += (((m1+12) - m2)*30)
			y1--;
		}
		accum += ((y1-y2)*365+parseInt((y1-y2)/4))
		console.log(Math.abs(accum));
	} else {
	days(accum, y2, m2, d2, y1, m1, d1)
	}
}

function month(d, m1,m2){
	if(m1 == (m2+1) || m1 == m2){
		return d;
	}if(m1 == 1 || m1 == 3 || m1 == 5 || m1 == 7 || m1 == 10 || m1 == 12 || m1 == 13 || m1 == 15 || m1 == 17 || m1 == 19 || m1 == 22){
		d++;
	}
	return month(d, m1-1,m2);
}
//console.log(month(0,11,4));
days(0, 1989, 5, 25, 2016,4,25);


function numberDays(y1, m1, d1){
	if(m1<=2){
		y1 -= 1;
		m1 += 13;
	}
	else{
		m1 += 1;
	}
	return ((1461*y1)/4)+((153*m1)/5)+d1;
}

function diff(y1, m1, d1, y2, m2, d2){
	return numberDays(y1, m1, d1) - numberDays(y2, m2, d2)
}

console.log(Math.abs(Math.floor(diff(1900,1,1,2016,1,1))));

