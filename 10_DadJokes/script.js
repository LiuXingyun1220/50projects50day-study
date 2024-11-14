const jokeEl = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT WITH AXIOS
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    try {
        const res = await axios.get('https://icanhazdadjoke.com', config)
        jokeEl.innerHTML = res.data.joke
    } catch (error) {
        console.error('Error fetching joke:', error)
        jokeEl.innerHTML = 'Sorry, something went wrong!'
    }
}

// USING .then() WITH AXIOS
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   axios.get('https://icanhazdadjoke.com', config)
//     .then((res) => {
//       jokeEl.innerHTML = res.data.joke
//     })
//     .catch((error) => {
//       console.error('Error fetching joke:', error)
//       jokeEl.innerHTML = 'Sorry, something went wrong!'
//     })
// }
