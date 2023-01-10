const parent = {
    name : `kim`,
    age : 50
}

const child = Object.create(parent);
console.log(child)

child.name = `LEE`;
child.age = 20;
console.log(child.name)
console.log(child.age)

class user {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    hi(){
        console.log(`이름은 ${this.name} 나이는 ${this.age}`)
    }
}

const user1 = new user('길동이', 10);
const user2 = new user('순이', 20);
console.log(user1.hi());

//extends

class AddUserLocation extends user {
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }
}

const userlocation = new AddUserLocation(`jack`, 20, `NY`);
console.log(userlocation);
userlocation.hi();



// 


class Dog {
    constructor(color, weight, gender){
        this.color = color;
        this.weight = weight;
        this.gender = gender;
    }

}

const dog1 = new Dog('black', 3.5, 'male');
console.log(dog1)

//class dog를 확장해서 cat을 만들고 속성을 추가한다.

class cat {
    constructor(name, color, weight, gender){
        super(color, weight, gender);
        this.name = name;
    }
}