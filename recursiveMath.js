var a = [10, 20, 30, 40, 50, 60];
var b = [10, 20, 30, 40, 50, 60];
var c = [10, 20, 30, 40, 50, 60];
var d = [60, 50, 40, 30, 20, 10];
var e = [60, 50, 40, 30, 20, 10];

function plus(one, two) {

    return (one + two)
}

console.log(plus(2, 3))

function arrayPlus(a) {
    if (a.length === 1)
        return a[0];
    else {
        a[a.length - 2] += a[a.length - 1];
        a.pop();
        return arrayPlus(a)
    }

}
console.log(arrayPlus(a));




function minus(one, two) {

    return (one - two)
}

console.log(minus(2, 3))

function arrayMinus(a) {
    if (a.length === 1)
        return a[0];
    else {
        a[a.length - 2] -= a[a.length - 1];
        console.log(a);
        a.pop();
        return arrayMinus(a)
    }

}
console.log(arrayMinus(b));



function multiply(one, two) {

    return (one * two)
}

console.log(minus(2, 3))

function arrayMultiply(a) {
    if (a.length === 1)
        return a[0];
    else {
        a[a.length - 2] *= a[a.length - 1];
        a.pop();
        console.log(a);
        return arrayMultiply(a)
    }

}
console.log(arrayMultiply(c));



function divide(one, two) {

    return (one / two)
}

console.log(divide(2, 3))

function arrayDivide(a) {
    if (a.length === 1)
        return a[0];
    else {
        a[a.length - 2] /= a[a.length - 1];
        a.pop();
        console.log(a);
        return arrayDivide(a)
    }

}
console.log(arrayDivide(d));




function modulus(one, two) {

    return (one % two)
}

console.log(modulus(2, 3))

function arrayModulus(a) {
    if (a.length === 1)
        return a[0];
    else {
        a[a.length - 2] %= a[a.length - 1];
        a.pop();
        console.log(a);
        return arrayModulus(a)
    }

}
console.log(arrayModulus(e));