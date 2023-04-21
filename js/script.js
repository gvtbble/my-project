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





































// function digPow(n, p){
// 	let funny = n;
// 	n =  n.toString().split("");
// 	let summary = 0;
// 	for (let i = 0; i < n.length; i++) {
// 	  summary += n[i] ** (p + i )
// 	};
// 	 return (summary % funny) ?  -1 : (summary / funny)
//   }



// function solution(string) {
	// return(string.replace(/([A-Z])/g, ' $1')); break camelCase
  
//   }



// function rentalCarCost(d) {
// 	return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
//   }

// function persistence(num) {
// 	var times = 0;
	
// 	num = num.toString();
	
// 	while (num.length > 1) {
// 	  times++;
// 	  num = num.split('').map(Number).reduce((a, b) => a * b).toString();
// 	}
	
// 	return times;
//  }




// function persistence(num) {
// 	num =  num.toString().split("");
//    if (num.length == 1) return 0;
//    for (var i = 1; true; i++) {
// 	num = num.reduce((item,cur) => item * cur)
// 	 if (num < 10) break;
// 	 num =  num.toString().split("");
//    }
   
//    return i;
//  }

//  alert(persistence(25));


// const isSquare = n => Math.sqrt(n) % 1 === 0


// function reverseWords(str) {
// 	str = str.split(' ');
// 	for (let i = 0; i < str.length ; i ++) {
// 	  str[i] = str[i].split("").reverse().join("")
// 	}
// 	return str.join(' ');
//   }

//   alert(reverseWords("apple"))

// function invert(array) {
// 	for (let i = 0; i < array.length ; i++) {
// 	  array[i] >= 0 ? array[i] = -Math.abs(array[i]) : array[i] = Math.abs(array[i]);
// 	}
// 	 return array;
//   }

//   alert(invert([1,-2,3,4,5]));


// function accum(s) {
// 	s =  s.toUpperCase().split("")
// 	for (let i = 1; i < s.length ; i++) {
// 		s[i] = s[i] + s[i].repeat(i).toLowerCase();
// 	}
//    return s.join("-")
//    }


// function sumTwoSmallestNumbers(numbers) { 
// 	numbers.sort((a, b) => a - b);
// 	let sum = numbers[0] + numbers[1];
// 	return (sum) 
// }

// alert(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))


// function SeriesSum(n)
// {
// 	// let result = ((n == 1) ? n.toFixed(2) : (+SeriesSum(n-1) + 1/(1 + 3 * (n - 1)))).toFixed(2);
// 	// return parseInt(result).toFixed(2);
// 	if (n == 1) {
// 		return n.toFixed(2);
// 	} else {
// 		return (+SeriesSum(n-1) + 1/(1 + 3 * (n - 1))).toFixed(2)
// 	}

// }

// // alert(typeof(SeriesSum(2)))

// alert(SeriesSum(3))


// let paperwork = (n, m) => n < 0 || m < 0 ? 0 : n * m


// alert(paperwork(5, -5));

// Сравнение значений в массиве
// function XO(str) {
// 	let arr = str.split("");
// 	let x = 0;
// 	let o = 0;
// 	let w = 0;
// 	for (let amount of arr) {
// 	  if (amount == "x" || amount == "X") {
// 		x++
// 	  } else if (amount == "o" || amount ==  "O") {
// 		o++
// 	  } else {
// 		w++
// 	  }
// 	};
// 	return x == o;
//   }


// function DNAtoRNA(dna) {
// 	var hold = ''
// 	for(var i =0;i<dna.length;i++) {
// 	   if(dna[i]=="T") {
// 		  hold+="U"
//   }
//   else{hold+=dna[i]}
//   }
//   return hold;
		
//   }


// function printList(list) {
	
// 	let tmp = list;
// 	while(tmp) {
// 		alert(tmp.value);
// 		tmp = tmp.next;
// 	}

// }

// function printList(list) {

// 	alert(list.value); // выводим текущий элемент
  
// 	if (list.next) {
// 	  printList(list.next); // делаем то же самое для остальной части списка
// 	}
  
//   }

// let list = {
// 	value: 1,
// 	next: {
// 	    value: 2,
// 	    next: {
// 			value: 3,
// 			next: {
// 				value: 4,
// 				next: null
// 			}
// 		}
// 	}
// };

// printList(list);


// // Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// // Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// // В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// // В противном случае, если меньше часа, вывести "m мин. назад".
// // В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", 
// // всё в виде двух цифр, т.е. 31.12.16 10:00.

// function formatDate(date) {
// 	let diff = new Date() - date; // разница в миллисекундах

// 	if (diff < 1000) { // меньше 1 секунды
// 		return 'прямо сейчас';
// 	}

// 	let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды

// 	if (sec < 60) {
// 		return sec + ' сек. назад';
// 	}

// 	let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
// 	if (min < 60) {
// 		return min + ' мин. назад';
// 	}

// 	// отформатировать дату
// 	// добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
// 	let d = date;
// 	d = [
// 		'0' + d.getDate(),
// 		'0' + (d.getMonth() + 1),
// 		'' + d.getFullYear(),
// 		'0' + d.getHours(),
// 		'0' + d.getMinutes()
// 	].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

