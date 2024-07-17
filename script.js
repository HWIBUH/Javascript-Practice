
//console.log(document.querySelectorAll("p"))

let number = document.querySelectorAll("#number")
let screen = document.querySelector("#screen")
let recent = document.querySelector("#recent")
let backspace = document.querySelector("#ac")
let operator = document.querySelectorAll("#operator")
let result = document.querySelector(".result")
let percentage = document.querySelector("#percentage")
let plusmin = document.querySelector("#plusmin")
let ope = ""
let operation = undefined
let reset


number.forEach((num) => {
    num.addEventListener('click', () => {
        if(reset == true) {
            recent.innerHTML= screen.innerHTML
            screen.innerHTML = ""
        }
        screen.innerHTML += num.innerHTML
        reset = false
    })
})

backspace.addEventListener('click', () => {
    if(reset) {
        recent.innerHTML = ""
    }
    else {
        screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length-1)
    }  
})

operator.forEach((oper) => {
    oper.addEventListener('click', () => {
        reset = false
        recent.innerHTML = screen.innerHTML
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
            screen.innerHTML = recent.innerHTML - screen.innerHTML
            reset = true
            break
        case "+" :
            screen.innerHTML = recent.innerHTML + screen.innerHTML
            reset = true
            break
        case "x" :
            screen.innerHTML = recent.innerHTML * screen.innerHTML
            reset = true
            break
        case "/" :
            screen.innerHTML = recent.innerHTML / screen.innerHTML
            reset = true
            break
    }
})