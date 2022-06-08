const parrafo = document.getElementById('DOM')  // utilizando document.getelementbyid podemos darle a una constante la referencia de que elemento vamos a hacer referencia en html
parrafo.innerText = 'soy un texto actualizado'                  // si solo escribieramos parrafo, nos imprimiria en consola la etiqueta de <p>, pero al utilizar innerHTML o innerText lo que imprime la consola es solamente el contenido de la etiqueta <p> 

const listado = document.getElementById('lista')
listado.innerHTML = '<li>elemento 1</li><li>elemento 2</li>'    // con innerHTML podemos hacer algo parecido a innerText pero con otros elementos como en este caso listados
