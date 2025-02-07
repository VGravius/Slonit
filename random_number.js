function ComputerGame() {
    const Secret_Number = Math.floor(Math.random() * 100) + 1; // Генерация числа
    console.log(`Компьютер 1 загадал число: ${Secret_Number}.\n`);
    let Min_Number = 1, Max_Number = 100, Attempts = 0; //  Минимум, максимум и кол-во попыток
    while (true) {
        Attempts++; // Оценка количества попыток на нахождение секретного числа
        const Number = Math.floor((Min_Number + Max_Number) / 2);
        console.log(`Компьютер 2: Пробую число ${Number}.`);
        if (Number < Secret_Number) {
            console.log("Компьютер 1: Больше.\n");
            Min_Number = Number + 1; // Уточнение диапазона минимума
        } else if (Number > Secret_Number) {
            console.log("Компьютер 1: Меньше.\n");
            Max_Number = Number - 1; // Уточнение диапазона максимума
        } else {
            console.log("Компьютер 1: Угадал!");
            console.log(`\nКомпьютер 2 угадал число ${Secret_Number} за ${Attempts} попыток.`);
            break;
        }
    }
}
ComputerGame();
