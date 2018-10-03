alert('hello');

const a = parseFloat(prompt('number a'));
const b = parseFloat(prompt('number b'));
const c = parseFloat(prompt('number c'));

function resultat(a, b, c) {
    const d = discr(a, b, c);
    if (d > 0) {
        const x1 = (-b - Math.sqrt(d)) / (2 * a);
        const x2 = (b - Math.sqrt(d)) / (2 * a);
        return 'x1 = ' + x1 + ' x2 = ' + x2;
    }
    else if (d === 0) {
        const x1 = (-b) / (2 * a);
        return 'x = ' + x1;
    }
    else if (d < 0) {
        return 'No results';
    }
}

function discr(a, b, c) {
    const d = b * b - 4 * a * c;
    return d;
}


const solution = resultat(a, b, c);
alert(solution);
