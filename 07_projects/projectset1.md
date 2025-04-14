# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js)

# Solution Code
## project 1 

```javascript
   console.log("hi")
   const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')


buttons.forEach(function(button){
 
   button.addEventListener('click', function (e){
        
        if (e.target.id == 'red'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'green'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'yellow'){
            body.style.backgroundColor = e.target.id
        }
   }) 
})
```

## project 2 

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function (e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  if(height === '' || isNaN(height) || height<0){
    results.innerHTML = 'provide a valid height'
  } else if(weight === '' || isNaN(weight) || weight<0){
    results.innerHTML = 'provide a valid weight'
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span></br>`
    if(bmi<18.6){
      results.append("Under Weight")
    }
    else if (bmi>=18.6 && bmi <=24.9){
      results.append("Normal Weight")
    }
    else{
      results.append("Over Weight")
    }
  }
})
```

## project 3 

```javascript
    const clock = document.querySelector('#clock')


    setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
    }, 1000)


```

## project 4 
 ```javascript

  let randomNumber = parseInt(Math.random() * 100 + 1)

  const submit = document.querySelector('#subt')
  const userInput = document.querySelector('#guessField')
  const guessSlot = document.querySelector('.guesses')
  const remaining = document.querySelector('.lastResult')
  const startOver = document.querySelector('.resultParas')
  const lowOrHi = document.querySelector('.lowOrHi')

  const p = document.createElement('p')

  let prevGuess = []
  let numGuess = 1

  let playGame = true

  if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGame(guess)
  })
  }
  function validateGame(guess){
    if(isNaN(guess) || guess == ''){
      alert('enter a valid number')
    } else if(guess < 1 ){
      alert('enter a number more than 1')
    } else if(guess > 100 ){
      alert('enter a number less than 100')
    }else{
      prevGuess.push(guess)
      if(numGuess === 11){
        cleanUpGuess(guess)
        displayMessage(`Game over. Random Number was ${randomNumber}`)
        endGame()
      }
      else{
        cleanUpGuess(guess)
        checkGuess(guess)
      }
    }
  }

  function checkGuess(guess){
  if(guess === randomNumber){
      displayMessage('You guessed it right')
      endGame()
  }else if(guess < randomNumber){
    displayMessage('Number is TOO LOW')
  }
  else if(guess > randomNumber){
    displayMessage('Number is TOO HIGH')
  }
  }
 // clean up method 
  function cleanUpGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`
  }

  function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
  }

  function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame>Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame()
  }

  function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGame.addEventListener('click', function(e){
      randomNumber = parseInt(Math.random() * 100 + 1)
      prevGuess = []
      numGuess = 1;
      guessSlot.innerHTML = ''
      remaining.innerHTML = `${11 - numGuess}`
      userInput.removeAttribute('disabled')
      startOver.removeChild(p)
      playGame = true
    })
  }


 ```