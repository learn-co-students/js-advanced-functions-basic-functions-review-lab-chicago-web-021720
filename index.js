// Your code here
function wrapAdjective(adjective = '*') {
  return function(str = "special") {
    return `You are ${adjective}${str}${adjective}!`;
  }
}

function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}

function actionApplyer(num,functions) {
  return functions.reduce((accumulator, currentValue) => currentValue(accumulator),num);
}

const Calculator = {
  add: function(num1,num2) {
    return num1 + num2;
  },
  subtract: function(num1,num2) {
    return num1 - num2;
  },
  multiply: function(num1,num2){
    return num1 * num2;
  },
  divide: function(num1,num2){
    return num1/num2;
  }
};
