let array = new Array(3); //배열의 길이는 3인 배열을 만들었다.
array[0]  = `A`;
array[1]  = `B`;
array[2]  = `D`;
console.log(array)

let array2 = new Array(1,2,3);
console.log(array2);

let array3 = [1,2,3,4,5]
console.log(array3.length); //길이
console.log(array3[2]); //3
array3[4] = 10; //배열값 바꾸기
console.log(array3[4]); //5

const array4 = [5, 12, 8, 130, 44];

const found = array4.find(element => element > 10); //만족하는 첫번째 값을 출력한다. 그래서 12을 출력함 만약 12가 없었다면 130이 출력된다.

console.log(found);

const subway = [`1호선`, `2호선`, `3호선`, `4호선`, `5호선`];
subway.push(`6호선`); //추가 //pop = 삭제
subway.unshift(`0호선`); //앞에 추가 //shift = 뒤에 추가
subway.splice(3,0,`7호선`,`8호선`); //시작 인덱스,삭제할 갯수,추가될 값

let tatal = '';
for(let i = 0; i<subway.length; i++){
    tatal += subway[i]
 
}
console.log(tatal)

