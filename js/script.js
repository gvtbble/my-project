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

let login=prompt('Введите логин');
let password;
if (login=="Админ"){
	password=prompt("Введите пароль")
	if (password=="Я главный"){
		alert("Здраствуйте");
	} else if (password==null){
		alert("Отменено");
	} else {
		alert("Неверный пароль");
	}
} else if (login==null){
	alert("Отменено")
} else {
	alert("Я вас не знаю")
}