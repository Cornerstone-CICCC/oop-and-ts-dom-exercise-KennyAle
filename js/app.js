const calculate = document.querySelector('#calculateBtn')
class Calculator {
    constructor() {
        this.num1 = document.querySelector('#num1').value
        this.num2 = document.querySelector('#num2').value
        this.operation = document.querySelector('#operation').value
    }
    add() {
        return parseFloat(this.num1) + parseFloat(this.num2)
    }
    subtract() {
        return parseFloat(this.num1) - parseFloat(this.num2)
    }
    multiply() {
        return parseFloat(this.num1) * parseFloat(this.num2)
    }
    divide() {
        return parseFloat(this.num1) / parseFloat(this.num2)
    }
    compute() {
        const result = document.querySelector('#result')
        if (this.operation == 'add') {
            result.innerHTML = `${this.add()}`
        }
        else if (this.operation == 'subtract') {
            result.innerHTML = `${this.subtract()}`
        }
        else if (this.operation == 'multiply') {
            result.innerHTML = `${this.multiply()}`
        }
        else if (this.operation == 'divide') {
            result.innerHTML = `${this.divide()}`
        } else {
            result.innerHTML = `Invalid Values`
        }
    }
}

calculate.addEventListener('click', () => {
    const example = new Calculator()
    example.compute()
})

