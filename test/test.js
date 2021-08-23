const assert = require('assert')
const Calculator = require('../controller/calculator')


// it('should return true', () => {
//     assert.equal(true, true)
//   })

it ('correctly calculates the sum of positive numbers', () => {
    const calculator = new Calculator(1, 3)
    const expected = 4
    const result = calculator.add()

    assert.equal(expected, result)
})

it ('correctly calculates the sum of positive and negative numbers', () => {
    const calculator = new Calculator(2, -2)
    const expected = 0
    const result = calculator.add()
    
    assert.equal(expected, result)
})

it ('correctly calculates the sum of negative numbers', () => {
    const calculator = new Calculator(-1, -4)
    const expected = -5
    const result = calculator.add()

    assert.equal(expected, result)
})

it ('correctly calculates the product of two positive numbers', () => {
    const calculator = new Calculator(2, 5)
    const expected = 10
    const result = calculator.product()
    
    assert.equal(expected, result)
})

it ('correctly calculates the product of two negative numbers', () => {
    const calculator = new Calculator(-1, -1)
    const expected = 1
    const result = calculator.product()
    
    assert.equal(expected, result)
})

it ('correctly calculates the product of a negative and positive number', () => {
    const calculator = new Calculator(-13, 10)
    const expected = -130
    const result = calculator.product()
    
    assert.equal(expected, result)
})

it ('throws an error when a string input is detected ', () => {
    const calculator = new Calculator('jon', 10)
    const result = calculator.validateInput()
    
    assert.equal(result, false)
})

it ('runs when two numbers are provided as input', () => {
    const calculator = new Calculator(5, 8)
    const result = calculator.validateInput()
    
    assert.equal(result, true)
})
