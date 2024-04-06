console.log("-----------Elementos----------------")

/*1.Punto*/
let elementoid=document.getElementById('descripcion')
console.log(elementoid)

/*2.Punto.Devuelva por consola el elemento asociado al id “descripcion”. Utilice el método `querySelector()`*/

let elementoid2=document.querySelector('#descripcion') 
console.log(elementoid2)

/*3.Devuelva por consola todos los elementos `li` en forma de lista. Utilice el método `querySelectorAll()`*/
console.log("Punto 3")
let elementoli=document.querySelectorAll('li') 
console.log(elementoli)

/*4.Devuelva por consola la cantidad de elementos listados con `li` con el siguiente mensaje.“Hay `cantidadElementos` elementos en la lista.”`*/

console.log("Hay "+elementoli.length+" cantidad de elementos li en la lista")

/*5.Genere una lista de todos los elementos `li` y recorra la lista con ayuda de un ciclo */
console.log(" ")
console.log("Despliegue de los elementos li")

for (let i=0;i<elementoli.length;i++){
console.log(`El ${i+1} elemento de listas es: `)
console.log(elementoli[i].textContent)}

/*6.Con ayuda de la propiedad `textContent` agregue el siguiente párrafo a `practica.html`*/

document.querySelector("#descripcion").textContent=document.querySelector("#descripcion").textContent+" En el año 2008 la competición fue llevada a cabo en el Reino Unido en la Universidad deReading en donde se presentaron 13 candidatos de los cuales se seleccionaron 6 programasfinalistas: Alice, Brother Jerome, Elbot, Eugene Goostman, Jabberwacky y Ultra Hal. Los seisprogramas tuvieron que interactuar con los 12 jueces manteniendo una conversaciónmediante un computador durante cinco minutos en donde se plantean una serie de preguntascon el fin de determinar si es un computador o un humano. En la edición del 2008 ningunologré pasar el Test de Turing, aunque el ganador de la medalla de bronce fue el programaElbot, que estuvo muy cerca de pasar esta prueba ya que consiguió convencer a 3 de los 12jueces, es decir el 25% de los jueces pensó que estaba conversando con un ser humano.";

/*7.Con ayuda de la propiedad `textContent` agregue el siguiente párrafo a `practica.html`*/
let elemento=document.querySelector('a') 
let texto='Enlace principal'
elemento.innerHTML=texto

/*Agregue el siguiente arreglo a una lista no ordenada a `practica.html` con el título “Meses del año”.*/

let ol = document.querySelector('ol') 
ol.insertAdjacentHTML('afterend', '<h3>MESES DEL AÑO.</h3><li>Enero</li><li>Febrero</li>    <li>Marzo</li><li>Abril</li><li>Mayo</li><li>Junio</li><li>Julio</li><li>Agosto</li><li>Septiembre</li><li>Octubre</li><li>Noviembre</li><li>Diciembre</li>')



