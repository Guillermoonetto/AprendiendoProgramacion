function suma(a, b) {
    return a + b;
}

function dividir(c, d) {
    return c / d;
}

function multiplicar(e, f) {
    return e * f;
}

const resultado1 = suma(3, 4)
const resultado2 = dividir(9, 3)
const resultado3 = suma(resultado1, resultado2)
const resultado4 = multiplicar(resultado3, 5)
console.log('La suma total es', resultado4)