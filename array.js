function mySlice(arr, start = 0, end = arr.length) {
    const result = []; // Новый массив для хранения результата
    if (start < 0) {
        start = Math.max(arr.length + start, 0);
    }
    if (end < 0) {
        end = Math.max(arr.length + end, 0);
    }
    for (let i = start; i < end; i++) {
        if (i < arr.length) { // Проверяем, что индекс не выходит за пределы массива
            result.push(arr[i]);
        }
    }
    return result; // Возвращаем новый массив
}
function myIndexOf(arr, item, from = 0) {
    if (from < 0) {
        from = Math.max(arr.length + from, 0);
    }
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) { // Сравниваем элементы
            return i; // Возвращаем индекс, если элемент найден
        }
    }
    return -1; // Возвращаем -1, если элемент не найден
}
function myIncludes(arr, item, from = 0) {
    if (from < 0) {
        from = Math.max(arr.length + from, 0);
    }
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) { // Сравниваем элементы
            return true; // Возвращаем true, если элемент найден
        }
    }
    return false; // Возвращаем false, если элемент не найден
}
const array = [1, 2, 3, 4, 5];
console.log("mySlice(array, 1, 4):", mySlice(array, 1, 4)); // [2, 3, 4]
console.log("myIndexOf(array, 3):", myIndexOf(array, 3)); // 2
console.log("myIncludes(array, 4):", myIncludes(array, 4)); // true
console.log("myIncludes(array, 6):", myIncludes(array, 6)); // false
