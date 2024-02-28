import { useState } from 'react'

var panelNumber_1 = "5"
var panelNumber_2 = "21"
var operatorSelected = '+'


Calculate(operatorSelected, parseInt(panelNumber_1), parseInt(panelNumber_2))

var operation = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y },
    '÷': function (x, y) { return x / y },
}

function Calculate ({operator, firstNum , secondNum}) {
    return operation[operator](firstNum, secondNum)
}