console.log('Hola Mundo')    //Con este comando puedo llamar a ejecutar variables.

// asi se escriben comentarios en JS //
// TIPOS DE DATOS
// String: son cadena de caracteres. para esto se escriben dentro de comillas pueden ser simples o dobles 'hola' "hola"
// boolena: estos pueden contener solamente 2 valores true o false.
// Null: nulo.  hace referencia a que esta vacio.
// Numbre: se utiliza para escribir un numero , no necesita comillas ni nada.
// Undefine: es una variable que no ha sido definida a diferencia de null que es una variauble definida nula.
// Object:Un objeto es unconjunto de datos que  pueden ser diferentes convianciones de los datos anterior y pueden agruparlos.

// Las variables se puede definir de 3 formas:
// var: cuando se define con var ,esta va al comienzo del archivo a tomar informacion. vamos a tratar de no usar var
// let: Me permite crear una variable a la cual le puedo definir el contenido despues.
// const: 
// Siempre que pongamos un nombre a una variable debe empezar con una letra del abecedario, despue puede contener numero pero siempre empezar con una letra
let Variabledeprueba = 'de esta forma puedo llamar al contenido de la variable y este contenido puede ser modificado'
console.log(Variabledeprueba)

//Mutabilidad: es cuando reasignamos valore a las variables o grupos de variables, de esta forma podemos darle un valor a una variable y si despues llamamos a esa variable y le reemplazamos el contenido lo que hacemos es decirle que le cambie el valor que tenia antes.

Variabledeprueba = 'esto ha cambiado'
console.log(Variabledeprueba)

//boolean
let miBoolean = true
let miotroBoolean = false

let miNumero = 0
let miNumero2 = 12
let miNumero3 = -258

//console.log(miNumero, miNumero2, miNumero3, miBoolean, Variabledeprueba);

let undef
console.log(undef)

let nulo = null
console.log(nulo)

//objeto vacio
const miobjetovacio = {}

//objeto:  Los objetos no tiene VARIABLE en su interior sino propiedades 
const miobjeto = {
    unnumero: 12,
    unstring: 'cadena de caracteres',
    unacondicion: true,
}

console.log(miobjeto);

// Si quisieramos imprimir una sola propiedad de un objeto lo que debemos hacer es seguido del nombre del objeto colocar un punto y el nombre de la propiedad.

//ARREGLO 

const arreglovacio = []
const arreglo = [1, 2, 'hola', 'mundo', miobjeto]     // De esta manera podemos llamar a un arreglo

arreglo.push('de esta manera agregamos contenido a un objeto con un arreglo')

console.log(arreglo);

//Las listas a diferencia de los arreglos deben contener el mismo tipo de dato los arreglos pueden tener string ,numero , condiciones, etc

//OPERADORES MATEMATICOS

const suma = 1 + 2
const restar = 1 - 2
const multiplicar = 2 * 3
const division = 9 / 3

console.log(suma, restar, multiplicar, division);

const modulo = 10 % 3         // El operador modulo hace una division y arroja el valor que sobra en la division

console.log(modulo)

let num = 5                //la diferencia entre let y const es que const no permite cambiar el valor de la varaible               
num++                      // este operador incrementa en uno el numero 
num--                      // este operador decrementa en uno el numero
num += 3                   // Si quisieramos que el numero se modificara en mas/menos cantidad podemos hacerlo como se muestran los siguientes operadores
num /= 2
num *= 2
num -= 3
console.log(num)

//OPERADORES DE LOGICOS (de comparacion)

const resultado1 = 5 === 5           // TRIPLE IGUALADAD, igualdad estricta
const resultado2 = 5 == 6            // DOBLE IGUALDAD, igualdad NO estricta
const resultado3 = 5 == '5'          // cuando uso == es una comparacion no etricta y me permite compara numeros con strig
const resultado4 = 5 === '5'         // cuando uso la triple igualdad === el resultado sera false por que estoy comparando un numero con un string aunque el contenido del strig sea igual al que queremos comparar

const resultado5 = 5 > 6             // Comparacion mayor o menor
const resultado6 = 5 < 6
const resultado7 = 5 <= 5            // Compraracion mayor/menor o igual
const resultado8 = 5 <= 4
const resultado9 = 5 >= 5
const resultado10 = 5 >= 4

const resultado11 = 5 !== 6          //Este operador es para establecer desigualdad, puede ser estricto o no como 
const resultado12 = 5 != '5'
const resultado13 = 5 !== '5'

//OPERADORES LOGICOS: or , not ! , and && , los operadores && y || realizan el shor circuit evaluation , quiere decir que evaluan hasta encontrarse con la primera condicion que los hace terminar , eso es cuando or encuentra un true y cuando and encuentra un false.

const resultadoOr = false || true   // El operador OR sirve para compara entre los distintos valores hasta encontrarse con el primer valor que sea TRUE, si quedan mas elementos despue de este no seran comparados aunque estos sean true tambien, no necesariamente los valores tiene que ser true o false, pueden ser sting tambien. String ,numero y objetos evaluan en TRUE  el cero evalua en false.
console.log(resultadoOr)              

