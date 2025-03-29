//Тренажер по JavaScript, раздел 4.Функция, задание 2

export function getPercents(percent, number) {
	if (percent < 0) {
        return "Введен некорректный процент";
    }

	return number / 100 * percent;
}