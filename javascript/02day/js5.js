/* (function(){
    console.log(`즉시 실행`)
})()

 */

fnc1()  
function fnc1(){
    console.log(`실행`)
} //자바스크립트는 함수를 먼저 끌어올려서 처음 읽는다.

var fnc2 = () =>{
    console.log(`var실행`)
}

let fnc3 = () => {
    console.log(`let 실행`)
}

const fnc = () => {
    console.log(`const 실행`)
}