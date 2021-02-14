//mostrara la busqueda
const input = document.querySelector('#input');
const boton = document.querySelector('#btn');
const resultado=document.querySelector('#resultado');

let galeria =[
  {nombre: 'Expanding Cards', url: './Retos/Reto1/index.html', img:''},
  {nombre: 'Progress Steps', url: './Retos/Reto2/index.html', img: ''},
  {nombre: 'Rotating Navigation', url: './Retos/Reto3/index.html', img:''},
//   {nombre: "Hidden Search", url: "../retos/Reto4/index.html", img: ""},
//   {nombre: "Blurry Loading", url: "../retos/Reto5/index.html", img: ""},
//   {nombre: "Drag N Drop", url: "../retos/Reto6/index.html", img: ""},
//   {nombre: "AutoText", url: "../retos/Reto7/index.html", img: ""},
//   {nombre: "Hoverboard", url: "../retos/Reto8/index.html", img: ""},
//   {nombre: "Scroll Animation", url: "../retos/Reto9/index.html", img: ""},
//   {nombre: "Form input wave", url: "../retos/Reto10/index.html", img: ""},
//   {nombre: "Dad Jokes", url: "../retos/Reto11/index.html", img: ""},
//   {nombre: "Sound Board", url: "../retos/Reto12/index.html", img: ""},
//   {nombre: "Live User Filter", url: "../retos/Reto13/index.html", img: ""},
//   {nombre: "Button Ripple Effect", url: "../retos/Reto14/index.html", img: ""},
//   {nombre: "Background Slider", url: "../retos/Reto15/index.html", img: ""},
//   {nombre: "Kinetic loader", url: "../retos/Reto16/index.html", img: ""},
//   {nombre: "Netflix Navigation", url: "../retos/Reto17/index.html", img: ""},
//   {nombre: "Testimonial Box Switcher", url: "../retos/Reto18/index.html", img: ""},
//   {nombre: "Pokedex", url: "../retos/Reto19/index.html", img: ""},
//   {nombre: "Doble click Heart", url: "../retos/Reto20/index.html", img: ""},
//   {nombre: "Event Keycodes", url: "../retos/Reto21/index.html", img: ""},
//   {nombre: "Mobile Nav Navigation", url: "../retos/Reto22/index.html", img: ""},
//   {nombre: "Feedback UI Desing", url: "../retos/Reto23/index.html", img: ""},
//   {nombre: "GitHub Profile", url: "../retos/Reto24/index.html", img: ""},
//   {nombre: "Sticky Navigation", url: "../retos/Reto25/index.html", img: ""}

]


console.log(galeria)

const filtrar=()=>{
    
  resultado.innerHTML='';

 const texto = input.value.toLowerCase();

 for(let imagen of galeria){
   let nombre = imagen.nombre.toLowerCase();
   if(nombre.indexOf(texto) !== -1){//retona el elemento si existe o si no -1
     resultado.innerHTML +=`
     <div class="galeria_item">
     <h2 class="titulo_Reto"><a href="${imagen.url}">${imagen.nombre}</a></h2>
      <img src="${imagen.img}" class= "galeria_img" data-caption="Progress Steps">
      </div>
      </div>
      `
    }

  }
  if (resultado.innerHTML===''){
    resultado.innerHTML+=`<h2> no se ha encontrado el reto con el nombre:"${texto}"</h2>`

  }

}
boton.addEventListener('click',filtrar)
input.addEventListener('keyup', filtrar)
 
filtrar();
