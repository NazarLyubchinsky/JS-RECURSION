//  TASK 1
//  Напишіть функцію зведення числа у ступінь.

// let Exponentiation = prompt('Введіть число, яке потрібно піднести до степеня:');
// let PowerIndicator = prompt('Введіть показник степеня:');

// function power(Exponentiation, PowerIndicator) {
// 	if (PowerIndicator === 0) {
// 		return 1;
// 	} else if (PowerIndicator < 0) {
// 		return 1 / power(Exponentiation, -PowerIndicator);
// 	} else {
// 		return Exponentiation * power(Exponentiation, PowerIndicator - 1);
// 	}
// }
// let result = power(Exponentiation, PowerIndicator);
// alert(`Результат: ${result}`);


//  TASK 1 END

//  TASK 2
// Напишіть функцію пошуку найбільшого спільного дільника

// let a = prompt("Введіть перше число: ");
// let b = prompt("Введіть друге число: ");

// function gcd(a, b) {
// 	if (b === 0) {
// 		return a;
// 	} else {
// 		return gcd(b, a % b);
// 	}
// }
// let result = gcd(a, b);
// alert(`Найбільший спільний дільник чисел ${a} і ${b} дорівнює ${result}`);

//  TASK 2 END

//  TASK 3
// Напишіть функцію для пошуку максимальної цифри у числі.

// let num = parseInt(prompt("Введіть число: "));

// function findMaxDigit(num) {
// 	if (num < 10) {
// 		return num;
// 	} else {
// 		let lastDigit = num % 10;
// 		let remainingDigits = Math.floor(num / 10);
// 		let maxDigit = findMaxDigit(remainingDigits);
// 		return Math.max(lastDigit, maxDigit);
// 	}
// }
// let maxDigit = findMaxDigit(num);
// alert(`Максимальна цифра у числі ${num} дорівнює ${maxDigit}`);

//  TASK 3 END

//  TASK 4
// Hапишіть функцію, яка визначає чи є передане число простим.

// let num = parseInt(prompt("Введіть число: "));

// function primeNumber(n, divisor = 2) {
// 	if (n < 2) {
// 		return false;
// 	}
// 	if (n === 2) {
// 		return true;
// 	}
// 	if (n % divisor === 0) {
// 		return false;
// 	}
// 	if (divisor * divisor > n) {
// 		return true;
// 	}
// 	return primeNumber(n, divisor + 1);
// }
// if (primeNumber(num)) {
// 	alert(`${num} є простим числом.`);
// } else {
// 	alert(`${num} не є простим числом.`);
// }

//  TASK 4 END

//  TASK 5
// hапишіть функцію для виведення усіх множників, переданих числу у зростаючому порядку. 
// Наприклад: число 18 – множники 2*3*3.
// let number = prompt("Enter a number:");

// function findFactors(n, factor = 2, factors = []) {
// 	if (n < 2) {
// 		return factors;
// 	}
// 	if (n % factor === 0) {
// 		factors.push(factor);
// 		return findFactors(n / factor, factor, factors);
// 	}
// 	return findFactors(n, factor + 1, factors);
// }
// let factors = findFactors(parseInt(number));
// alert(`Factors of ${number}:   ${factors}`);

//  TASK 5 END

//  TASK 6
//  Написати функцію, яка повертає число Фібоначчі за переданим порядковим номером. 
// Числа Фібоначчі: 1, 1, 2, 3, 5, 8, 13 ... Ряд ґрунтується на 
// тому, що кожне число дорівнює сумі двох попередніх чисел. 
// Наприклад: порядковий номер 3 – число 2, порядковий 
// номер 6 – число 8.

function fibonacci(n) {
	if (n <= 1) {
		return n;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}








