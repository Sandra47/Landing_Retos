const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let opacity =1;
let timeReduce=0.01;

let mists =30; 

let int = setInterval(blurring, 30);/**30 es milliseconds */

function blurring() {

    if(load==100){
        /**El método clearInterval () borra un temporizador configurado con el método setInterval () . */
        clearInterval(int) 
    }
    /*devuelve el contenido de texto del nodo especificado*/ 
    loadText.innerText = `${load}%`/*cambie el valor de la numeración*/ 
    load++ 
    /** loadText toma el valor de 1*/
    loadText.style.opacity = opacity
    opacity=opacity-timeReduce

    mists=mists-0.3
    bg.style.filter = `blur(${mists}px)`/*la imagen se va poniendo nitida */
    /*console.log(mists)*/
}
  
 