//Дано додатнє ціле число n. Знайдіть всі числа в діапазоні [1, n] включно, які діляться на 3, 5 або 7. Поверніть масив цих чисел.

const findNumbers = (maxNumber) => {
    let arr = [];
    let sum = 0;

    for (let i = 1; i <= maxNumber; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            arr.push(i);
            sum += i;
        };
    };

    return `Numbers within given range are ${arr}. The sum of these numbers is ${sum}`;
};