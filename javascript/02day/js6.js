var num = 1; //전역변수
if(true){
    var num = 100; //전역변수

}

console.log(num);

let hello = `안녕하세요`; //전역변수

if(true){
    let hello = `hello`; //지역변수

}

console.log(hello);