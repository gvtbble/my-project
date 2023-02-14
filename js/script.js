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
let ask=(question, yes, no) => (confirm(question)) ? yes:no ;
ask(
	"Вы согласны?",
    alert("Вы согласились."),
	alert("Вы отменили выполнение.")
);















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