let num1 = 50;
const num2 = 123456.1234;
console.log(num2.toFixed(2));
console.log(num2.toPrecision(3));
console.log(num2.toString())
console.log(Number.MAX_VALUE)

console.log(Math.ceil(10.33)) //올림 11
console.log(Math.floor(10.73)) //내림 10
console.log(Math.round(10.53)) //반올림 11

console.log(Math.min(1,5,10))
console.log(Math.max(1,5,10))

console.log(Math.round(Math.random(10) * 100)) //무작위추출

//random 이용해서 5자리 인증번호 출력

let pass = null;
for(let i=1; i<6; i++){
    pass += (Math.floor(Math.random() * 10));
}
console.log(pass);