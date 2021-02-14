const jokeEl = document.querySelector('.joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

// USING ASYNC/AWAIT
async function generateJoke() { //async nos devuelve una promesa 
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }  
    //se coloca await que es la que espera la data
  const res = await fetch ('https://icanhazdadjoke.com', config) 
  .then((res) => res.json())//los pasa a Json
  .then((data) => {
    jokeEl.innerHTML = data.joke //los muestra
  })
}
//   HINTS
// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   >>fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
