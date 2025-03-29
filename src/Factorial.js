//Тренажер по JavaScript, раздел 13.Рекурсия, задание 6

export function factorial(n) {
    if (n < 0 || n%1 != 0) {
        return "Введено некорректное число";
    }
    
	if (n === 0 || n === 1) {
  	    return 1;
    }

    return n * factorial(n - 1);
}