const resultadoAnd = true && true && false   // Al contrario que el operador OR el operador AND evalua los valores hasta encontrarse al primer falso.
console.log(resultadoAnd);

const resultadoNot = !true          // El operador NOT se escribe utilizando ! y da vuelta completamente el valor que tenga.
console.log(resultadoNot);

//CONTROL DE FLUJO

//IF

const edad = 10
if (edad > 5 && edad < 18) {                        // El operador IF evalua el valor dentro de la condicion y si este es true ejecuta lo que este en llaves,
    console.log('el ni;o puede jugar')
} else {                                            // en caso de que IF evalue en FALSE debemos agregar ELSE y sirve apra ejecutar otro codio cuando el if no se puede ejecutar por no cumplirse las condiciones
    console.log('la cucarachita no puede jugar')
}

//WHILE         es una instrtuccion que se queda iterando en ciclos hasta que le damos la orden de terminar , el operador WHILE evalua en TRUE hasta que se deja de cumplir esa condicion y evalua en FALSE

let x = 0
while (x <5) {                  
    console.log(x)
    x++
}

//SWITCH        Este operador permite toamr diferentes caminos en base al parametro que tenga.

switch (1) {
    case 1: {
        console.log('soy el caso 1');
        break;
    }
    case 2: {
        console.log('soy el caso 2');
        break;
    }
    case 3: {
        console.log('soy el caso 2');
        break;
    }
    default: {
        console.log('no hay caso');
        break;
    }
}

//FOR          Esta nos permite hacer uso de un loop hasta que se cumpla una condicion , es muy parecido a WHILE

for (let i = 0; i < 10; i++) {          // Tiene que tener 3 instrucciones la primera sera la variable y su valor inicial, seguido la condicion que debe cumplir y la tercera tiene que ser la operacoin que debe realizarce al terminar el loop
    console.log(i);
}

const numeros = ['hola', 2, 'chau', 4, 'tu vieja']   //Con este ejemplo podemos ver como acceder a los arreglos ,estos tiene una propiedad de .length de esta forma podemos acceder al largo del arreglo
                                                     // Al poner entre corchetes los valores del arreglo debemos saber que el primero empieza en 0 , el segundo en 1 y asi sucesivamente .                                                
for (let i = 0; i <numeros.length; i++) {
    console.log(numeros[i])
}


//FUNCIONES : estas se utilizan escribiendo la palabra 'FUNCTION', luego el nombre de la funcion y seguido entre parentecis el argumento.

function iterar (arg1) {                       //En esta funcion lo que esta dentro de los parentesis se llama argumento, pero cuando le pasamos el valor como hacemos mas abajo se llama parametro

    for (let i = 0; i <numeros.length; i++) {  //En esta funcion primero se llama a los numero  y despues a los nombres.
        console.log(arg1[i])
    }
}

const numeros = [1, 2, 'HOLA', 4, 5]
const nombres = ['ricardo', 'Pedro', 'juan', 'pancracio'. 'cariputa']
iterar(numeros)
iterar(nombres)

function suma(a, b) {                           //En este ejemplo podemos hacer uso del valor arrojado por la suma de a + b, pero para ello debemos usar la palabra reservada RETURN que hace que el valor obtenido sea reutilizado por otra funcion
    return a + b;
}

const resultadosuma1 = suma(1, 2)
const resultadosuma2 = suma(5, 6)
const resultadosuma3 = suma(resultadosuma1, resultadosuma2)
console.log('resultado', resultadosuma3)

//CALBACK es una funcion que se ejecuta al final de otra funcion

function sumar(a, b, cb) {
    const r = a + b
    cb(r)
}

function callback(result) {             // Las funciones ademas de ejecutar porciones de codigo actuan como valores, por ellos podemos pasar funciones como argumentos de otras funciones
    console.log('resultado', result)
}

sumar(2, 3, callback)

//FAT ARROW FUNCTION: tiene como diferencia con las funciones comunes que no necesita que se use la palabra reservada FUNCTION y la segunda diferencia es que la funcion si tiene una sola linea no es necesario que se use la palabra reservada RETURN ya que este sera implicito

const FAF = (a, b) => a + b        //Al ser de 1 linea no necesito usar RETURN

const otraFAF = (a, b) => {        // Si mi fuencion va a tener mas de 1 linea de codigo debo agregar la palabra reservada RETURN
    RETURN a + b
}
const re = otraFAF(1, 2)
console.log(re);

//Funcion anonima, son aquella que no tienen ningun nomrbe, por lo general son utiliza cuando no vamos a ejecutar este tipo de logica en otra parte del codigo, pero lo malo es que no se puede reutilizar

function sumar(a, b, cb) {
    const r = a + b
    cb(r)
}

sumar(2, 3, function(r) {
    console.log('soy una funcion anonima y me resultado es', r)
})