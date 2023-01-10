const hello = function(){
    console.log(`hello`)
}

hello();

//es6 표기 
const goodbye = () =>{
    console.log(`goodbye`)
}
goodbye();

const num = (a,b) => {
    return a+b
}
console.log(num(10,20));