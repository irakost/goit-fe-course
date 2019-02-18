'use strict';



const adminLogin = 'admin';
const adminPassword1 = 'm4ngo1zh4ackz0r';

const login = prompt('введите логин');

if (login === null){
    alert('Отменено пользователем!');
};

if (login === adminLogin){
  const password = prompt('Введите пароль');
  if (password === adminPassword1){
    alert('Добро пожаловать!');
}

} else{
    alert('Доступ запрещен, неверный логин!');
}
























