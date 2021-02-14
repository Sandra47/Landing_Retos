const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        //revisar 
        //console.log(x,y);arroja la posicion del curso

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        //console.log(buttonTop,buttonLeft);

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        //console.log(xInside,yInside);

        //Puede acceder a un elemento 
        const circle = document.createElement('span')
        circle.classList.add('circle') //circle contiene el color blanco que al dar clic en el boton lo muestra
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() =>{
            circle.remove();
        }, 500);
    })
})