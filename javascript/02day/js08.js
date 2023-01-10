//object 객체
let user = {
    name : `kim`,
    age : 50,
    address : `seoul`,
    tel : `010`,
    hello : function(){
        console.log(`안녕하세요 ${this.name}입니다.`)
    }
}

console.log(user)
console.log(user.name)
console.log(user.age)
console.log(user.address)
console.log(user.tel)
user.hello();

//name 모모 gender male age5 faily 러시안블루 say hello : 냥냥

let momo = {
    name : `모모`,
    gender : `male`,
    age : 5,
    family : `러시안 블루`,
    sayhello : function(){
        console.log(`냥냥`)
    }

}

console.log(momo.name);
console.log(momo[`gender`])
momo.sayhello();

function catValue(obj, value){
    return obj.value;
}