function sumar(a, b, cb) {
    const r = a + b
    cb(r)
}

sumar(2, 3, function (r) {
    console.log('soy una funcion anonima y me resultado es', r);
})      