// 	// соединить компоненты в дату
// 	return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
// }

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );


// // Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// // Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
// function getSecondsToday() {
// 	let now = new Date();
// 	let startDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// 	let diff = now - startDay;
// 	return (Math.round(diff/1000));
// }
// alert(getSecondsToday());
// // Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

// // Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// // Например, если сейчас 23:00, то:
// function getSecondsToTomorrow() {
	
// 	let now = new Date();
// 	let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
// 	let diff = ((tomorrow - now));
// 	return Math.round(diff / 1000);
	

// }
// alert(getSecondsToTomorrow());
// // P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

// // Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 
// // или даже февральские 28/29.

// // year – год из четырёх цифр, например, 2012.
// // month – месяц от 0 до 11.
// // К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

// function getLastDayOfMonth(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	return date.getDate();
// }

// alert(getLastDayOfMonth(2012, 1));

// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// // К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

// // Функция должна надёжно работать при значении days=365 и больших значениях:

// let date = new Date(2015, 0, 2);

// function getDateAgo(date, days) {

// 	let dateAgo = new Date(date);
// 	dateAgo.setDate(date.getDate() - days);
// 	return dateAgo;

// }
// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// // P.S. Функция не должна изменять переданный ей объект date.


// // Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// function getWeekDay(date) {
// 	let a = date.getDay();
// 	switch(a) {
// 		case 0 : 
// 		return "«ВС»";
// 		case 1 : 
// 		return "«ПН»";
// 		case 2 : 
// 		return "«ВТ»";
// 		case 3 : 
// 		return "«СР»";
// 		case 4 : 
// 		return "«ЧТ»";
// 		case 5 : 
// 		return "«ПТ»";
// 		case 6 : 
// 		return "«СБ»";
		
// 	}
// }
// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"


// let salaries = {
// 	"John": 100,
// 	"Pete": 300,
// 	"Rary": 350,
// 	"Zxcry": 0,
// 	"Cxzy": 50
// };
// //   Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// function topSalary(salaries) {

// 	let max = 0;
// 	let maxName = null;

// 	for(const [name, salary] of Object.entries(salaries)) {
// 		if (max < salary) {
// 			max = salary;
// 			maxName = name;
// 		}
// 	}

// 	return maxName;
// }

// alert(topSalary(salaries));
// //   Если объект salaries пустой, то нужно вернуть null.
// //   Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// //   P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.


// //   Напишите деструктурирующее присваивание, которое:

// //   свойство name присвоит в переменную name.
// //   свойство years присвоит в переменную age.
// //   свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// //   Пример переменных после вашего присваивания:

// let user = { name: "John", years: 30 };

// // ваш код должен быть с левой стороны:
// let {name, years : age, isAdmin = false} = user;

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false


// // Напишите функцию count(obj), которая возвращает количество свойств объекта:

// function count(obj) {

// 	return Object.keys(obj).length;

// }

// let user = {
// 	name: 'John',
// 	age: 30
// };

// alert( count(user) ); // 2
// // Постарайтесь сделать код как можно короче.

// // P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

// // Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// // Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values 
// // и цикла for..of.

// // Если объект salaries пуст, то результат должен быть 0.

// function sumSalaries(salaries) {
// 	let sum = 0;
// 	for (let salary of Object.values(salaries)) {
// 		sum += salary;
		
// 	}
// 	return sum;
// }


// let salaries = {
// 	"John": 100,
// 	"Pete": 300,
// 	"Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650

// let messages = [
// 	{ text: "Hello", from: "John" },
// 	{ text: "How goes?", from: "John" },
// 	{ text: "See you soon", from: "Alice" }
// ];

// let readMap = new WeakMap();
// readMap.set(messages[0], new Date(2017, 1, 1));
// //   Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, 
// //   когда сообщение было прочитано?

// //   В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». Теперь же нам нужно сохранить дату, 
// //   и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.

// //   P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее.

// let messages = [
// 	{text: "Hello", from: "John"},
// 	{text: "How goes?", from: "John"},
// 	{text: "See you soon", from: "Alice"}
// ];
// let readMessages = new WeakSet();
// // Два сообщения были прочитаны
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
// // readMessages содержит 2 элемента

// // ...давайте снова прочитаем первое сообщение!
// readMessages.add(messages[0]);
// // readMessages до сих пор содержит 2 элемента

// // Вопрос: было ли сообщение message[0] прочитано?
// alert("Read message 0: " + readMessages.has(messages[0])); // true

// messages.shift();
// // теперь readMessages содержит 1 элемент (хотя технически память может быть очищена позже)

// // У вас есть к ним доступ, но управление этим массивом происходит где-то ещё. Добавляются новые сообщения и удаляются старые,
// // и вы не знаете в какой момент это может произойти.

// // Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для ответа на вопрос 
// // «было ли сообщение прочитано?». Структура должна быть подходящей, чтобы можно было однозначно сказать, было ли прочитано 
// // это сообщение для каждого объекта сообщения.

// // P.S. Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных.

