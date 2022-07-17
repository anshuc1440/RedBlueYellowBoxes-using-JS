// console.log('Hello')

let title = document.getElementById('title')
// console.log('before: ',title.innerText)

let message = 'No of times squares clicked !'

title.innerText = message
// console.log('after: ',title.innerText)

title.innerHTML = `<h3>${message}</h3>`

title.style.display= 'flex'
title.style.justifyContent = 'center'
title.style.backgroundColor = 'pink'

let redDiv = document.getElementById('red')
let blueDiv = document.getElementById('blue')
let yellowDiv = document.getElementById('yellow')

// redDiv.onclick = ()=>console.log(('you clicked red'))
// blueDiv.onclick = ()=>console.log(('you clicked blue'))
// yellowDiv.onclick = ()=>console.log(('you clicked yellow'))

const squares = document.querySelectorAll('.colorSquare')
// console.log(squares)

// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)

//forEach

const timesClicked = {
    'red' :0,
    'blue':0,
    'yellow':0
}

squares.forEach(square => {
    square.onclick = () =>{
        //  console.log(square.value)
         timesClicked[square.value]++
         square.innerText = timesClicked[square.value]
    }
})


clearScores =()=>{
    squares.forEach(square =>  square.innerText ='')
}

const clearGameButton = document.getElementById('clear-game')
clearGameButton.onclick = () => clearScores()
