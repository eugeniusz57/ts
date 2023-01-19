let age:number;
let names:string;
let toggle:boolean;
let empty:null;
let notInitialize:undefined;
// let callback = (a: number) => number;
 age = 50;
 names = 'Max';
 toggle = true;
 empty = null;
 notInitialize = undefined;
// callback = a => 100 + a ;

let anything:any;
anything = -20;

anything = "Text";
anything = {};
let person: [string, number];
person = ['Max', 21];

enum Load {LOADING, READY};

const page = {
  load: Load.READY
}

if (page.load === Load.LOADING) {
  console.log('Страница загружается');
}
if (page.load === Load.READY) {
  console.log('Страница загружена');
}

// Сделайте переменную, которая может принимать или строку или число.
let uniol:string | number;

// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
let literal: 'enable' | 'disable';
// Укажите типы для следующих функций

function showMessage(message:string):void {
  console.log(message);
}


function calc(num1:number, num2:number):number {
  return num1 + num2;
}

function customError():never {
  throw new Error('Error');
}

type Page = {

  title:string,
  likes:number,
  accounts: string[],
  status: string,
  details?: {
    createAt:string,
    updateAt:string,
  }

}
const page1:Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2:Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}