// // P.P.S. Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства. Если сообщения принадлежат 
// // какому-то другому коду, то это может привести к плохим последствиям.


// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");

// alert(keys); // name, more


// // Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

// // Например:

// // nap - pan
// // ear - are - era
// // cheaters - hectares - teachers
// // Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// // Например:
// function aclean(arr) {
// 	let map = new Map();

// 	for (let word of arr) {
// 	// разбиваем слово на буквы, сортируем и объединяем снова в строку
// 	let sorted = word.toLowerCase().split("").sort().join(""); // (*)
// 	map.set(sorted, word);
// 	}

// 	return Array.from(map.values());
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

//   alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
// // Из каждой группы анаграмм должно остаться только одно слово, не важно какое.


// // Допустим, у нас есть массив arr.

// // Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

// // Например:

// function unique(arr) {

// 	return Array.from(new Set(arr));
	
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare,Krishna,:-O
// // P.S. Здесь мы используем строки, но значения могут быть любого типа.

// // P.P.S. Используйте Set для хранения уникальных значений.

// // Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

// // Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

// // Например:

// function groupById(array) {
// 	return array.reduce((obj, value) => {
// 	obj[value.id] = value;
// 	return obj;
// 	}, {})
// }

// let users = [
// 	{id: 'john', name: "John Smith", age: 20},
// 	{id: 'ann', name: "Ann Smith", age: 24},
// 	{id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(users);
// console.log(groupById(users));
// /*
// // после вызова у нас должно получиться:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */

// // Пусть arr – массив строк.

// // Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// // Например:

// function unique(arr) {
// 	let result = [];

// 	for (let str of arr) {
// 	  if (!result.includes(str)) {
// 		result.push(str);
// 	  }
// 	}

// 	return result;
//   }

//   let strings = ["кришна", "кришна", "харе", "харе",
// 	"харе", "харе", "кришна", "кришна", ":-O"
//   ];

//   alert( unique(strings) ); // кришна, харе, :-O

// // Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// // Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// // Например:
// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); // 28


// // Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// // Например:

// function sortByAge(users) {

// 	arr.sort(
// 		(a,b) => a.age > b.age ? 1 : -1 
// 	);

// }


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя


// // У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// // Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из 
// // name и surname.

// // Например:

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
// 	fullName : `${user.name} ${user.surname}`,
// 	id : user.id
// }));
// /*
// usersMapped = [
// 	{ fullName: "Вася Пупкин", id: 1 },
// 	{ fullName: "Петя Иванов", id: 2 },
// 	{ fullName: "Маша Петрова", id: 3 }
// ]
// */
// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

// // У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// // Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// alert( names ); // Вася, Петя, Маша

// // Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// // Задание состоит из двух частей.

// // Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате
// // «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

// // Пример использования:
// function Calculator() {

// 	this.methods = {
// 	"-": (a, b) => a - b,
// 	"+": (a, b) => a + b
// 	};

// 	this.calculate = function(str) {

// 	let split = str.split(' '),
// 		a = +split[0],
// 		op = split[1],
// 		b = +split[2]

// 	if (!this.methods[op] || isNaN(a) || isNaN(b)) {
// 		return NaN;
// 	}

// 	return this.methods[op](a, b);
// 	}

// 	this.addMethod = function(name, func) {
// 		this.methods[name] = func;
// 	};
// }

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10



// // У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// // Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let arr = ["HTML", "JavaScript", "CSS"];

// let copySorted = (arr) => arr.concat().sort() ;

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)


// function sumDigits(number) {

// 	return Math.abs(number)
// 	.toString()
// 	.split("")
// 	.reduce(
// 		(sum,number) =>  +sum + +number 
// 		)

// }
// alert(sumDigits(-55));


// function getShort(str) {
// 	return str
// 	.split(" ")
// 	.sort(
// 		(a,b) => a.length - b.length
// 		)[0];
// }
// alert(getShort("study well"));

// function isPalindrome(str) {
// 	return str === str
// 	.split("")
// 	.reverse()
// 	.join("");
// }
// alert(isPalindrome("шалаш"));


// function getInitial(str) {

// 	return str
// 	.split(" ")
// 	.map(
// 		(word) =>  word[0]
// 	)
// 	.join(".")
// 	.toUpperCase() + '.' ;

// }

// alert(getInitial("Том Хэнекс"));




// let arr = [6,5,3,1,8,7,2,4];
// alert(arr);

// function sortArr() {

// 	for(let i = 0; i < arr.length; i++) {
// 		for( let j=0; j < arr.length; j++) {	
// 			let val = arr[j + 1]	
// 			if (arr[j] > arr[j +1 ]) {
// 				arr[j+1] = arr[j];
// 				arr[j] = val;

// 		}

// 		}

// 	}

// }

// sortArr();
// alert(arr);




// // Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
// // которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// // Функция должна изменять принимаемый массив и ничего не возвращать.

// // Например:
// function filterRangeInPlace(arr, a, b) {

// 	for (let i = 0; i < arr.length; i++) {
// 		let val = arr[i];

// 		if (val >= a || val <=b ) {
// 			arr.splice(i,1);
// 			i--;
// 		}
// 	}
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]

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


//mathods Array above!











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