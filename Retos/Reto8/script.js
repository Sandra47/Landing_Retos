const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500

for(let i = 0; i < SQUARES;i++ ) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
   // console.log(square)
}
// esta funcion hace que cada cuadro que paso el mause coloca un color
function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

//esta funcion colocar un color gris suave a cada cuadrito que ya paso el cursos pintando

function removeColor(element) {
   element.style.background = `#1d1d1d` 
   element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
 return colors[Math.floor(Math.random() * colors.length)];
}
//console.log(getRandomColor())

