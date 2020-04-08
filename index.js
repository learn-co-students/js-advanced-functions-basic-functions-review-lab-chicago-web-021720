const saturdayFun = (activity = 'roller-skate') => `This Saturday, I want to ${activity}!`;

const mondayWork = (activity='go to the office') => `This Monday, I will ${activity}.`;

const wrapAdjective = (flair='*') => {
    return (adj='special') => `You are ${flair}${adj}${flair}!` 
}

// Option 1
class CalculatorClass {
    add(x, y) {
        return x + y
    }

    subtract(x, y) {
        return x - y
    }

    multiply(x, y) {
        return x * y
    }

    divide(x, y) {
        return x / y
    }
}

// const Calculator = new CalculatorClass();

// Option 2
const Calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y
}


const actionApplyer = (startInt, funcArray) => {
    funcArray.forEach(func => {
        startInt = func(startInt);  // Apply the function
    });
    return startInt
}
