const operations = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
};
const calculate = function(a, b, operation) {
    return operation(a, b);
};
const selectedOperationAdd = "add";
console.log(calculate(6, 3, operations[selectedOperationAdd]));
const selectedOperationSubtract = "subtract";
console.log(calculate(6, 3, operations[selectedOperationSubtract]));
const selectedOperationMultiply = "multiply";
console.log(calculate(6, 3, operations[selectedOperationMultiply]));
const selectedOperationDivide = "divide";
console.log(calculate(6, 3, operations[selectedOperationDivide]));
