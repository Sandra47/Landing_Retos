const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('li')

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {

        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('show')   
    })
})
function hideAllContents() {
//recorre el contens donde estan las imagenes y remueve show
    contents.forEach(element => {

        element.classList.remove('show')           
    });
}
//recorrre
function hideAllItems() {
    listItems.forEach(element => {

        element.classList.remove('active')       
    });
}