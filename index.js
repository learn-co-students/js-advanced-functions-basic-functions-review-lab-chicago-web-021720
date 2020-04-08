// Your code here
function saturdayFun(stuff = "roller-skate") {
    return `This Saturday, I want to ${stuff}!`
}

function mondayWork(stuff = "go to the office") {
    return `This Monday, I will ${stuff}.`
}

function wrapAdjective(flair= "*") {
    return function innerFunction(arg = "special") {
        return `You are ${flair}${arg}${flair}!`
    }
}

let Calculator = {
    add: function(){return 1 + 3},
    subtract: function(){return 1 - 3},
    multiply: function(){return 1 * 3},
    divide: function(){return 10 / 5}
}

function actionApplyer(startInt, arrayFunc) {
    let testVar = startInt

    arrayFunc.forEach(function(testFunc){
        testVar = testFunc(testVar)
    })

    return testVar
}