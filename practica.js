/*1.Punto: Devuelva por consola el elemento asociado al id “descripcion”. Utilice el método `getElementById()`*/
let elementoDescripcion = document.getElementById('descripcion');
console.log(elementoDescripcion);


/*2.Punto: Devuelva por consola el elemento asociado al id “descripcion”. Utilice el método `querySelector()`*/
let elementoDescripcion2 = document.querySelector('#descripcion');
console.log(elementoDescripcion2);


/*3.Punto: Devuelva por consola todos los elementos `li` en forma de lista. Utilice el método `querySelectorAll()`*/
console.log("Punto 3");
let elementosLi = document.querySelectorAll('li');
console.log(elementosLi);

/*4.Punto: Devuelva por consola la cantidad de elementos listados con `li` con el siguiente mensaje.“Hay `cantidadElementos` elementos en la lista.”`*/
console.log("Hay " + elementosLi.length + " cantidad de elementos li en la lista");

/*5.Punto: Genere una lista de todos los elementos `li` y recorra la lista con ayuda de un ciclo */
console.log(" ");
console.log("Despliegue de los elementos li");

for (let i = 0; i < elementosLi.length; i++) {
    console.log(`El ${i + 1} elemento de listas es: `);
    console.log(elementosLi[i].textContent);
}

/*6.Punto: Con ayuda de la propiedad `textContent` agregue el siguiente párrafo a `practica.html`*/
document.querySelector("#descripcion").textContent += " En el año 2008 la competición fue llevada a cabo en el Reino Unido en la Universidad de Reading en donde se presentaron 13 candidatos de los cuales se seleccionaron 6 programas finalistas: Alice, Brother Jerome, Elbot, Eugene Goostman, Jabberwacky y Ultra Hal. Los seis programas tuvieron que interactuar con los 12 jueces manteniendo una conversación mediante un computador durante cinco minutos en donde se plantean una serie de preguntas con el fin de determinar si es un computador o un humano. En la edición del 2008 ninguno logró pasar el Test de Turing, aunque el ganador de la medalla de bronce fue el programa Elbot, que estuvo muy cerca de pasar esta prueba ya que consiguió convencer a 3 de los 12 jueces, es decir el 25% de los jueces pensó que estaba conversando con un ser humano.";

/*7.Punto: Con ayuda de la propiedad `innerHTML` agregue el siguiente código HTML a `practica.html`*/
let elementoDescripcion3 = document.querySelector('#descripcion');
let enlaceHTML = '<a href="#">Enlace principal</a>';
elementoDescripcion3.innerHTML += enlaceHTML;

/*8.Punto: Agregue el siguiente arreglo a una lista no ordenada a `practica.html` con el título “Meses del año”.*/
let listaMeses = document.querySelector('ol');
listaMeses.insertAdjacentHTML('afterend', '<h3>MESES DEL AÑO.</h3><li>Enero</li><li>Febrero</li><li>Marzo</li><li>Abril</li><li>Mayo</li><li>Junio</li><li>Julio</li><li>Agosto</li><li>Septiembre</li><li>Octubre</li><li>Noviembre</li><li>Diciembre</li>');



