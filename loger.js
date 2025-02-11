function createLogger() {
  const logs = []; 
  return {
    log: function(message) {
      logs.push(message); // Сохраняем сообщение в массив
    },
    getLogs: function() {
      return logs; // Возвращаем все сохраненные сообщения
    }
  };
}
function createRandomGenerator(min, max) {
  return function() {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Генерируем случайное число
  };
}
const logger = createLogger();
logger.log("Первое сообщение");
logger.log("Второе сообщение");
console.log("Лог сообщения:", logger.getLogs()); // ["Первое сообщение", "Второе сообщение"]
const randomGenerator = createRandomGenerator(1, 10);
console.log("Случайное число:", randomGenerator()); // Случайное число от 1 до 10
console.log("Случайное число:", randomGenerator()); // Случайное число от 1 до 10
console.log("Случайное число:", randomGenerator()); // Случайное число от 1 до 10
