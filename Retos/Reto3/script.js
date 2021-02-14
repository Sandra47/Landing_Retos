const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

/*Funcion de Abrir navegacion*/ 
function AddShownav(){
  return container.classList.add('show-nav');
	
}

/*Funcion de Cerrar navegacion*/

function RemoveShownav(){
  return container.classList.remove('show-nav');

}



open.addEventListener('click',AddShownav);
close.addEventListener('click',RemoveShownav)



