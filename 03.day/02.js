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
    pass += (Math.floor(Math.random() * 100));
}
console.log(pass);


const text = `HELLO WORLD!`;
console.log(text.length); //텍스트의 길이를 읽는다.
console.log(text.charAt(0)); //0번째 텍스트 글자를 읽는다.
console.log(text.charAt(6)); //6번째 텍스트 글자를 읽는다.
console.log(text.indexOf(`t`)); //텍스트 글자의 번호를 알려준다 없는 단어이기 때문에 -1를 출력한다.
console.log(text.toUpperCase());
console.log(text.substring(-2,3)); //음수가 허용이 된다.
console.log(text.slice(-2,3))// 시작위치의 인텍스 번호,끝나는 위치의 인덱스 번호 시작위치부터 끝나는 위치 직전까지 출력 //음수가 허용되지않아서 

const spacetxt1 = `                  aaaaaaaaaaaa                vvvvvvvvvvv`;
console.log(spacetxt1.trim());
const spacetxt2 = `aaaa-bbbb-ccc-dddd`;
console.log(spacetxt2.split('-'));

//slice(n) n번째 인덱스부터 끝까지 추출
//slice(n,m) n번째부터 m번째까지 추출
//slice 음수면 뒤부터 계산
//substring 음수가 오면 0