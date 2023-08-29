const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const resetButton = document.querySelector("#reset")
const levelUp = document.querySelector("#levelUp")
const levelDown = document.querySelector("#levelDown")
let num = 3
let game1 

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

let incriminate = () => {
    num = num + 1
}
let decriminate = () => {
    num = num - 1
}

const render = () => {
    puzzleEl.innerHTML = ""
    guessesEl.textContent = game1.statusMessage
    
    game1.puzzle.split("").forEach((letter) => {
        const letterEl = document.createElement("span")
        letterEl.innerHTML = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startgame = async () => {
    const puzzle = await getPuzzle(num)
    game1 = new Hangman(puzzle, 5)
    render()
}

resetButton.addEventListener("click", (e) => {
    resetButton.textContent = "New word!"
setTimeout(() => {
    resetButton.textContent = "Reset"
  }, 2000)
  startgame()
})
levelUp.addEventListener("click",() => {
    num < 16 ? incriminate() : false
    startgame()
})
levelDown.addEventListener("click",() => {
    num > 1 ? decriminate() : false
    startgame()
})

startgame()


// getLocation("c397cd7e0bd6a7").then((location) => {
//     return getCountry(location.country)
// }).then((country) => {
//     console.log(country)
// }).catch((err) => {
//     console.log(err)
// })

