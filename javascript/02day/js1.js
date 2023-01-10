function hello(){
    console.log(`hello world`);
}

hello();

function num(a,b){
    console.log(a+b);
}

num(10, 2);

function sum(a,b){
    console.log(`함수`);
    return a+b
}
const result = sum(1,5);
console.log(result)

function userInfo(name, age){
    return `이름은 ${name} 나이는 ${age}`
}

const profile = userInfo(`홍길동`, 29)
console.log(profile)

//두개의 매개변수를 받아서 두 값을 곱해서 출력하는 함수

function rhqgkrl(a,b){

    return `두 숫자의 곱은 ` + a*b 
}
let a = window.prompt(`숫자를 입력하세요`)
let b = window.prompt(`두번째 숫자를 입력하세요`)

const rhqgkrlrkqt = rhqgkrl(a,b)
console.log(rhqgkrlrkqt);

