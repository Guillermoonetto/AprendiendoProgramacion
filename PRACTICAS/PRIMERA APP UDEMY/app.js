const todos = [];

window.onload = () => {                                                 // con esta instruccion logramos que primero se cargue todo el contenido HTML y despues se ejectue el comando que nosotros queremos
    const formululario = document.getElementById('todoform');           // Primero creamos una constaten a la cual le asignamos la propiedad getelementbyid que llamara a los elementos html con el ID especificado
    formululario.onsubmit = (e) => {                                    // El evento ONSUBMIT se genera cuando uno da click en el boton de enviar , por ello despues de esta linea de comando especificamos que va a suceder despes de tocar ese botn
        e.preventDefault ();                                            // En este caso como estamod llamando a un formulario para evitar que se refresque la pagina cada vez que enviamos el formulario , agregamos a la constante FORMULARIO la propiedad preventondefaul y asi no se refresca la pagina
        const todotext = document.getElementById('todotext').value;     // En esta constate que creamos va a quedar la informacion tomada por la propiedad getelementbyid y seguido a eso agregamos .VALUE que es un metedo que se agrega a los arreglos para devolver el contenido de cada indice de un arreglo y no el indece en si de cada arreglo
        todotext.value = '';                                            // Esta linea de comandos se agrega para que una vez tomado el contenido del arreglo el casillero quede vacio para agregar otro 
        todos.push(todotext);                                           // El metodo .PUSH agrega un elemento al final del arreglo y devuelve la nueva longitud de este.
        const todolist = document.getElementById('todo-list');          
        const todostemplate = todos.map(t => '<li>' + t + '</li>');     // El metodo .MAP  toma los elementos de un arreglo y le aplica una funcion , pueden ser que quisieramos que los multiplique, divida o demas , pero en este caso tambien podemos hacer que al contenido de cada indice del arreglo le agregue al principio y al final un string con es en este caso
        todolist.innerHTML = todostemplate.join('');                    // El metodo .JOIN en este caso va a tomar los elementos del arreglo y les va a agregar lo que le indiquemos en entre parentesis, si colocamos solo '' quda vacio , pero si ponemos por ejemplo '-' entre cada elemento agrega un -
        const elementos = document.querySelectorAll('#todo-list li')    // El metodo .QUERYSELECTORALL captura todos los elementos dentro del id que elijamos , en este caso podemos ver que dentro de un string debemos colocar un # para indicar ID y seguido del ID ponemos la etiqueta de LI para indicar que dentro de la etiqueta que elegimos queremos que tome todos las subetiquetas LI.
        elementos.forEach((elemento, i) => {                            // el metedo .FOREACH ejecuta la funcion que le indiquemos por cada elemento dentro del arreglo, es muy similar a .MAP pero la diferencia es que este metodo no se agrega a una constante a la izquierda
            elemento.addEventListener('click', () => {                  // El metodo .ADDEVENTLISTENER agrega un evento a un determinado objeto , tiene 2 espacios a llenar dentro del parentesis el primero es el tipo de evento, y el segundo es la funcion que se va a ejecutar
                elemento.parentNode.removeChild(elemento)               // cuando agregamos la propiedad .parentNode llamamos a nodo padre , y con el metodo .removechild() lo que hacemos es eleminar elementos que esten dentro de un nodo , dentro de las parentesis especificamos el nombre de la variable o constante.
            })
        })
    }
}