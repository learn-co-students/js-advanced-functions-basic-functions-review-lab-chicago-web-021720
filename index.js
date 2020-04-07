function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    return function (adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }
}

let Calculator = {
    add: () => 1 + 3,
    subtract: () => 1 - 3,
    multiply: () => 1 * 3,
    divide: () => 10 / 5
}

function actionApplyer(integer, fnArray) {
    if (fnArray.length === 0) {
        return integer
    } else {
        let newValue = integer
        for(const fn of fnArray) {
            newValue = fn(newValue)
        }
        return newValue
    }
}