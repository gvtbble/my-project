$(document).ready(function() {
	$('.block__title').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы 
// со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)























































// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// // То есть дефисы удаляются, а все слова после них получают заглавную букву.

// function camelize(str) {
	
// 	return  str
// 	.split("-")
// 	.map(
// 		(word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
// 	  )
// 	.join("");
// }

// alert(camelize("background-color"));

// // Примеры:

// // camelize("background-color") == 'backgroundColor';
// // camelize("list-style-image") == 'listStyleImage';
// // camelize("-webkit-transition") == 'WebkitTransition';
// // P.S. Подсказка: используйте split, чтобы разбить строку на массив символов,
// // потом переделайте всё как нужно и методом join соедините обратно.

// Напишите функцию sumInput(), которая:
// // Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// // Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// // Подсчитывает и возвращает сумму элементов массива.
// // P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
// function sumInput() {
	
// 	let numbers = [];

// 	while(true) {

// 		let value = prompt("enter", 0);

// 		if (value === null || value === "" || !isFinite(value)) break;
		
// 		numbers.push(+value);
// 	}

// 	let sum = 0;

// 	for (let number of numbers) {
// 		sum += number;
// 	}
// 	return sum;
// } 
// alert( sumInput() );


// function extractCurrencyValue(str) {
// 	return +str.slice(1);
// }
// alert( extractCurrencyValue('$120') === 120 ); // true

//// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// function truncate(str, maxlength) {
// 	return (str.length > maxlength) ?
// 	  str.slice(0, maxlength - 1) + '…' : str;
//   }

// // Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// // Функция должна быть нечувствительна к регистру:
// function checkSpam(str) {
// 	let lowerStr = str.toLowerCase();
  
// 	return lowerStr.includes('viagra') || lowerStr.includes('xxx');
//   }
  
//   alert( checkSpam('buy ViAgRA now') );
//   alert( checkSpam('free xxxxx') );
//   alert( checkSpam("innocent rabbit") );


// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// function ucFirst(str) {
// 	if (!str) return str;
  
// 	return str[0].toUpperCase() + str.slice(1);
//   }
  
//   alert( ucFirst("вася") ); // Вася

// function randomInteger(min, max) {
// 	let rand = min + Math.random() * (max -min +1 );
// 	return Math.floor(rand);
// }

// alert(randomInteger(1, 10));


//function random(min, max) {
	// 	return min + Math.random() * (max-min);
	// }
	
	
	
	// alert( random(1, 5) );

// function readNumber() {
// 	let num;
  
// 	do {
// 	  num = prompt("Введите число", 0);
// 	} while ( !isFinite(num) );
  
// 	if (num === null || num === '') return null;
  
// 	return +num;
//   }
  
//   alert(`Число: ${readNumber()}`);

// // функцию-конструктор Accumulator(startingValue) суммa всех введённых пользователем значений, с учётом начального значения startingValue.
// function Accumulator(startingValue) {
// 	this.value = startingValue;

// 	this.read = function() {
// 		this.value += +prompt("Значение?");
		
// 	}
// }
// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// alert(accumulator.value); // выведет сумму этих значений

// // Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
// function Calculator() {

// 	this.read = function() {
// 		this.a = +prompt("Etnter A",0);
// 		this.b = +prompt("enter b",0);
// 	};

// 	this.sum = function() {
// 		return this.a + this.b;
// 	};

// 	this.mul = function() {
// 		return this.a * this.b;
// 	};
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// let ladder = {
// 	step: 0,
// 	up() {
// 		this.step++;
// 		return this;
// 	},
// 	down() {
// 		this.step--;
// 		return this
// 	},
// 	showStep() { 
// 		alert( this.step );
// 		return this
// 	}
// };
// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

// let calculator = {
	//// Создайте объект calculator (калькулятор) с тремя методами:
// 	sum() {
// 	  return this.a + this.b;
// 	},
  
// 	mul() {
// 	  return this.a * this.b;
// 	},
  
// 	read() {
// 	  this.a = +prompt('a?', 0);
// 	  this.b = +prompt('b?', 0);
// 	}
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

// // Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// function multiplyNumeric(obj) {
// 	for (let key in obj) {
// 		if (typeof obj[key] == "number") {
// 			obj[key] *=2;
// 		}
// 	}
// }

// let salaries = {
	// 	John: 100,
	// 	Ann: 160,
	// 	Pete: 130
	// }
	// let sum = 0;
	// for (let key in salaries) {
	// 	sum += salaries[key];
	// }
	// alert(sum);
	//   Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
	//   Если объект salaries пуст, то результат должен быть 0.

// function isEmpty(obj) {
// 	for (let key in obj) {
// 		return false;
// 	}
// 	return true;
// }
// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false
// function pow(x, n) {
// 	let result = x;
  
// 	for (let i = 1; i < n; i++) {
// 	  result *= x;
// 	}
  
// 	return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = parseInt(prompt("n?", ''));
  
//   if (isNaN(n) || n < 1 || !Number.isInteger(n)) {
// 	alert(`Степень ${n} не поддерживается, используйте натуральное число`);
//   } else {
// 	alert( pow(x, n) );
//   }
// let ask=(question, yes, no) => (confirm(question)) ? yes:no ;
// ask(
// 	"Вы согласны?",
//     alert("Вы согласились."),
// 	alert("Вы отменили выполнение.")
// );
	//function min(a,b){
	// 	if (a>b){
	// 	return b
	// 	} else {
	// 	return a
	// 	}
	// } //возвращает меньшее из чисел a и b.
// function checkAge(age) {
// 	return (age > 18) ? true:confirm('Родители разрешили?');
// }
// function checkAge(age) {
// 	return (age>18)||confirm('Родители разрешили?');
// }
// const number = +prompt('Введите число между 0 и 3', '');
// switch(number){
// 	case 0:
// 		alert('Вы ввели число 0');
// 		break;
// 	case 1:
// 		alert('Вы ввели число 1');
// 		break;
// 	case 2:
// 	case 3:
// 		alert('Вы ввели число 2, а может и 3');
// 		break;
// 	// How work SWITCH
// }
// for (let number=prompt("Введите число");number<100;number=prompt("Try it again")){
// 	if ((number>100)||(number==null)) break;
// 	//Повторять цикл, пока ввод неверен
// }

// let i = 0;
// while (i < 3) {
// 	alert( `number ${i++}!` );
// 	//To get 1,2,3
// }

// for (let i=2;i<=10;i++){
// 	if(i%2) continue;
// 	alert(i);
// 	//Выведите чётные числа
// }

// let login=prompt('Введите логин');
// let password;
// if (login=="Админ"){
// 	password=prompt("Введите пароль")
// 	if (password=="Я главный"){
// 		alert("Здраствуйте");
// 	} else if (password==null){
// 		alert("Отменено");
// 	} else {
// 		alert("Неверный пароль");
// 	}
// } else if (login==null){
// 	alert("Отменено")
// } else {
// 	alert("Я вас не знаю")
// 	//Admin
// }