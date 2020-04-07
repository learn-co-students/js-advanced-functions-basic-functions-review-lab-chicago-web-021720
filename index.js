function saturdayFun(str="roller-skate") {
    return `This Saturday, I want to ${str}!`;
}

function mondayWork(str="go to the office") {
    return `This Monday, I will ${str}.`;
}

function wrapAdjective(rap="*") {
    return function(str="special") {
        return `You are ${rap}${str}${rap}!`;
    }
}

const Calculator = {
    "subtract": function(num1, num2) {
        return num1 - num2;
    },
    "add": function(num1, num2) {
        return num1 + num2;
    },
    "multiply": function(num1, num2) {
        return num1 * num2;
    },
    "divide": function(num1, num2) {
        return num1 / num2;
    }
}

function actionApplyer(stInt, fnArray) {
    for (const fn of fnArray) {
        stInt = fn(stInt);
    }
    return stInt;
}