const saturdayFun = (activity = 'roller-skate') => {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = 'go to the office') => {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = (string = '*') => {
    return (input = 'special') => {
        return `You are ${string}${input}${string}!`
    }
}

const Calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y, 
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y  
}

const actionApplyer = (x, array) => {
    if (array.length === 0) {
        return x 
    }

    // x = array[0](x)
    // x = array[1](x)
    // x = array[2](x)
    x;
    for (let i = 0; i < array.length; i++) {
        x = array[i](x)
    }

    return x 
  
}