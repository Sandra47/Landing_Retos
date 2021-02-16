//mostrara la busqueda
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#btn');
const resultado=document.querySelector('#resultado');

let galeria =[
  {nombre: 'Expanding Cards', url: './Retos/Reto1/index.html', img:'img/Reto1.png'},
  {nombre: 'Progress Steps', url: './Retos/Reto2/index.html', img: 'img/Reto2.png'},
  {nombre: 'Rotating Navigation', url: './Retos/Reto3/index.html', img:'img/Reto3.png'},
  {nombre: "Hidden Search", url: "./Retos/Reto4/index.html", img: 'img/Reto4.png'},
  {nombre: "Blurry Loading", url: "./Retos/Reto5/index.html", img: 'img/Reto5.png'},
  {nombre: "Drag N Drop", url: "./Retos/Reto6/index.html", img: 'img/Reto6.png'},
  {nombre: "AutoText", url: "./Retos/Reto7/index.html", img: 'img/Reto7.png'},
  {nombre: "Hoverboard", url: "./Retos/Reto8/index.html", img: 'img/Reto8.png'},
  {nombre: "Scroll Animation", url: "./Retos/Reto9/index.html", img: 'img/Reto9.png' },
  {nombre: "Form input wave", url: "./Retos/Reto10/index.html", img:'img/Reto10.png'},
  {nombre: "Dad Jokes", url: "./Retos/Reto11/index.html", img:'img/Reto11.png'},
  {nombre: "Sound Board", url: "./Retos/Reto12/index.html", img:'img/Reto12.png'},
  {nombre: "Live User Filter", url: "./Retos/Reto13/index.html", img: 'img/Reto13.png'},
  {nombre: "Button Ripple Effect", url: "./Retos/Reto14/index.html", img:'img/Reto14.png'},
  {nombre: "Background Slider", url: "./Retos/Reto15/index.html", img: 'img/Reto15.png'},
  {nombre: "Kinetic loader", url: "./Retos/Reto16/index.html", img: 'img/Reto16.png'},
  {nombre: "Netflix Navigation", url: "./Retos/Reto17/index.html", img:'img/Reto17.png'},
  {nombre: "Testimonial Box Switcher", url: "./Retos/Reto18/index.html", img: 'img/Reto18.png'},
  {nombre: "Pokedex", url: "./Retos/Reto19/index.html", img: 'img/Reto19.png'},
  {nombre: "Doble click Heart", url: "./Retos/Reto20/index.html", img: 'img/Reto20.png'},
  {nombre: "Event Keycodes", url: "./Retos/Reto21/index.html", img: 'img/Reto21.png'},
  {nombre: "Mobile Nav Navigation", url: "./Retos/Reto22/index.html", img: 'img/Reto22.png'},
  {nombre: "Feedback UI Desing", url: "./Retos/Reto23/index.html", img: 'img/Reto23.png'},
  {nombre: "GitHub Profile", url: "./Retos/Reto24/index.html", img: 'img/Reto24.png'},
  {nombre: "Sticky Navigation", url: "./Retos/Reto25/index.html", img: 'img/Reto25.png'}

]


console.log(galeria)

const filtrar=()=>{
    
  resultado.innerHTML='';

 const texto = formulario.value.toLowerCase();

 for(let imagen of galeria){
   let nombre = imagen.nombre.toLowerCase();
   if(nombre.indexOf(texto) !== -1){//retona el elemento si existe o si no -1
     resultado.innerHTML +=`
     <div class="galeria_item col s12 m4 l3">
     <h2 class="titulo_Reto"><a href="${imagen.url}">${imagen.nombre}</a></h2>
      <img src="${imagen.img}" class= "galeria_img" data-caption="Progress Steps">
      </div>
      </div>
      `
    // console.log("Funciona ",nombre)
    }

  }
  if (resultado.innerHTML===''){
    resultado.innerHTML+=`<h2> no se ha encontrado el reto con el nombre: "${texto}"</h2>`

  }

}
boton.addEventListener('click',filtrar)
formulario.addEventListener('keyup', filtrar)
 
filtrar();
