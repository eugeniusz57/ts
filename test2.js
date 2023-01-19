var age;
var names;
var toggle;
var empty;
var notInitialize;
// let callback = (a: number) => number;
age = 50;
names = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
// callback = a => 100 + a ;
var anything;
anything = -20;
anything = "Text";
anything = {};
var person;
person = ['Max', 21];
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
;
var page = {
    load: Load.READY
};
if (page.load === Load.LOADING) {
    console.log('Страница загружается');
}
if (page.load === Load.READY) {
    console.log('Страница загружена');
}
// Сделайте переменную, которая может принимать или строку или число.
var uniol;
// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
var literal;
// Укажите типы для следующих функций
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
