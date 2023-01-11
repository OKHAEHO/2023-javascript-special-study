// 논리합 or || 논리곱 && 연산자를 이용한 단축평가
// 좌항->우항으로 평가가 된다

//논리합 ||
console.log(true || true);
console.log(30 || 50);
console.log(true || false);
console.log(10 || 0);
console.log(false || true);
console.log('' || 100);
console.log(false || false);
console.log(undefined || 0);

console.log(`----------------------------`);
//논리곱 &&
console.log(true && true);
console.log(300 && 500);
console.log(false && true);
console.log(0 && 500);
console.log(true && false);
console.log(1 && null);
console.log(false && false);
console.log(0 && undefined);

//부정연산자
console.log(!10);