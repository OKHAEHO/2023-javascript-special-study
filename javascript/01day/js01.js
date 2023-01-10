let a = 0;
console.log(a);
let b = 10;
console.log(b);
let c = 20;
console.log(c);

// const d = "hello world";
// console.log(d);
// d = "cng const";

let num = 50;
console.log(num);
let str = "자바 스크리ㅂ트";
console.log(str);
let value1 = 123 + "2023";
console.log(value1);
let value2 = 2022/"2023";
console.log(value2);

console.log(typeof value2)

let str0 = 2023;
let str1 = "안녕 " + str0 + "년!" ;

console.log(str1);

/* 템플릿 리터럴 벡틱 ` */
let str3 = `안녕하세요 올해는 
${str0} 년 입니다!`

console.log(str3);

/* boolean 블리언 */
let isOn = true;
let isOff = false;

console.log(isOn);
console.log(typeof isOn);

let js1;
console.log(js1);

let js2 = null;
console.log(js2);

/* 자바 스크립트에서 거짓으로 취긊하는 값 */
/* 0,-0 null, undefinede, NaN,'' */
let num1 = 20;
let num2 = 3;
console.log(num1%num2);

num1 += num2;
console.log(num1);

let value3 = 1;
value3 *= 10;
console.log (value3);

value3 *= 10;
console.log(value3);
value3 %= 10;
console.log(value3);

let value4 = 10; //number
let value5 = '10'; //string

let value6 = value4 == value5;
console.log(value6);

let value7 = value4 !== value5;
console.log(value7);

let v1 = 10, v2 = 20, v3 = 30, v4 = 40, result;
result = !(v1>v2);
console.log(!!v1);
// result = v1<=v2 && v2<=v3 && v3<=v4;
result = v1<=v2 || v2>=v3 || v3<=v4;
console.log(result);

//증감연산자 ++ --
let value8 = 10;
console.log(++value8) //11
console.log(++value8) //12
console.log(--value8) //11
console.log("--------------------");
console.log(value8++) //11->12
console.log(value8++) //12->13
console.log(value8) //13

//선행연산은 연산을 한 값을 보여주고 후행연산은 뒤에 연산을 하기 때문에 찍었을 때는 원래 값이 나왔다가 뒤에 다시한번 출력하면 증가된 값으로 나온다..

//if문
