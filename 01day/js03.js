/* let luckynum = window.prompt(`행운번호를 입력하세용`);

switch (luckynum){
    case '10' : console.log(`당첨! ipad`);
    break; //break가 걸려있지않으면 끝나지않음
    case '20' : console.log(`당첨! TV`);
    break;
    case '30' : console.log(`당첨! 냉장고`);
    break;
    case '40' : console.log('당첨! 아파트!');
    break;
    default : console.log(`꽝 다음기회에`);
}
 */

//삼항연산자 조건부 연산자
let valueNum = window.prompt(`숫자를 입력하세요`);
valueNum % 2 == 0 ? console.log(`짝수입니다`) : console.log(`홀수입니다`);

