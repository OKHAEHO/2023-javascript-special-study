//빈 오브젝트 생성
var person = new Object(); 
var person = Object();

//만들어진 빈 오브젝트 안에 속성과 메서드 설정 
person.firstName = "재호";
person.lastName = "억";
person.age = 15;
person.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
console.log(person.getFullName());