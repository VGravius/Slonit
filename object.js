function sumNumericFields(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }
    return sum;
}
function sortedNumericFieldNames(obj) {
    const numericFields = [];
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            numericFields.push(key);
        }
    }
    numericFields.sort((a, b) => obj[b] - obj[a]);
    return numericFields;
}
const exampleObject = {name: 'Vasya', friends: 5, likes: 19, projects: 7};
const sum = sumNumericFields(exampleObject);
console.log("Сумма числовых полей:", sum);
const sortedFields = sortedNumericFieldNames(exampleObject);
console.log("Отсортированные названия полей:", sortedFields);
