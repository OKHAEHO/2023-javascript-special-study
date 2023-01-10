function numAdd(a,b,c){
    console.log(arguments)
    console.log(arguments.length)
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])

    return a+b+c;

}

console.log(numAdd(10,20,30))

//매개변수의 초기값 설정
function addNum(a=0, b=0, c=0){
    console.log(arguments);
    return a+b+c;

}
console.log(addNum(10));

//rest parameter )es6
function numAdd3(...num){
    console.log(num[0])
    console.log(num[1])
    console.log(num[2])
    return;

}
console.log(numAdd3(10,20,30));

function numAdd4(a,b,...num){
    console.log(a)
    console.log(b)
    console.log(num);
}
numAdd4(1,2,3,4,5,6,7,8,9,10);

function numSum(...num){
    let sum = 0;
    for(let i=0; i<num.length; i++){
        sum += num[i];
    }
    return sum;
}
console.log(numSum(10,20,30))