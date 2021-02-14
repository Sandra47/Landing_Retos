const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    let url= 'https://randomuser.me/api?results=50';
    const res = await fetch (url) 
    //la variable results recibe res pero ya codigo json
    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''
 //Recorre y agrega a la lista los datos que extraimos de la api
    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
         <img src="${user.picture.large}" alt="${user.name.first}">
         <div class="user-info">
         <h4>${user.name.first} ${user.name.last}</h4>
         <p>${user.location.city}, ${user.location.country}</p>
         </div>
        `

        result.appendChild(li)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}