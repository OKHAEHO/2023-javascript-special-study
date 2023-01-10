/* //생성자 함수 오브젝트를 찍는 함수

function People(nameValye, ageValue){
    this.name = nameValue;
    this.age = ageValue;
    this.address = `seoul`
}

let people1 = new People ('순이', 20 );
let people2 = new People ('철수', 22);
console.log(people2)

function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return this.radius * 2;

    }
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1); */

// 이름 국영수 평균 매서드

function Score (name, kor, eng, math){
    this.name = name;
    this.korNum = kor;
    this.engNum = eng;
    this.mathNum = math;

    this.vudrbs = function(){
        return (this.korNum + this.engNum + this.mathNum) / 3
    }
    
}

const score1 = new Score(`재호`, 60, 60, 60);
console.log(score1.vudrbs());