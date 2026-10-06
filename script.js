// STEP 1 STARTS HERE

// ADD
function addition(num1, num2) {
    console.log(num1+num2)
    return num1+num2
}

// SUBTRACT
function subtraction(num1, num2){
    console.log(num1-num2)
    return num1-num2
}
// MULTIPLY
function mulitplication(num1, num2){
    console.log(num1*num2)
    return num1*num2
}
// DIVIDE
function division(num1, num2){
    console.log(num1/num2)
    return num1/num2
}


// STEP 2 STARTS HERE



// STEP 3 STARTS HERE
function operator(num1, num2, operation){
    if (operation === '+'){
        return addition(num1, num2)
    }
    if (operation === '-'){
        return subtraction(num1, num2)
    }
    if (operation === '*'){
        return mulitplication(num1, num2)
    }
    if (operation === '/'){
        return division(num1, num2)
    }
}

const calculator = document.querySelector("#calculator")
const display = document.createElement("div")
display.style.width = "320px"
display.style.height = "100px"
display.style.borderStyle = "solid"
calculator.appendChild(display)

// STEP 4
let number = 0

const operators = ['+', '-', '*', '/', '%', '=', 'AC']
for (let i = 0; i < 4; i++){
    const row = document.createElement('div')
    row.style.display = 'flex'
    // row.style.alignContent = 'center'
    for (let j = 0; j < 4; j++){
        const button = document.createElement('button')
        if (number <= 9){
            button.textContent = number
        } else {
            button.textContent = operators[number-9]
        }
        
        number += 1
        // button.style.display = 'inline-block'
        // button.style.alignContent = 'center'
        // button.style.justifySelf = 'center'
        // button.style.alignContent = 'center'
        button.style.height = '80px'
        button.style.width = '80px'
        button.style.borderStyle = 'solid'
        button.style.borderColor = 'black'
        button.style.display = 'flex'
        button.style.justifyContent = 'center'
        button.style.alignItems = 'center'
        row.appendChild(button)
    }
    calculator.appendChild(row)
}

// STEP 5

// calculator.addEventListener('click', (event) => {
//     console.log(event.textContent)
// })

// STATE VARIABLES (declare these before the event listener)
let firstNum = ''
let operatorValue = ''
let secondNum = ''
let isSecondNum = false

calculator.addEventListener('click', (event) => {
    const clickedElement = event.target

    if (clickedElement.tagName === 'BUTTON') {
        const value = clickedElement.textContent

        // 1. CLEAR BUTTON ('AC')
        if (value === 'AC') {
            firstNum = ''
            secondNum = ''
            operatorValue = ''
            isSecondNum = false
            display.textContent = ''
            return
        }

        // 2. EQUALS BUTTON ('=')
        if (value === '=') {
            if (firstNum !== '' && operatorValue !== '' && secondNum !== '') {
                // Perform calculation using your operator function
                const result = operator(Number(firstNum), Number(secondNum), operatorValue)
                
                // Show result and set it up as firstNum for chaining next operations
                display.textContent = result
                firstNum = String(result)
                secondNum = ''
                operatorValue = ''
                isSecondNum = false
            }
            return
        }

        // 3. OPERATOR BUTTONS ('+', '-', '*', '/')
        if (['+', '-', '*', '/'].includes(value)) {
            if (firstNum !== '') {
                operatorValue = value
                isSecondNum = true
            }
            return
        }

        // 4. NUMBER BUTTONS (0 - 9)
        if (!isSecondNum) {
            // Building the first number
            firstNum += value
            display.textContent = firstNum
        } else {
            // Building the second number
            secondNum += value
            display.textContent = secondNum
        }
    }
})