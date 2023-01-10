//콜백 함수
const plus = (num) => num + 2;

const minus = (num) => num - 2;

const multi = (num) => num * 2;

const division = (num) => num / 2;

const cal = (fnc, numValue) => {
    return fnc(numValue)
}

console.log(cal(plus,10));