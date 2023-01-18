const fnc1 = function(data){
    const result3 = data * data;
    return result3;
}

const fnc2 = function(data, fnc){
    const result2 = data/ data;
    return fnc(result2);
}

const fnc3 = function(data,fnc){
    const result1 = data *5;
    return fnc(result1, fnc1) //fnc2(20, fnc1)
}

let finalResult = fnc3(4,fnc2)

console.log(finalResult)
/* 
fnc3 실행 -> 뒤에 fnc2호출

()=>{
    ()=>{
        ()=>{
            ()=>{

            }
        }
    }
}

()=>()=>()=>()=>
promise는 순서대로 진행할 수 있도록 원활한 진행을 위해서 만들어졌다.
프로미스는 생성자 함수다
*/