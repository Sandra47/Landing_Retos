const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

var str = textEl.innerHTML;

let speed = 300 / speedEl.value

var idx = 1
//se tipear el texto 
typearWriter()
function typearWriter() {
    //textEl.innerHTML += str.charAt(i);
    textEl.innerHTML = str.slice(0, idx)//Devuelve una copia del arreglo
    idx++;
   if (idx > str.length) {
    
    idx=1;    

    }
    setTimeout(typearWriter, speed);
}

speedEl.addEventListener('input', (e) => { speed = 300 / e.target.value})






