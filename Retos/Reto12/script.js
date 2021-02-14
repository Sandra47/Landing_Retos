const botons = document.querySelectorAll(".btn");
const audios = document.querySelectorAll(".audio");

//Recorre en cada Boton 
botons.forEach((btn, index) => {
btn.addEventListener("click", () => {
remAttribute();
addAttribute(index);
});
});

//esta funcion es colocar en cada id que selecciones el atributo autoplay

function addAttribute(idx) {
audios[idx].setAttribute("autoplay", "autoplay").play();
}

//esta funcion es remueve el atributo autoplay
function remAttribute() {
audios.forEach((audio) => {
audio.load();//carga el audio
audio.removeAttribute("autoplay");
});
}
