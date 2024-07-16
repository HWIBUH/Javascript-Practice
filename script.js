
//console.log(document.querySelectorAll("p"))

let number = document.querySelectorAll("#number")
let screen = document.querySelector("#screen")
let backspace = document.querySelector("#ac")
let operator = document.querySelectorAll("#operator")
let result = document.querySelector(".result")
let percentage = document.querySelector("#percentage")
let plusmin = document.querySelector("#plusmin")
let ope = ""
let firstNumber = undefined

number.forEach((num) => {
    num.addEventListener('click', () => {
        screen.innerHTML += num.innerHTML
    })
})

backspace.addEventListener('click', () => {
    screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length-1)
})

operator.forEach((oper) => {
    oper.addEventListener('click', () => {
        firstNumber = screen.innerHTML
        screen.innerHTML = ""
        ope = oper.innerHTML
        console.log(ope)
    })
})

percentage.addEventListener('click', () => {
    screen.innerHTML = screen.innerHTML*0.01
})

plusmin.addEventListener('click', () => {
    screen.innerHTML = screen.innerHTML*-1
})

result.addEventListener('click', () => {
    switch(ope) {
        case "-" :
            screen.innerHTML = firstNumber - screen.innerHTML
            break
        case "+" :
            screen.innerHTML = firstNumber + screen.innerHTML
            break
        case "x" :
            screen.innerHTML = firstNumber * screen.innerHTML
            break
        case "/" :
            screen.innerHTML = firstNumber / screen.innerHTML
            break
    }
})